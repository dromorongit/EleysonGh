// Local data store for projects
// This replaces the MongoDB Project collection

export interface Project {
  title: string;
  slug: string;
  category: 'Solar' | 'Borehole' | 'Energy' | 'Other';
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
    location: 'Sunyani',
    clientType: 'Residential',
    shortDescription: '2.75kWp residential solar installation with 5kVA inverter and 5.12kWh battery storage, engineered for reliable backup power and reduced grid dependence.',
    challenge: 'The homeowner in Sunyani experienced frequent grid power outages and rising electricity costs, disrupting daily household activities and increasing monthly expenses. A compact yet effective solar backup solution was needed to provide uninterrupted power for essential loads.',
    solution: 'We designed and installed a 2.75kWp solar power system featuring high-efficiency monocrystalline panels, a 5kVA hybrid inverter, and a 5.12kWh lithium battery storage system. The system automatically switches to battery backup within milliseconds of a grid outage, ensuring zero disruption to critical household loads. Smart energy management optimizes solar self-consumption and battery charging for maximum efficiency.',
    impact: 'The household now enjoys seamless backup power during grid outages, keeping essential appliances running without interruption. The solar component reduces daily grid dependence and electricity costs, while the 5.12kWh battery provides reliable backup capacity. The homeowner reports improved comfort and peace of mind with a fully automated, hands-free energy solution.',
    technicalSpecs: [
      { key: 'PV Capacity', value: '2.75kWp' },
      { key: 'Panel Count', value: '7 panels (400W each)' },
      { key: 'Panel Type', value: 'Monocrystalline 400W' },
      { key: 'Inverter Capacity', value: '5kVA Hybrid' },
      { key: 'Battery Capacity', value: '5.12kWh Lithium' },
      { key: 'Backup Time', value: 'Up to 4 hours (essential loads)' },
      { key: 'Switchover Time', value: '< 10 milliseconds' },
    ],
    featuredImage: '/images/sunyanisolar1.jpg',
    galleryImages: [
      '/images/sunyanisolar1.jpg',
      '/images/sunyanisolar2.jpg',
      '/images/sunyanisolar3.jpg',
      '/images/sunyanisolar4.jpg',
      '/images/sunyanisolar5.jpg',
      '/images/sunyanisolar6.jpg',
      '/images/sunyanisolar1.MP4',
      '/images/sunyanisolar2.MP4',
      '/images/sunyanisolar3.MP4'
    ],
    isFeatured: true,
    fullDescription: 'This compact yet powerful residential solar installation in Sunyani delivers a reliable backup power solution tailored for households seeking uninterrupted energy during grid outages. The 2.75kWp solar array, paired with a 5kVA hybrid inverter and a 5.12kWh lithium battery, forms a complete system that automatically takes over within milliseconds of a grid failure. The system intelligently manages power flow, prioritizing critical household loads such as refrigeration, lighting, and security systems. During sunny periods, the solar panels recharge the battery and offset grid consumption, reducing electricity bills while maintaining full backup readiness. This project exemplifies our ability to deliver cost-effective, high-performance solar solutions that bring peace of mind to Ghanaian homes.',
  },
  {
    title: 'Solar Residential Installation at Kpong',
    slug: 'solar-residential-installation-at-kpong',
    category: 'Solar',
    location: 'Kpong',
    clientType: 'Residential',
    shortDescription: '1.5kWp residential solar installation with 3kVA inverter and 4.8kWh battery storage, engineered for reliable backup power and reduced grid dependence.',
    challenge: 'The homeowner in Kpong faced frequent grid power outages and rising electricity costs, disrupting daily household activities. A compact and affordable solar backup solution was needed to provide uninterrupted power for essential household loads.',
    solution: 'We designed and installed a 1.5kWp solar power system featuring high-efficiency monocrystalline panels, a 3kVA hybrid inverter, and a 4.8kWh lithium battery storage system. The system automatically switches to battery backup within milliseconds of a grid outage, ensuring zero disruption to critical household loads. Smart energy management optimizes solar self-consumption and battery charging for maximum efficiency.',
    impact: 'The household now enjoys seamless backup power during grid outages, keeping essential appliances running without interruption. The solar component reduces daily grid dependence and electricity costs, while the 4.8kWh battery provides reliable backup capacity. The homeowner reports improved comfort and peace of mind with a fully automated, hands-free energy solution.',
    technicalSpecs: [
      { key: 'PV Capacity', value: '1.5kWp' },
      { key: 'Panel Count', value: '4 panels (400W each)' },
      { key: 'Panel Type', value: 'Monocrystalline 400W' },
      { key: 'Inverter Capacity', value: '3kVA Hybrid' },
      { key: 'Battery Capacity', value: '4.8kWh Lithium' },
      { key: 'Backup Time', value: 'Up to 3 hours (essential loads)' },
      { key: 'Switchover Time', value: '< 10 milliseconds' },
    ],
    featuredImage: '/images/kpongsolar1.jpg',
    galleryImages: ['/images/kpongsolar2.jpg', '/images/kpongsolar3.jpg', '/images/kpongsolar1.MP4', '/images/kpongsolar2.MP4', '/images/kpongsolar3.MP4'],
    isFeatured: true,
    fullDescription: 'This compact and efficient residential solar installation in Kpong delivers a reliable backup power solution tailored for households seeking uninterrupted energy during grid outages. The 1.5kWp solar array, paired with a 3kVA hybrid inverter and a 4.8kWh lithium battery, forms a complete system that automatically takes over within milliseconds of a grid failure. The system intelligently manages power flow, prioritizing critical household loads such as refrigeration, lighting, and security systems. During sunny periods, the solar panels recharge the battery and offset grid consumption, reducing electricity bills while maintaining full backup readiness. This project exemplifies our ability to deliver cost-effective, high-performance solar solutions that bring peace of mind to Ghanaian homes.',
  },
  {
    title: 'Hydrogeological Survey, Borehole Drilling and Pump Installation',
    slug: 'geophysics-survey-borehole-drilling-pump-installation',
    category: 'Borehole',
    location: 'Koforidua, Ghana',
    clientType: 'Industrial',
    shortDescription: 'Comprehensive water solution featuring geophysical surveying, drilling, and mechanized pump installation for industrial facility.',
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
    featuredImage: '/images/hydrosolutions.jpg',
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
    title: 'Hydrogeological Survey, Borehole Drilling and Pump Installation',
    slug: 'geophysics-survey-borehole-drilling-pump-installation-obourtumpah',
    category: 'Borehole',
    location: 'Obourtumpah, Ghana',
    clientType: 'Community',
    shortDescription: 'Community water system with solar pumping, providing clean water to 500+ residents and reducing waterborne diseases by 70%.',
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
    featuredImage: '/images/driller.jpg',
    galleryImages: [
      '/images/boreobour1.MP4',
      '/images/boreobour2.MP4'
    ],
    isFeatured: false,
    fullDescription: 'This transformative community water project in Obourtumpah represents our commitment to bringing clean water to rural Ghana. The project began with extensive geophysical surveying to identify a reliable groundwater source. After locating a promising aquifer, our team drilled to 100 meters and installed a solar-powered pumping system. The 30,000-liter storage tower ensures water availability even during cloudy periods, while six public tap stands provide convenient access throughout the village. The solar-powered system operates completely off-grid, with zero fuel costs and minimal maintenance. This project has fundamentally improved public health, education, and economic opportunities for the Obourtumpah community. Women and children no longer spend hours each day fetching water, and the reduction in waterborne diseases has decreased healthcare costs and improved quality of life. This is a testament to how sustainable water infrastructure can transform entire communities.',
  },
  {
    title: 'Hydrogeological Survey, Borehole Drilling and Pump Installation',
    slug: 'geophysics-survey-borehole-drilling-pump-installation-koforidua',
    category: 'Borehole',
    location: 'Koforidua, Ghana',
    clientType: 'Government',
    shortDescription: 'Government water system with 3 boreholes and 20kW solar array, providing 15,000L/hour for 500+ daily users.',
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
    shortDescription: '3.4kWp rooftop solar system with 6kVA hybrid inverter and 5.12kWh battery, reducing grid consumption by 70%.',
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
  {
    title: 'Solar Residential Installation at Pantang (Backup Solution)',
    slug: 'solar-residential-installation-at-pantang-backup-solution',
    category: 'Solar',
    location: 'Pantang, Ghana',
    clientType: 'Residential',
    shortDescription: '2kWp residential solar backup system with 5kVA inverter and 9.6kWh battery storage, engineered for reliable uninterrupted power during grid outages.',
    challenge: 'The homeowner in Pantang experienced frequent and prolonged grid power outages, disrupting daily household activities, refrigeration, and security systems. The lack of a reliable backup solution meant constant uncertainty and inconvenience during power interruptions.',
    solution: 'We designed and installed a compact yet powerful 2kWp solar backup system featuring high-efficiency monocrystalline panels, a 5kVA hybrid inverter, and a 9.6kWh lithium battery storage unit. The system is configured to automatically switch to battery backup within milliseconds of a grid outage, ensuring zero disruption to critical household loads. The installation includes a smart energy management system that prioritizes essential appliances and optimizes battery charging from both solar and grid sources.',
    impact: 'The household now enjoys seamless, uninterrupted power during grid outages, keeping essential appliances such as refrigeration, lighting, and security systems running without interruption. The solar component reduces daily grid dependence and electricity costs, while the 9.6kWh battery provides ample backup capacity for extended outages. The homeowner reports significant peace of mind and improved quality of life with a fully automated, hands-free backup solution.',
    technicalSpecs: [
      { key: 'PV Capacity', value: '2kWp' },
      { key: 'Inverter Capacity', value: '5kVA Hybrid' },
      { key: 'Battery Capacity', value: '9.6kWh Lithium' },
      { key: 'Backup Time', value: 'Up to 8 hours (essential loads)' },
      { key: 'Switchover Time', value: '< 10 milliseconds' },
      { key: 'Panel Type', value: 'Monocrystalline 400W' },
      { key: 'Panel Count', value: '5 panels' },
    ],
    featuredImage: '/images/pantangsolar1.jpg',
    galleryImages: [
      '/images/pantangsolar1.jpg',
      '/images/pantangsolar2.jpg',
      '/images/pantangsolar3.jpg',
      '/images/pantangsolar4.jpg',
    ],
    isFeatured: false,
    fullDescription: 'This residential solar backup installation in Pantang delivers a robust and reliable power backup solution tailored for households seeking uninterrupted energy during grid outages. The 2kWp solar array, paired with a 5kVA hybrid inverter and a 9.6kWh lithium battery, forms a complete backup system that automatically takes over within milliseconds of a grid failure. The system intelligently manages power flow, prioritizing critical household loads such as refrigeration, lighting, and security systems. During sunny periods, the solar panels recharge the battery and offset grid consumption, reducing electricity bills while maintaining full backup readiness. This project exemplifies our ability to deliver cost-effective, high-performance backup solutions that bring peace of mind to Ghanaian homes.',
  },
  {
    title: 'Solar Residential Installation at Dome',
    slug: 'solar-residential-installation-at-dome',
    category: 'Solar',
    location: 'Dome, Ghana',
    clientType: 'Residential',
    shortDescription: '10kWp residential solar system with 10kVA inverter and 19.2kWh battery storage, engineered for substantial grid independence and reliable backup power.',
    challenge: 'The homeowner in Dome faced high monthly electricity bills and frequent grid outages that disrupted household operations. The large residential property required a robust solar solution capable of covering a significant portion of the home\'s energy demand while providing dependable backup.',
    solution: 'We designed and installed a comprehensive 10kWp solar power system featuring high-efficiency monocrystalline panels, a 10kVA hybrid inverter, and a 19.2kWh lithium battery storage system. The installation covers a wide range of household loads including lighting, appliances, and air conditioning, with seamless automatic transfer to battery backup during grid outages. The system includes smart energy management and remote monitoring for optimal performance.',
    impact: 'The household has achieved a significant reduction in grid electricity consumption and monthly utility bills, while the 19.2kWh battery provides extended backup capacity during prolonged outages. The homeowner now enjoys reliable power for all essential and comfort loads, with the solar system offsetting the majority of daytime energy demand. The installation has delivered both immediate cost savings and long-term energy security.',
    technicalSpecs: [
      { key: 'PV Capacity', value: '10kWp' },
      { key: 'Panel Count', value: '25 panels (400W each)' },
      { key: 'Panel Type', value: 'Monocrystalline 400W' },
      { key: 'Inverter Capacity', value: '10kVA Hybrid' },
      { key: 'Battery Capacity', value: '19.2kWh Lithium' },
      { key: 'Backup Time', value: 'Up to 6 hours (mixed loads)' },
      { key: 'Switchover Time', value: '< 10 milliseconds' },
      { key: 'Annual Generation', value: '~15,000 kWh' },
    ],
    featuredImage: '/images/domesolar1.jpg',
    galleryImages: [
      '/images/domesolar1.jpg',
      '/images/domesolar2.jpg',
    ],
    isFeatured: false,
    fullDescription: 'This substantial residential solar installation in Dome delivers a powerful and reliable energy solution for a large household. The 10kWp solar array, paired with a 10kVA hybrid inverter and a 19.2kWh lithium battery, provides comprehensive coverage of the home\'s energy needs — from essential lighting and appliances to high-demand comfort loads such as air conditioning. The system intelligently manages power flow between solar, battery, and grid, automatically switching to battery backup within milliseconds of a grid failure. During sunny periods, excess solar energy charges the battery and feeds back into the home\'s loads, significantly reducing grid dependence and electricity costs. This project highlights our ability to scale residential solar solutions to meet the demands of larger homes seeking both cost savings and energy resilience.',
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