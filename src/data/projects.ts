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
    title: 'Solar Residential Installation at Sunyani',
    slug: 'solar-residential-installation-at-sunyani',
    category: 'Solar',
    location: 'Sunyani, Ghana',
    clientType: 'Residential',
    shortDescription: 'Premium 20kW residential solar system with battery backup for complete energy independence',
    challenge: 'The homeowner experienced frequent power outages and rising electricity costs, disrupting daily life and increasing household expenses. The existing grid connection was unreliable, especially during peak hours and rainy season.',
    solution: 'We designed and installed a comprehensive 20kW solar power system featuring high-efficiency monocrystalline panels, a 40kWh lithium battery storage system, and an intelligent hybrid inverter. The system provides seamless backup power during outages and maximizes self-consumption of solar energy. The installation includes real-time monitoring and automated load management to optimize energy usage.',
    impact: 'The household now enjoys 100% energy independence during outages and has reduced grid electricity consumption by 85%. The system pays for itself through significant electricity savings and provides peace of mind with uninterrupted power. The homeowner reports enhanced comfort and productivity with reliable lighting, cooling, and appliance operation.',
    technicalSpecs: [
      { key: 'System Capacity', value: '20kW' },
      { key: 'Panel Count', value: '50 panels' },
      { key: 'Panel Type', value: 'Monocrystalline 400W' },
      { key: 'Battery Storage', value: '40kWh Lithium' },
      { key: 'Inverter Type', value: 'Hybrid 20kW' },
      { key: 'Annual Generation', value: '30,000 kWh' },
      { key: 'CO₂ Reduction', value: '18 tons/year' },
    ],
    featuredImage: '/images/sunyanisolar1.jpg',
    galleryImages: [
      '/images/sunyanisolar1.jpg',
      '/images/sunyanisolar2.jpg',
      '/images/sunyanisolar3.jpg',
      '/images/sunyanisolar4.jpg',
      '/images/sunyanisolar5.jpg',
      '/images/sunyanisolar6.jpg',
      '/images/sunyanisolar7.jpg',
      '/images/sunyanisolar8.jpg',
      '/images/sunyanisolar9.jpg',
      '/images/sunyanisolar10.jpg',
      '/images/sunyanisolar11.jpg',
      '/images/sunyanisolar12.jpg',
      '/images/sunyanisolar1.MP4',
      '/images/sunyanisolar2.MP4',
      '/images/sunyanisolar3.MP4'
    ],
    isFeatured: true,
    fullDescription: 'This stunning residential solar installation in Sunyani showcases a complete energy solution designed for modern Ghanaian homes. The 20kW system combines cutting-edge technology with elegant aesthetics, seamlessly integrating into the home\'s architecture while delivering unmatched reliability. Our team handled everything from initial energy assessment to final commissioning, ensuring a hassle-free experience for the homeowner. The system now powers all household appliances including air conditioning, water heating, and entertainment systems with clean, renewable energy. This project exemplifies our commitment to delivering premium residential solar solutions that enhance quality of life while promoting sustainable energy adoption in Ghana.',
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
    title: 'Geophysics Survey, Borehole Drilling and Pump Installation',
    slug: 'geophysics-survey-borehole-drilling-pump-installation',
    category: 'Hydro',
    location: 'Koforidua, Ghana',
    clientType: 'Industrial',
    shortDescription: 'Comprehensive water solution featuring geophysical surveying, drilling, and mechanized pump installation for industrial facility',
    challenge: 'The industrial facility in Koforidua faced severe water scarcity, with existing wells drying up during peak production periods. The lack of reliable water supply was disrupting operations and threatening productivity.',
    solution: 'We conducted detailed geophysical surveys to identify optimal drilling locations, then drilled multiple high-yield boreholes equipped with state-of-the-art submersible pumps and solar-powered pumping systems. The solution includes water storage tanks, filtration systems, and automated pump controls for 24/7 operation.',
    impact: 'The facility now enjoys a constant, reliable water supply of 15,000 liters per hour, completely eliminating water shortages. Production has increased by 40% and the solar-powered pumping system has reduced operational costs by 90% compared to diesel generators. The project ensures long-term water security for the facility.',
    technicalSpecs: [
      { key: 'Boreholes Drilled', value: '3' },
      { key: 'Drilling Depth', value: '80-120 meters' },
      { key: 'Flow Rate', value: '15,000 L/hour' },
      { key: 'Pump Type', value: 'Solar Submersible 15kW' },
      { key: 'Storage Capacity', value: '50,000 liters' },
      { key: 'Power Source', value: 'Solar PV System 20kW' },
      { key: 'Filtration', value: 'Multi-stage filtration system' },
    ],
    featuredImage: '/images/borekoftown1.jpg',
    galleryImages: [
      '/images/borekoftown1.jpg',
      '/images/borekoftown2.jpg',
      '/images/borekoftown3.jpg',
      '/images/borekoftown4.jpg',
      '/images/borekoftown5.jpg',
      '/images/borekoftown6.jpg',
      '/images/borekoftown7.jpg',
      '/images/borekoftown8.jpg',
      '/images/borekoftown1.MP4',
      '/images/borekoftown2.MP4',
      '/images/borekoftown3.MP4',
      '/images/borekoftown4.MP4',
      '/images/borekoftown5.MP4',
      '/images/borekoftown6.MP4',
      '/images/borekoftown7.MP4',
      '/images/borekoftown8.MP4'
    ],
    isFeatured: true,
    fullDescription: 'This comprehensive water infrastructure project in Koforidua showcases our end-to-end capabilities in hydrogeological services. Starting with detailed geophysical surveying to identify the most promising aquifer locations, we proceeded with professional drilling operations to depths of 80-120 meters. The installation includes high-capacity solar-powered submersible pumps, extensive water storage facilities, and advanced filtration systems to ensure clean, reliable water. The integration of solar power eliminates dependency on fossil fuels and provides sustainable, cost-effective water pumping 24/7. This project demonstrates our commitment to delivering complete water solutions that address critical water scarcity issues for industrial clients across Ghana.',
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
