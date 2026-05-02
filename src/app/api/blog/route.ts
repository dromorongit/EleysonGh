import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { BlogPost } from '@/models/BlogPost';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const post = await BlogPost.findOne({ slug, status: 'published' }).lean();
      if (!post) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
      return NextResponse.json({ post: JSON.parse(JSON.stringify(post)) });
    }

    const posts = await BlogPost.find({ status: 'published' }).sort({ publishedAt: -1, createdAt: -1 }).lean();
    return NextResponse.json({ posts: JSON.parse(JSON.stringify(posts)) });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}