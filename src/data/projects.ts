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
    title: 'Geophysics Survey, Borehole Drilling and Pump Installation',
    slug: 'geophysics-survey-borehole-drilling-pump-installation-obourtumpah',
    category: 'Hydro',
    location: 'Obourtumpah, Ghana',
    clientType: 'Community',
    shortDescription: 'Sustainable water solution for rural community through geophysical surveying, borehole drilling, and solar pump installation',
    challenge: 'The rural community of Obourtumpah lacked access to clean, reliable water, relying on contaminated surface water and seasonal streams that dried up for months each year. This water scarcity affected health, agriculture, and daily life.',
    solution: 'We conducted comprehensive geophysical surveys to locate a sustainable aquifer, then drilled a deep borehole equipped with a solar-powered submersible pump. The system includes a 30,000-liter water storage tank, basic filtration, and public tap stands strategically placed for community access. The solar installation ensures operation without grid electricity or fuel costs.',
    impact: 'The entire community of Obourtumpah (approximately 500 residents) now has year-round access to clean, safe water. Waterborne diseases have decreased by 70%, children can attend school regularly instead of spending hours fetching water, and local agriculture has improved with reliable irrigation water. The community now has a sustainable water source that will serve generations.',
    technicalSpecs: [
      { key: 'Boreholes Drilled', value: '1' },
      { key: 'Drilling Depth', value: '100 meters' },
      { key: 'Flow Rate', value: '8,000 L/hour' },
      { key: 'Pump Type', value: 'Solar Submersible 5.5kW' },
      { key: 'Storage Capacity', value: '30,000 liters' },
      { key: 'Power Source', value: 'Solar PV System 7kW' },
      { key: 'People Served', value: '500+ residents' },
      { key: 'Tap Stands', value: '6 community access points' },
    ],
    featuredImage: '/images/hydrosolutions.jpg',
    galleryImages: [
      '/images/boreobour1.MP4',
      '/images/boreobour2.MP4'
    ],
    isFeatured: false,
    fullDescription: 'This transformative community water project in Obourtumpah represents our commitment to bringing clean water to rural Ghana. The project began with extensive geophysical surveying to identify a reliable groundwater source. After locating a promising aquifer, our team drilled to 100 meters and installed a solar-powered pumping system. The 30,000-liter storage tower ensures water availability even during cloudy periods, while six public tap stands provide convenient access throughout the village. The solar-powered system operates completely off-grid, with zero fuel costs and minimal maintenance. This project has fundamentally improved public health, education, and economic opportunities for the Obourtumpah community. Women and children no longer spend hours each day fetching water, and the reduction in waterborne diseases has decreased healthcare costs and improved quality of life. This is a testament to how sustainable water infrastructure can transform entire communities.',
  },
  {
    title: 'Geophysics Survey, Borehole Drilling and Pump Installation',
    slug: 'geophysics-survey-borehole-drilling-pump-installation-koforidua',
    category: 'Hydro',
    location: 'Koforidua, Ghana',
    clientType: 'Government',
    shortDescription: 'Complete geophysical surveying and borehole drilling solution with high-capacity pump installation for government facility',
    challenge: 'The government administrative complex in Koforidua suffered from chronic water shortages, with existing water sources unable to meet the daily demands of hundreds of employees and facility operations. The unreliable supply hindered essential services and administrative functions.',
    solution: 'We executed a comprehensive water solution beginning with advanced geophysical surveys to map subsurface water resources. Our team drilled three high-yield boreholes to depths of 80-120 meters, installing solar-powered submersible pumps with a combined flow rate of 15,000 liters per hour. The system includes a 50,000-liter storage reservoir, multi-stage water filtration, and automated control systems for 24/7 operation without grid dependency.',
    impact: 'The government facility now has an uninterrupted, reliable water supply that serves 500+ workers daily. The solar-powered system has eliminated fuel costs and reduced maintenance by 95%. The project has significantly improved the facility\'s operational capacity and sets a benchmark for sustainable government infrastructure projects in the Eastern Region.',
    technicalSpecs: [
      { key: 'Boreholes Drilled', value: '3' },
      { key: 'Drilling Depth', value: '80-120 meters' },
      { key: 'Flow Rate', value: '15,000 L/hour' },
      { key: 'Pump Type', value: 'Solar Submersible 15kW' },
      { key: 'Storage Capacity', value: '50,000 liters' },
      { key: 'Power Source', value: 'Solar PV System 20kW' },
      { key: 'Filtration', value: 'Multi-stage filtration' },
      { key: 'People Served', value: '500+ daily' },
    ],
    featuredImage: '/images/borehole1.jpg',
    galleryImages: [
      '/images/borehole1.jpg',
      '/images/borehole2.jpg',
      '/images/borehole3.jpg',
      '/images/borehole1.MP4',
      '/images/borehole2.MP4',
      '/images/borehole3.MP4',
      '/images/borehole4.MP4',
      '/images/borehole5.MP4',
      '/images/borehole6.MP4',
      '/images/borehole7.MP4',
      '/images/borehole8.MP4'
    ],
    isFeatured: true,
    fullDescription: 'This landmark government water project in Koforidua demonstrates our full-spectrum capabilities in hydrogeological engineering. The project began with comprehensive geophysical surveying using ground-penetrating radar and electrical resistivity tomography to pinpoint optimal drilling locations. Our expert drilling team then completed three boreholes, each reaching depths of 80-120 meters to access reliable aquifers. The installation features state-of-the-art solar submersible pumps, a massive 50,000-liter water storage system, and advanced filtration to ensure water quality. The entire system is powered by a dedicated 20kW solar array, making it completely independent of the grid and ensuring 24/7 operation even during power outages. This project has transformed water access for the government complex and serves as a model for sustainable public infrastructure across Ghana.',
  },
  {
    title: 'Solar Residential Installation at Dansoman',
    slug: 'solar-residential-installation-at-dansoman',
    category: 'Solar',
    location: 'Dansoman, Ghana',
    clientType: 'Residential',
    shortDescription: 'Compact 3.4kWp residential solar system with 6kVA inverter and 5.12kWh battery backup for modern home',
    challenge: 'The homeowner in Dansoman faced increasing electricity bills and occasional power outages that disrupted home office work and family life. The limited roof space required an efficient, high-performance solution.',
    solution: 'We designed a space-optimized 3.4kWp solar system using high-efficiency 400W panels, paired with a 6kVA hybrid inverter and a 5.12kWh lithium battery storage system. The installation includes smart energy management that prioritizes essential loads during outages and maximizes solar self-consumption. The system is monitored via a mobile app for real-time performance tracking.',
    impact: 'The household now reduces grid electricity consumption by 70%, with the battery providing seamless backup for essential appliances during outages. The system has a payback period of approximately 5 years and significantly reduces the home\'s carbon footprint. The homeowner enjoys uninterrupted power for work-from-home setup, refrigeration, and lighting.',
    technicalSpecs: [
      { key: 'PV Capacity', value: '3.4kWp' },
      { key: 'Panel Count', value: '9 panels (400W each)' },
      { key: 'Inverter Capacity', value: '6kVA Hybrid' },
      { key: 'Battery Capacity', value: '5.12kWh Lithium' },
      { key: 'Annual Generation', value: '5,100 kWh' },
      { key: 'CO₂ Reduction', value: '3 tons/year' },
      { key: 'Coverage', value: 'Essential loads + daytime AC' },
    ],
    featuredImage: '/images/solardansoman1.jpg',
    galleryImages: [
      '/images/solardansoman1.jpg',
      '/images/solardansoman2.jpg'
    ],
    isFeatured: false,
    fullDescription: 'This efficient residential solar installation in Dansoman demonstrates how even limited roof space can be transformed into a productive energy source. The 3.4kWp system uses just 9 high-efficiency monocrystalline panels to deliver substantial energy generation. The 6kVA hybrid inverter intelligently manages power flow between solar, battery, and grid, while the 5.12kWh lithium battery provides reliable backup for essential appliances. This installation is ideal for urban homes seeking energy independence without extensive roof coverage. The system\'s smart features include time-of-use optimization, remote monitoring, and automated load shedding to maximize savings. This project highlights our ability to deliver tailored solar solutions that meet specific household needs and budget considerations.',
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
