import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  summary: { type: String, required: true },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  outcome: { type: String, required: true },
  featuredImage: { type: String },
  gallery: [{ type: String }],
  isFeatured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);