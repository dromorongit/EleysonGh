import mongoose, { Schema, model, models } from 'mongoose';

export interface ISiteSettings {
  _id?: string;
  companyName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socialLinks: { platform: string; url: string }[];
  seoTitle: string;
  seoDescription: string;
  updatedAt: Date;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    companyName: { type: String, default: 'Eleyson Ghana Limited' },
    tagline: { type: String, default: '' },
    phone: { type: String, default: '' },
    whatsapp: { type: String, default: '' },
    email: { type: String, default: '' },
    address: { type: String, default: '' },
    socialLinks: [{ platform: String, url: String }],
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' },
  },
  { timestamps: true }
);

export const SiteSettings = models.SiteSettings || model<ISiteSettings>('SiteSettings', SiteSettingsSchema);
