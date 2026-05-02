import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { QuoteRequest } from '@/models/QuoteRequest';
import { requireAuth } from '@/lib/adminAuth';

export async function GET(req: NextRequest) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;

    const query = status ? { status } : {};
    const [requests, total] = await Promise.all([
      QuoteRequest.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      QuoteRequest.countDocuments(query),
    ]);

    return NextResponse.json({
      requests: JSON.parse(JSON.stringify(requests)),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching quote requests:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
