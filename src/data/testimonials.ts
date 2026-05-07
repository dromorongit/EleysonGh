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
    quote: 'Eleyson transformed our energy infrastructure. Our electricity costs dropped by 60% and we now have reliable power 24/7. The hybrid solar system they designed and installed has been a game-changer for our operations. Professional team, excellent workmanship, and outstanding after-sales support.',
    rating: 5,
    imageOptional: '',
    isFeatured: true,
  },
  {
    clientName: 'Ama Mensah',
    clientRole: 'Community Leader',
    company: 'Eastern Region Village Council',
    quote: 'The borehole project changed our community. We now have clean water for the first time in decades. The hydrogeological surveying was thorough, and the drilling work was exceptional. Our entire village now has reliable access to safe drinking water.',
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
    quote: 'Our 2MW solar farm has reduced our energy costs by over 40% while significantly lowering our carbon footprint. Eleyson\'s engineering expertise and project management were exceptional. They delivered on time and within budget.',
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
