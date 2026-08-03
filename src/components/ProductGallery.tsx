"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MediaLightbox, type MediaItem } from "./MediaLightbox";

export interface ProductItem {
  name: string;
  image: string;
}

interface ProductGalleryProps {
  products: ProductItem[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const mediaItems: MediaItem[] = products.map((product) => ({
    type: "image",
    src: product.image,
    alt: product.name,
  }));

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {products.map((product, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <div
              className="group relative flex flex-col h-full bg-white rounded-xl shadow-md border border-primary-100 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center bg-secondary-50">
                <p className="text-sm font-medium text-primary-900 group-hover:text-primary-700 transition-colors">
                  {product.name}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <MediaLightbox items={mediaItems} index={selectedIndex} onIndexChange={setSelectedIndex} />
    </>
  );
}
