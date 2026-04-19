import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Sun, Droplets, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Eleyson Ghana Limited | Solar & Hydrogeological Engineering',
  description: 'Comprehensive engineering services including solar energy solutions and hydrogeological borehole drilling. Professional installation, consultation, and maintenance across Ghana.',
  keywords: 'solar engineering, hydrogeological services, borehole drilling, renewable energy, water infrastructure, Ghana',
};

export default function ServicesPage() {
  const solarServices = [
    'Custom System Design & Consultation',
    'Professional Installation & Commissioning',
    'Energy Audits & System Optimization',
    'Maintenance & Support Services',
    'Backup Systems (Inverters & Batteries)',
    'Training & Technical Workshops',
    'Procurement & Supply Chain Management',
    'Residential & Commercial Solutions',
    'Industrial-Scale Installations'
  ];

  const hydrologicalServices = [
    'Geophysical Surveys & Site Assessment',
    'Detailed Engineering Reports',
    'Borehole Drilling & Construction',
    'Pre-construction Planning',
    'Development & Testing Phases',
    'Mechanization & Civil Works',
    'Water Sample Testing & Analysis',
    'Commissioning & Handover',
    'Pump Installation & Maintenance',
    'Solar-Powered Pumping Solutions'
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Comprehensive Engineering Services"
        subtitle="Integrated Solutions"
        description="From renewable energy systems to advanced water infrastructure, we deliver complete engineering solutions with technical precision and sustainable innovation."
        primaryCta={{
          text: "Request Consultation",
          href: "/request-quote"
        }}
        height="medium"
      />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dual-expertise approach combining renewable energy and hydrogeological engineering for comprehensive project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ServiceCard
              title="Solar Engineering Services"
              description="Complete solar energy solutions from initial consultation to long-term maintenance. We design, install, and support solar systems for residential, commercial, and industrial applications across Ghana."
              icon={<Sun className="w-6 h-6" />}
              href="/services/solar"
              features={[
                'Custom system design',
                'Professional installation',
                'Energy audits & optimization',
                'Maintenance & support'
              ]}
            />
            <ServiceCard
              title="Hydrogeological Engineering Services"
              description="Advanced borehole drilling and water infrastructure solutions. From geophysical surveys to complete mechanization, we deliver sustainable water access solutions for communities and industries."
              icon={<Droplets className="w-6 h-6" />}
              href="/services/hydrological"
              features={[
                'Geophysical surveys',
                'Borehole drilling',
                'Water testing & analysis',
                'Pump installation'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Solar Services Detail */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Solar Engineering Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our solar engineering services provide complete renewable energy solutions tailored to Ghana's unique energy needs. From initial site assessment to ongoing system optimization, we ensure maximum efficiency and reliability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {solarServices.slice(0, 6).map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-600">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/solar"
                className="inline-flex items-center bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
              >
                Explore Solar Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Solar Service Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Reduce energy costs by up to 70%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Environmentally sustainable energy source</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Reliable power supply with battery backup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Professional installation and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hydrological Services Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hydrogeological Service Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Sustainable water access solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Advanced geophysical survey techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Professional drilling and testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Complete mechanization and maintenance</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Hydrogeological Engineering Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our hydrogeological services cover the complete borehole lifecycle, from initial geophysical surveys to final commissioning. We deliver reliable water infrastructure solutions using advanced technology and engineering expertise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {hydrologicalServices.slice(0, 6).map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-600">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/hydrological"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Hydrological Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Eleyson Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the difference of working with Ghana's leading integrated engineering firm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrated Approach</h3>
              <p className="text-slate-300">
                Single point of contact for both energy and water infrastructure needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
              <p className="text-slate-300">
                Professional engineering standards with certified expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-16 h-16 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">End-to-End Support</h3>
              <p className="text-slate-300">
                Complete project lifecycle management from planning to maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Contact us today for a comprehensive consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}