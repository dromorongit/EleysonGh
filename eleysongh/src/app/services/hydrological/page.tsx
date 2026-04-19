import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { Droplets, MapPin, FileText, Drill, Cog, Wrench, TestTube, CheckCircle, Truck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hydrogeological Engineering Services - Eleyson Ghana Limited | Borehole Drilling & Water Infrastructure',
  description: 'Professional hydrogeological services including geophysical surveys, borehole drilling, water testing, and pump installation. Complete water infrastructure solutions across Ghana.',
  keywords: 'hydrogeological engineering, borehole drilling, water infrastructure, geophysical survey, pump installation, water testing, Ghana',
};

export default function HydrologicalServicesPage() {
  const services = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Geophysical Survey',
      description: 'Advanced geophysical techniques to identify optimal borehole locations and assess groundwater potential.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Site Survey & Assessment',
      description: 'Comprehensive site evaluation including geological mapping and hydrogeological analysis.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Detailed Report Writing',
      description: 'Professional engineering reports with findings, recommendations, and technical specifications.'
    },
    {
      icon: <Drill className="w-6 h-6" />,
      title: 'Borehole Drilling',
      description: 'Professional drilling services using modern equipment and engineering best practices.'
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'Mechanization',
      description: 'Complete borehole mechanization including casing, screens, and gravel packing.'
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Water Sample Testing',
      description: 'Comprehensive water quality analysis and testing services.'
    }
  ];

  const process = [
    {
      phase: 'Pre-Construction',
      steps: [
        'Site selection and accessibility assessment',
        'Geophysical survey and data analysis',
        'Hydrogeological evaluation',
        'Engineering design and specifications',
        'Permitting and regulatory compliance'
      ]
    },
    {
      phase: 'Construction Phase',
      steps: [
        'Mobilization of drilling equipment',
        'Drilling operations and monitoring',
        'Geological logging and sampling',
        'Casing and screen installation',
        'Gravel packing and development'
      ]
    },
    {
      phase: 'Testing & Evaluation',
      steps: [
        'Pump installation testing',
        'Water quality sampling and analysis',
        'Yield and performance testing',
        'Aquifer parameter determination',
        'System optimization'
      ]
    },
    {
      phase: 'Commissioning & Handover',
      steps: [
        'Final system testing',
        'User training and operation manual',
        'Maintenance schedule establishment',
        'Warranty and support agreement',
        'Project documentation and handover'
      ]
    }
  ];

  const pumpTypes = [
    {
      type: 'DC Pumps',
      description: 'Direct current pumps for solar-powered applications',
      applications: ['Solar borehole systems', 'Off-grid installations', 'Remote water supply']
    },
    {
      type: 'AC Pumps',
      description: 'Alternating current pumps for grid-connected systems',
      applications: ['Grid-powered boreholes', 'Backup systems', 'High-capacity applications']
    },
    {
      type: 'Solar-Powered Systems',
      description: 'Integrated solar pumping solutions',
      applications: ['Sustainable water supply', 'Remote communities', 'Agricultural applications']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Hydrogeological Engineering Services"
        subtitle="Water Infrastructure Solutions"
        description="Complete borehole drilling and water infrastructure services. From geophysical surveys to commissioning, we deliver sustainable water access solutions with advanced engineering expertise."
        primaryCta={{
          text: "Get Borehole Quote",
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
              Complete Hydrogeological Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end borehole engineering from site assessment to operational handover
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Borehole Lifecycle */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Borehole Construction Lifecycle
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Systematic approach ensuring quality, safety, and optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  {phase.phase}
                </h3>
                <ul className="space-y-2">
                  {phase.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pump Installation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pump Installation & Maintenance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional pump systems designed for reliability and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {pumpTypes.map((pump, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{pump.type}</h3>
                <p className="text-slate-600 mb-4">{pump.description}</p>
                <h4 className="font-semibold text-slate-900 mb-2">Applications:</h4>
                <ul className="space-y-1">
                  {pump.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Solar-Powered Pump Solutions</h3>
                <p className="text-slate-600 mb-4">
                  Integrated solar pumping systems combining photovoltaic panels, controllers, and DC pumps for sustainable water supply in remote locations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Zero operational costs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Environmentally sustainable</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Reliable in remote areas</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-12 h-12 text-white" />
                </div>
                <p className="text-slate-600">
                  Our solar-powered systems deliver clean, reliable water without ongoing fuel costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Civil Works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Civil Works & Infrastructure
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Complete civil engineering services for borehole infrastructure including pump houses, electrical installations, and access roads.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-slate-600">Pump house construction</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-slate-600">Electrical installations</span>
                </div>
                <div className="flex items-center">
                  <Cog className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-slate-600">Access road development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-slate-600">Site fencing and security</span>
                </div>
              </div>
              <Link
                href="/request-quote"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Borehole Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Project Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Sustainable water access for communities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Professional engineering standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Advanced geophysical survey techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-slate-600">Complete mechanization and testing</span>
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
            Need Water Infrastructure Solutions?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Trust Eleyson Ghana Limited for professional hydrogeological engineering services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Borehole Quote
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