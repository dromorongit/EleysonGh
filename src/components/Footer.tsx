import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Link2, Settings, Package } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./Button";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 pr-8 border-r border-gold/10 last:border-r-0">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2" aria-label="Eleyson Ghana Limited - Home">
                <Image src="/images/eleysonlogo.jpg" alt="Eleyson Ghana Limited logo" width={32} height={32} className="flex-shrink-0" />
                <span className="text-xl font-serif font-bold">Eleyson Ghana</span>
              </Link>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Engineering the Future of Energy & Water. Premium solar and hydrogeological solutions
              serving Ghana and West Africa with technical excellence and reliability.
            </p>
            <div className="flex space-x-4" aria-label="Social media links">
              <Link href="https://www.facebook.com/eleysonghana" className="text-white/70 hover:text-gold transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="https://www.linkedIn.com/in/eleysonghana/" className="text-white/70 hover:text-gold transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="https://www.x.com/eleysonghana/" className="text-white/70 hover:text-gold transition-colors" aria-label="X">
                <FaXTwitter className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="https://www.instagram.com/eleysonghana/" className="text-white/70 hover:text-gold transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="https://www.tiktok.com/@eleysonghana/" className="text-white/70 hover:text-gold transition-colors" aria-label="TikTok">
                <FaTiktok className="w-5 h-5" aria-hidden="true" />
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
<Link href="/borehole-drilling" className="text-white/70 hover:text-gold transition-colors">
                   Borehole Drilling
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

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-gold" aria-hidden="true" />
              Newsletter
            </h3>
            <p className="text-white/70 text-sm">Stay updated with our latest insights and solutions.</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-gold"
                aria-label="Email address for newsletter subscription"
                required
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
              © 2026 Eleyson Ghana Limited. All rights reserved.
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