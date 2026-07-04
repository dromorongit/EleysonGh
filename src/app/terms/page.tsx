"use client";

import { motion } from "framer-motion";
import { Button, Section, Container, Card, CardHeader, CardContent } from "@/components";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 pt-24 pb-16">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-secondary-600">
              Last updated: May 7, 2026
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section>
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Agreement to Terms</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    By accessing or using the Eleyson Ghana Limited website and services, you agree to be bound
                    by these Terms of Service. If you do not agree to these terms, please do not use our website
                    or services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Services Description</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    Eleyson Ghana Limited provides engineering services including but not limited to:
                    solar energy system design and installation, hydrogeological services (borehole drilling,
                    pump installation), energy audits, maintenance and support, training and workshops, and
                    supply of engineering equipment and components.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Quotations and Contracts</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 mb-4">
                    All quotes and proposals are valid for 30 days unless otherwise stated. A formal contract
                    is established when both parties sign a project agreement or when we commence work based
                    on your verbal or written authorization.
                  </p>
                  <p className="text-secondary-600">
                    Prices are subject to change due to material cost fluctuations, regulatory changes, or
                    unforeseen site conditions. Any price adjustments will be communicated and agreed upon
                    before proceeding.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Payment Terms</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 mb-4">
                    Payment terms are specified in individual project contracts. Generally:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-secondary-600">
                    <li>Deposit required before work commencement</li>
                    <li>Progress payments tied to project milestones</li>
                    <li>Final payment upon completion and handover</li>
                    <li>Late payments may incur interest charges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Warranties and Guarantees</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    We provide warranties on our workmanship and equipment as per manufacturer specifications.
                    Warranty periods vary by product and service type and are detailed in project contracts.
                    Warranty does not cover damage from misuse, negligence, or acts of nature beyond our control.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Limitation of Liability</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    Eleyson Ghana Limited shall not be liable for indirect, incidental, special, or consequential
                    damages arising from the use of our services or products. Our total liability is limited to
                    the amount paid for the specific service or product giving rise to the claim.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Intellectual Property</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    All content on this website including text, graphics, logos, and software is the property
                    of Eleyson Ghana Limited and is protected by copyright and other intellectual property laws.
                    You may not reproduce, distribute, or create derivative works without our express permission.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Governing Law</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    These terms are governed by the laws of Ghana. Any disputes arising from these terms or
                    our services shall be resolved in the courts of Ghana.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Contact Information</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                    <p className="text-secondary-700">
                      <strong>Eleyson Ghana Limited</strong><br />
                      Nii John Tetth ST, Teiman, Abokobi Road, Oyarifa, Ghana<br />
                      Email: info@eleysonghana.com<br />
                      Phone: +233 244 973 788
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link href="/">
                <Button variant="outline">
                  ← Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
