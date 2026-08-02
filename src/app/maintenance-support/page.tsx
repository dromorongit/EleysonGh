"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Shield, Clock, Users, CheckCircle } from "lucide-react";
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

export default function MaintenanceSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/maintenance.jpg)'}} />
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
              <Shield className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Maintenance & Technical Support
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Comprehensive maintenance programs and expert technical support to ensure your solar and water
              systems operate at peak performance throughout their lifecycle.
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
              Protect Your Investment
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 leading-relaxed"
              variants={fadeInUp}
            >
              Regular maintenance is essential for maximizing the lifespan, efficiency, and reliability of your
              solar energy and water infrastructure systems. Our comprehensive support programs ensure optimal
              performance and peace of mind.
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
                  icon: Wrench,
                  title: "Preventive Maintenance",
                  description: "Scheduled inspections, cleaning, and component checks to prevent failures and maintain efficiency."
                },
                {
                  icon: Clock,
                  title: "24/7 Emergency Support",
                  description: "Round-the-clock technical assistance and emergency response for critical system issues."
                },
                {
                  icon: Users,
                  title: "Remote Monitoring",
                  description: "Continuous system monitoring with real-time alerts and performance analytics."
                },
                {
                  icon: CheckCircle,
                  title: "Performance Optimization",
                  description: "Regular tuning and adjustments to ensure maximum energy production and water output."
                },
                {
                  icon: Shield,
                  title: "Warranty Management",
                  description: "Handling of warranty claims and coordination with manufacturers for replacements."
                },
                {
                  icon: Wrench,
                  title: "Repair & Replacement",
                  description: "Expert repair services and component replacement using genuine parts."
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
              Keep Your Systems Running at Peak Performance
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Contact our support team to discuss the right maintenance plan for your system.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                  Contact Support Team
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
