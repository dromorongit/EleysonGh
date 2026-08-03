"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section, Container, ProductGallery } from "@/components";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface ProductCategoryPageClientProps {
  title: string;
  heroImage: string;
  products: { name: string; image: string }[];
}

export function ProductCategoryPageClient({
  title,
  heroImage,
  products,
}: ProductCategoryPageClientProps) {
  return (
    <>
      <Section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <Container className="relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Link
              href="/products"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 hero-text-shadow">
              {title}
            </h1>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div
            className="max-w-7xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ProductGallery products={products} />
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
