import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, Tag } from "lucide-react";
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

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[50vh] flex items-center">
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
              <BookOpen className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Industry Insights
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Stay informed with the latest trends, technical insights, and industry knowledge
              from Ghana's leading renewable energy and hydrogeological engineering experts.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Article */}
      <Section>
        <Container>
          <motion.div
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-8 text-center"
              variants={fadeInUp}
            >
              Featured Article
            </motion.h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-energy-100 to-primary-100" />
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    Solar Technology
                  </span>
                  <span className="text-sm text-secondary-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    December 15, 2024
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                  How Hybrid Solar Systems Improve Energy Reliability in Ghana's Climate
                </h3>
                <p className="text-secondary-600 text-lg leading-relaxed">
                  Discover how combining solar power with battery storage and backup generators
                  creates resilient energy systems that perform reliably throughout Ghana's
                  variable weather patterns and power challenges.
                </p>
              </CardHeader>
              <CardContent>
                <Link href="/insights/how-hybrid-solar-systems-improve-energy-reliability">
                  <Button size="lg">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Article Categories */}
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
              Explore Topics
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
                title: "Solar Energy",
                description: "Latest developments in photovoltaic technology, installation best practices, and system optimization",
                count: "12 articles",
                color: "energy"
              },
              {
                title: "Water & Hydrogeology",
                description: "Borehole engineering, water quality management, and sustainable water infrastructure",
                count: "8 articles",
                color: "primary"
              },
              {
                title: "Industry News",
                description: "Market trends, policy updates, and technological advancements in renewable energy",
                count: "15 articles",
                color: "accent"
              }
            ].map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-200 cursor-pointer group">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-${category.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${category.color}-200 transition-colors`}>
                      <Tag className={`w-8 h-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{category.title}</h3>
                    <p className="text-secondary-600 text-sm mb-4">{category.description}</p>
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Recent Articles */}
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
              Recent Articles
            </motion.h2>
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
                title: "What to Know Before Starting a Borehole Project",
                excerpt: "Essential planning considerations and technical requirements for successful borehole development in Ghana.",
                category: "Hydrogeology",
                date: "December 10, 2024",
                readTime: "5 min read"
              },
              {
                title: "The Importance of Preventive Maintenance for Energy Systems",
                excerpt: "How regular maintenance extends system life and ensures optimal performance of solar installations.",
                category: "Solar Maintenance",
                date: "December 5, 2024",
                readTime: "4 min read"
              },
              {
                title: "Solar Power Trends in West Africa for 2025",
                excerpt: "Market analysis and technological developments shaping the solar industry across West Africa.",
                category: "Industry News",
                date: "November 28, 2024",
                readTime: "6 min read"
              },
              {
                title: "Water Quality Testing: Why It Matters",
                excerpt: "Understanding water quality parameters and their impact on borehole system design and operation.",
                category: "Water Quality",
                date: "November 20, 2024",
                readTime: "4 min read"
              },
              {
                title: "Off-Grid Solar Solutions for Rural Communities",
                excerpt: "Case studies and best practices for implementing sustainable energy solutions in remote areas.",
                category: "Solar Technology",
                date: "November 15, 2024",
                readTime: "5 min read"
              },
              {
                title: "Energy Audit Best Practices",
                excerpt: "Comprehensive guide to conducting effective energy audits for businesses and institutions.",
                category: "Energy Efficiency",
                date: "November 8, 2024",
                readTime: "7 min read"
              }
            ].map((article, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-200">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-energy-100 rounded-t-lg" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-sm text-secondary-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-xs text-secondary-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/insights/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
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
            <Button size="lg">
              Load More Articles
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-primary-900 text-white">
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
              Stay Updated
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Subscribe to our newsletter for the latest industry insights, technical articles,
              and updates on renewable energy and water infrastructure developments.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              variants={fadeInUp}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-primary-900"
              />
              <Button variant="accent">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}