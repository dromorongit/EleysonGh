import mongoose, { Schema, model, models } from 'mongoose';

export interface IProject {
  _id?: string;
  title: string;
  slug: string;
  category: 'Solar' | 'Hydro' | 'Energy' | 'Other';
  location: string;
  clientType: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  impact: string;
  technicalSpecs: { key: string; value: string }[];
  featuredImage: string;
  galleryImages: string[];
  isFeatured: boolean;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: String, enum: ['Solar', 'Hydro', 'Energy', 'Other'], default: 'Other' },
    location: { type: String, required: true },
    clientType: { type: String, default: '' },
    shortDescription: { type: String, required: true },
    challenge: { type: String, default: '' },
    solution: { type: String, default: '' },
    impact: { type: String, default: '' },
    technicalSpecs: [{ key: String, value: String }],
    featuredImage: { type: String, default: '' },
    galleryImages: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  },
  { timestamps: true }
);

export const Project = models.Project || model<IProject>('Project', ProjectSchema);
