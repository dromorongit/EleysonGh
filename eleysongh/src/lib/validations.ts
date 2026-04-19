import { z } from 'zod';

// Contact Form Validation
export const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Quote Request Form Validation
export const quoteSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  serviceCategory: z.string().min(1, 'Please select a service category'),
  specificService: z.string().optional(),
  location: z.string().min(2, 'Location is required'),
  projectType: z.string().min(1, 'Please select a project type'),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  projectDescription: z.string().min(20, 'Project description must be at least 20 characters'),
});

// Newsletter Signup Validation
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type QuoteFormData = z.infer<typeof quoteSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;