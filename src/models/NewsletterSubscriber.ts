import mongoose, { Schema, model, models } from 'mongoose';

export interface INewsletterSubscriber {
  _id?: string;
  email: string;
  source: string;
  createdAt: Date;
}

const NewsletterSubscriberSchema = new Schema<INewsletterSubscriber>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    source: { type: String, default: 'website' },
  },
  { timestamps: true }
);

export const NewsletterSubscriber = models.NewsletterSubscriber || model<INewsletterSubscriber>('NewsletterSubscriber', NewsletterSubscriberSchema);
