import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Service } from '@/models/Service';
import { requireAuth } from '@/lib/adminAuth';

export async function GET(req: NextRequest) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const services = await Service.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ services: JSON.parse(JSON.stringify(services)) });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const body = await req.json();
    const service = await Service.create(body);
    return NextResponse.json({ service: JSON.parse(JSON.stringify(service)) }, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
