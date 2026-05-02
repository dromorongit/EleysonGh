import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { QuoteRequest } from '@/models/QuoteRequest';
import { z } from 'zod';
import { sendQuoteRequestNotification } from '@/lib/email';

const quoteRequestSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  serviceType: z.string().optional(),
  projectType: z.string().optional(),
  location: z.string().optional(),
  budgetRange: z.string().optional(),
  preferredContactMethod: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const validation = quoteRequestSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.message },
        { status: 400 }
      );
    }

    const quoteReq = await QuoteRequest.create(validation.data);

    // Send email notification (non-blocking, won't break submission if it fails)
    sendQuoteRequestNotification(validation.data).catch((err) => {
      console.error('Failed to send quote request notification:', err);
    });

    return NextResponse.json(
      { success: true, message: 'Quote request submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting quote request:', error);
    return NextResponse.json({ error: 'Failed to submit quote request' }, { status: 500 });
  }
}
