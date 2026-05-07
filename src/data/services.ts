// Local data store for services
// This replaces the MongoDB Service collection

export interface Service {
  title: string;
  slug: string;
  category: 'Solar' | 'Hydro' | 'Maintenance' | 'Training' | 'Energy Audit';
  shortDescription: string;
  longDescription: string;
  features: string[];
  processSteps: { title: string; description: string }[];
  featuredImage: string;
}

export const services: Service[] = [
  // Solar Services
  {
    title: 'Solar Energy Installation',
    slug: 'solar-energy-installation',
    category: 'Solar',
    shortDescription: 'Engineered solar photovoltaic systems for homes, businesses, and industrial facilities.',
    longDescription: 'End-to-end solar energy solutions from initial consultation and site assessment to design, procurement, installation, and commissioning. We deliver high-performance solar systems tailored to your specific energy needs, ensuring maximum ROI and long-term reliability.',
    features: [
      'Custom system design based on energy audit',
      'High-quality Tier-1 solar panels',
      'Advanced hybrid inverters with battery compatibility',
      'Comprehensive warranty and support',
      'Full project management and permitting',
      'Grid-tie, off-grid, and hybrid configurations',
    ],
    processSteps: [
      { title: 'Consultation & Site Survey', description: 'Detailed assessment of your energy needs, site conditions, and technical requirements' },
      { title: 'System Design & Proposal', description: 'Custom engineering design with detailed specifications, timeline, and pricing' },
      { title: 'Permits & Approvals', description: 'Handling of all necessary permits, grid connections, and regulatory compliance' },
      { title: 'Procurement & Logistics', description: 'Sourcing of premium components and coordination of delivery to site' },
      { title: 'Installation & Integration', description: 'Professional installation by certified engineers with minimal disruption' },
      { title: 'Commissioning & Training', description: 'System testing, performance verification, and operator training' },
      { title: 'Ongoing Support', description: 'Post-installation monitoring, maintenance, and warranty support' },
    ],
    featuredImage: '/images/solarsolutions.jpg',
  },
  {
    title: 'Solar Battery Backup Systems',
    slug: 'solar-battery-backup-systems',
    category: 'Solar',
    shortDescription: 'Engineered energy storage solutions for uninterrupted power during outages.',
    longDescription: 'Advanced battery storage systems that provide backup power during grid failures and enable energy independence. Our solutions use lithium and lead-acid technologies optimized for solar integration, ensuring you never lose power.',
    features: [
      'Seamless automatic transfer',
      'Scalable battery capacity',
      'Intelligent energy management',
      'Long cycle life batteries',
      'Remote monitoring and control',
      'Black start capability',
    ],
    processSteps: [
      { title: 'Load Analysis', description: 'Assessment of your critical loads and backup power requirements' },
      { title: 'Battery Sizing', description: 'Calculation of optimal battery capacity based on usage patterns' },
      { title: 'System Design', description: 'Integration with existing or new solar system' },
      { title: 'Installation & Testing', description: 'Professional installation with full system validation' },
      { title: 'User Training', description: 'Operation and maintenance training for facility staff' },
    ],
    featuredImage: '/images/homepage.jpg',
  },
  {
    title: 'Solar Energy Audits',
    slug: 'solar-energy-audits',
    category: 'Energy Audit',
    shortDescription: 'Comprehensive energy assessments to optimize solar investment.',
    longDescription: 'Professional energy audits that analyze your current energy consumption patterns, identify efficiency opportunities, and provide data-driven recommendations for optimal solar system design and implementation.',
    features: [
      'Detailed energy consumption analysis',
      'Load profiling and peak demand identification',
      'Solar potential assessment',
      'ROI and payback period calculations',
      'Energy efficiency recommendations',
      'Custom system sizing and proposal',
    ],
    processSteps: [
      { title: 'Energy Data Collection', description: 'Review of 12+ months of electricity bills and consumption patterns' },
      { title: 'Site Assessment', description: 'Physical inspection of premises for solar suitability' },
      { title: 'Load Analysis', description: 'Detailed breakdown of energy usage by equipment and time' },
      { title: 'Solar Potential Study', description: 'Shading analysis and solar irradiance assessment' },
      { title: 'Report & Recommendations', description: 'Comprehensive report with findings and custom solutions' },
    ],
    featuredImage: '/images/insights.jpg',
  },
  // Hydro & Water Services
  {
    title: 'Borehole Drilling & Water Wells',
    slug: 'borehole-drilling-water-wells',
    category: 'Hydro',
    shortDescription: 'Professional borehole drilling services for reliable, engineered water access.',
    longDescription: 'Complete borehole drilling services from geophysical surveying to final completion. We use modern drilling equipment and techniques to ensure successful water discovery and sustainable yield for residential, commercial, and community projects.',
    features: [
      'Advanced geophysical surveying',
      'Rotary and percussion drilling methods',
      ' experienced drilling teams',
      'Quality casing and screen installation',
      'Test pumping and yield analysis',
      'Full project documentation',
    ],
    processSteps: [
      { title: 'Geophysical Survey', description: 'Vertical Electrical Sounding (VES) and other methods to identify aquifer locations' },
      { title: 'Site Survey & Report', description: 'Detailed geological assessment and feasibility report' },
      { title: 'Permits & Mobilization', description: 'Obtaining drilling permits and equipment mobilization to site' },
      { title: 'Drilling Operations', description: 'Professional drilling using appropriate methods for site conditions' },
      { title: 'Well Development', description: 'Cleaning and developing borehole for optimal yield' },
      { title: 'Test Pumping', description: 'Comprehensive pumping tests to determine sustainable yield' },
      { title: 'Water Quality Testing', description: 'Laboratory analysis of water for potability and usage suitability' },
    ],
    featuredImage: '/images/hydrosolutions.jpg',
  },
  {
    title: 'Water Pump Installation & Mechanization',
    slug: 'water-pump-installation-mechanization',
    category: 'Hydro',
    shortDescription: 'Complete water extraction systems with solar or electric pumps.',
    longDescription: 'Professional pump installation services for boreholes, wells, and water storage systems. We supply and install submersible, surface, and solar pumps with appropriate controls and piping for reliable water delivery.',
    features: [
      'Solar-powered pump systems',
      'AC/DC submersible pumps',
      'Pump control panels',
      'Pressure tanks and systems',
      'Water treatment integration',
      'Ongoing maintenance support',
    ],
    processSteps: [
      { title: 'Pump Selection', description: 'Engineering of appropriate pump based on yield and head requirements' },
      { title: 'System Design', description: 'Complete mechanization design including piping and controls' },
      { title: 'Procurement', description: 'Supply of quality pumps and components' },
      { title: 'Installation', description: 'Professional installation and commissioning' },
      { title: 'Testing & Handover', description: 'System testing and client training' },
    ],
    featuredImage: '/images/hydrosolutions.jpg',
  },
  {
    title: 'Hydrogeological Surveying',
    slug: 'hydrogeological-surveying',
    category: 'Hydro',
    shortDescription: 'Scientific groundwater exploration using advanced geophysical methods.',
    longDescription: 'Expert hydrogeological services using modern geophysical techniques to locate groundwater resources. Our surveys significantly increase the success rate of borehole drilling by identifying optimal drilling locations.',
    features: [
      'Vertical Electrical Sounding (VES)',
      'Electromagnetic surveying',
      'Resistivity imaging',
      'Seismic refraction',
      'Data interpretation and reporting',
      'Drilling success guarantee',
    ],
    processSteps: [
      { title: 'Pre-Survey Consultation', description: 'Understanding client needs and site history' },
      { title: 'Field Survey', description: 'On-site geophysical data collection using appropriate methods' },
      { title: 'Data Processing', description: 'Analysis of survey data to identify aquifer zones' },
      { title: 'Report Preparation', description: 'Detailed report with recommended drilling locations and depths' },
      { title: 'Site Marking', description: 'Marking of optimal drilling points on client\'s property' },
    ],
    featuredImage: '/images/about.jpg',
  },
  {
    title: 'Water Infrastructure Development',
    slug: 'water-infrastructure-development',
    category: 'Hydro',
    shortDescription: 'Complete water systems from boreholes to storage and distribution.',
    longDescription: 'Full-service water infrastructure development including boreholes, storage tanks, treatment systems, and distribution networks. We deliver turnkey water solutions for communities, institutions, and commercial operations.',
    features: [
      'Complete system design and engineering',
      'Storage tank installation',
      'Water treatment systems',
      'Distribution network',
      'Automation and controls',
      'Project management from start to finish',
    ],
    processSteps: [
      { title: 'Requirements Assessment', description: 'Detailed analysis of water needs and usage patterns' },
      { title: 'System Design', description: 'Complete engineering design of water infrastructure' },
      { title: 'Construction & Installation', description: 'Execution of all civil works and equipment installation' },
      { title: 'Testing & Commissioning', description: 'System testing and performance validation' },
      { title: 'Training & Documentation', description: 'Operator training and as-built documentation' },
    ],
    featuredImage: '/images/hydrosolutions.jpg',
  },
  // Maintenance & Training
  {
    title: 'Solar System Maintenance & Support',
    slug: 'solar-system-maintenance-support',
    category: 'Maintenance',
    shortDescription: 'Ongoing maintenance and support for solar power systems.',
    longDescription: 'Comprehensive maintenance services to ensure your solar investment continues to perform at peak efficiency. Our support packages include regular inspections, performance monitoring, preventive maintenance, and rapid response repairs.',
    features: [
      'Regular system inspections',
      'Performance monitoring and reporting',
      'Preventive maintenance',
      'Rapid repair response',
      'Component warranty management',
      '24/7 emergency support available',
    ],
    processSteps: [
      { title: 'Service Agreement', description: 'Customized maintenance plan based on system size and requirements' },
      { title: 'Scheduled Inspections', description: 'Regular on-site visits for visual and performance checks' },
      { title: 'Performance Analysis', description: 'Remote monitoring and data analysis' },
      { title: 'Preventive Maintenance', description: 'Cleaning, tightening, and component checks' },
      { title: 'Repair & Replacement', description: 'Prompt repair of any identified issues' },
      { title: 'Reporting', description: 'Detailed service reports and performance summaries' },
    ],
    featuredImage: '/images/solarsolutions.jpg',
  },
  {
    title: 'Technical Training & Workshops',
    slug: 'technical-training-workshops',
    category: 'Training',
    shortDescription: 'Solar and water engineering training programs for professionals.',
    longDescription: 'Comprehensive training programs for engineers, technicians, and industry professionals. Our workshops cover solar PV design and installation, water system engineering, and best practices for renewable energy projects.',
    features: [
      'Hands-on practical training',
      'Certified instructors',
      'Industry-standard curriculum',
      'Customized programs',
      'Training materials and certificates',
      'Ongoing mentorship available',
    ],
    processSteps: [
      { title: 'Training Needs Assessment', description: 'Identification of participant skill levels and learning objectives' },
      { title: 'Curriculum Development', description: 'Customized training materials and agenda' },
      { title: 'Training Delivery', description: 'Interactive classroom and hands-on practical sessions' },
      { title: 'Assessment & Certification', description: 'Knowledge evaluation and certificate issuance' },
      { title: 'Follow-up Support', description: 'Post-training consultation and mentorship' },
    ],
    featuredImage: '/images/insights.jpg',
  },
];

// Helper functions
export function getServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter(service => service.category === category);
}

export function getFeaturedServices(): Service[] {
  // Return all services as they are all important
  return services;
}
