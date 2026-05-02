import mongoose, { Schema, model, models } from 'mongoose';

export interface ITestimonial {
  _id?: string;
  clientName: string;
  clientRole: string;
  company: string;
  quote: string;
  rating: number;
  imageOptional: string;
  isFeatured: boolean;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    clientName: { type: String, required: true },
    clientRole: { type: String, default: '' },
    company: { type: String, default: '' },
    quote: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    imageOptional: { type: String, default: '' },
    isFeatured: { type: Boolean, default: false },
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
  },
  { timestamps: true }
);

export const Testimonial = models.Testimonial || model<ITestimonial>('Testimonial', TestimonialSchema);
