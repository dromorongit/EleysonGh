import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Eleyson Ghana Limited | Get in Touch',
  description: 'Contact Eleyson Ghana Limited for renewable energy and hydrogeological engineering services. Professional consultation, project inquiries, and technical support across Ghana.',
  keywords: 'contact Eleyson Ghana, engineering consultation, project inquiry, Ghana engineering services',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="Contact Us"
        description="Ready to start your engineering project? Contact our team of experts for professional consultation and comprehensive solutions."
        height="medium"
      />

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
                    <p className="text-slate-600 mb-2">Call us for immediate assistance</p>
                    <a
                      href="tel:+233XXXXXXXXX"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      +233 XX XXX XXXX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600 mb-2">Send us your inquiries</p>
                    <a
                      href="mailto:info@eleysongh.com"
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      info@eleysongh.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">WhatsApp</h3>
                    <p className="text-slate-600 mb-2">Chat with us instantly</p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Start Chat
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Location</h3>
                    <p className="text-slate-600 mb-2">Visit our office</p>
                    <address className="text-slate-600 not-italic">
                      Accra, Ghana<br />
                      West Africa
                    </address>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Business Hours</h3>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/request-quote"
                    className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors text-center"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/services"
                    className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-slate-600">
              Located in the heart of Accra, serving clients across Ghana and West Africa
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-slate-500">Accra, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                How quickly can you respond to inquiries?
              </h3>
              <p className="text-slate-600">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Do you work across all of Ghana?
              </h3>
              <p className="text-slate-600">
                Yes, we provide services nationwide and extend our expertise across West Africa.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What types of projects do you handle?
              </h3>
              <p className="text-slate-600">
                We specialize in renewable energy installations and hydrogeological engineering projects.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Do you offer emergency services?
              </h3>
              <p className="text-slate-600">
                Yes, we provide emergency maintenance and support services for existing installations.
              </p>
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
            Don't wait - contact us today for expert engineering solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}