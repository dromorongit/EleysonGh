import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { Award, Users, MapPin, Target, Eye, Heart, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Eleyson Ghana Limited | Leading Engineering Solutions',
  description: 'Learn about Eleyson Ghana Limited, founded in 2011. Discover our mission to deliver world-class renewable energy and hydrogeological solutions through technical precision and sustainable innovation.',
  keywords: 'Eleyson Ghana Limited, about us, renewable energy, hydrogeological engineering, Ghana, West Africa',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Eleyson Ghana Limited"
        subtitle="Excellence in Engineering Since 2011"
        description="Leading provider of integrated renewable energy and hydrogeological engineering solutions across Ghana and West Africa."
        height="medium"
      />

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Engineering the Future of Energy & Water
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Eleyson Ghana Limited was established in 2011 with a vision to become the leading provider of integrated renewable energy and hydrogeological engineering services in West Africa. Our dual-expertise approach combines advanced renewable energy systems with specialized hydrogeological engineering, backed by over a decade of operational experience and professional engineering leadership.
              </p>
              <p className="text-lg text-slate-600">
                We serve homeowners, businesses, government agencies, NGOs, and industrial clients across Ghana and the broader West African sub-region, delivering world-class solutions through technical precision and sustainable innovation.
              </p>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">13+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                  <div className="text-slate-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600">
                To deliver world-class renewable energy and hydrogeological solutions through technical precision and sustainable innovation. We are committed to providing integrated engineering services that meet the highest standards of quality, safety, and environmental responsibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600">
                To be the leading provider of integrated renewable energy and hydrogeological engineering services in West Africa. We envision a future where sustainable energy and water solutions power communities and drive economic development across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Makes Eleyson Unique
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our dual-expertise approach sets us apart in the engineering landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrated Expertise</h3>
              <p className="text-slate-600">
                Combining renewable energy and hydrogeological engineering for comprehensive project delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Quality Assurance</h3>
              <p className="text-slate-600">
                Rigorous quality control and professional engineering standards in every project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Client-Centric Approach</h3>
              <p className="text-slate-600">
                Personalized solutions tailored to meet the unique needs of each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Regions Served */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industries & Regions We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Target Industries</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Residential & Luxury Homeowners</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Commercial & Business Sectors</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Government Agencies</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Non-Governmental Organizations (NGOs)</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Industrial Clients</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Regions</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Nationwide Coverage in Ghana</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">West African Sub-Region</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                  <span className="text-slate-600">Cross-Border Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trust, Quality & Reliability
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building lasting partnerships through proven expertise and unwavering commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">13+ Years</h3>
              <p className="text-slate-600">Proven track record of successful project delivery</p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Certified Engineers</h3>
              <p className="text-slate-600">Professional engineering standards and certifications</p>
            </div>

            <div className="text-center">
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Quality Assurance</h3>
              <p className="text-slate-600">Rigorous testing and quality control processes</p>
            </div>

            <div className="text-center">
              <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Client Satisfaction</h3>
              <p className="text-slate-600">100% client satisfaction with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how Eleyson Ghana Limited can help you achieve your energy and water infrastructure goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}