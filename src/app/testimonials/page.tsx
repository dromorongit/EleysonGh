"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section, Container, Card, CardHeader, CardContent } from "@/components";
import { testimonials } from "@/data/testimonials";

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

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[50vh] flex items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage: 'url(/images/testimonials.jpg)'}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Client Testimonials
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Hear from our satisfied clients about their experience with Eleyson Ghana Limited's
              engineering excellence and professional service.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Testimonials Grid */}
      <Section>
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary-200 mb-4" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-semibold text-primary-900">{testimonial.clientName}</h4>
                      <p className="text-secondary-500 text-sm">
                        {testimonial.clientRole}{testimonial.company ? `, ${testimonial.company}` : ''}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Trust Indicators */}
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
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              "Government of Ghana",
              "Major Manufacturing",
              "Commercial Real Estate",
              "NGO Partnerships",
              "Residential Communities",
              "Industrial Complexes",
              "Agricultural Cooperatives",
              "Energy Sector Leaders"
            ].map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-primary-900">{client}</h3>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
              variants={fadeInUp}
            >
              Join Our Satisfied Clients
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Experience the Eleyson difference with engineering excellence,
              professional service, and reliable solutions that deliver results.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="/contact">
                <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                  Start Your Project
                </button>
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
