import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { QuoteRequest } from '@/models/QuoteRequest';
import { requireAuth } from '@/lib/adminAuth';

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { id } = await context.params;
    const body = await req.json();
    const request = await QuoteRequest.findByIdAndUpdate(id, body, { new: true });
    if (!request) {
      return NextResponse.json({ error: 'Quote request not found' }, { status: 404 });
    }
    return NextResponse.json({ request: JSON.parse(JSON.stringify(request)) });
  } catch (error) {
    console.error('Error updating quote request:', error);
    return NextResponse.json({ error: 'Failed to update quote request' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { id } = await context.params;
    const request = await QuoteRequest.findByIdAndDelete(id);
    if (!request) {
      return NextResponse.json({ error: 'Quote request not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting quote request:', error);
    return NextResponse.json({ error: 'Failed to delete quote request' }, { status: 500 });
  }
}
