"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Battery, Power, Zap, Shield, CheckCircle } from "lucide-react";
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

export default function BackupSystemsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/backup.jpg)'}} />
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
              <Battery className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Hybrid Backup Power Systems
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Uninterrupted power supply solutions combining solar, battery storage, and backup generators
              to keep your critical operations running during grid outages.
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
              Never Experience a Power Outage Again
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 leading-relaxed"
              variants={fadeInUp}
            >
              Our hybrid backup systems intelligently switch between grid power, solar, battery, and generator sources
              to ensure continuous electricity. Designed for homes, businesses, and critical infrastructure where
              power reliability is non-negotiable.
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
                  icon: Power,
                  title: "Hybrid Inverters",
                  description: "Advanced inverters that seamlessly switch between grid, solar, battery, and generator power sources with zero transfer time."
                },
                {
                  icon: Battery,
                  title: "Battery Storage",
                  description: "High-capacity lithium-ion and lead-acid battery banks for extended backup duration and cycle life."
                },
                {
                  icon: Zap,
                  title: "Automatic Transfer Switch",
                  description: "Intelligent ATS that automatically detects power failures and switches to backup power instantly."
                },
                {
                  icon: Shield,
                  title: "System Protection",
                  description: "Surge protection, overcurrent protection, and comprehensive safety features to protect your equipment."
                },
                {
                  icon: CheckCircle,
                  title: "Remote Monitoring",
                  description: "Real-time system status monitoring via mobile app or web portal with alerts and notifications."
                },
                {
                  icon: Power,
                  title: "Generator Integration",
                  description: "Seamless integration with diesel or petrol generators for extended backup capability."
                }
              ].map((feature, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-start space-x-3">
                  <feature.icon className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">{feature.title}</h4>
                    <p className="text-secondary-600 text-sm">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </Section>

      {/* System Configurations */}
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
              Backup Solutions for Every Need
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              From residential backup to industrial-scale systems, we design solutions tailored to your power requirements
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
                  icon: "🏠",
                  title: "Home Backup",
                  description: "Keep essential appliances running during outages - lights, fridge, TV, computers, and more.",
                  specs: ["3-10 kW", "5-20 kWh"]
                },
                {
                  icon: "🏢",
                  title: "Business Backup",
                  description: "Maintain business continuity with backup power for offices, retail spaces, and small facilities.",
                  specs: ["10-50 kW", "20-100 kWh"],
                  popular: true
                },
                {
                  icon: "🏭",
                  title: "Industrial Backup",
                  description: "Large-scale backup solutions for manufacturing, data centers, and critical infrastructure.",
                  specs: ["50+ kW", "100+ kWh"]
                }
              ].map((solution, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-start space-x-3">
                  <span className="text-xl mt-0.5 flex-shrink-0">{solution.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-primary-900">{solution.title}</h4>
                      {solution.popular && <span className="text-xs font-medium bg-gold text-navy px-2 py-0.5 rounded">Popular</span>}
                    </div>
                    <p className="text-secondary-600 text-sm mb-1">{solution.description}</p>
                    <p className="text-sm text-secondary-500">Capacity: {solution.specs[0]} | Battery: {solution.specs[1]}</p>
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
              Secure Your Power Supply
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Get a customized backup power solution designed for your specific needs and budget.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/request-a-quote">
                <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                  Request Backup System Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
