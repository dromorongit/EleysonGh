"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Award, BookOpen, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";
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

export default function TrainingWorkshopsPage() {
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
              <Users className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Training & Capacity Building
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Professional development programs designed to build technical capacity and expertise
              in solar energy and hydrogeological engineering.
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
              Build Technical Excellence
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 leading-relaxed"
              variants={fadeInUp}
            >
              Our training programs combine theoretical knowledge with hands-on practical experience,
              delivered by certified engineers with extensive field experience. Whether you're an individual
              professional or an organization, we offer tailored programs to meet your needs.
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
                icon: BookOpen,
                title: "Solar PV Systems Training",
                description: "Comprehensive training on solar photovoltaic system design, installation, commissioning, and maintenance.",
                duration: "5 days"
              },
              {
                icon: ClipboardList,
                title: "Hydrogeology Drilling",
                description: "Practical training in borehole drilling techniques, pump installation, and water system management.",
                duration: "7 days"
              },
              {
                icon: Award,
                title: "Energy Auditing",
                description: "Learn to conduct thorough energy assessments, load analysis, and efficiency optimization studies.",
                duration: "3 days"
              },
              {
                icon: Users,
                title: "Safety & Compliance",
                description: "Electrical safety, regulatory compliance, and best practices for renewable energy installations.",
                duration: "2 days"
              },
              {
                icon: CheckCircle,
                title: "Business Development",
                description: "For entrepreneurs: starting and growing a successful renewable energy business in Ghana.",
                duration: "3 days"
              },
              {
                icon: BookOpen,
                title: "Custom Corporate Training",
                description: "Tailored training programs for organizations needing specific skill development for their teams.",
                duration: "Custom"
              }
            ].map((training, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <training.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">{training.title}</h3>
                    <p className="text-xs text-secondary-500">Duration: {training.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm mb-4">{training.description}</p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Why Choose Eleyson Training?
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Expert-Led Instruction</h3>
              <ul className="space-y-3">
                {[
                  "Certified engineers with 10+ years field experience",
                  "Small class sizes for personalized attention",
                  "Hands-on practical sessions with real equipment",
                  "Up-to-date curriculum aligned with industry standards",
                  "Interactive learning approach with case studies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Comprehensive Support</h3>
              <ul className="space-y-3">
                {[
                  "Training materials and certification provided",
                  "Access to our facility and equipment",
                  "Networking with industry professionals",
                  "Career guidance and job placement assistance",
                  "Follow-up mentorship opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Advance Your Technical Skills
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join our upcoming training sessions and take your expertise to the next level.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/request-a-quote">
                <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                  Inquire About Training
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
