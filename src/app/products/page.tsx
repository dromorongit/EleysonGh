"use client";

import { motion } from "framer-motion";
import { Package, Filter, Star, Shield, Truck, Headphones, ArrowRight, Sun, Zap, Battery, Settings } from "lucide-react";
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

export default function ProductsPage() {
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
              <Package className="w-10 h-10 text-primary-600" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Premium Engineering Products
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              High-quality solar, hydro, and energy system components from trusted manufacturers,
              backed by our engineering expertise and support.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Categories */}
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
              Product Categories
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
                icon: Sun,
                title: "Solar Panels",
                description: "High-efficiency photovoltaic panels for optimal energy production",
                count: "50+ Models"
              },
              {
                icon: Zap,
                title: "Inverters",
                description: "Advanced inverters for solar, hybrid, and backup power systems",
                count: "30+ Models"
              },
              {
                icon: Battery,
                title: "Batteries",
                description: "Lithium-ion and lead-acid battery storage solutions",
                count: "20+ Models"
              },
              {
                icon: Settings,
                title: "Backup Systems",
                description: "Complete backup power solutions and generators",
                count: "15+ Systems"
              },
              {
                icon: Package,
                title: "Accessories",
                description: "Cables, connectors, mounting systems, and components",
                count: "100+ Items"
              }
            ].map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-200 cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                      <category.icon className="w-8 h-8 text-primary-600" />
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

      {/* Featured Products */}
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
              Featured Products
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
                name: "High-Efficiency Solar Panel 400W",
                category: "Solar Panels",
                specs: "400W, 21.2% Efficiency, 25-year warranty",
                price: "Contact for pricing"
              },
              {
                name: "Hybrid Solar Inverter 5kW",
                category: "Inverters",
                specs: "5000W, MPPT Controller, Battery Compatible",
                price: "Contact for pricing"
              },
              {
                name: "Lithium Battery 10kWh",
                category: "Batteries",
                specs: "10000Wh, 10-year warranty, Fast charging",
                price: "Contact for pricing"
              },
              {
                name: "Solar Pump Controller 3HP",
                category: "Backup Systems",
                specs: "3HP, DC Operation, MPPT Technology",
                price: "Contact for pricing"
              }
            ].map((product, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-energy-100 rounded-t-lg" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4">{product.specs}</p>
                    <p className="text-primary-600 font-medium">{product.price}</p>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      Inquire Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Why Buy From Us */}
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
              Why Choose Eleyson Products
            </motion.h2>
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
                icon: Shield,
                title: "Quality Assured",
                description: "Only certified, tested products from reputable manufacturers"
              },
              {
                icon: Star,
                title: "Expert Support",
                description: "Technical guidance and product selection assistance"
              },
              {
                icon: Truck,
                title: "Nationwide Delivery",
                description: "Reliable delivery and installation services across Ghana"
              },
              {
                icon: Headphones,
                title: "After-Sales Support",
                description: "Comprehensive warranty and ongoing technical support"
              }
            ].map((reason, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="w-6 h-6 text-accent-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900">{reason.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Need Help Choosing */}
      <Section className="bg-secondary-50">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Need Help Choosing the Right Products?
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-600 mb-8"
              variants={fadeInUp}
            >
              Our engineering experts can help you select the perfect components for your specific
              energy or water system requirements. Get personalized recommendations based on your needs.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg">
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Browse our complete product catalog or contact our experts for personalized product recommendations
              and competitive pricing.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Browse All Products
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}