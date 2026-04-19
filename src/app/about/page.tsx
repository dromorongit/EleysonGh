import { motion } from "framer-motion";
import { CheckCircle, Users, Award, TrendingUp, Target, Heart } from "lucide-react";
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

export default function AboutPage() {
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
              About Eleyson Ghana Limited
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Ghana's trusted engineering partner for renewable energy and hydrogeological solutions,
              delivering excellence since 2011.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Company Overview */}
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Engineering Excellence Since 2011
              </h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Founded in 2011, Eleyson Ghana Limited has established itself as Ghana's premier
                engineering firm specializing in renewable energy and hydrogeological services.
                Our dual expertise in solar energy systems and borehole engineering sets us apart
                in the industry.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                With over 13 years of proven track record, we serve clients across residential,
                commercial, industrial, government, and NGO sectors nationwide and throughout
                West Africa. Our commitment to technical excellence, quality execution, and
                sustainable solutions drives everything we do.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-900">13+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-energy-50 rounded-lg">
                  <div className="text-2xl font-bold text-energy-700">500+</div>
                  <div className="text-sm text-secondary-600">Projects Completed</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-energy-100 rounded-lg" />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Mission & Vision */}
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
              Our Mission & Vision
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
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Our Mission</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    To deliver world-class engineering solutions in renewable energy and water
                    systems, empowering Ghana and West Africa with sustainable, reliable, and
                    cost-effective infrastructure that drives economic development and environmental
                    stewardship.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-energy-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Our Vision</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    To be the leading engineering firm in West Africa, recognized for technical
                    excellence, innovation, and sustainable development solutions that transform
                    communities and industries through reliable energy and water infrastructure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* What Makes Us Unique */}
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
              What Makes Eleyson Unique
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Our distinctive approach and proven expertise set us apart in the engineering landscape
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
                icon: Award,
                title: "Dual Expertise",
                description: "Unique combination of solar energy and hydrogeological engineering capabilities"
              },
              {
                icon: Users,
                title: "Engineering-Led Approach",
                description: "Technical excellence and engineering-first methodology in all solutions"
              },
              {
                icon: CheckCircle,
                title: "Nationwide Coverage",
                description: "Comprehensive service coverage across Ghana and West African region"
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                description: "Over 500 successful projects and 13+ years of industry experience"
              },
              {
                icon: Heart,
                title: "Client-Centric Focus",
                description: "Dedicated to understanding and exceeding client expectations"
              },
              {
                icon: Target,
                title: "End-to-End Solutions",
                description: "Complete project lifecycle management from consultation to commissioning"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Leadership Section */}
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
              Engineering Leadership & Excellence
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Our team of certified engineers and technical specialists bring decades of combined experience
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
                name: "Dr. Kwame Osei",
                role: "Chief Engineer",
                credentials: "PhD in Renewable Energy, 15+ years experience"
              },
              {
                name: "Eng. Ama Mensah",
                role: "Hydrogeology Director",
                credentials: "MSc Hydrogeology, Licensed Professional Engineer"
              },
              {
                name: "Mr. Kofi Addo",
                role: "Operations Director",
                credentials: "MBA, 12+ years project management experience"
              }
            ].map((leader, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-200 to-energy-200 rounded-full mx-auto mb-4" />
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-primary-900">{leader.name}</h3>
                    <p className="text-primary-600 font-medium">{leader.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{leader.credentials}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Why Clients Choose Us */}
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
              Why Clients Choose Eleyson
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
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Technical Excellence</h3>
              <ul className="space-y-3">
                {[
                  "Certified engineering professionals",
                  "Latest technology and equipment",
                  "Rigorous quality control processes",
                  "Compliance with international standards"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Proven Reliability</h3>
              <ul className="space-y-3">
                {[
                  "13+ years of successful project delivery",
                  "Nationwide service coverage",
                  "Comprehensive warranty and support",
                  "Strong industry reputation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 flex-shrink-0" />
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
              Partner with Engineering Excellence
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Ready to experience the Eleyson difference? Let's discuss your engineering needs
              and deliver solutions that exceed expectations.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}