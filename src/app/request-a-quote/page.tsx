"use client";

import { motion } from "framer-motion";
import { Calculator, Send, CheckCircle } from "lucide-react";
import { Button, Section, Container, Card, CardHeader, CardContent } from "@/components";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function RequestQuotePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[50vh] flex items-center">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div
              className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
              variants={fadeInUp}
            >
              <Calculator className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Request a Quote
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Get a customized engineering solution quote for your solar energy or hydrogeological project.
              Our experts will provide detailed proposals with competitive pricing.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Quote Form */}
      <Section>
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-secondary-600">
                Provide details about your requirements and we'll prepare a comprehensive quote
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Service Type *
                      </label>
                      <select className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                        <option>Select a service</option>
                        <option>Solar Energy Installation</option>
                        <option>Borehole Drilling & Mechanization</option>
                        <option>Energy Audit & Optimization</option>
                        <option>Hybrid Solar System</option>
                        <option>Water Infrastructure Development</option>
                        <option>Maintenance & Support</option>
                        <option>Product Purchase</option>
                        <option>Other Engineering Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Project Type *
                      </label>
                      <select className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                        <option>Select project type</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Government</option>
                        <option>NGO / Community</option>
                        <option>Agricultural</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="City, Region, Ghana"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Preferred Timeline
                        </label>
                        <select className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option>ASAP</option>
                          <option>1-3 months</option>
                          <option>3-6 months</option>
                          <option>6+ months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Budget Range
                        </label>
                        <select className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option>Under GHS 50,000</option>
                          <option>GHS 50,000 - 200,000</option>
                          <option>GHS 200,000 - 500,000</option>
                          <option>GHS 500,000 - 1M</option>
                          <option>Over GHS 1M</option>
                          <option>Discuss with expert</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Describe your project requirements, current situation, goals, and any specific needs..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center">
                          <input type="radio" name="contact" value="email" className="mr-2" defaultChecked />
                          Email
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="contact" value="phone" className="mr-2" />
                          Phone
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="contact" value="whatsapp" className="mr-2" />
                          WhatsApp
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <p className="text-sm text-secondary-600">
                        I agree to receive communications from Eleyson Ghana Limited about my quote request and project updates.
                      </p>
                    </div>

                    <Button size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Request Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-secondary-50">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4"
              variants={fadeInUp}
            >
              Why Request a Quote from Eleyson?
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                icon: CheckCircle,
                title: "Detailed Engineering Proposals",
                description: "Comprehensive quotes with technical specifications, timelines, and cost breakdowns"
              },
              {
                icon: Calculator,
                title: "Competitive Pricing",
                description: "Transparent pricing with no hidden costs and flexible payment terms"
              },
              {
                icon: Send,
                title: "Quick Response",
                description: "Detailed quotes provided within 24-48 hours of your request"
              }
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-accent-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900">{benefit.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Contact Sidebar Alternative */}
      <Section>
        <Container>
          <motion.div
            className="bg-primary-900 text-white rounded-lg p-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Not sure which service is right for your project? Our engineering experts are ready to discuss your specific needs and recommend the best solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Speak with an Expert
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                Call +233 XX XXX XXXX
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
