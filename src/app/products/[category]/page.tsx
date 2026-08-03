import { Section, Container, ProductGallery } from "@/components";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductCategory, getProductCategorySlugs } from "@/data/productCategories";
import { ProductCategoryPageClient } from "./ProductCategoryPageClient";

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

  return (
    <ProductCategoryPageClient title={title} heroImage={heroImage} products={products} />
  );
}
