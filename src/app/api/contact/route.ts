import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { ContactInquiry } from '@/models/ContactInquiry';
import { z } from 'zod';
import { sendContactInquiryNotification } from '@/lib/email';

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.message },
        { status: 400 }
      );
    }

    const inquiry = await ContactInquiry.create(validation.data);

    // Send email notification (non-blocking, won't break submission if it fails)
    sendContactInquiryNotification(validation.data).catch((err) => {
      console.error('Failed to send contact inquiry notification:', err);
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}