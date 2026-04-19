import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle, Clock, FileText, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Quote - Eleyson Ghana Limited | Get Project Estimate',
  description: 'Request a detailed quote for your renewable energy or hydrogeological engineering project. Professional consultation and comprehensive project proposals.',
  keywords: 'quote request, project estimate, engineering consultation, solar installation quote, borehole drilling quote, Ghana',
};

export default function RequestQuotePage() {
  const processSteps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Submit Details',
      description: 'Fill out our comprehensive quote request form with your project requirements.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Review',
      description: 'Our engineering team reviews your requirements and prepares a customized solution.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Detailed Quote',
      description: 'Receive a comprehensive quote with project breakdown, timeline, and terms.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Project Planning',
      description: 'Discuss project details and begin implementation planning if you approve the quote.'
    }
  ];

  const benefits = [
    'Detailed project breakdown with transparent pricing',
    'Professional engineering assessment included',
    'Customized solutions for your specific needs',
    'Competitive pricing with no hidden costs',
    'Expert consultation and technical guidance',
    'Comprehensive project timeline and milestones',
    'Quality assurance and warranty information',
    'Flexible payment terms and financing options'
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Request a Detailed Quote"
        subtitle="Professional Engineering Solutions"
        description="Get a comprehensive project proposal tailored to your renewable energy and hydrogeological engineering needs. Our expert team provides detailed quotes with transparent pricing and professional consultation."
        height="medium"
      />

      {/* Quote Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Our Quote Process Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial inquiry to project implementation, we guide you through every step with transparency and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-slate-900">
                    {step.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-amber-600 mb-2">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form & Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why Choose Our Quote Service?
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Need Help Deciding?</h3>
                <p className="text-slate-600 mb-6">
                  Not sure which service is right for your project? Our experts can help you determine the best solution.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="block w-full bg-slate-900 text-white text-center px-4 py-2 rounded hover:bg-slate-800 transition-colors"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full border border-slate-900 text-slate-900 text-center px-4 py-2 rounded hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Request Your Project Quote
              </h2>
              <QuoteForm />
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
              Common questions about our quoting and project process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                How long does it take to receive a quote?
              </h3>
              <p className="text-slate-600">
                We typically provide detailed quotes within 24-48 hours of receiving your completed request form. Complex projects may take up to 72 hours.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Is the quote binding?
              </h3>
              <p className="text-slate-600">
                Our quotes are valid for 30 days from issuance. They provide a comprehensive project breakdown but can be adjusted based on final requirements.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Do you offer financing options?
              </h3>
              <p className="text-slate-600">
                Yes, we work with several financial institutions to provide financing options for qualifying projects. Details are included in your quote.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Can I request changes after receiving the quote?
              </h3>
              <p className="text-slate-600">
                Absolutely. We encourage open discussion about project requirements. Modified quotes can be provided based on your feedback.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What information do you need for an accurate quote?
              </h3>
              <p className="text-slate-600">
                The more details you provide about your project location, requirements, and timeline, the more accurate and comprehensive our quote will be.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Are there any consultation fees?
              </h3>
              <p className="text-slate-600">
                No, our initial consultation and quote preparation are provided at no cost. We only charge for actual project work once you approve the quote.
              </p>
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
            Don't wait - submit your quote request today and let's discuss how we can bring your project to life with professional engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Speak with an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}