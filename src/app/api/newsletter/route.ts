import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { NewsletterSubscriber } from '@/models/NewsletterSubscriber';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().optional().default('website'),
});

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const validation = newsletterSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.message },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await NewsletterSubscriber.findOne({ email: validation.data.email });
    if (existing) {
      return NextResponse.json(
        { success: true, message: 'Already subscribed' },
        { status: 200 }
      );
    }

    await NewsletterSubscriber.create(validation.data);
    return NextResponse.json(
      { success: true, message: 'Subscribed successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}