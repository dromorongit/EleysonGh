import jwt from 'jsonwebtoken';
import { IAdminUser } from '@/models/AdminUser';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production';
const JWT_EXPIRATION = '7d';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export function generateToken(user: { _id: string; email: string; role: string }): string {
  const payload: JWTPayload = {
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export function getAdminFromToken(token: string): JWTPayload | null {
  return verifyToken(token);
}
