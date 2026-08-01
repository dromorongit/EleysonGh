"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Section, Container } from "@/components";

export function EngineeringExcellence({
  fadeInUp,
  stagger,
}: {
  fadeInUp: Variants;
  stagger: Variants;
}) {
  return (
    <Section>
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
              About Eleyson Ghana Ltd
            </h2>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Founded in 2011, Eleyson Ghana Limited has established itself as a leading
              engineering firm specializing in solar power systems, hydrogeological services and borehole drilling.
              Our integrated expertise provides comprehensive infrastructure solutions.
            </p>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              With 13+ years of technical expertise, we deliver engineered solutions
              for commercial, industrial, and government infrastructure projects
              across Ghana and West Africa. Our engineering-first approach ensures
              reliable, efficient, and sustainable outcomes.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/images/aboutbanner.jpg"
              alt="About Eleyson"
              width={600}
              height={600}
              className="aspect-square rounded-lg shadow-lg object-cover w-full"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
