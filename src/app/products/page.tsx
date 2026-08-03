"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Shield, Star, Truck, Headphones, ArrowRight } from "lucide-react";
import { Button, Section, Container, Card, CardHeader, CardContent } from "@/components";
import Image from "next/image";

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

const categories = [
  {
    slug: "solar-panels",
    title: "Solar Panels",
    image: "/images/solarpanel.jpg"
  },
  {
    slug: "inverters",
    title: "Inverters",
    image: "/images/inverter.jpg"
  },
  {
    slug: "batteries",
    title: "Batteries",
    image: "/images/battery.jpg"
  },
  {
    slug: "backup-systems",
    title: "Backup Systems",
    image: "/images/backup.jpg"
  },
  {
    slug: "accessories",
    title: "Accessories",
    image: "/images/accessories.jpg"
  }
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/accessories.jpg)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <Container className="relative z-10">
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
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
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
            {categories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={`/products/${category.slug}`}>
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-200 cursor-pointer group overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-semibold text-primary-900">{category.title}</h3>
                    </CardHeader>
                  </Card>
                </Link>
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
              <Button size="lg" variant="gold">
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
              <Button size="lg" variant="gold" className="text-lg px-8 py-4">
                Request Product Quote
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}