import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { Sun, Zap, Settings, Wrench, Users, Lightbulb, Truck, Battery, Home, Building2, Factory, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Engineering Services - Eleyson Ghana Limited | Professional Solar Installation',
  description: 'Expert solar engineering services including system design, installation, maintenance, and energy audits. Residential, commercial, and industrial solar solutions across Ghana.',
  keywords: 'solar engineering, solar installation, renewable energy, solar panels, inverters, batteries, energy audit, Ghana',
};

export default function SolarServicesPage() {
  const services = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Custom System Design',
      description: 'Tailored solar system designs based on your energy needs, location, and budget requirements.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Professional Installation',
      description: 'Expert installation by certified engineers ensuring optimal performance and safety standards.'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Support & Maintenance',
      description: 'Ongoing maintenance services and technical support to maximize system lifespan and efficiency.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Technical Consultation',
      description: 'Expert advice on solar technology, system sizing, and integration with existing infrastructure.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Procurement Services',
      description: 'Sourcing and supply of high-quality solar components and backup power systems.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Training & Workshops',
      description: 'Educational programs for system owners and maintenance personnel.'
    }
  ];

  const applications = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residential Solutions',
      description: 'Home solar systems for energy independence and cost savings.',
      benefits: ['Reduced electricity bills', 'Energy independence', 'Environmental impact', 'Property value increase']
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Commercial Solutions',
      description: 'Business solar installations for operational cost reduction.',
      benefits: ['Lower operating costs', 'Corporate sustainability', 'Tax incentives', 'Brand enhancement']
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Industrial Solutions',
      description: 'Large-scale solar installations for manufacturing and industry.',
      benefits: ['Significant cost savings', 'Reliable power supply', 'Scalable solutions', 'Energy security']
    }
  ];

  const process = [
    { step: '01', title: 'Site Assessment', description: 'Evaluate location, energy needs, and system requirements' },
    { step: '02', title: 'System Design', description: 'Create customized solar system design and specifications' },
    { step: '03', title: 'Procurement', description: 'Source high-quality components and materials' },
    { step: '04', title: 'Installation', description: 'Professional installation by certified technicians' },
    { step: '05', title: 'Testing & Commissioning', description: 'System testing and performance verification' },
    { step: '06', title: 'Training & Handover', description: 'User training and system handover' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Solar Engineering Services"
        subtitle="Renewable Energy Solutions"
        description="Professional solar system design, installation, and maintenance services. Harness the power of the sun with expert engineering and reliable technology."
        primaryCta={{
          text: "Get Solar Quote",
          href: "/request-quote"
        }}
        secondaryCta={{
          text: "View Projects",
          href: "/projects"
        }}
        height="medium"
      />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Solar Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end solar engineering solutions from consultation to commissioning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Solar Solutions for Every Sector
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored solar solutions designed for residential, commercial, and industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-amber-500 mb-4">
                  {app.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{app.title}</h3>
                <p className="text-slate-600 mb-6">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Solar Project Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Systematic approach ensuring quality, efficiency, and optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-900 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backup Systems */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Backup Power Systems
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Complete backup solutions including high-capacity inverters and lithium-ion battery storage systems to ensure uninterrupted power supply.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Battery className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Lithium-ion battery technology</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">High-efficiency inverters</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Automatic switching systems</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Professional installation and maintenance</span>
                </div>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
              >
                View Solar Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Backup System Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Uninterrupted power during outages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Extended system lifespan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Energy storage for off-grid applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Reduced reliance on grid power</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Transform your energy future with professional solar engineering services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Get Solar Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}