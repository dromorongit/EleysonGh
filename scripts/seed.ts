/**
 * Seed script to create initial admin user and sample data.
 * Run with: npx tsx scripts/seed.ts
 * 
 * IMPORTANT: Change the default admin password immediately after first login!
 */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const AdminUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['ADMIN', 'EDITOR'], default: 'EDITOR' },
}, { timestamps: true });

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  category: { type: String, enum: ['Solar', 'Hydro', 'Energy', 'Other'], default: 'Other' },
  location: { type: String, required: true },
  clientType: { type: String, default: '' },
  shortDescription: { type: String, required: true },
  challenge: { type: String, default: '' },
  solution: { type: String, default: '' },
  impact: { type: String, default: '' },
  technicalSpecs: [{ key: String, value: String }],
  featuredImage: { type: String, default: '' },
  galleryImages: [{ type: String }],
  isFeatured: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  category: { type: String, default: '' },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, default: '' },
  specifications: [{ key: String, value: String }],
  benefits: [{ type: String }],
  useCases: [{ type: String }],
  priceOptional: { type: String, default: '' },
  images: [{ type: String }],
  isFeatured: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  category: { type: String, default: 'General' },
  excerpt: { type: String, default: '' },
  content: { type: String, default: '' },
  featuredImage: { type: String, default: '' },
  author: { type: String, default: '' },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  publishedAt: { type: Date, default: null },
}, { timestamps: true });

const TestimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientRole: { type: String, default: '' },
  company: { type: String, default: '' },
  quote: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  imageOptional: { type: String, default: '' },
  isFeatured: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
}, { timestamps: true });

const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', AdminUserSchema);
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

