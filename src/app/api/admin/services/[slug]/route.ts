import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Service } from '@/models/Service';
import { requireAuth } from '@/lib/adminAuth';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { slug } = await params;
    const service = await Service.findOne({ slug }).lean();
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({ service: JSON.parse(JSON.stringify(service)) });
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { slug } = await params;
    const body = await req.json();
    const service = await Service.findOneAndUpdate({ slug }, body, { new: true });
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({ service: JSON.parse(JSON.stringify(service)) });
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const { slug } = await params;
    const service = await Service.findOneAndDelete({ slug });
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
