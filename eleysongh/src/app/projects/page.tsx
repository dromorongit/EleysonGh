import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { Filter, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Projects - Eleyson Ghana Limited | Solar & Borehole Engineering Case Studies',
  description: 'Explore our successful renewable energy and hydrogeological engineering projects across Ghana. Solar installations, borehole drilling, and water infrastructure solutions.',
  keywords: 'projects, case studies, solar installations, borehole drilling, engineering projects, Ghana, renewable energy',
};

export default function ProjectsPage() {
  // Sample projects - in real app, fetch from database
  const projects = [
    {
      title: 'Solar Installation for Accra Hospital',
      slug: 'solar-installation-accra-hospital',
      category: 'Solar Engineering',
      location: 'Accra, Ghana',
      summary: 'Installed a 50kW solar system for sustainable energy supply in a critical healthcare facility, reducing energy costs by 70% and ensuring uninterrupted power.',
      challenge: 'Limited space and high energy demands in a medical facility requiring reliable backup power.',
      solution: 'Custom-designed rooftop solar panels with battery storage and automatic switching systems.',
      outcome: 'Reduced energy costs by 70%, ensured uninterrupted power supply, and improved facility resilience.',
      featuredImage: '/images/projects/hospital-solar.jpg',
      gallery: ['/images/projects/hospital1.jpg', '/images/projects/hospital2.jpg', '/images/projects/hospital3.jpg'],
      isFeatured: true,
      published: true,
    },
    {
      title: 'Borehole Drilling for Rural Community',
      slug: 'borehole-drilling-rural-community',
      category: 'Hydrogeological Engineering',
      location: 'Eastern Region, Ghana',
      summary: 'Drilled and equipped a deep borehole providing clean water access for 500+ households in a remote community.',
      challenge: 'Difficult geological conditions and remote location with limited infrastructure access.',
      solution: 'Advanced geophysical survey followed by professional drilling, mechanization, and pump installation.',
      outcome: 'Provided sustainable water source for 500+ households, improved community health, and reduced water collection time.',
      featuredImage: '/images/projects/borehole.jpg',
      gallery: ['/images/projects/borehole1.jpg', '/images/projects/borehole2.jpg', '/images/projects/borehole3.jpg'],
      isFeatured: true,
      published: true,
    },
    {
      title: 'Commercial Solar Farm Development',
      slug: 'commercial-solar-farm',
      category: 'Solar Engineering',
      location: 'Tema, Ghana',
      summary: 'Large-scale solar installation for industrial complex providing clean energy and significant cost savings.',
      challenge: 'High energy consumption in manufacturing facility requiring scalable renewable solution.',
      solution: 'Designed and installed 100kW solar farm with advanced MPPT controllers and battery storage.',
      outcome: 'Reduced energy costs by 65%, decreased carbon footprint, and improved energy security.',
      featuredImage: '/images/projects/solar-farm.jpg',
      gallery: ['/images/projects/solar-farm1.jpg', '/images/projects/solar-farm2.jpg'],
      isFeatured: false,
      published: true,
    },
    {
      title: 'Solar-Powered Borehole System',
      slug: 'solar-powered-borehole-system',
      category: 'Integrated Solutions',
      location: 'Northern Region, Ghana',
      summary: 'Complete solar-powered water system combining borehole drilling with renewable energy pumping solution.',
      challenge: 'Remote location without grid electricity requiring off-grid water pumping solution.',
      solution: 'Integrated borehole drilling with solar panels, DC pump system, and water storage solutions.',
      outcome: 'Delivered sustainable water access with zero operational costs and complete energy independence.',
      featuredImage: '/images/projects/solar-borehole.jpg',
      gallery: ['/images/projects/solar-borehole1.jpg', '/images/projects/solar-borehole2.jpg'],
      isFeatured: true,
      published: true,
    },
    {
      title: 'Government Office Complex Solar Installation',
      slug: 'government-office-solar',
      category: 'Solar Engineering',
      location: 'Accra, Ghana',
      summary: 'Comprehensive solar solution for government offices promoting sustainable energy in public sector.',
      challenge: 'Large facility with complex roof structure and high visibility requiring premium installation.',
      solution: 'Custom solar array design, premium equipment selection, and professional installation.',
      outcome: '50kW system reducing energy costs by 60% and serving as model for government sustainability.',
      featuredImage: '/images/projects/government.jpg',
      gallery: ['/images/projects/government1.jpg', '/images/projects/government2.jpg'],
      isFeatured: false,
      published: true,
    },
    {
      title: 'Agricultural Borehole Development',
      slug: 'agricultural-borehole',
      category: 'Hydrogeological Engineering',
      location: 'Ashanti Region, Ghana',
      summary: 'High-capacity borehole system designed for agricultural irrigation and community water supply.',
      challenge: 'Agricultural community requiring reliable water source for irrigation and domestic use.',
      solution: 'Deep borehole drilling, high-capacity pump installation, and irrigation system integration.',
      outcome: 'Enhanced agricultural productivity and provided reliable water for 200+ farming families.',
      featuredImage: '/images/projects/agricultural.jpg',
      gallery: ['/images/projects/agricultural1.jpg', '/images/projects/agricultural2.jpg'],
      isFeatured: false,
      published: true,
    }
  ];

  const categories = ['All', 'Solar Engineering', 'Hydrogeological Engineering', 'Integrated Solutions'];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Engineering Projects"
        subtitle="Success Stories"
        description="Discover our portfolio of successful renewable energy and hydrogeological engineering projects across Ghana. Each project demonstrates our commitment to excellence and sustainable solutions."
        primaryCta={{
          text: "Start Your Project",
          href: "/request-quote"
        }}
        secondaryCta={{
          text: "View Services",
          href: "/services"
        }}
        height="medium"
      />

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our expertise in delivering complex engineering solutions with measurable results
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 rounded-full transition-colors flex items-center gap-2"
              >
                <Filter size={16} />
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                slug={project.slug}
                category={project.category}
                location={project.location}
                summary={project.summary}
                featuredImage={project.featuredImage}
                isFeatured={project.isFeatured}
              />
            ))}
          </div>

          {/* Load More / Pagination would go here */}
          <div className="text-center">
            <p className="text-slate-600 mb-6">Showing 6 of 25+ projects</p>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg transition-colors">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Project Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Diverse engineering solutions across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Solar Engineering</h3>
              <p className="text-slate-600 mb-6">
                Renewable energy installations from residential rooftops to large-scale solar farms, delivering clean power and cost savings.
              </p>
              <Link
                href="/services/solar"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
              >
                Explore Solar Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Hydrogeological Engineering</h3>
              <p className="text-slate-600 mb-6">
                Complete borehole solutions from geophysical surveys to operational systems, providing sustainable water access.
              </p>
              <Link
                href="/services/hydrological"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Explore Borehole Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrated Solutions</h3>
              <p className="text-slate-600 mb-6">
                Combined energy and water systems, including solar-powered boreholes and comprehensive infrastructure solutions.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
              >
                Explore Integrated Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Engineering Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our portfolio of successful projects. Let's discuss your engineering needs and deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Request Project Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}