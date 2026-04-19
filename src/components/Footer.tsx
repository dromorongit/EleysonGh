import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Button } from "./Button";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-serif font-bold">Eleyson Ghana</span>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed">
              Engineering the Future of Energy & Water. Premium solar and hydrogeological solutions
              serving Ghana and West Africa with technical excellence and reliability.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-300 hover:text-accent-400 transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-primary-300 hover:text-accent-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-primary-300 hover:text-accent-400 transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-300 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solar-solutions" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/hydro-water-solutions" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Hydro & Water Solutions
                </Link>
              </li>
              <li>
                <Link href="/energy-audits" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Energy Audits
                </Link>
              </li>
              <li>
                <Link href="/maintenance-support" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link href="/training-workshops" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Training & Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-300">+233 XX XXX XXXX</p>
                  <p className="text-primary-300">+233 XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <p className="text-primary-300">info@eleysonghana.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <p className="text-primary-300">
                  Accra, Ghana<br />
                  West Africa
                </p>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <Button variant="accent" className="w-full">
                Request a Quote
              </Button>
              <Button variant="outline" className="w-full border-primary-300 text-primary-300 hover:bg-primary-800">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm">
              © 2024 Eleyson Ghana Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-primary-300 hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-300 hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}