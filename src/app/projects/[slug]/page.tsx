"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play, X } from "lucide-react";
import { Button, Section, Container } from "@/components";
import { useState } from "react";

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

// Hardcoded project data - complete with media
const projectsData: Record<string, {
  title: string;
  location: string;
  category: string;
  clientType: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  impact: string;
  featuredImage: string;
  galleryImages: string[];
  technicalSpecs: { key: string; value: string }[];
}> = {
  "solar-residential-installation-at-kpong": {
    title: "Solar Residential Installation at Kpong",
    location: "Kpong, Ghana",
    category: "Solar",
    clientType: "Residential",
    shortDescription: "Complete solar power system installation for residential property with battery backup",
    challenge: "The homeowner faced high electricity costs and unreliable grid power, with frequent outages disrupting daily life and damaging appliances. The large property required a robust, sustainable energy solution that could handle substantial energy demands.",
    solution: "We designed and installed a comprehensive solar power system featuring high-efficiency photovoltaic panels paired with advanced battery storage. The installation includes a hybrid inverter that seamlessly switches between solar, battery, and grid power, ensuring 24/7 electricity availability. The system was custom-designed to match the property's energy consumption patterns, with panels optimally positioned for maximum sun exposure.",
    impact: "The homeowner now enjoys a 75% reduction in electricity bills and complete peace of mind with uninterrupted power supply. The system has already paid for itself through energy savings and provides clean, renewable energy for years to come. The property's value has also increased significantly.",
    featuredImage: "/images/kpongsolar1.jpg",
    galleryImages: [
      "/images/kpongsolar2.jpg",
      "/images/kpongsolar3.jpg",
      "/images/kpongsolar1.MP4",
      "/images/kpongsolar2.MP4",
      "/images/kpongsolar3.MP4"
    ],
    technicalSpecs: [
      { key: "System Capacity", value: "15 kW" },
      { key: "Panel Count", value: "45 panels" },
      { key: "Battery Storage", value: "30 kWh" },
      { key: "Inverter Type", value: "Hybrid 3-phase" },
      { key: "Annual Production", value: "~25,000 kWh" },
      { key: "CO₂ Savings", value: "~18 tons/year" }
    ]
  },
  "commercial-solar-installation": {
    title: "Commercial Solar Installation",
    location: "Accra, Ghana",
    category: "Solar",
    clientType: "Commercial",
    shortDescription: "500kW hybrid solar system for major commercial facility with battery backup",
    challenge: "High electricity costs were significantly impacting the operational profitability of this commercial facility. Grid reliability issues also caused business disruptions and equipment damage.",
    solution: "We engineered and installed a 500kW hybrid solar system with substantial battery storage capacity. The system integrates with existing infrastructure and includes smart monitoring for optimal performance.",
    impact: "Reduced electricity costs by 60% and provided reliable backup power, eliminating downtime and protecting equipment. The project achieved ROI within 4 years.",
    featuredImage: "/images/projects.jpg",
    galleryImages: ["/images/projects.jpg"],
    technicalSpecs: [
      { key: "System Capacity", value: "500 kW" },
      { key: "Battery Storage", value: "200 kWh" },
      { key: "Annual Production", value: "~750,000 kWh" },
      { key: "CO₂ Savings", value: "~550 tons/year" }
    ]
  },
  "industrial-energy-solution": {
    title: "Industrial Energy Solution",
    location: "Tema, Ghana",
    category: "Energy",
    clientType: "Industrial",
    shortDescription: "2MW solar farm with grid-tie connection for manufacturing complex",
    challenge: "Manufacturing operations faced extremely high energy costs and a large carbon footprint, affecting both profitability and sustainability goals.",
    solution: "Constructed a 2MW solar farm with grid-tie connection, allowing the facility to use solar power during the day and draw from the grid when needed, with net metering for excess production.",
    impact: "Achieved significant reduction in energy costs and carbon footprint, improving both bottom line and environmental sustainability. The project qualifies for green energy incentives.",
    featuredImage: "/images/projects.jpg",
    galleryImages: ["/images/projects.jpg"],
    technicalSpecs: [
      { key: "System Capacity", value: "2 MW" },
      { key: "Annual Production", value: "~3,000,000 kWh" },
      { key: "CO₂ Savings", value: "~2,200 tons/year" }
    ]
  },
  "residential-solar-community": {
    title: "Residential Solar Community",
    location: "West Legon, Ghana",
    category: "Solar",
    clientType: "Residential",
    shortDescription: "Shared solar system powering residential community of 50 homes",
    challenge: "A residential community of 50 homes needed an affordable, collective approach to solar energy with fair distribution of power among residents.",
    solution: "Implemented a shared solar system with individual metering for each home, allowing equitable distribution of solar energy and fair billing based on actual consumption.",
    impact: "Each household now enjoys clean, affordable energy with bills reduced by an average of 65%. The community has become a model for sustainable living.",
    featuredImage: "/images/projects.jpg",
    galleryImages: ["/images/projects.jpg"],
    technicalSpecs: [
      { key: "System Capacity", value: "100 kW" },
      { key: "Homes Served", value: "50" },
      { key: "Annual Production", value: "~150,000 kWh" }
    ]
  },
  "government-water-project": {
    title: "Government Water Project",
    location: "Ashanti Region, Ghana",
    category: "Hydro",
    clientType: "Government",
    shortDescription: "Multi-borehole system for government administrative complex",
    challenge: "The government administrative complex faced severe water shortages, affecting operations and staff welfare.",
    solution: "Drilled and equipped multiple boreholes with solar-powered pumps and storage tanks, ensuring reliable water supply independent of the grid.",
    impact: "Provided consistent water access for the entire complex, improving operational efficiency and staff satisfaction. The solar-powered system has minimal operating costs.",
    featuredImage: "/images/projects.jpg",
    galleryImages: ["/images/projects.jpg"],
    technicalSpecs: [
      { key: "Boreholes", value: "3" },
      { key: "Daily Capacity", value: "50,000 L" },
      { key: "Storage", value: "100,000 L" }
    ]
  },
  "ngo-solar-installation": {
    title: "NGO Solar Installation",
    location: "Northern Region, Ghana",
    category: "Solar",
    clientType: "NGO",
    shortDescription: "Off-grid solar system for remote NGO health clinic",
    challenge: "A remote health clinic had no reliable electricity, limiting medical services and preventing operation of critical equipment after dark.",
    solution: "Installed an off-grid solar system with battery backup to power the clinic's essential equipment, lighting, and refrigeration for vaccines.",
    impact: "The clinic can now operate 24/7, providing vital healthcare services to the community. Vaccine storage is now reliable, and medical procedures can continue after dark.",
    featuredImage: "/images/projects.jpg",
    galleryImages: ["/images/projects.jpg"],
    technicalSpecs: [
      { key: "System Capacity", value: "10 kW" },
      { key: "Battery Backup", value: "20 kWh" },
      { key: "Daily Usage", value: "~40 kWh" }
    ]
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);

  if (!project) {
    return (
      <Section className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist.</p>
            <Link href="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const openMedia = (url: string) => {
    const ext = url.split('.').pop()?.toLowerCase();
    if (ext === 'mp4' || ext === 'mov' || ext === 'avi') {
      setMediaType('video');
    } else {
      setMediaType('image');
    }
    setSelectedMedia(url);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    setMediaType(null);
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-0 pb-0">
        <div className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.featuredImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <Container className="relative h-full flex items-end pb-12">
            <motion.div
              className="max-w-4xl"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-3 py-1 bg-gold text-navy text-sm font-medium rounded mb-4">
                  {project.category}
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
                variants={fadeInUp}
              >
                {project.title}
              </motion.h1>
              <motion.div
                className="flex items-center gap-6 text-white/90"
                variants={fadeInUp}
              >
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.clientType}</span>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </Section>

      {/* Content Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2
                  className="text-3xl font-serif font-bold text-primary-900 mb-6"
                  variants={fadeInUp}
                >
                  Project Overview
                </motion.h2>
                <motion.p
                  className="text-lg text-secondary-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  {project.shortDescription}
                </motion.p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2
                  className="text-3xl font-serif font-bold text-primary-900 mb-6"
                  variants={fadeInUp}
                >
                  The Challenge
                </motion.h2>
                <motion.p
                  className="text-lg text-secondary-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  {project.challenge}
                </motion.p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2
                  className="text-3xl font-serif font-bold text-primary-900 mb-6"
                  variants={fadeInUp}
                >
                  Our Solution
                </motion.h2>
                <motion.p
                  className="text-lg text-secondary-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  {project.solution}
                </motion.p>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2
                  className="text-3xl font-serif font-bold text-primary-900 mb-6"
                  variants={fadeInUp}
                >
                  The Impact
                </motion.h2>
                <motion.p
                  className="text-lg text-secondary-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  {project.impact}
                </motion.p>
              </motion.div>

              {/* Media Gallery */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2
                  className="text-3xl font-serif font-bold text-primary-900 mb-6"
                  variants={fadeInUp}
                >
                  Project Gallery
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.galleryImages.map((mediaUrl, index) => {
                    const isVideo = mediaUrl.toLowerCase().endsWith('.mp4') || 
                                   mediaUrl.toLowerCase().endsWith('.mov') || 
                                   mediaUrl.toLowerCase().endsWith('.avi');
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                          isVideo ? 'aspect-video' : 'aspect-video'
                        }`}
                        onClick={() => openMedia(mediaUrl)}
                      >
                        {isVideo ? (
                          <>
                            <video
                              src={mediaUrl}
                              className="w-full h-full object-cover"
                              muted
                              onMouseOver={(e) => e.currentTarget.play()}
                              onMouseOut={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                              }}
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                              <Play className="w-16 h-16 text-white" fill="white" />
                            </div>
                          </>
                        ) : (
                          <>
                            <img
                              src={mediaUrl}
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Click on any image or video to view fullscreen. Videos play on hover.
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Technical Specs */}
                <motion.div
                  className="bg-gray-50 rounded-xl p-6"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                    Technical Specifications
                  </h3>
                  <div className="space-y-3">
                    {project.technicalSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                        <span className="text-secondary-600">{spec.key}</span>
                        <span className="font-medium text-primary-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="bg-primary-900 text-white rounded-xl p-6"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Interested in a Similar Project?
                  </h3>
                  <p className="text-primary-100 mb-6">
                    Contact us today to discuss your energy needs and get a customized solution.
                  </p>
                  <Link href="/request-a-quote">
                    <Button variant="gold" className="w-full">
                      Request a Quote
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Media Lightbox */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeMedia}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeMedia}
          >
            <X className="w-8 h-8" />
          </button>
          {mediaType === 'video' ? (
            <video
              src={selectedMedia}
              className="max-w-full max-h-[90vh] rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={selectedMedia}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}
