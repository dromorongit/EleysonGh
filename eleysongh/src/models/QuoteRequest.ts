import mongoose from 'mongoose';

const QuoteRequestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  serviceCategory: { type: String, required: true },
  specificService: { type: String },
  location: { type: String, required: true },
  projectType: { type: String, required: true },
  budgetRange: { type: String },
  timeline: { type: String },
  projectDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.QuoteRequest || mongoose.model('QuoteRequest', QuoteRequestSchema);