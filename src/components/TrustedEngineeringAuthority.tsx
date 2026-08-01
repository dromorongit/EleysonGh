"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section, Container, Button } from "@/components";

export function TrustedEngineeringAuthority({
  fadeInUp,
  stagger,
}: {
  fadeInUp: Variants;
  stagger: Variants;
}) {
  return (
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
              Eleyson Ghana Ltd
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
            <img src="/images/eleysonlogo.jpg" alt="Engineering Excellence" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
