// Local data store for projects
// This replaces the MongoDB Project collection

export interface Project {
  title: string;
  slug: string;
  category: 'Solar' | 'Hydro' | 'Energy' | 'Other';
  location: string;
  clientType: string;
  shortDescription: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  technicalSpecs: { key: string; value: string }[];
  featuredImage: string;
  galleryImages: string[];
  isFeatured: boolean;
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    title: 'Commercial Solar Installation',
    slug: 'commercial-solar-installation',
    category: 'Solar',
    location: 'Accra, Ghana',
    clientType: 'Commercial',
    shortDescription: '500kW hybrid solar system for major commercial facility with battery backup',
    challenge: 'High electricity costs and unreliable grid power affecting business operations.',
    solution: 'Designed and installed a 500kW hybrid solar system with battery storage, including custom engineering to meet the facility\'s energy demands.',
    impact: 'Reduced electricity costs by 60% and provided reliable backup power during grid outages.',
    technicalSpecs: [
      { key: 'System Capacity', value: '500kW' },
      { key: 'Panel Count', value: '1,250 panels' },
      { key: 'Battery Storage', value: '500kWh' },
      { key: 'Annual Generation', value: '750,000 kWh' },
      { key: 'CO₂ Reduction', value: '450 tons/year' },
    ],
    featuredImage: '/images/homepage.jpg',
    galleryImages: ['/images/solarsolutions.jpg', '/images/projects.jpg'],
    isFeatured: true,
    fullDescription: 'This commercial solar installation represents one of our flagship projects, delivering substantial energy savings and operational reliability for a major Accra-based business. The hybrid system ensures continuous power even during grid failures.',
  },
  {
    title: 'Solar Residential Installation at Kpong',
    slug: 'solar-residential-installation-at-kpong',
    category: 'Solar',
    location: 'Kpong, Ghana',
    clientType: 'Residential',
    shortDescription: 'Complete solar power system installation for residential property with battery backup',
    challenge: 'High electricity costs and unreliable grid power for a large residential property.',
    solution: 'Designed and installed a comprehensive solar power system with high-efficiency panels and battery storage for 24/7 power availability.',
    impact: 'Reduced electricity bills by 75% and provided uninterrupted power supply.',
    technicalSpecs: [
      { key: 'System Capacity', value: '15kW' },
      { key: 'Panel Count', value: '38 panels' },
      { key: 'Battery Storage', value: '30kWh' },
      { key: 'Annual Generation', value: '22,500 kWh' },
    ],
    featuredImage: '/images/kpongsolar1.jpg',
    galleryImages: ['/images/kpongsolar2.jpg', '/images/kpongsolar3.jpg', '/images/kpongsolar1.MP4', '/images/kpongsolar2.MP4', '/images/kpongsolar3.MP4'],
    isFeatured: true,
    fullDescription: 'A premium residential solar solution at Kpong featuring high-efficiency panels and advanced battery storage. This system provides complete energy independence for the homeowner.',
  },
  {
    title: 'Industrial Energy Solution',
    slug: 'industrial-energy-solution',
    category: 'Energy',
    location: 'Tema, Ghana',
    clientType: 'Industrial',
    shortDescription: '2MW solar farm with grid-tie connection for manufacturing complex',
    challenge: 'High energy consumption and costs for manufacturing operations.',
    solution: 'Built a 2MW solar farm with grid-tie connection, integrating seamlessly with existing industrial infrastructure.',
    impact: 'Significant reduction in energy costs and carbon footprint.',
    technicalSpecs: [
      { key: 'System Capacity', value: '2MW' },
      { key: 'Panel Count', value: '5,000 panels' },
      { key: 'Annual Generation', value: '3,000,000 kWh' },
      { key: 'CO₂ Reduction', value: '1,800 tons/year' },
    ],
    featuredImage: '/images/projects.jpg',
    galleryImages: ['/images/solarsolutions.jpg', '/images/homepage.jpg'],
    isFeatured: false,
    fullDescription: 'Large-scale industrial solar installation powering a manufacturing complex in Tema. This ground-mounted solar farm demonstrates our capability to deliver utility-scale renewable energy solutions.',
  },
  {
    title: 'Residential Solar Community',
    slug: 'residential-solar-community',
    category: 'Solar',
    location: 'West Legon, Ghana',
    clientType: 'Residential',
    shortDescription: 'Shared solar system powering residential community of 50 homes',
    challenge: 'Need for affordable, community-scale renewable energy solution.',
    solution: 'Designed and installed a shared solar array with individual metering for 50 households.',
    impact: 'Each household saves an average of 60% on electricity costs.',
    technicalSpecs: [
      { key: 'System Capacity', value: '100kW' },
      { key: 'Homes Powered', value: '50' },
      { key: 'Annual Generation', value: '150,000 kWh' },
    ],
    featuredImage: '/images/projects.jpg',
    galleryImages: ['/images/homepage.jpg'],
    isFeatured: false,
    fullDescription: 'Innovative community solar project serving 50 homes in West Legon. This shared infrastructure model makes solar accessible to more families.',
  },
  {
    title: 'Government Water Project',
    slug: 'government-water-project',
    category: 'Hydro',
    location: 'Ashanti Region, Ghana',
    clientType: 'Government',
    shortDescription: 'Multi-borehole system for government administrative complex',
    challenge: 'Inadequate water supply for government facilities in the region.',
    solution: 'Completed geophysical surveying, drilling, and mechanization of multiple boreholes.',
    impact: 'Reliable water supply for 500+ government workers and facilities.',
    technicalSpecs: [
      { key: 'Boreholes', value: '3' },
      { key: 'Depth', value: '80-120m' },
      { key: 'Flow Rate', value: '15,000 L/hour' },
      { key: 'Storage Capacity', value: '50,000 L' },
    ],
    featuredImage: '/images/hydrosolutions.jpg',
    galleryImages: ['/images/about.jpg'],
    isFeatured: false,
    fullDescription: 'Comprehensive water infrastructure project for government facilities, including geophysical surveying, drilling, and complete mechanization systems.',
  },
  {
    title: 'NGO Solar Installation',
    slug: 'ngo-solar-installation',
    category: 'Solar',
    location: 'Northern Region, Ghana',
    clientType: 'NGO',
    shortDescription: 'Off-grid solar system for remote NGO health clinic',
    challenge: 'No grid electricity available, clinic needed reliable power for medical equipment.',
    solution: 'Designed and installed a complete off-grid solar system with battery backup.',
    impact: 'Clinic now operates 24/7 with reliable power for refrigeration, lighting, and medical equipment.',
    technicalSpecs: [
      { key: 'System Capacity', value: '10kW' },
      { key: 'Battery Storage', value: '40kWh' },
      { key: 'Annual Generation', value: '15,000 kWh' },
    ],
    featuredImage: '/images/homepage.jpg',
    galleryImages: ['/images/solarsolutions.jpg'],
    isFeatured: false,
    fullDescription: 'Life-changing solar installation for a remote health clinic, enabling 24/7 medical services in an area without grid electricity.',
  },
];

// Helper functions
export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.isFeatured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}
