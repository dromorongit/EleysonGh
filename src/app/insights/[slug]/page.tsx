"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button, Section, Container } from "@/components";

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

export default function SingleArticlePage({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 pt-24">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Link href="/insights" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  Solar Technology
                </span>
                <span className="text-sm text-secondary-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  December 15, 2024
                </span>
                <span className="text-sm text-secondary-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  5 min read
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
                How Hybrid Solar Systems Improve Energy Reliability in Ghana's Climate
              </h1>

              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                Discover how combining solar power with battery storage and backup generators
                creates resilient energy systems that perform reliably throughout Ghana's
                variable weather patterns and power challenges.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Article Content */}
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
              className="aspect-video bg-gradient-to-br from-energy-100 to-primary-100 rounded-lg mb-8"
              variants={fadeInUp}
            />

            <motion.div className="prose prose-lg max-w-none" variants={fadeInUp}>
              <p>
                Ghana's energy landscape presents unique challenges and opportunities. With variable weather patterns,
                occasional power grid instability, and growing demand for reliable electricity, businesses and
                homeowners alike seek solutions that can deliver consistent performance regardless of external conditions.
              </p>

              <h2>Understanding Hybrid Solar Systems</h2>
              <p>
                A hybrid solar system combines photovoltaic panels with battery storage and often includes backup generators
                to create a comprehensive energy solution. Unlike basic solar installations that only work when the sun
                is shining, hybrid systems provide power 24/7 through intelligent energy management.
              </p>

              <h2>Key Components of Reliable Hybrid Systems</h2>
              <ul>
                <li><strong>Photovoltaic Panels:</strong> Convert sunlight into electricity</li>
                <li><strong>Battery Storage:</strong> Store excess energy for use during low sunlight or power outages</li>
                <li><strong>Inverters:</strong> Convert DC power to AC power and manage system switching</li>
                <li><strong>Backup Generator:</strong> Provides power during extended cloudy periods or maintenance</li>
                <li><strong>Energy Management System:</strong> Optimizes power usage and switching between sources</li>
              </ul>

              <h2>Benefits for Ghana's Climate</h2>
              <p>
                Ghana's tropical climate with distinct wet and dry seasons requires energy systems that can adapt
                to changing conditions. Hybrid solar systems excel in this environment by:
              </p>

              <ul>
                <li>Maintaining power during the rainy season when solar generation may be reduced</li>
                <li>Providing backup during occasional grid outages</li>
                <li>Reducing dependence on expensive diesel generators</li>
                <li>Offering scalability as energy needs grow</li>
              </ul>

              <h2>Case Study: Commercial Implementation</h2>
              <p>
                A manufacturing facility in Tema implemented a hybrid solar system that reduced their energy costs
                by 60% while ensuring uninterrupted production. The system automatically switches between solar,
                battery, and grid power based on availability and demand, providing complete energy security.
              </p>

              <h2>Future of Energy in Ghana</h2>
              <p>
                As Ghana continues to develop its renewable energy infrastructure, hybrid solar systems represent
                the future of reliable, sustainable power. These systems not only reduce carbon emissions but also
                provide energy independence and cost savings for businesses and communities across the nation.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 pt-8 border-t border-primary-100"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                </div>
                <Link href="/contact">
                  <Button>
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Related Articles */}
      <Section className="bg-secondary-50">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Related Articles
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                title: "What to Know Before Starting a Borehole Project",
                category: "Hydrogeology",
                date: "December 10, 2024"
              },
              {
                title: "The Importance of Preventive Maintenance",
                category: "Solar Maintenance",
                date: "December 5, 2024"
              },
              {
                title: "Solar Power Trends in West Africa",
                category: "Industry News",
                date: "November 28, 2024"
              }
            ].map((article, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-white rounded-lg shadow-sm p-6 h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-energy-100 rounded mb-4" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-sm text-secondary-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">
                    {article.title}
                  </h3>
                  <Link href={`/insights/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Article
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}