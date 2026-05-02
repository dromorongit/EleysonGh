import mongoose, { Schema, model, models } from 'mongoose';

export interface IAdminUser {
  _id?: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'ADMIN' | 'EDITOR';
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['ADMIN', 'EDITOR'], default: 'EDITOR' },
  },
  { timestamps: true }
);

export const AdminUser = models.AdminUser || model<IAdminUser>('AdminUser', AdminUserSchema);
