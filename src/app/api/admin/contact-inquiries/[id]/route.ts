import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { ContactInquiry } from '@/models/ContactInquiry';
import { requireAuth } from '@/lib/adminAuth';

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { id } = await context.params;
    const body = await req.json();
    const inquiry = await ContactInquiry.findByIdAndUpdate(id, body, { new: true });
    if (!inquiry) {
      return NextResponse.json({ error: 'Contact inquiry not found' }, { status: 404 });
    }
    return NextResponse.json({ inquiry: JSON.parse(JSON.stringify(inquiry)) });
  } catch (error) {
    console.error('Error updating contact inquiry:', error);
    return NextResponse.json({ error: 'Failed to update contact inquiry' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { id } = await context.params;
    const inquiry = await ContactInquiry.findByIdAndDelete(id);
    if (!inquiry) {
      return NextResponse.json({ error: 'Contact inquiry not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting contact inquiry:', error);
    return NextResponse.json({ error: 'Failed to delete contact inquiry' }, { status: 500 });
  }
}
