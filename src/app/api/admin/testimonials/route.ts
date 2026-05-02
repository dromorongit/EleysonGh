import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Testimonial } from '@/models/Testimonial';
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
    const [testimonials, total] = await Promise.all([
      Testimonial.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Testimonial.countDocuments(query),
    ]);

    return NextResponse.json({
      testimonials: JSON.parse(JSON.stringify(testimonials)),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const body = await req.json();
    const testimonial = await Testimonial.create(body);
    return NextResponse.json({ testimonial: JSON.parse(JSON.stringify(testimonial)) }, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
