import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Home, Link2, Settings, Package } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Button } from "./Button";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 pr-8 border-r border-gold/10 last:border-r-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-serif font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-serif font-bold">Eleyson Ghana</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Engineering the Future of Energy & Water. Premium solar and hydrogeological solutions
              serving Ghana and West Africa with technical excellence and reliability.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-gold transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-gold transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-gold transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pr-8 border-r border-gold/10 last:border-r-0">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Link2 className="w-5 h-5 mr-2 text-gold" />
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-white/70 hover:text-gold transition-colors">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-gold transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-white/70 hover:text-gold transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="pr-8 border-r border-gold/10 last:border-r-0">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-gold" />
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solar-solutions" className="text-white/70 hover:text-gold transition-colors">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/hydro-water-solutions" className="text-white/70 hover:text-gold transition-colors">
                  Hydro & Water Solutions
                </Link>
              </li>
              <li>
                <Link href="/energy-audits" className="text-white/70 hover:text-gold transition-colors">
                  Energy Audits
                </Link>
              </li>
              <li>
                <Link href="/maintenance-support" className="text-white/70 hover:text-gold transition-colors">
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link href="/training-workshops" className="text-white/70 hover:text-gold transition-colors">
                  Training & Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="pr-8 border-r border-gold/10 last:border-r-0">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2 text-gold" />
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-white/70 hover:text-gold transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-gold transition-colors">
                  Inverters
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-gold transition-colors">
                  Batteries
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-gold transition-colors">
                  Water Pumps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4 pr-8 border-r border-gold/10 last:border-r-0">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-gold" />
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70">+233 XX XXX XXXX</p>
                  <p className="text-white/70">+233 XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-white/70">info@eleysonghana.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-white/70">
                  Accra, Ghana<br />
                  West Africa
                </p>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <Button variant="gold" className="w-full">
                Request a Quote
              </Button>
              <Button variant="outline" className="w-full border-white/20 text-white/70 hover:bg-white/10">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-gold" />
              Newsletter
            </h3>
            <p className="text-white/70 text-sm">Stay updated with our latest insights and solutions.</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-gold"
              />
              <Button variant="gold" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 Eleyson Ghana Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/70 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}