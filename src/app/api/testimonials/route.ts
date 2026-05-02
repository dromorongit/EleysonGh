import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Testimonial } from '@/models/Testimonial';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const featured = searchParams.get('featured');

    const query: { status: string; isFeatured?: boolean } = { status: 'published' };
    if (featured === 'true') {
      query.isFeatured = true;
    }

    const testimonials = await Testimonial.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ testimonials: JSON.parse(JSON.stringify(testimonials)) });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}