import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { BlogPost } from '@/models/BlogPost';
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
    const [posts, total] = await Promise.all([
      BlogPost.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      BlogPost.countDocuments(query),
    ]);

    return NextResponse.json({
      posts: JSON.parse(JSON.stringify(posts)),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authError = await requireAuth(req);
  if (authError) return authError;

  await dbConnect();

  try {
    const body = await req.json();
    const post = await BlogPost.create(body);
    return NextResponse.json({ post: JSON.parse(JSON.stringify(post)) }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}
