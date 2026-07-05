"use client";
// Micro refinements applied

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Droplets, Users, Award, TrendingUp, MessageCircle, Phone, MapPin, Layers } from "lucide-react";
import { Button, Section, Container, Card, CardHeader, CardContent } from "@/components";
import { useState } from "react";
import { getFeaturedProjects } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
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
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
        {/* Layered Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-energy-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/5 to-energy-500/5" />
        <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-transparent opacity-60" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />

        {/* Subtle Ambient Motion */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-energy-100/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Engineering Atmosphere Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-energy-100/30 via-transparent to-transparent opacity-40" />

        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/images/homepage.jpg)'}} />

        <Container className="relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-900 mb-8 leading-[0.85] tracking-tight"
              variants={fadeInUp}
            >
              Engineering The Future of Energy & Water<br />
              <span className="bg-gradient-to-r from-energy-600 to-energy-800 bg-clip-text text-transparent">Across West Africa</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-secondary-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              Eleyson Ghana Limited delivers engineered solar power and hydrogeological solutions
              for commercial, industrial, and government infrastructure projects.
              <br className="hidden md:block" />
              Since 2011, we've designed and installed over 500 systems across Ghana.
            </motion.p>

{/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2 text-secondary-600">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span>13+ Years Engineering Excellence</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-600">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span>500+ Projects Across Ghana</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-600">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span>Certified Engineering Team</span>
              </div>
            </motion.div>

{/* Certifications */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-4 h-4 text-gold flex-shrink-0" />
                <img src="/images/energycomm.PNG" alt="Energy Commission" className="h-8 w-auto" />
                <span className="text-secondary-700 font-medium text-sm">Energy Commission</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-4 h-4 text-gold flex-shrink-0" />
                <img src="/images/waterresource.PNG" alt="Water Resources Commission" className="h-8 w-auto" />
                <span className="text-secondary-700 font-medium text-sm">Water Resources Commission</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
                <Link href="/request-a-quote">
                <Button size="lg" variant="gold" className="text-lg px-10 py-5 bg-gradient-to-r from-gold to-gold/90 shadow-2xl hover:shadow-gold/30 hover:from-gold/90 hover:to-gold/80 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Request a Technical Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="text-lg px-10 py-5 border-2 hover:bg-primary-50">
                  View Engineering Case Studies
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Credibility Strip */}
      <section className="bg-primary-900 text-white py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Zap className="w-8 h-8 text-accent-400" />
              <div className="text-3xl font-bold text-accent-400">13+</div>
              <div className="text-primary-200 font-medium">Years Experience</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="w-8 h-8 text-accent-400" />
              <div className="text-3xl font-bold text-accent-400">500+</div>
              <div className="text-primary-200 font-medium">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8 text-accent-400" />
              <div className="text-3xl font-bold text-accent-400">Nationwide</div>
              <div className="text-primary-200 font-medium">Coverage</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Layers className="w-8 h-8 text-accent-400" />
              <div className="text-3xl font-bold text-accent-400">Dual</div>
              <div className="text-primary-200 font-medium">Expertise Areas</div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
       <Section className="bg-gradient-to-br from-secondary-50 via-white to-primary-50/30">
         <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <motion.div
               className="order-2 lg:order-1"
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={stagger}
             >
               <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-8 leading-tight"
                  variants={fadeInUp}
                >
                  West Africa's Trusted<br />Engineering Authority
                </motion.h2>
                <motion.p
                  className="text-xl text-secondary-700 mb-12 leading-relaxed font-light"
                  variants={fadeInUp}
                >
                  Eleyson Ghana Limited delivers engineered infrastructure solutions across solar power
                  and hydrogeological systems. With 13+ years of technical expertise, we design and implement
                  reliable energy and water systems for commercial, industrial, and government projects.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link href="/about">
                    <Button variant="outline">About Our Engineering Firm</Button>
                  </Link>
                </motion.div>
             </motion.div>
<motion.div
               className="order-1 lg:order-2 aspect-square rounded-2xl shadow-lg overflow-hidden"
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={fadeInUp}
             >
               <img src="/images/homepagebanner.jpg" alt="Engineering Excellence" className="w-full h-full object-cover" />
             </motion.div>
          </div>
        </Container>
      </Section>

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
               Engineered Solutions<br />for Critical Infrastructure
             </motion.h2>
             <motion.p
               className="text-xl text-secondary-700 max-w-2xl mx-auto font-light"
               variants={fadeInUp}
             >
               Technical solutions engineered for reliability, efficiency, and long-term performance
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
                  description: "Engineered photovoltaic systems for commercial, industrial, and residential applications. Includes hybrid configurations, battery storage, and grid-tie solutions optimized for Ghana's climate.",
                  link: "/solar-solutions"
                },
                {
                  icon: Droplets,
                  title: "Hydro & Water Solutions",
                  description: "Complete hydrogeological services from geophysical surveying to borehole drilling and mechanized water systems. Engineered for sustainable, long-term water access.",
                  link: "/hydro-water-solutions"
                },
                {
                  icon: TrendingUp,
                  title: "Energy Audits",
                  description: "Comprehensive technical assessments with load analysis, solar potential studies, and ROI calculations. Data-driven recommendations for optimal energy efficiency.",
                  link: "/energy-audits"
                },
                {
                  icon: Users,
                  title: "Maintenance & Support",
                  description: "Preventive maintenance programs and technical support to ensure optimal system performance, longevity, and maximum return on investment.",
                  link: "/maintenance-support"
                },
                {
                  icon: Award,
                  title: "Training & Workshops",
                  description: "Professional development programs for engineers, technicians, and industry professionals. Hands-on training in solar PV, water systems, and renewable energy best practices.",
                  link: "/training-workshops"
                },
                {
                  icon: CheckCircle,
                  title: "Backup Systems",
                  description: "Hybrid solar backup solutions with battery storage and automatic transfer switching. Engineered for uninterrupted power supply during grid outages.",
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
       <Section className="bg-gradient-to-br from-navy via-primary-900 to-navy text-white">
         <Container>
           <motion.div
             className="text-center mb-16"
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={stagger}
           >
             <motion.h2
               className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
               variants={fadeInUp}
             >
               Engineering Case Studies
             </motion.h2>
             <motion.p
               className="text-xl text-white/80 max-w-2xl mx-auto font-light"
               variants={fadeInUp}
             >
               Proven engineering solutions delivering measurable results across Ghana
             </motion.p>
           </motion.div>

           <motion.div
             className="grid grid-cols-1 md:grid-cols-3 gap-8"
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={stagger}
           >
             {featuredProjects.slice(0, 3).map((project, index) => (
               <motion.div key={project.slug} variants={fadeInUp}>
                 <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white text-primary-900">
                   <div
                     className="aspect-video bg-gradient-to-br from-primary-200 to-energy-200 rounded-t-lg bg-cover bg-center"
                     style={{
                       backgroundImage: project.featuredImage
                         ? `url(${project.featuredImage})`
                         : undefined
                     }}
                   />
                   <CardHeader>
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded">
                         {project.category}
                       </span>
                       <span className="text-sm text-secondary-600">{project.location}</span>
                     </div>
                     <h3 className="text-lg font-semibold text-primary-900">
                       {project.title}
                     </h3>
                   </CardHeader>
                   <CardContent>
                     <p className="text-secondary-700 text-sm">
                       {project.shortDescription}
                     </p>
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
               <Button size="lg" variant="gold">
                 View All Case Studies
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
               <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900">
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
