// Local data store for products
// This replaces the MongoDB Product collection

export interface Product {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  specifications: { key: string; value: string }[];
  benefits: string[];
  useCases: string[];
  images: string[];
  isFeatured: boolean;
  priceOptional?: string;
}

export const products: Product[] = [
  {
    name: 'High-Efficiency Solar Panel 400W',
    slug: 'solar-panel-400w',
    category: 'Solar Panels',
    shortDescription: 'High-efficiency monocrystalline solar panel for commercial and residential use.',
    longDescription: 'Premium 400W monocrystalline solar panel with industry-leading efficiency and durability. Engineered for optimal performance in Ghana\'s tropical climate with excellent temperature coefficient and resistance to humidity.',
    specifications: [
      { key: 'Power Output', value: '400W' },
      { key: 'Efficiency', value: '21.2%' },
      { key: 'Cell Type', value: 'Monocrystalline PERC' },
      { key: 'Warranty', value: '25 years' },
      { key: 'Dimensions', value: '1,758 x 1,038 x 30 mm' },
    ],
    benefits: [
      'High efficiency maximizes power generation',
      'Excellent performance in high temperatures',
      'Low degradation rate over time',
      'Minimal maintenance requirements',
      '25-year linear power warranty',
    ],
    useCases: ['Residential rooftops', 'Commercial installations', 'Industrial solar farms', 'Ground-mounted systems'],
    images: ['/images/solarsolutions.jpg', '/images/products.jpg'],
    isFeatured: true,
    priceOptional: 'Contact for pricing',
  },
  {
    name: 'Hybrid Solar Inverter 5kW',
    slug: 'hybrid-solar-inverter-5kw',
    category: 'Inverters',
    shortDescription: 'Advanced hybrid inverter with MPPT controller and battery compatibility.',
    longDescription: 'High-performance hybrid inverter that seamlessly integrates solar power, battery storage, and grid electricity. Features intelligent energy management and automatic switching for uninterrupted power supply.',
    specifications: [
      { key: 'Power Rating', value: '5kW' },
      { key: 'MPPT Controller', value: '80A Dual' },
      { key: 'Battery Compatibility', value: 'Lithium & Lead-Acid' },
      { key: 'Grid Support', value: 'Single Phase 230V' },
      { key: 'Efficiency', value: '97%' },
    ],
    benefits: [
      'Hybrid functionality for maximum flexibility',
      'Built-in MPPT for optimal solar harvesting',
      'Seamless grid-to-battery switching',
      'Remote monitoring capability',
      'Grid support and feed-in functionality',
    ],
    useCases: ['Hybrid solar systems', 'Off-grid installations', 'Backup power systems', 'Grid-tie with storage'],
    images: ['/images/products.jpg', '/images/solarsolutions.jpg'],
    isFeatured: true,
    priceOptional: 'Contact for pricing',
  },
  {
    name: 'Lithium Battery 10kWh',
    slug: 'lithium-battery-10kwh',
    category: 'Batteries',
    shortDescription: 'High-capacity lithium-ion battery storage for solar power systems.',
    longDescription: 'Advanced lithium iron phosphate (LiFePO4) battery offering exceptional cycle life, safety, and performance. Perfect for residential and commercial energy storage applications.',
    specifications: [
      { key: 'Capacity', value: '10kWh' },
      { key: 'Chemistry', value: 'LiFePO4' },
      { key: 'Cycle Life', value: '6,000+ cycles' },
      { key: 'Warranty', value: '10 years' },
      { key: 'Depth of Discharge', value: '90%' },
    ],
    benefits: [
      'Long cycle life reduces replacement costs',
      'Enhanced safety with stable chemistry',
      'High depth of discharge for usable capacity',
      'Compact and modular design',
      'Built-in battery management system',
    ],
    useCases: ['Home energy storage', 'Commercial backup', 'Off-grid systems', 'Peak shaving applications'],
    images: ['/images/products.jpg', '/images/homepage.jpg'],
    isFeatured: false,
    priceOptional: 'Contact for pricing',
  },
  {
    name: 'Solar Water Pump Controller 3HP',
    slug: 'solar-water-pump-controller-3hp',
    category: 'Water Pumps',
    shortDescription: 'Solar-powered water pump controller for borehole and irrigation applications.',
    longDescription: 'Robust solar pump controller designed for reliable water extraction in off-grid locations. Features MPPT technology and protection against common electrical faults.',
    specifications: [
      { key: 'Power Rating', value: '3HP (2.2kW)' },
      { key: 'MPPT Technology', value: 'Yes' },
      { key: 'Max Head', value: '100m' },
      { key: 'Flow Rate', value: '5,000 L/hour' },
      { key: 'Input', value: 'DC 48V-150V' },
    ],
    benefits: [
      'No grid electricity required',
      'Low operating and maintenance costs',
      'Automatic operation based on sunlight',
      'Built-in protection features',
      'Suitable for deep boreholes',
    ],
    useCases: ['Borehole water extraction', 'Irrigation systems', 'Community water supply', 'Agricultural applications'],
    images: ['/images/hydrosolutions.jpg', '/images/products.jpg'],
    isFeatured: false,
    priceOptional: 'Contact for pricing',
  },
  {
    name: 'Commercial Solar Inverter 10kW',
    slug: 'commercial-solar-inverter-10kw',
    category: 'Inverters',
    shortDescription: 'Three-phase hybrid inverter for commercial solar installations.',
    longDescription: 'Powerful three-phase hybrid inverter designed for commercial and industrial solar projects. Supports both grid-tie and off-grid operation with advanced energy management features.',
    specifications: [
      { key: 'Power Rating', value: '10kW' },
      { key: 'Phase', value: 'Three Phase 380V' },
      { key: 'MPPT Controller', value: '2x 80A' },
      { key: 'Battery Support', value: 'Yes' },
      { key: 'Efficiency', value: '98%' },
    ],
    benefits: [
      'Three-phase output for commercial loads',
      'Dual MPPT for panel configuration flexibility',
      'Grid support and black start capability',
      'Scalable parallel operation',
      'Comprehensive monitoring interface',
    ],
    useCases: ['Commercial buildings', 'Industrial facilities', 'Large residential complexes', 'Agricultural enterprises'],
    images: ['/images/solarsolutions.jpg', '/images/projects.jpg'],
    isFeatured: false,
    priceOptional: 'Contact for pricing',
  },
  {
    name: 'Solar Street Light 100W',
    slug: 'solar-street-light-100w',
    category: 'Lighting',
    shortDescription: 'All-in-one solar street light with integrated panel and battery.',
    longDescription: 'Complete solar street lighting solution with integrated solar panel, lithium battery, and LED fixture. Perfect for pathways, roads, and perimeter lighting.',
    specifications: [
      { key: 'LED Power', value: '100W' },
      { key: 'Solar Panel', value: '100W integrated' },
      { key: 'Battery', value: '12.8V 200Ah' },
      { key: 'Lighting Duration', value: '12-16 hours' },
      { key: 'PIR Sensor', value: 'Yes' },
    ],
    benefits: [
      'No wiring or grid connection needed',
      'Automatic dusk-to-dawn operation',
      'Motion sensor for energy savings',
      'Weatherproof design (IP65)',
      'Easy installation and maintenance',
    ],
    useCases: ['Road lighting', 'Park lighting', 'Perimeter security', 'Parking areas'],
    images: ['/images/products.jpg', '/images/homepage.jpg'],
    isFeatured: false,
    priceOptional: 'Contact for pricing',
  },
];

// Helper functions
export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
