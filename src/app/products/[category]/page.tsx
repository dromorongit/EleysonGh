import { motion } from "framer-motion";
import { Section, Container, ProductGallery } from "@/components";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductCategory, getProductCategorySlugs } from "@/data/productCategories";

export async function generateStaticParams() {
  return getProductCategorySlugs().map((slug) => ({ category: slug }));
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const productCategory = getProductCategory(category);

  if (!productCategory) {
    notFound();
  }

  const { title, products } = productCategory;
  const heroImage = products[0]?.image ?? "/images/homepage.jpg";

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
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
