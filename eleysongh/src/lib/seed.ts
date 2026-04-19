import connectToDatabase from './mongodb';
import Project from '../models/Project';
import Product from '../models/Product';
import Testimonial from '../models/Testimonial';
import BlogPost from '../models/BlogPost';

export async function seedDatabase() {
  await connectToDatabase();

  // Seed Projects
  const projects = [
    {
      title: 'Solar Installation for Accra Hospital',
      slug: 'solar-installation-accra-hospital',
      category: 'Solar Engineering',
      location: 'Accra, Ghana',
      summary: 'Installed a 50kW solar system for sustainable energy supply.',
      challenge: 'Limited space and high energy demands in a medical facility.',
      solution: 'Custom-designed rooftop solar panels with battery storage.',
      outcome: 'Reduced energy costs by 70% and ensured uninterrupted power.',
      featuredImage: '/images/projects/hospital-solar.jpg',
      gallery: ['/images/projects/hospital1.jpg', '/images/projects/hospital2.jpg'],
      isFeatured: true,
      published: true,
    },
    {
      title: 'Borehole Drilling for Rural Community',
      slug: 'borehole-drilling-rural-community',
      category: 'Hydrogeological Engineering',
      location: 'Eastern Region, Ghana',
      summary: 'Drilled and equipped a deep borehole for clean water access.',
      challenge: 'Difficult geological conditions and remote location.',
      solution: 'Advanced geophysical survey followed by professional drilling.',
      outcome: 'Provided sustainable water source for 500+ households.',
      featuredImage: '/images/projects/borehole.jpg',
      gallery: ['/images/projects/borehole1.jpg', '/images/projects/borehole2.jpg'],
      isFeatured: true,
      published: true,
    },
    // Add more...
  ];

  for (const project of projects) {
    await Project.findOneAndUpdate({ slug: project.slug }, project, { upsert: true });
  }

  // Seed Products
  const products = [
    {
      name: 'Solar Panel 300W',
      slug: 'solar-panel-300w',
      category: 'Solar Panels',
      shortDescription: 'High-efficiency monocrystalline solar panel.',
      description: 'Premium 300W solar panel with 20-year warranty.',
      image: '/images/products/solar-panel.jpg',
      gallery: ['/images/products/solar-panel1.jpg'],
      isFeatured: true,
      published: true,
    },
    {
      name: 'Lithium Battery 10kWh',
      slug: 'lithium-battery-10kwh',
      category: 'Batteries',
      shortDescription: 'Reliable energy storage solution.',
      description: '10kWh lithium-ion battery for solar systems.',
      image: '/images/products/battery.jpg',
      gallery: ['/images/products/battery1.jpg'],
      isFeatured: true,
      published: true,
    },
    // Add more...
  ];

  for (const product of products) {
    await Product.findOneAndUpdate({ slug: product.slug }, product, { upsert: true });
  }

  // Seed Testimonials
  const testimonials = [
    {
      name: 'John Doe',
      roleOrCompany: 'CEO, ABC Corporation',
      message: 'Eleyson Ghana Limited delivered exceptional solar solutions that exceeded our expectations.',
      published: true,
    },
    {
      name: 'Jane Smith',
      roleOrCompany: 'Community Leader, Rural Ghana',
      message: 'Their borehole project brought clean water to our village. Truly life-changing.',
      published: true,
    },
    // Add more...
  ];

  for (const testimonial of testimonials) {
    await Testimonial.findOneAndUpdate({ name: testimonial.name }, testimonial, { upsert: true });
  }

  // Seed Blog Posts
  const blogPosts = [
    {
      title: 'The Future of Renewable Energy in Ghana',
      slug: 'future-renewable-energy-ghana',
      excerpt: 'Exploring the potential and challenges of renewable energy adoption.',
      content: 'Full content here...',
      featuredImage: '/images/blog/renewable-energy.jpg',
      published: true,
    },
    {
      title: 'Hydrogeological Best Practices',
      slug: 'hydrogeological-best-practices',
      excerpt: 'Key considerations for sustainable water resource management.',
      content: 'Full content here...',
      featuredImage: '/images/blog/hydrogeology.jpg',
      published: true,
    },
    // Add more...
  ];

  for (const post of blogPosts) {
    await BlogPost.findOneAndUpdate({ slug: post.slug }, post, { upsert: true });
  }

  console.log('Database seeded successfully');
}

// To run: node -e "require('./src/lib/seed.ts').seedDatabase()"