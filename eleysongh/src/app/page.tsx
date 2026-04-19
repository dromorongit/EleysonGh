import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Sun, Droplets, Zap, Users, Award, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

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
        showStats={true}
      />

      {/* Company Credibility Strip */}
      <section className="py-12 bg-gradient-to-r from-neutral-50 to-primary-50/30 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary-700 mb-2 group-hover:text-primary-800 transition-colors">2011</div>
              <div className="text-neutral-600 font-medium">Founded</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary-700 mb-2 group-hover:text-primary-800 transition-colors">500+</div>
              <div className="text-neutral-600 font-medium">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary-700 mb-2 group-hover:text-primary-800 transition-colors">Ghana & West Africa</div>
              <div className="text-neutral-600 font-medium">Service Region</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary-700 mb-2 group-hover:text-primary-800 transition-colors">24/7</div>
              <div className="text-neutral-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <CheckCircle size={16} />
              <span>Core Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Dual-Expertise Engineering Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Combining advanced renewable energy systems with specialized hydrogeological engineering for comprehensive infrastructure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ServiceCard
              title="Solar Engineering"
              description="Comprehensive solar solutions from consultation to maintenance. Custom system design, professional installation, and ongoing support for residential, commercial, and industrial clients."
              icon={<Sun className="w-6 h-6" />}
              href="/services/solar"
              category="Renewable Energy"
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
              category="Water Infrastructure"
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
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-40 h-40 bg-primary-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-secondary-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Why Choose Eleyson Ghana Limited?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Excellence through experience, innovation, and unwavering commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">13+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">13+ Years Experience</h3>
              <p className="text-neutral-600 leading-relaxed">Established expertise since 2011 with proven track record in complex engineering projects across Ghana and West Africa.</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Integrated Solutions</h3>
              <p className="text-neutral-600 leading-relaxed">Dual expertise in renewable energy and water systems for comprehensive, end-to-end project delivery.</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Nationwide Coverage</h3>
              <p className="text-neutral-600 leading-relaxed">Serving Ghana nationwide and extending premium engineering services across the West African sub-region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary-50 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award size={16} />
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Excellence in Action
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our commitment to engineering excellence in renewable energy and water infrastructure across Ghana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              className="btn-primary group text-lg px-8 py-4"
            >
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
            <span className="text-secondary-300 font-semibold uppercase tracking-wider text-sm">
              Stay Informed
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Engineering Insights & Updates
          </h2>
          <p className="text-xl text-neutral-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Get the latest insights on renewable energy, water infrastructure, and sustainable engineering solutions in Ghana
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap px-8 py-4"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-sm text-neutral-400 mt-6">
            Join 500+ professionals staying ahead in sustainable engineering
          </p>
        </div>
      </section>
    </div>
  );
}
