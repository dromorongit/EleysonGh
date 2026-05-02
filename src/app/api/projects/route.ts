import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Project } from '@/models/Project';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    const featured = searchParams.get('featured');

    if (slug) {
      const project = await Project.findOne({ slug, status: 'published' }).lean();
      if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
      }
      return NextResponse.json({ project: JSON.parse(JSON.stringify(project)) });
    }

    const query: { status: string; isFeatured?: boolean } = { status: 'published' };
    if (featured === 'true') {
      query.isFeatured = true;
    }

    const projects = await Project.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ projects: JSON.parse(JSON.stringify(projects)) });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}