"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Home, Building, Factory, Battery, TrendingUp, Users, Award, CheckCircle, ArrowRight, Sun, Power } from "lucide-react";
import { Button, Section, Container, Card, CardHeader, CardContent } from "@/components";
import Image from "next/image";
import { projects } from "@/data/projects";

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

export default function SolarSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center relative">
         <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/solar.jpg)'}} />
         <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center p-8 md:p-12"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div
              className="w-20 h-20 bg-energy-100 rounded-full flex items-center justify-center mx-auto mb-6"
              variants={fadeInUp}
            >
              <Sun className="w-10 h-10 text-energy-600" />
            </motion.div>
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 hero-text-shadow"
                variants={fadeInUp}
               >
                Solar Power Engineering
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed hero-text-shadow"
                variants={fadeInUp}
              >
                Engineered photovoltaic systems for reliable, efficient energy production.
                Commercial and industrial solutions designed for Ghana's climate conditions.
              </motion.p>
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
              Featured Solar Projects
            </motion.h2>
          </motion.div>

           <motion.div
             className="grid grid-cols-1 md:grid-cols-3 gap-8"
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={stagger}
           >
             {projects
               .filter(project => project.category === 'Solar')
               .map((project, index) => (
               <motion.div key={project.slug} variants={fadeInUp}>
                 <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                   <div className="aspect-video rounded-t-lg overflow-hidden relative">
                     <Image
                       src={project.featuredImage}
                       alt={project.title}
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-300"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/90 transition-all duration-300" />
                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                       <div className="flex items-center justify-between mb-2">
                         <span className="text-sm font-medium bg-gold text-navy px-2 py-1 rounded">
                           {project.category}
                         </span>
                         <span className="text-sm text-white/80">{project.location}</span>
                       </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h3>
                        <Link href={`/projects/${project.slug}`}>
                          <Button variant="gold" size="sm">
                            View Projects
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                     </div>
                   </div>
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
                Complete Solar Engineering Services
              </motion.h2>
              <motion.p
                className="text-lg text-secondary-600 leading-relaxed"
                variants={fadeInUp}
              >
                From site assessment and system design to installation, commissioning, and ongoing support,
                we deliver engineered solar solutions that optimize energy production and ensure long-term reliability.
              </motion.p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              "Consultation & Design",
              "Procurement & Installation",
              "Support & Maintenance",
              "Energy Audits",
              "Backup Systems",
              "Training & Workshops"
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-energy-600 mt-0.5 flex-shrink-0" />
                <h4 className="font-semibold text-primary-900">{service}</h4>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Sector-Specific Solutions */}
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
               Engineered for Every Application
             </motion.h2>
             <motion.p
               className="text-lg text-secondary-600 max-w-2xl mx-auto"
               variants={fadeInUp}
             >
               Technical solar solutions engineered for the specific energy requirements of each sector
             </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Residential */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Home className="w-8 h-8 text-primary-600" />
                  </div>
                   <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                      Residential Solutions
                    </h3>
                 </CardHeader>
                 <CardContent>
                   <div className="space-y-3 mb-6">
                     {[
                       "Rooftop PV installations",
                       "Home battery storage",
                       "Net metering solutions"
                     ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-energy-600 flex-shrink-0" />
                        <span className="text-secondary-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-secondary-500">Starting from 1kW systems</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Commercial */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-energy-100 rounded-lg flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-energy-600" />
                  </div>
                   <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                     Commercial Solutions
                   </h3>
                 </CardHeader>
                 <CardContent>
                   <div className="space-y-3 mb-6">
                     {[
                       "Commercial rooftop systems",
                       "Energy storage solutions",
                       "Demand management systems"
                     ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-energy-600 flex-shrink-0" />
                        <span className="text-secondary-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-secondary-500">10kW - 500kW systems</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Industrial */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                    <Factory className="w-8 h-8 text-accent-600" />
                  </div>
                   <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                     Industrial Solutions
                   </h3>
                 </CardHeader>
                 <CardContent>
                   <div className="space-y-3 mb-6">
                     {[
                       "Ground-mounted solar farms",
                       "Industrial microgrids",
                       "Hybrid power systems"
                     ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-energy-600 flex-shrink-0" />
                        <span className="text-secondary-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-secondary-500">500kW+ systems</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-energy-600 to-primary-600 text-white">
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
              Ready to Go Solar?
            </motion.h2>
            <motion.p
              className="text-lg text-energy-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transform your energy future with reliable, efficient solar solutions.
              Our experts are ready to design the perfect system for your needs.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Get Your Solar Quote
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
