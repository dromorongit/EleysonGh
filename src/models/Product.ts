import mongoose, { Schema, model, models } from 'mongoose';

export interface IProduct {
  _id?: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  specifications: { key: string; value: string }[];
  benefits: string[];
  useCases: string[];
  priceOptional: string;
  images: string[];
  isFeatured: boolean;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: String, default: '' },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, default: '' },
    specifications: [{ key: String, value: String }],
    benefits: [{ type: String }],
    useCases: [{ type: String }],
    priceOptional: { type: String, default: '' },
    images: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  },
  { timestamps: true }
);

export const Product = models.Product || model<IProduct>('Product', ProductSchema);
