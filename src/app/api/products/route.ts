import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Product } from '@/models/Product';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    const featured = searchParams.get('featured');

    if (slug) {
      const product = await Product.findOne({ slug, status: 'published' }).lean();
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
      return NextResponse.json({ product: JSON.parse(JSON.stringify(product)) });
    }

    const query: { status: string; isFeatured?: boolean } = { status: 'published' };
    if (featured === 'true') {
      query.isFeatured = true;
    }

    const products = await Product.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ products: JSON.parse(JSON.stringify(products)) });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}