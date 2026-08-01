"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section, Container } from "@/components";

export function EngineeringExcellence({
  fadeInUp,
  stagger,
}: {
  fadeInUp: Record<string, unknown>;
  stagger: Record<string, unknown>;
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
              Engineering Excellence Since 2011
            </h2>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Founded in 2011, Eleyson Ghana Limited has established itself as a leading
              engineering firm specializing in solar power systems and hydrogeological services.
              Our integrated expertise provides comprehensive infrastructure solutions.
            </p>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              With 13+ years of technical expertise, we deliver engineered solutions
              for commercial, industrial, and government infrastructure projects
              across Ghana and West Africa. Our engineering-first approach ensures
              reliable, efficient, and sustainable outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-900">13+</div>
                <div className="text-sm text-secondary-600">Years Engineering</div>
              </div>
              <div className="text-center p-4 bg-energy-50 rounded-lg">
                <div className="text-2xl font-bold text-energy-700">500+</div>
                <div className="text-sm text-secondary-600">Systems Installed</div>
              </div>
            </div>
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
