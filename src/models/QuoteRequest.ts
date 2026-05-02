import mongoose, { Schema, model, models } from 'mongoose';

export interface IQuoteRequest {
  _id?: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectType: string;
  location: string;
  budgetRange: string;
  preferredContactMethod: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const QuoteRequestSchema = new Schema<IQuoteRequest>(
  {
    fullName: { type: String, required: true },
    companyName: { type: String, default: '' },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    serviceType: { type: String, default: '' },
    projectType: { type: String, default: '' },
    location: { type: String, default: '' },
    budgetRange: { type: String, default: '' },
    preferredContactMethod: { type: String, default: '' },
    message: { type: String, default: '' },
    status: { type: String, enum: ['new', 'contacted', 'in_progress', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

export const QuoteRequest = models.QuoteRequest || model<IQuoteRequest>('QuoteRequest', QuoteRequestSchema);
