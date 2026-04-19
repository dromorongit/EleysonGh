import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import QuoteRequest from '@/models/QuoteRequest';
import { sendQuoteNotification } from '@/lib/email';
import { quoteSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the data
    const validatedData = quoteSchema.parse(body);

    // Connect to database
    await connectToDatabase();

    // Save to database
    const quoteRequest = new QuoteRequest(validatedData);
    await quoteRequest.save();

    // Send email notification
    try {
      await sendQuoteNotification(validatedData);
    } catch (emailError) {
      console.error('Failed to send quote notification email:', emailError);
      // Don't fail the form submission if email fails
    }

    return NextResponse.json(
      { message: 'Quote request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { message: 'Validation failed', errors: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}