import mongoose, { Schema, model, models } from 'mongoose';

export interface IBlogPost {
  _id?: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  status: 'draft' | 'published';
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: String, default: 'General' },
    excerpt: { type: String, default: '' },
    content: { type: String, default: '' },
    featuredImage: { type: String, default: '' },
    author: { type: String, default: '' },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const BlogPost = models.BlogPost || model<IBlogPost>('BlogPost', BlogPostSchema);
