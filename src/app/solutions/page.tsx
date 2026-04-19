import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Droplets, TrendingUp, Users, Award, CheckCircle, ArrowRight, Building, Factory, Home, Shield } from "lucide-react";
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

export default function SolutionsPage() {
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
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Engineering Solutions for Every Need
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Comprehensive renewable energy and hydrogeological engineering services
              designed to meet the unique requirements of Ghana's diverse sectors.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Solutions Overview */}
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
              Dual Expertise, Complete Solutions
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 leading-relaxed"
              variants={fadeInUp}
            >
              Eleyson Ghana Limited offers a unique combination of renewable energy and hydrogeological
              engineering services. Our integrated approach ensures that clients receive comprehensive,
              technically sound solutions from a single, trusted engineering partner.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Solar Solutions */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-energy-100 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-energy-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                    Solar Energy Solutions
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Comprehensive solar PV systems, hybrid installations, backup power solutions,
                    and energy optimization services for residential, commercial, and industrial applications.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {[
                      "Custom System Design & Engineering",
                      "Installation & Commissioning",
                      "Energy Audits & Optimization",
                      "Maintenance & Support Services",
                      "Training & Capacity Building"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-energy-600 flex-shrink-0" />
                        <span className="text-secondary-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/solar-solutions">
                    <Button className="w-full">
                      Explore Solar Solutions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hydro Solutions */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Droplets className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                    Hydro & Water Solutions
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Professional hydrogeological surveying, borehole drilling, mechanization,
                    and water system engineering for sustainable water infrastructure.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {[
                      "Geophysical Surveying & Assessment",
                      "Borehole Drilling & Construction",
                      "Pump Installation & Mechanization",
                      "Water Testing & Quality Analysis",
                      "Maintenance & Rehabilitation"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <span className="text-secondary-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/hydro-water-solutions">
                    <Button className="w-full">
                      Explore Hydro Solutions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Industry Sectors */}
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
              Serving Diverse Sectors
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Our engineering solutions are tailored to meet the specific needs of various industries and sectors
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
                icon: Home,
                title: "Residential",
                description: "Solar installations, water systems, and energy solutions for homeowners"
              },
              {
                icon: Building,
                title: "Commercial",
                description: "Business energy optimization, backup systems, and facility infrastructure"
              },
              {
                icon: Factory,
                title: "Industrial",
                description: "Large-scale solar farms, industrial water systems, and manufacturing support"
              },
              {
                icon: Shield,
                title: "Government & NGO",
                description: "Public infrastructure, community development, and institutional projects"
              }
            ].map((sector, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <sector.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900">{sector.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{sector.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Engineering Process */}
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
              Our Engineering Process
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              A systematic, client-focused approach that ensures quality, reliability, and successful project outcomes
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
                title: "Consultation & Assessment",
                description: "Understanding your needs, site evaluation, and feasibility analysis"
              },
              {
                step: "02",
                title: "Design & Engineering",
                description: "Custom system design, technical specifications, and optimization"
              },
              {
                step: "03",
                title: "Implementation & Installation",
                description: "Professional installation, quality control, and safety protocols"
              },
              {
                step: "04",
                title: "Commissioning & Support",
                description: "Testing, handover, training, and ongoing maintenance support"
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

      {/* Additional Services */}
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
              Specialized Services
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
                icon: TrendingUp,
                title: "Energy Audits",
                description: "Comprehensive energy assessments, efficiency analysis, and optimization recommendations"
              },
              {
                icon: Users,
                title: "Training & Workshops",
                description: "Professional development programs for system operation and maintenance"
              },
              {
                icon: Award,
                title: "Maintenance & Support",
                description: "Preventive maintenance, emergency repairs, and technical support services"
              }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-accent-600" />
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
              Find Your Perfect Engineering Solution
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Whether you need solar energy systems, water infrastructure, or comprehensive engineering services,
              our experts are ready to deliver tailored solutions for your specific requirements.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Get Started Today
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900">
                  Contact Our Experts
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}