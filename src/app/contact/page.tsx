"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Share2,
} from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Button,
  Section,
  Container,
  Card,
  CardHeader,
  CardContent,
} from "@/components";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // FormSubmit handles the submission, we just need to show a success message
    // The form will redirect to a thank you page, but we'll show a loading state
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Create a hidden iframe for submission to avoid page navigation
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    try {
      const response = await fetch("https://formsubmit.co/eleysonghana.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
      document.body.removeChild(iframe);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[50vh] flex items-center">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6"
              variants={fadeInUp}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Ready to discuss your engineering project? Get in touch with our
              experts. We're here to help you find the perfect solution for your
              energy and water needs.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Details */}
      <Section>
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+233244973788"
                      className="text-secondary-600 hover:text-primary-600 transition-colors block"
                    >
                      +233 244 973 788
                    </a>
                    <a
                      href="tel:+233302507889"
                      className="text-secondary-600 hover:text-primary-600 transition-colors block"
                    >
                      +233 302 507 889
                    </a>
                    <a
                      href="tel:+233204981687"
                      className="text-secondary-600 hover:text-primary-600 transition-colors block"
                    >
                      +233 204 981 687
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@eleysonghana.com"
                      className="text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      info@eleysonghana.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Office Location
                    </h3>
                    <p className="text-secondary-600">Nii John Tetth ST, Teiman, Abokobi Road, Oyarifa, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-secondary-600">
                      Monday - Friday: 8:00 AM - 5:00PM
                    </p>
                    <p className="text-secondary-600">
                      Saturday: 9:00 AM - 4:00PM
                    </p>
                    <p className="text-secondary-600">
                      Sunday: 10:00AM - 2:00PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Follow Us
                    </h3>
                    <div
                      className="flex space-x-4"
                      aria-label="Social media links"
                    >
                      <Link
                        href="https://www.facebook.com/eleysonghana"
                        className="text-primary-600 hover:text-gold transition-colors"
                        aria-label="Facebook"
                      >
                        <FaFacebookF className="w-5 h-5" aria-hidden="true" />
                      </Link>
                      <Link
                        href="https://www.linkedIn.com/in/eleysonghana/"
                        className="text-primary-600 hover:text-gold transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
                      </Link>
                      <Link
                        href="https://www.x.com/eleysonghana/"
                        className="text-primary-600 hover:text-gold transition-colors"
                        aria-label="X"
                      >
                        <FaXTwitter className="w-5 h-5" aria-hidden="true" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/eleysonghana/"
                        className="text-primary-600 hover:text-gold transition-colors"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="w-5 h-5" aria-hidden="true" />
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@eleysonghana/"
                        className="text-primary-600 hover:text-gold transition-colors"
                        aria-label="TikTok"
                      >
                        <FaTiktok className="w-5 h-5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a href="tel:+233244973788">
                  <Button size="lg" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/233244973788"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-serif font-bold text-primary-900">
                    Send us a Message
                  </h3>
                  <p className="text-secondary-600">
                    We'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-secondary-600">
                        Thank you for contacting us. We'll respond within 24
                        hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      className="space-y-6"
                      action="https://formsubmit.co/eleysonghana.com"
                      method="POST"
                      onSubmit={handleSubmit}
                    >
                      {/* Hidden fields for FormSubmit */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Contact Inquiry from Eleyson Website"
                      />
                      <input type="hidden" name="_replyto" value="" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            required
                            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            required
                            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="Solar Energy Solutions">
                            Solar Energy Solutions
                          </option>
                          <option value="Hydro & Water Solutions">
                            Hydro & Water Solutions
                          </option>
                          <option value="Energy Audits">Energy Audits</option>
                          <option value="Products">Products</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-secondary-50">
        <Container>
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-8">
              Visit Our Office
            </h2>
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-energy-100 rounded-lg max-w-4xl mx-auto">
              {/* Google Maps Embed */}
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDsh-Z6hRhVh3Te8kZo0oZuwe1C4Ez5YaI&q=5.7426399,-0.1957862&zoom=15"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
