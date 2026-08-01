"use client";

import { motion, type Variants } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import { Section, Container, Card, CardHeader, CardContent } from "@/components";

export function MissionVision({
  fadeInUp,
  stagger,
}: {
  fadeInUp: Variants;
  stagger: Variants;
}) {
  return (
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
            Our Mission & Vision
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Our Mission</h3>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-600">
                  To deliver world-class engineering solutions in renewable energy and water
                  systems, empowering Ghana and West Africa with sustainable, reliable, and
                  cost-effective infrastructure that drives economic development and environmental
                  stewardship.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-energy-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-energy-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Our Vision</h3>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-600">
                  To be the leading engineering firm in West Africa, recognized for technical
                  excellence, innovation, and sustainable development solutions that transform
                  communities and industries through reliable energy and water infrastructure.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
