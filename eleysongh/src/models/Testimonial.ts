import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roleOrCompany: { type: String, required: true },
  message: { type: String, required: true },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);