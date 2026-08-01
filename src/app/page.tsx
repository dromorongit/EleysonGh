"use client";
// Micro refinements applied

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Droplets, Users, Award, TrendingUp, MessageCircle, Phone, Activity, Settings, Sun, Battery, Package } from "lucide-react";
import { Button, Section, Container, Card, CardHeader, CardContent, EngineeringExcellence, MissionVision } from "@/components";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  // Adjust animation duration based on reduced motion preference
  const animationDuration = prefersReducedMotion ? 0.01 : 0.8;
  const staggerDelay = prefersReducedMotion ? 0 : 0.1;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: animationDuration, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 md:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/homepage.jpg)'}} />

        {/* Cinematic directional overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        {/* Subtle ambient accents */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />

        <Container className="relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center px-6 py-12 md:px-8 md:py-16"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 md:mb-8 leading-[0.85] tracking-tight hero-text-shadow"
              variants={fadeInUp}
            >
              Engineering The Future of Energy & Water
            </motion.h1>

            {/* Certifications */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" />
                <img src="/images/energycomm.PNG" alt="Energy Commission" className="h-6 w-auto md:h-8" />
                <span className="text-primary-900 font-medium text-xs md:text-sm">Energy Commission</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" />
                <img src="/images/waterresource.PNG" alt="Water Resources Commission" className="h-6 w-auto md:h-8" />
                <span className="text-primary-900 font-medium text-xs md:text-sm">Water Resources Commission</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
                <Link href="/request-a-quote">
                <Button size="lg" variant="gold" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-gold to-gold/90 shadow-2xl hover:shadow-gold/30 hover:from-gold/90 hover:to-gold/80 transition-all duration-300">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                  Request a Technical Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  Our Projects
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <EngineeringExcellence fadeInUp={fadeInUp} stagger={stagger} />

      <MissionVision fadeInUp={fadeInUp} stagger={stagger} />

      {/* Core Solutions */}
       <Section className="bg-secondary-50">
         <Container>
           <motion.div
             className="text-center mb-16"
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={stagger}
           >
             <motion.h2
               className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6 leading-tight"
               variants={fadeInUp}
             >
                Our Services
             </motion.h2>
             <motion.p
               className="text-xl text-secondary-700 max-w-2xl mx-auto font-light"
               variants={fadeInUp}
             >
               Technical solutions engineered for reliability, efficiency, and long-term performance
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
                    icon: Zap,
                    title: "Solar System Design & Installation",
                    link: "/solar-solutions",
                    image: "/images/solar.jpg"
                  },
                  {
                    icon: Activity,
                    title: "Hydrogeological Survey",
                    link: "/hydro-water-solutions",
                    image: "/images/hydro.jpg"
                  },
                   {
                     icon: Droplets,
                     title: "Borehole Drilling",
                     link: "/borehole-drilling",
                     image: "/images/borehole.jpg"
                   },
                   {
                     icon: Settings,
                     title: "Pump Installation (AC & DC)",
                     link: "/borehole-drilling",
                     image: "/images/pump.jpg"
                   },
                   {
                     icon: TrendingUp,
                     title: "Energy Audits",
                     link: "/energy-audits",
                     image: "/images/energyaudit.jpg"
                   },
                  {
                    icon: Users,
                    title: "Maintenance & Support",
                    link: "/maintenance-support",
                    image: "/images/maintenance.jpg"
                  },
                  {
                    icon: Award,
                    title: "Training & Workshops",
                    link: "/training-workshops",
                    image: "/images/training.jpg"
                  },
                  {
                    icon: CheckCircle,
                    title: "Backup Systems",
                    link: "/backup-systems",
                    image: "/images/backup.jpg"
                  }
                ].map((solution, index) => (
                 <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-all duration-200 group cursor-pointer overflow-hidden">
                      <div className="aspect-[4/3] bg-primary-100 relative overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                       <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                         <solution.icon className="w-7 h-7 text-primary-600" />
                       </div>
                       <h3 className="text-2xl font-semibold text-primary-900 mb-2">
                         {solution.title}
                       </h3>
                     </CardHeader>
                     <CardContent>
                       <Link href={solution.link}>
                         <Button variant="ghost" className="p-0 h-auto text-base text-primary-600 hover:text-primary-800">
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

         {/* Products Section */}
         <Section className="bg-white">
           <Container>
             <motion.div
               className="text-center mb-16"
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={stagger}
             >
               <motion.h2
                 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6 leading-tight"
                 variants={fadeInUp}
               >
                 Our Products
               </motion.h2>
               <motion.p
                 className="text-xl text-secondary-700 max-w-2xl mx-auto font-light"
                 variants={fadeInUp}
               >
                 High-quality solar, hydro, and energy system components from trusted manufacturers
               </motion.p>
             </motion.div>

             <motion.div
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={stagger}
             >
               {[
                 {
                   icon: Sun,
                   title: "Solar Panels",
                   link: "/products"
                 },
                 {
                   icon: Zap,
                   title: "Inverters",
                   link: "/products"
                 },
                 {
                   icon: Battery,
                   title: "Batteries",
                   link: "/products"
                 },
                 {
                   icon: Package,
                   title: "Accessories",
                   link: "/products"
                 }
               ].map((product, index) => (
                 <motion.div key={index} variants={fadeInUp}>
                   <Card className="h-full hover:shadow-lg transition-all duration-200 group cursor-pointer text-center">
                     <CardHeader>
                       <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors mx-auto">
                         <product.icon className="w-6 h-6 text-primary-600" />
                       </div>
                       <h3 className="text-xl font-semibold text-primary-900 mb-2">
                         {product.title}
                       </h3>
                     </CardHeader>
                     <CardContent>
                       <Link href={product.link}>
                         <Button variant="ghost" className="p-0 h-auto text-primary-600 hover:text-primary-800">
                           View Products <ArrowRight className="w-4 h-4 ml-1" />
                         </Button>
                       </Link>
                     </CardContent>
                   </Card>
                 </motion.div>
               ))}
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
                Ready to Engineer Your Solution?
              </motion.h2>
              <motion.p
                className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Connect with our engineering team for a technical assessment.
                We'll analyze your requirements and design a custom solution.
              </motion.p>
             <motion.div
               className="flex flex-col sm:flex-row gap-4 justify-center"
               variants={fadeInUp}
             >
               <Link href="/request-a-quote">
                 <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                   <MessageCircle className="w-5 h-5 mr-2" />
                   Request a Technical Consultation
                 </Button>
               </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary-900 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Our Engineers
                </Button>
             </motion.div>
           </motion.div>
         </Container>
       </section>
    </>
  );
}