async function seed() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI!);
  console.log('Connected successfully.');

  // Create admin user
  const existingAdmin = await AdminUser.findOne({ email: 'admin@eleysonghana.com' });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('ChangeMeImmediately123!', 12);
    await AdminUser.create({
      name: 'Admin User',
      email: 'admin@eleysonghana.com',
      passwordHash: passwordHash,
      role: 'ADMIN',
    });
    console.log('Created admin user: admin@eleysonghana.com');
    console.log('WARNING: Change the default password immediately after first login!');
  } else {
    console.log('Admin user already exists.');
  }

  // Create sample projects
  const existingProjects = await Project.countDocuments();
  if (existingProjects === 0) {
    await Project.insertMany([
      {
        title: 'Commercial Solar Installation',
        slug: 'commercial-solar-installation',
        category: 'Solar',
        location: 'Accra, Ghana',
        clientType: 'Commercial',
        shortDescription: '500kW hybrid solar system for major commercial facility with battery backup',
        challenge: 'High electricity costs and unreliable grid power affecting business operations.',
        solution: 'Designed and installed a 500kW hybrid solar system with battery storage.',
        impact: 'Reduced electricity costs by 60% and provided reliable backup power.',
        isFeatured: true,
        status: 'published',
      },
      {
        title: 'Rural Borehole Development',
        slug: 'rural-borehole-development',
        category: 'Hydro',
        location: 'Eastern Region, Ghana',
        clientType: 'Community',
        shortDescription: 'Complete borehole drilling and mechanization serving 300+ households',
        challenge: 'Lack of clean water access for rural community.',
        solution: 'Drilled and equipped multiple boreholes with solar-powered pumps.',
        impact: 'Provided clean water to over 300 households.',
        isFeatured: true,
        status: 'published',
      },
      {
        title: 'Industrial Energy Solution',
        slug: 'industrial-energy-solution',
        category: 'Energy',
        location: 'Tema, Ghana',
        clientType: 'Industrial',
        shortDescription: '2MW solar farm with grid-tie connection for manufacturing complex',
        challenge: 'High energy consumption and costs for manufacturing operations.',
        solution: 'Built a 2MW solar farm with grid-tie connection.',
        impact: 'Significant reduction in energy costs and carbon footprint.',
        isFeatured: false,
        status: 'published',
      },
    ]);
    console.log('Created sample projects.');
  } else {
    console.log('Projects already exist.');
  }

  // Create sample products
  const existingProducts = await Product.countDocuments();
  if (existingProducts === 0) {
    await Product.insertMany([
      {
        name: 'Solar Panel 500W',
        slug: 'solar-panel-500w',
        category: 'Solar Panels',
        shortDescription: 'High-efficiency monocrystalline solar panel for commercial and residential use.',
        longDescription: 'Premium 500W monocrystalline solar panel with industry-leading efficiency and durability.',
        specifications: [{ key: 'Power', value: '500W' }, { key: 'Efficiency', value: '21%' }],
        benefits: ['High efficiency', 'Long lifespan', 'Low maintenance'],
        useCases: ['Residential', 'Commercial', 'Industrial'],
        isFeatured: true,
        status: 'published',
      },
      {
        name: 'Solar Water Pump',
        slug: 'solar-water-pump',
        category: 'Water Pumps',
        shortDescription: 'Solar-powered water pump for borehole and irrigation applications.',
        longDescription: 'Reliable solar water pump system for remote water access.',
        specifications: [{ key: 'Flow Rate', value: '5000L/hour' }, { key: 'Head', value: '100m' }],
        benefits: ['No electricity needed', 'Low operating cost', 'Reliable'],
        useCases: ['Agriculture', 'Community Water', 'Borehole'],
        isFeatured: true,
        status: 'published',
      },
    ]);
    console.log('Created sample products.');
  } else {
    console.log('Products already exist.');
  }

  // Create sample blog posts
  const existingPosts = await BlogPost.countDocuments();
  if (existingPosts === 0) {
    await BlogPost.insertMany([
      {
        title: 'The Future of Solar Energy in Ghana',
        slug: 'future-of-solar-energy-ghana',
        category: 'Solar Energy',
        excerpt: 'Exploring the potential and growth of solar energy adoption in Ghana.',
        content: 'Ghana has immense solar energy potential with average sunshine of 5-6 hours per day...',
        author: 'Eleyson Team',
        status: 'published',
        publishedAt: new Date(),
      },
      {
        title: 'Water Security Through Hydrogeology',
        slug: 'water-security-hydrogeology',
        category: 'Hydrogeology',
        excerpt: 'How hydrogeological services are improving water access across West Africa.',
        content: 'Access to clean water remains a critical challenge in many parts of West Africa...',
        author: 'Eleyson Team',
        status: 'published',
        publishedAt: new Date(),
      },
    ]);
    console.log('Created sample blog posts.');
  } else {
    console.log('Blog posts already exist.');
  }

  // Create sample testimonials
  const existingTestimonials = await Testimonial.countDocuments();
  if (existingTestimonials === 0) {
    await Testimonial.insertMany([
      {
        clientName: 'Kwame Asante',
        clientRole: 'Facilities Manager',
        company: 'Accra Business Park',
        quote: 'Eleyson transformed our energy infrastructure. Our electricity costs dropped by 60% and we now have reliable power 24/7.',
        rating: 5,
        isFeatured: true,
        status: 'published',
      },
      {
        clientName: 'Ama Mensah',
        clientRole: 'Community Leader',
        company: 'Eastern Region Village Council',
        quote: 'The borehole project changed our community. We now have clean water for the first time in decades.',
        rating: 5,
        isFeatured: true,
        status: 'published',
      },
    ]);
    console.log('Created sample testimonials.');
  } else {
    console.log('Testimonials already exist.');
  }

  console.log('');
  console.log('Seed completed successfully!');
  console.log('');
  console.log('Default Admin Credentials:');
  console.log('  Email: admin@eleysonghana.com');
  console.log('  Password: ChangeMeImmediately123!');
  console.log('');
  console.log('IMPORTANT: Change the default password immediately after first login!');

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB.');
}

seed().catch(function(error) {
  console.error('Seed failed:', error);
  process.exit(1);
});
