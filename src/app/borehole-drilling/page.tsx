"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, MapPin, Wrench, CheckCircle, ArrowRight, Activity, Drill, Gauge, Shield, Leaf, Building, Factory } from "lucide-react";
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

export default function BoreholeDrillingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center relative">
         <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/hydrosolutions.jpg)'}} />
         <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center p-8 md:p-12"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div
              className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
              variants={fadeInUp}
            >
              <Drill className="w-10 h-10 text-primary-600" />
            </motion.div>
 <motion.h1
               className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 hero-text-shadow"
               variants={fadeInUp}
             >
                Borehole Drilling
            </motion.h1>
             <motion.p
               className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed hero-text-shadow"
               variants={fadeInUp}
             >
                Professional borehole drilling services for residential, commercial, and industrial water needs.
                Engineered for West African conditions with guaranteed water yield and long-term reliability.
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
              Featured Borehole Projects
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
                    .filter(project => project.category === 'Borehole')
                   .map((project) => (
                   <motion.div key={project.slug} variants={fadeInUp}>
                     <Card className="h-full">
                       <div className="aspect-video rounded-t-lg overflow-hidden relative">
                         <Image
                           src={project.featuredImage}
                           alt={project.title}
                           fill
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
                                View Project
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
              Professional Borehole Drilling Services
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 leading-relaxed"
              variants={fadeInUp}
            >
              Eleyson Ghana delivers reliable water access through expert borehole drilling, from initial site
              investigation to pump installation and ongoing maintenance. Our engineering approaches ensure
              maximum yield and long-term system performance.
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
              "Hydrogeological Survey",
              "Professional Drilling",
              "Pump Testing & Installation"
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <h4 className="font-semibold text-primary-900">{service}</h4>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Sector-Specific Solutions */}
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
              Borehole Solutions for Every Sector
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Engineered borehole systems tailored to specific water requirements and usage patterns
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
              "Residential Boreholes",
              "Commercial Boreholes",
              "Industrial Boreholes"
            ].map((sector, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <h4 className="font-semibold text-primary-900">{sector}</h4>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Agricultural Solutions */}
      <Section className="bg-secondary-50">
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-accent-600" />
              </div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                 Agricultural Purposes
               </h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Irrigation and livestock water systems designed for agricultural productivity and
                sustainable water management. From smallholder farms to large commercial operations,
                we deliver reliable water access to support your agricultural success.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Irrigation Systems</h4>
                    <p className="text-secondary-600 text-sm">Automated drip and sprinkler irrigation with precise water delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Livestock Watering</h4>
                    <p className="text-secondary-600 text-sm">Reliable water points for cattle, poultry, and other livestock operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Solar Integration</h4>
                    <p className="text-secondary-600 text-sm">Solar-powered pumping for off-grid agricultural operations</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="lg">
                Discuss Agricultural Needs
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image src="/images/agric.jpg" alt="Agricultural Purposes" fill className="object-cover" />
              </div>
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
              Secure Your Water Access
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Partner with Ghana's leading borehole drilling engineers for reliable,
              sustainable water solutions that last.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Start Your Borehole Project
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}