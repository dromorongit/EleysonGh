import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Sample project data - in real app, fetch from database
const projects = [
  {
    title: 'Solar Installation for Accra Hospital',
    slug: 'solar-installation-accra-hospital',
    category: 'Solar Engineering',
    location: 'Accra, Ghana',
    summary: 'Installed a 50kW solar system for sustainable energy supply in a critical healthcare facility, reducing energy costs by 70% and ensuring uninterrupted power.',
    challenge: 'Limited space and high energy demands in a medical facility requiring reliable backup power for critical medical equipment and emergency systems.',
    solution: 'Custom-designed rooftop solar panels with advanced battery storage system, automatic switching technology, and integrated monitoring solutions.',
    outcome: 'Reduced energy costs by 70%, ensured uninterrupted power supply for critical medical equipment, and improved facility resilience during grid outages.',
    featuredImage: '/images/projects/hospital-solar.jpg',
    gallery: ['/images/projects/hospital1.jpg', '/images/projects/hospital2.jpg', '/images/projects/hospital3.jpg'],
    isFeatured: true,
    published: true,
    completionDate: '2023-08-15',
    projectValue: '₵450,000',
    systemSize: '50kW',
    energySavings: '70%',
    paybackPeriod: '4.2 years'
  },
  {
    title: 'Borehole Drilling for Rural Community',
    slug: 'borehole-drilling-rural-community',
    category: 'Hydrogeological Engineering',
    location: 'Eastern Region, Ghana',
    summary: 'Drilled and equipped a deep borehole providing clean water access for 500+ households in a remote community.',
    challenge: 'Difficult geological conditions and remote location with limited infrastructure access, requiring sustainable water solution for agricultural and domestic use.',
    solution: 'Advanced geophysical survey followed by professional drilling operations, complete mechanization, high-capacity pump installation, and community training programs.',
    outcome: 'Provided sustainable water source for 500+ households, improved community health outcomes, and reduced water collection time from 4 hours to 15 minutes per day.',
    featuredImage: '/images/projects/borehole.jpg',
    gallery: ['/images/projects/borehole1.jpg', '/images/projects/borehole2.jpg', '/images/projects/borehole3.jpg'],
    isFeatured: true,
    published: true,
    completionDate: '2023-06-20',
    projectValue: '₵280,000',
    boreholeDepth: '85m',
    yieldRate: '25m³/hour',
    householdsServed: '520'
  },
  {
    title: 'Commercial Solar Farm Development',
    slug: 'commercial-solar-farm',
    category: 'Solar Engineering',
    location: 'Tema, Ghana',
    summary: 'Large-scale solar installation for industrial complex providing clean energy and significant cost savings.',
    challenge: 'High energy consumption in manufacturing facility requiring scalable renewable solution to reduce operational costs and carbon footprint.',
    solution: 'Designed and installed 100kW solar farm with advanced MPPT controllers, battery storage system, and integrated energy management platform.',
    outcome: 'Reduced energy costs by 65%, decreased carbon footprint by 120 tons CO2 annually, and improved energy security for manufacturing operations.',
    featuredImage: '/images/projects/solar-farm.jpg',
    gallery: ['/images/projects/solar-farm1.jpg', '/images/projects/solar-farm2.jpg'],
    isFeatured: false,
    published: true,
    completionDate: '2023-09-10',
    projectValue: '₵750,000',
    systemSize: '100kW',
    energySavings: '65%',
    co2Reduction: '120 tons/year'
  },
  {
    title: 'Solar-Powered Borehole System',
    slug: 'solar-powered-borehole-system',
    category: 'Integrated Solutions',
    location: 'Northern Region, Ghana',
    summary: 'Complete solar-powered water system combining borehole drilling with renewable energy pumping solution.',
    challenge: 'Remote location without grid electricity requiring off-grid water pumping solution for agricultural irrigation and community water supply.',
    solution: 'Integrated borehole drilling with solar photovoltaic panels, DC pump system, water storage solutions, and automated monitoring systems.',
    outcome: 'Delivered sustainable water access with zero operational costs, complete energy independence, and reliable water supply for irrigation and domestic use.',
    featuredImage: '/images/projects/solar-borehole.jpg',
    gallery: ['/images/projects/solar-borehole1.jpg', '/images/projects/solar-borehole2.jpg'],
    isFeatured: true,
    published: true,
    completionDate: '2023-07-05',
    projectValue: '₵320,000',
    boreholeDepth: '75m',
    solarCapacity: '15kW',
    dailyWaterOutput: '50m³'
  },
  {
    title: 'Government Office Complex Solar Installation',
    slug: 'government-office-solar',
    category: 'Solar Engineering',
    location: 'Accra, Ghana',
    summary: 'Comprehensive solar solution for government offices promoting sustainable energy in public sector.',
    challenge: 'Large facility with complex roof structure and high visibility requiring premium installation that serves as model for government sustainability initiatives.',
    solution: 'Custom solar array design optimized for roof structure, premium equipment selection, professional installation, and comprehensive monitoring system.',
    outcome: '50kW system reducing energy costs by 60%, serving as model for government sustainability programs, and demonstrating public sector renewable energy leadership.',
    featuredImage: '/images/projects/government.jpg',
    gallery: ['/images/projects/government1.jpg', '/images/projects/government2.jpg'],
    isFeatured: false,
    published: true,
    completionDate: '2023-10-18',
    projectValue: '₵580,000',
    systemSize: '50kW',
    energySavings: '60%',
    roiPeriod: '5.8 years'
  },
  {
    title: 'Agricultural Borehole Development',
    slug: 'agricultural-borehole',
    category: 'Hydrogeological Engineering',
    location: 'Ashanti Region, Ghana',
    summary: 'High-capacity borehole system designed for agricultural irrigation and community water supply.',
    challenge: 'Agricultural community requiring reliable water source for irrigation during dry seasons and domestic use for farming families.',
    solution: 'Deep borehole drilling with high-capacity pump system, irrigation infrastructure integration, and community management training programs.',
    outcome: 'Enhanced agricultural productivity with reliable irrigation, provided water security for 200+ farming families, and improved crop yields by 40%.',
    featuredImage: '/images/projects/agricultural.jpg',
    gallery: ['/images/projects/agricultural1.jpg', '/images/projects/agricultural2.jpg'],
    isFeatured: false,
    published: true,
    completionDate: '2023-05-12',
    projectValue: '₵195,000',
    boreholeDepth: '65m',
    irrigationArea: '50 hectares',
    yieldIncrease: '40%'
  }
];

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found - Eleyson Ghana Limited',
    };
  }

  return {
    title: `${project.title} - Eleyson Ghana Limited Project Case Study`,
    description: project.summary,
    keywords: `${project.category}, ${project.location}, engineering project, case study, Ghana`,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(p => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-slate-500 hover:text-slate-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-slate-400">/</span>
              </li>
              <li>
                <Link href="/projects" className="text-slate-500 hover:text-slate-700">
                  Projects
                </Link>
              </li>
              <li>
                <span className="text-slate-400">/</span>
              </li>
              <li>
                <span className="text-slate-900 font-medium">{project.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                {project.isFeatured && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center">
                    <Award size={14} className="mr-1" />
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {project.title}
              </h1>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center text-slate-600">
                  <MapPin size={18} className="mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar size={18} className="mr-2" />
                  {new Date(project.completionDate).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long'
                  })}
                </div>
              </div>
              <p className="text-xl text-slate-600 mb-8">
                {project.summary}
              </p>
            </div>
            <div>
              <img
                src={project.featuredImage}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Challenge</h2>
                <p className="text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
                <p className="text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Outcome</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.outcome}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project).map(([key, value]) => {
                    if (['systemSize', 'energySavings', 'boreholeDepth', 'yieldRate', 'householdsServed', 'co2Reduction', 'irrigationArea', 'yieldIncrease', 'dailyWaterOutput', 'roiPeriod', 'paybackPeriod', 'projectValue'].includes(key)) {
                      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                      return (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-amber-600">{value}</div>
                          <div className="text-sm text-slate-600">{label}</div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Stats */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Category:</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Location:</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Completed:</span>
                    <span className="font-medium">
                      {new Date(project.completionDate).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'short'
                      })}
                    </span>
                  </div>
                  {project.projectValue && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Value:</span>
                      <span className="font-medium">{project.projectValue}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    {relatedProjects.map((relatedProject) => (
                      <Link
                        key={relatedProject.slug}
                        href={`/projects/${relatedProject.slug}`}
                        className="block group"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={relatedProject.featuredImage}
                            alt={relatedProject.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                              {relatedProject.title}
                            </h4>
                            <p className="text-sm text-slate-600">{relatedProject.location}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-slate-900 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-slate-300 mb-6">
                  Ready to achieve similar results? Let's discuss your engineering needs.
                </p>
                <Link
                  href="/request-quote"
                  className="inline-flex items-center bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors w-full justify-center"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}