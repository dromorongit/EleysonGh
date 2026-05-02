"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FolderOpen, Filter, ArrowRight } from "lucide-react";
import { Button, Section, Container, Card, CardHeader, CardContent } from "@/components";
import { useState, useEffect } from "react";

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

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  shortDescription: string;
  featuredImage: string;
  isFeatured: boolean;
  type?: string;
  summary?: string;
}

const defaultProjects = [
  {
    title: "Commercial Solar Installation",
    slug: "commercial-solar-installation",
    location: "Accra, Ghana",
    type: "Solar",
    summary: "500kW hybrid solar system for major commercial facility with battery backup"
  },
  {
    title: "Rural Borehole Development",
    slug: "rural-borehole-development",
    location: "Eastern Region, Ghana",
    type: "Hydro",
    summary: "Complete borehole drilling and mechanization serving 300+ households"
  },
  {
    title: "Industrial Energy Solution",
    slug: "industrial-energy-solution",
    location: "Tema, Ghana",
    type: "Solar",
    summary: "2MW solar farm with grid-tie connection for manufacturing complex"
  },
  {
    title: "Residential Solar Community",
    slug: "residential-solar-community",
    location: "West Legon, Ghana",
    type: "Solar",
    summary: "Shared solar system powering residential community of 50 homes"
  },
  {
    title: "Government Water Project",
    slug: "government-water-project",
    location: "Ashanti Region, Ghana",
    type: "Hydro",
    summary: "Multi-borehole system for government administrative complex"
  },
  {
    title: "NGO Solar Installation",
    slug: "ngo-solar-installation",
    location: "Northern Region, Ghana",
    type: "Solar",
    summary: "Off-grid solar system for remote NGO health clinic"
  }
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        } else {
          setProjects(defaultProjects as any);
        }
        setLoading(false);
      })
      .catch(() => {
        setProjects(defaultProjects as any);
        setLoading(false);
      });
  }, []);

  const filters = ["All", "Solar", "Hydro", "Energy", "Other"];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[50vh] flex items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/images/projects.jpg)'}} />
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
              <FolderOpen className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Our Projects
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Real-world engineering solutions that demonstrate our expertise in solar energy
              and hydrogeological services across Ghana and West Africa.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Filters */}
      <Section>
        <Container>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={filter === activeFilter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading projects...</div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={project._id || index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-secondary-400 to-secondary-600 bg-cover bg-center rounded-t-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/90 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium bg-gold text-navy px-2 py-1 rounded">
                            {project.category || project.type}
                          </span>
                          <span className="text-sm text-white/80">{project.location}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-4">{project.shortDescription || project.summary}</p>
                        <Link href={`/projects/${project.slug || project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          <Button variant="gold" size="sm">
                            View Case Study
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
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
              Ready for Your Project?
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              See how our engineering expertise can transform your energy and water challenges into successful solutions.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
