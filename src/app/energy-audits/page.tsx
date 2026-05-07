"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Lightbulb, Calculator, CheckCircle, ArrowRight } from "lucide-react";
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

export default function EnergyAuditsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[60vh] flex items-center">
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
              <BarChart3 className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Energy Audits & Optimization
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Data-driven energy assessments that identify savings opportunities, optimize existing systems,
              and provide actionable recommendations for improved efficiency and cost reduction.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Overview */}
      <Section>
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Comprehensive Energy Assessments
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 leading-relaxed"
              variants={fadeInUp}
            >
              Our energy audit service provides a detailed analysis of your current energy consumption patterns,
              identifies inefficiencies, and delivers a roadmap for optimization. We combine technical expertise
              with practical solutions to help you achieve measurable energy savings and reduced operational costs.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                icon: Calculator,
                title: "Load Analysis",
                description: "Detailed assessment of your energy consumption patterns, peak demands, and usage profiles to establish baseline metrics."
              },
              {
                icon: TrendingUp,
                title: "Solar Potential Study",
                description: "Site-specific solar resource assessment, shading analysis, and technical feasibility for solar integration."
              },
              {
                icon: BarChart3,
                title: "ROI Calculations",
                description: "Financial modeling including payback period, net present value, and lifetime savings projections for recommended measures."
              },
              {
                icon: Lightbulb,
                title: "Efficiency Recommendations",
                description: "Actionable improvements for energy conservation, equipment upgrades, and operational optimization strategies."
              },
              {
                icon: CheckCircle,
                title: "Compliance Verification",
                description: "Assessment against energy standards, regulations, and best practices to ensure compliance and eligibility for incentives."
              },
              {
                icon: TrendingUp,
                title: "Performance Tracking",
                description: "Post-audit monitoring framework to measure savings and verify the impact of implemented recommendations."
              }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900">{service.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Process Section */}
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
              Our Audit Process
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              A systematic approach ensuring accurate data collection, thorough analysis, and actionable results
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Understanding your energy goals, current challenges, and scope of assessment"
              },
              {
                step: "02",
                title: "Data Collection",
                description: "On-site survey, equipment inventory, and energy meter data gathering"
              },
              {
                step: "03",
                title: "Analysis & Modeling",
                description: "Detailed energy modeling, efficiency analysis, and savings calculations"
              },
              {
                step: "04",
                title: "Report & Recommendations",
                description: "Comprehensive report with prioritized actions, costs, and expected returns"
              }
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {process.step}
                  </div>
                  <CardHeader className="pt-8">
                    <h3 className="text-lg font-semibold text-primary-900">{process.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{process.description}</p>
                  </CardContent>
                </Card>
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
              Ready to Optimize Your Energy Performance?
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Schedule a comprehensive energy audit and start saving on your energy costs.
              Our experts will provide a detailed assessment and actionable recommendations.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/request-a-quote">
                <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                  Request an Energy Audit
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
