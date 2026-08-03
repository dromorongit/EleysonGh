"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Lightbulb, Calculator, CheckCircle, ArrowRight } from "lucide-react";
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

export default function EnergyAuditsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/energyaudit.jpg)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <Container className="relative z-10">
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
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
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
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <ul className="space-y-4">
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
                <motion.li key={index} variants={fadeInUp} className="flex items-start space-x-3">
                  <service.icon className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">{service.title}</h4>
                    <p className="text-secondary-600 text-sm">{service.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
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
