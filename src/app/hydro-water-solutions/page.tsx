"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, MapPin, FileText, Cog, Wrench, TestTube, CheckCircle, ArrowRight, Activity, Truck } from "lucide-react";
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

export default function HydroWaterSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[60vh] flex items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assets/images/hydrosolutions.jpg)'}} />
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
              <Droplets className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Hydro & Water Solutions
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Professional hydrogeological engineering services from geophysical surveying to complete
              borehole systems and water infrastructure development across Ghana and West Africa.
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
              Complete Water Infrastructure Engineering
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 leading-relaxed"
              variants={fadeInUp}
            >
              Our comprehensive hydrogeological services ensure reliable water access through scientific
              assessment, professional drilling, and complete system implementation with ongoing support.
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
                icon: Activity,
                title: "Geophysical Surveying",
                description: "Advanced geophysical techniques to identify optimal borehole locations"
              },
              {
                icon: MapPin,
                title: "Site Survey & Assessment",
                description: "Detailed geological and hydrological site evaluations"
              },
              {
                icon: Cog,
                title: "Borehole Drilling",
                description: "Professional drilling services with modern equipment and techniques"
              },
              {
                icon: Wrench,
                title: "Pump Installation",
                description: "DC and AC pump systems for efficient water extraction"
              },
              {
                icon: Truck,
                title: "Mechanization & Civil Works",
                description: "Complete water system mechanization and infrastructure development"
              },
              {
                icon: TestTube,
                title: "Water Testing & Quality",
                description: "Comprehensive water quality analysis and treatment recommendations"
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

      {/* Process Timeline */}
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
              Our Engineering Process
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Systematic approach ensuring scientific accuracy and engineering excellence
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
                step: "01",
                title: "Geophysical Surveying",
                description: "Vertical Electrical Sounding (VES) and other geophysical methods to identify aquifer locations"
              },
              {
                step: "02",
                title: "Site Survey & Report",
                description: "Detailed geological assessment and comprehensive feasibility report writing"
              },
              {
                step: "03",
                title: "Pre-Construction Phase",
                description: "Permits, mobilization, and site preparation for drilling operations"
              },
              {
                step: "04",
                title: "Drilling Works",
                description: "Professional borehole drilling using rotary and percussion methods"
              },
              {
                step: "05",
                title: "Development Phase",
                description: "Well development, test pumping, and initial water quality assessment"
              },
              {
                step: "06",
                title: "Testing & Evaluation",
                description: "Comprehensive pumping tests and aquifer performance analysis"
              },
              {
                step: "07",
                title: "Mechanization",
                description: "Pump installation, electrical works, and system automation"
              },
              {
                step: "08",
                title: "Civil Works",
                description: "Pump house construction, drainage, and site finishing"
              },
              {
                step: "09",
                title: "Water Sample Testing",
                description: "Laboratory analysis for water quality and treatment requirements"
              },
              {
                step: "10",
                title: "Commissioning & Handover",
                description: "System testing, operator training, and project completion"
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

      {/* Pump Installation */}
      <Section>
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Advanced Pump Systems
              </h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                We install both DC and AC pump systems optimized for efficiency, reliability,
                and compatibility with solar power systems for sustainable water extraction.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">DC Solar Pumps</h4>
                    <p className="text-secondary-600 text-sm">Direct solar-powered pumping for off-grid applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">AC Pumps with Solar</h4>
                    <p className="text-secondary-600 text-sm">Grid-tie and hybrid AC pump installations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Variable Frequency Drives</h4>
                    <p className="text-secondary-600 text-sm">Advanced controls for optimal performance and protection</p>
                  </div>
                </div>
              </div>
              <Button size="lg">
                Learn About Pump Systems
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-energy-100 rounded-lg" />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Projects */}
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
              Featured Hydro Projects
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
                title: "Rural Community Borehole",
                location: "Eastern Region, Ghana",
                depth: "120m",
                description: "Complete borehole system serving 500+ households"
              },
              {
                title: "Industrial Water Supply",
                location: "Tema, Ghana",
                depth: "85m",
                description: "High-capacity borehole for manufacturing facility"
              },
              {
                title: "Agricultural Irrigation System",
                location: "Ashanti Region, Ghana",
                depth: "95m",
                description: "Solar-powered irrigation borehole for farm cooperative"
              }
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-energy-100 rounded-t-lg" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {project.depth}
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
                View All Hydro Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
              Secure Your Water Future
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Partner with Ghana's leading hydrogeological engineers for reliable,
              sustainable water solutions that last.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Start Your Hydro Project
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}