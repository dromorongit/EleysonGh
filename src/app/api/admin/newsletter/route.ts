import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { NewsletterSubscriber } from '@/models/NewsletterSubscriber';
import { requireAuth } from '@/lib/adminAuth';

export async function GET(req: NextRequest) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    const [subscribers, total] = await Promise.all([
      NewsletterSubscriber.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      NewsletterSubscriber.countDocuments(),
    ]);

    return NextResponse.json({
      subscribers: JSON.parse(JSON.stringify(subscribers)),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }
    const subscriber = await NewsletterSubscriber.findByIdAndDelete(id);
    if (!subscriber) {
      return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    return NextResponse.json({ error: 'Failed to delete subscriber' }, { status: 500 });
  }
}