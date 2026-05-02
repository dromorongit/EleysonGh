import mongoose, { Schema, model, models } from 'mongoose';

export interface IService {
  _id?: string;
  title: string;
  slug: string;
  category: 'Solar' | 'Hydro' | 'Maintenance' | 'Training' | 'Energy Audit';
  shortDescription: string;
  longDescription: string;
  features: string[];
  processSteps: { title: string; description: string }[];
  featuredImage: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: String, enum: ['Solar', 'Hydro', 'Maintenance', 'Training', 'Energy Audit'], default: 'Solar' },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, default: '' },
    features: [{ type: String }],
    processSteps: [{ title: String, description: String }],
    featuredImage: { type: String, default: '' },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  },
  { timestamps: true }
);

export const Service = models.Service || model<IService>('Service', ServiceSchema);
