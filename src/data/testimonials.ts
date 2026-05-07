// Local data store for testimonials
// This replaces the MongoDB Testimonial collection

export interface Testimonial {
  clientName: string;
  clientRole: string;
  company: string;
  quote: string;
  rating: number;
  imageOptional: string;
  isFeatured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    clientName: 'Kwame Asante',
    clientRole: 'Facilities Manager',
    company: 'Accra Business Park',
    quote: 'Eleyson delivered a comprehensive solar solution that reduced our energy costs by 60% while ensuring 24/7 power reliability. The hybrid system design was technically sound, and their engineering team provided exceptional project execution from start to finish.',
    rating: 5,
    imageOptional: '',
    isFeatured: true,
  },
  {
    clientName: 'Ama Mensah',
    clientRole: 'Community Leader',
    company: 'Eastern Region Village Council',
    quote: 'The borehole project transformed our community. After decades without reliable water access, Eleyson hydrogeological surveying identified the optimal location, and their drilling team delivered a sustainable water system. Our village now has year-round access to clean water.',
    rating: 5,
    imageOptional: '',
    isFeatured: true,
  },
  {
    clientName: 'Dr. Kofi Appiah',
    clientRole: 'Medical Director',
    company: 'Appiah Memorial Clinic',
    quote: 'The solar installation at our clinic has been life-changing. We now have reliable power for refrigeration, lighting, and medical equipment 24/7. This has significantly improved our ability to serve the community, especially during nighttime emergencies.',
    rating: 5,
    imageOptional: '',
    isFeatured: false,
  },
  {
    clientName: 'Mr. Samuel Osei',
    clientRole: 'Operations Manager',
    company: 'Tema Manufacturing Ltd',
    quote: 'Our 2MW solar farm has reduced our energy costs by over 40% while significantly lowering our carbon footprint. Eleyson engineering expertise and project management were exceptional. They delivered on time and within budget.',
    rating: 5,
    imageOptional: '',
    isFeatured: false,
  },
  {
    clientName: 'Mrs. Abena Boateng',
    clientRole: 'Homeowner',
    company: 'Private Residence, East Legon',
    quote: 'My home now runs entirely on solar power. The system is beautiful, efficient, and has eliminated my electricity bills completely. The team was professional and the installation was flawless. Highly recommend Eleyson for any solar project.',
    rating: 5,
    imageOptional: '',
    isFeatured: false,
  },
  {
    clientName: 'Engr. Yaw Boateng',
    clientRole: 'Project Engineer',
    company: 'Ghana Water Company Limited',
    quote: 'Eleyson\'s hydrogeological expertise is top-notch. Their surveying accuracy saved us significant time and resources. The borehole they recommended has exceeded our yield expectations. A truly professional engineering firm.',
    rating: 5,
    imageOptional: '',
    isFeatured: false,
  },
];

// Helper functions
export function getTestimonials(): Testimonial[] {
  return testimonials;
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.isFeatured);
}

export function getTestimonialsByRating(rating: number): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.rating === rating);
}
