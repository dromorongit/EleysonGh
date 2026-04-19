import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Sun, Droplets, Zap, Users, Award, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Engineering the Future of Energy & Water"
        subtitle="Integrated Solutions"
        description="Leading provider of renewable energy and hydrogeological engineering services across Ghana and West Africa. Precision solar installations and advanced water infrastructure solutions."
        primaryCta={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryCta={{
          text: "View Our Work",
          href: "/projects"
        }}
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Company Credibility Strip */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">2011</div>
              <div className="text-slate-600">Founded</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Ghana & West Africa</div>
              <div className="text-slate-600">Service Region</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dual-expertise approach combining advanced renewable energy systems with specialized hydrogeological engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Solar Engineering"
              description="Comprehensive solar solutions from consultation to maintenance. Custom system design, professional installation, and ongoing support for residential, commercial, and industrial clients."
              icon={<Sun className="w-6 h-6" />}
              href="/services/solar"
              features={[
                "Custom system design",
                "Professional installation",
                "Energy audits & consultation",
                "Backup systems (inverters & batteries)"
              ]}
            />
            <ServiceCard
              title="Hydrogeological Engineering"
              description="Complete borehole lifecycle management from geophysical surveys to commissioning. Advanced drilling, testing, and mechanization services."
              icon={<Droplets className="w-6 h-6" />}
              href="/services/hydrological"
              features={[
                "Geophysical surveys",
                "Borehole drilling & construction",
                "Water testing & quality analysis",
                "Pump installation & maintenance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Eleyson */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Eleyson Ghana Limited?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">13+ Years Experience</h3>
              <p className="text-slate-600">Established expertise since 2011 with proven track record in complex engineering projects.</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Integrated Solutions</h3>
              <p className="text-slate-600">Dual expertise in renewable energy and water systems for comprehensive project delivery.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Nationwide Coverage</h3>
              <p className="text-slate-600">Serving Ghana nationwide and extending services across West African sub-region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our commitment to excellence in renewable energy and water infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Sample projects - in real app, fetch from database */}
            <ProjectCard
              title="Solar Installation for Accra Hospital"
              slug="solar-installation-accra-hospital"
              category="Solar Engineering"
              location="Accra, Ghana"
              summary="Installed a 50kW solar system for sustainable energy supply in a critical healthcare facility."
              featuredImage="/images/projects/hospital-solar.jpg"
              isFeatured={true}
            />
            <ProjectCard
              title="Borehole Drilling for Rural Community"
              slug="borehole-drilling-rural-community"
              category="Hydrogeological Engineering"
              location="Eastern Region, Ghana"
              summary="Drilled and equipped a deep borehole providing clean water for 500+ households."
              featuredImage="/images/projects/borehole.jpg"
              isFeatured={true}
            />
            <ProjectCard
              title="Commercial Solar Farm"
              slug="commercial-solar-farm"
              category="Solar Engineering"
              location="Tema, Ghana"
              summary="Large-scale solar installation for industrial complex reducing energy costs by 70%."
              featuredImage="/images/projects/solar-farm.jpg"
              isFeatured={false}
            />
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest insights on renewable energy and water infrastructure in Ghana
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-slate-900 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
