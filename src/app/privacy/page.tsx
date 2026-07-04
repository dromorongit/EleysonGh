"use client";

import { motion } from "framer-motion";
import { Button, Section, Container, Card, CardHeader, CardContent } from "@/components";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed">
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
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Introduction</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    Eleyson Ghana Limited ("we," "our," or "us") is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                    when you visit our website eleysonghana.com or use our engineering services.
                  </p>
                  <p className="text-secondary-600 mt-4">
                    Please read this privacy policy carefully. By using our website or services, you consent
                    to the practices described in this policy.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Information We Collect</h2>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">Personal Information</h3>
                  <p className="text-secondary-600 mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-secondary-600 mb-6">
                    <li>Fill out a contact form or request a quote</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Register for training or workshops</li>
                    <li>Correspond with us via email or phone</li>
                    <li>Engage with our social media content</li>
                  </ul>
                  <p className="text-secondary-600">This information may include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-secondary-600">
                    <li>Name, email address, and phone number</li>
                    <li>Company/organization name</li>
                    <li>Project details and requirements</li>
                    <li>Billing and payment information</li>
                    <li>Communication preferences</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">How We Use Your Information</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 mb-4">
                    We use the information we collect for legitimate business purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-secondary-600">
                    <li>Providing and improving our engineering services</li>
                    <li>Responding to your inquiries and quote requests</li>
                    <li>Sending project updates and technical information</li>
                    <li>Processing payments and managing accounts</li>
                    <li>Sending marketing communications (with your consent)</li>
                    <li>Analyzing website usage to improve user experience</li>
                    <li>Complying with legal and regulatory requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Information Sharing</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    We do not sell, trade, or rent your personal information to third parties. We may share
                    your information with trusted service providers who assist us in operating our website and
                    conducting business (such as payment processors, email service providers), provided they
                    agree to keep your information confidential.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Data Security</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    We implement appropriate security measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction. However, no method of
                    transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Your Rights</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-secondary-600">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Object to processing of your personal data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-serif font-bold text-primary-900">Contact Us</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
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
