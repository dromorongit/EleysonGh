import mongoose, { Schema, model, models } from 'mongoose';

export interface IContactInquiry {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const ContactInquirySchema = new Schema<IContactInquiry>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    subject: { type: String, default: '' },
    message: { type: String, default: '' },
    status: { type: String, enum: ['new', 'read', 'replied', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

export const ContactInquiry = models.ContactInquiry || model<IContactInquiry>('ContactInquiry', ContactInquirySchema);
