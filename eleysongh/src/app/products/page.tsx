import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Products & Equipment - Eleyson Ghana Limited | Solar Panels, Inverters, Batteries',
  description: 'Premium solar energy products including panels, inverters, batteries, and backup systems. Professional consultation and installation services across Ghana.',
  keywords: 'solar panels, solar inverters, lithium batteries, solar equipment, renewable energy products, Ghana',
};

export default function ProductsPage() {
  // Sample products - in real app, fetch from database
  const products = [
    {
      name: 'Monocrystalline Solar Panel 300W',
      slug: 'monocrystalline-solar-panel-300w',
      category: 'Solar Panels',
      shortDescription: 'High-efficiency monocrystalline solar panel with 25-year performance warranty. Perfect for residential and commercial installations.',
      image: '/images/products/solar-panel.jpg',
      isFeatured: true,
    },
    {
      name: 'Solar Inverter 5kW Hybrid',
      slug: 'solar-inverter-5kw-hybrid',
      category: 'Inverters',
      shortDescription: 'Advanced hybrid inverter supporting both grid-tied and off-grid operation with MPPT charge controller.',
      image: '/images/products/inverter.jpg',
      isFeatured: true,
    },
    {
      name: 'Lithium Battery 10kWh',
      slug: 'lithium-battery-10kwh',
      category: 'Batteries',
      shortDescription: 'High-capacity lithium-ion battery storage system with 10-year warranty for reliable energy storage.',
      image: '/images/products/battery.jpg',
      isFeatured: true,
    },
    {
      name: 'Solar Charge Controller 60A MPPT',
      slug: 'solar-charge-controller-60a-mppt',
      category: 'Charge Controllers',
      shortDescription: 'Maximum Power Point Tracking charge controller for optimal solar energy harvesting.',
      image: '/images/products/controller.jpg',
      isFeatured: false,
    },
    {
      name: 'Solar Panel Mounting System',
      slug: 'solar-panel-mounting-system',
      category: 'Mounting Systems',
      shortDescription: 'Durable aluminum mounting system designed for various roof types and ground installations.',
      image: '/images/products/mounting.jpg',
      isFeatured: false,
    },
    {
      name: 'Solar Cable & Connectors',
      slug: 'solar-cable-connectors',
      category: 'Accessories',
      shortDescription: 'High-quality solar cables, MC4 connectors, and junction boxes for safe and reliable connections.',
      image: '/images/products/cables.jpg',
      isFeatured: false,
    }
  ];

  const categories = [
    { name: 'Solar Panels', count: 12, icon: '☀️' },
    { name: 'Inverters', count: 8, icon: '⚡' },
    { name: 'Batteries', count: 6, icon: '🔋' },
    { name: 'Charge Controllers', count: 5, icon: '🎛️' },
    { name: 'Mounting Systems', count: 4, icon: '🏗️' },
    { name: 'Accessories', count: 15, icon: '🔧' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Solar Energy Products"
        subtitle="Premium Equipment & Systems"
        description="High-quality solar panels, inverters, batteries, and complete system components. Professional consultation and custom solutions for your renewable energy needs."
        primaryCta={{
          text: "Get Product Quote",
          href: "/request-quote"
        }}
        secondaryCta={{
          text: "Contact Sales",
          href: "/contact"
        }}
        height="medium"
      />

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive range of solar energy products and system components
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg text-center hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                <p className="text-sm text-slate-600">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Premium solar equipment and systems for reliable renewable energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                slug={product.slug}
                category={product.category}
                shortDescription={product.shortDescription}
                image={product.image}
                isFeatured={product.isFeatured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our inquiry-based approach ensures you get the perfect solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Contact Us</h3>
              <p className="text-slate-600 mb-4">
                Reach out with your requirements and we'll provide expert consultation.
              </p>
              <div className="space-y-2">
                <Link
                  href={`tel:+233XXXXXXXXX`}
                  className="block text-amber-600 hover:text-amber-700"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call: +233 XX XXX XXXX
                </Link>
                <Link
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  className="block text-amber-600 hover:text-amber-700"
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  WhatsApp
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Get Quote</h3>
              <p className="text-slate-600 mb-4">
                Request a detailed quote with system specifications and pricing.
              </p>
              <Link
                href="/request-quote"
                className="inline-block bg-amber-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
              >
                Request Quote
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Custom Solution</h3>
              <p className="text-slate-600 mb-4">
                Receive a tailored solution designed specifically for your energy needs.
              </p>
              <p className="text-sm text-slate-500">
                Professional engineering assessment included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Eleyson Products?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quality, reliability, and professional support for all your solar energy needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-slate-900 font-bold">A+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-slate-300 text-sm">
                Industry-leading products from trusted manufacturers
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-slate-900 font-bold">13+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
              <p className="text-slate-300 text-sm">
                Extensive expertise in solar system design and installation
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              </div>
              <h3 className="text-lg font-semibold mb-2">Complete Support</h3>
              <p className="text-slate-300 text-sm">
                From consultation to maintenance, we're with you every step
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-slate-900 font-bold">🇬🇭</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-slate-300 text-sm">
                Deep understanding of Ghana's energy needs and conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Contact us today for expert advice and personalized product recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Get Product Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}