"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Zap, Droplets, Users, Award, TrendingUp, MessageCircle, Phone } from "lucide-react";
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-energy-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/5 to-energy-500/5" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-900 mb-6 leading-tight"
              variants={fadeInUp}
            >
              Engineering the Future of
              <span className="text-energy-600"> Energy</span> & <span className="text-primary-600">Water</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Premium solar energy and hydrogeological engineering solutions for Ghana and West Africa.
              Technical excellence, proven execution, and sustainable innovation since 2011.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button size="lg" className="text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Explore Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Credibility Strip */}
      <section className="bg-primary-900 text-white py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-400">13+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400">500+</div>
              <div className="text-primary-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400">Nationwide</div>
              <div className="text-primary-200">Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400">Dual</div>
              <div className="text-primary-200">Expertise Areas</div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <Section>
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Ghana's Premier Engineering Partner
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Eleyson Ghana Limited stands as Ghana's leading engineering firm specializing in renewable energy
              and hydrogeological solutions. With over 13 years of proven expertise, we deliver comprehensive
              engineering services across residential, commercial, industrial, and government sectors.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Core Solutions */}
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
              Our Engineering Solutions
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Comprehensive engineering services backed by technical expertise and proven execution
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
                icon: Zap,
                title: "Solar Energy Solutions",
                description: "Custom solar PV systems, backup solutions, and energy optimization for all sectors.",
                link: "/solar-solutions"
              },
              {
                icon: Droplets,
                title: "Hydro & Water Solutions",
                description: "Professional borehole drilling, mechanization, and water testing services.",
                link: "/hydro-water-solutions"
              },
              {
                icon: TrendingUp,
                title: "Energy Audits",
                description: "Comprehensive energy assessments and efficiency optimization consulting.",
                link: "/energy-audits"
              },
              {
                icon: Users,
                title: "Maintenance & Support",
                description: "Ongoing system maintenance and technical support services.",
                link: "/maintenance-support"
              },
              {
                icon: Award,
                title: "Training & Workshops",
                description: "Professional development programs for energy and water systems.",
                link: "/training-workshops"
              },
              {
                icon: CheckCircle,
                title: "Backup Systems",
                description: "Reliable backup power solutions for uninterrupted operations.",
                link: "/backup-systems"
              }
            ].map((solution, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 group cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                      <solution.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      {solution.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 mb-4">{solution.description}</p>
                    <Link href={solution.link}>
                      <Button variant="ghost" className="p-0 h-auto text-primary-600 hover:text-primary-800">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Featured Projects Preview */}
      <Section>
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
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Real-world engineering solutions delivering results across Ghana
            </motion.p>
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
                title: "Commercial Solar Installation",
                location: "Accra, Ghana",
                type: "Solar",
                description: "500kW hybrid solar system for major commercial facility"
              },
              {
                title: "Industrial Borehole Project",
                location: "Tema, Ghana",
                type: "Hydro",
                description: "Complete drilling and mechanization for manufacturing plant"
              },
              {
                title: "Government Energy Solution",
                location: "Eastern Region",
                type: "Solar",
                description: "Off-grid solar power for remote government facility"
              }
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-200">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-energy-100 rounded-t-lg" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {project.type}
                      </span>
                      <span className="text-sm text-secondary-500">{project.location}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="/projects">
              <Button size="lg">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Quote CTA Banner */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
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
              Ready to Power Your Future?
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Get a customized engineering solution for your energy or water needs.
              Our experts are ready to discuss your project requirements.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
