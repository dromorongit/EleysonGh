"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/solutions",
    children: [
      { name: "Solar Solutions", href: "/solar-solutions" },
      { name: "Borehole Drilling", href: "/borehole-drilling" },
      { name: "Energy Audits", href: "/energy-audits" },
      { name: "Maintenance & Support", href: "/maintenance-support" },
      { name: "Backup Systems", href: "/backup-systems" },
      { name: "Training & Workshops", href: "/training-workshops" },
    ],
  },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/eleysonghana", icon: FaFacebookF },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/eleyson-ghana-limited", icon: FaLinkedinIn },
  { name: "X", href: "https://www.x.com/eleysonghana/", icon: FaXTwitter },
  { name: "Instagram", href: "https://www.instagram.com/eleysonghana/", icon: FaInstagram },
  { name: "TikTok", href: "https://www.tiktok.com/@eleysonghana/", icon: FaTiktok },
];

const phoneNumbers = [
  { text: "+233 244 973 788", href: "tel:+233244973788" },
  { text: "+233 302 507 889", href: "tel:+233302507889" },
  { text: "+233 204 981 687", href: "tel:+233204981687" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300 border-b border-primary-100", isScrolled || !isHome ? "bg-white shadow-lg backdrop-blur-md" : "bg-white/95 backdrop-blur-sm")} role="banner">
      {/* Desktop Two-Column Layout */}
      <div className="hidden lg:flex">
        {/* Left: Logo Column */}
        <div className="w-60 xl:w-72 flex-shrink-0 bg-white flex items-center justify-center border-r border-primary-100">
          <Link href="/" className="flex items-center justify-center p-6" aria-label="Eleyson Ghana Limited - Home">
            <Image
              src="/images/eleysonlogo.jpg"
              alt="Eleyson Ghana Limited logo"
              width={180}
              height={180}
              className="max-h-[120px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right: Contact Bar + Navigation */}
        <div className="flex-1 flex flex-col">
          {/* Top Contact Bar */}
          <div className="h-11 bg-navy text-white flex items-center px-6 xl:px-8">
            <div className="flex items-center space-x-5 text-xs w-full">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-2.5">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="w-px h-4 bg-white/20" aria-hidden="true" />

              {/* Telephone Numbers */}
              <div className="flex items-center space-x-4 flex-nowrap">
                {phoneNumbers.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center space-x-1.5 text-white/80 hover:text-gold transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              <div className="w-px h-4 bg-white/20" aria-hidden="true" />

              {/* Email */}
              <a
                href="mailto:info@eleysonghana.com"
                className="flex items-center space-x-1.5 text-white/80 hover:text-gold transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>info@eleysonghana.com</span>
              </a>

              <div className="w-px h-4 bg-white/20" aria-hidden="true" />

              {/* Location */}
              <div className="flex items-center space-x-1.5 text-white/80">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                <span>Nii John Tetth ST, Teiman, Oyarifa, Ghana</span>
              </div>
            </div>
          </div>

          {/* Main Navigation Row */}
          <div className="flex items-center justify-between h-24 px-6 xl:px-8">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-1 xl:space-x-2" role="navigation" aria-label="Main navigation">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="py-2"
                    >
                      <button
                        onFocus={() => setServicesOpen(true)}
                        onBlur={() => setServicesOpen(false)}
                        className="flex items-center space-x-1 text-secondary-700 hover:text-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-3 py-2 text-[15px] font-medium"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </button>

                      {servicesOpen && (
                        <div
                          className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-primary-100 py-2"
                          role="menu"
                          aria-label={`${item.name} submenu`}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-5 py-2.5 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-800 focus:outline-none focus:bg-primary-50"
                              role="menuitem"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-secondary-700 hover:text-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-3 py-2 text-[15px] font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <a href="tel:+233244973788" aria-label="Call us">
                <Button variant="outline" size="sm" className="px-3 py-1.5 text-xs">
                  <Phone className="w-3 h-3 mr-1.5" aria-hidden="true" />
                  <span className="sr-only">Call us</span>
                  Call
                </Button>
              </a>
              <a href="https://wa.me/233244973788" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="px-3 py-1.5 text-xs">
                  <FaWhatsapp className="w-3 h-3 mr-1.5" aria-hidden="true" />
                  <span className="sr-only">WhatsApp us</span>
                  WhatsApp
                </Button>
              </a>
              <Link href="/request-a-quote">
                <Button variant="gold" size="sm" className="px-3 py-1.5 text-xs">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Mobile Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Eleyson Ghana Limited - Home">
              <Image
                src="/images/eleysonlogo.jpg"
                alt="Eleyson Ghana Limited logo"
                width={120}
                height={120}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="p-2 text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="bg-navy border-t border-gold/20" role="navigation" aria-label="Mobile navigation">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="font-medium text-white mb-2" role="presentation">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-2" role="group" aria-label={`${item.name} submenu`}>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block text-white/90 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:rounded px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white/90 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:rounded px-2 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gold/20 space-y-3">
                <a href="tel:+233244973788" aria-label="Call us">
                  <Button variant="outline" className="w-full justify-center">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/233244973788" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full justify-center">
                    <FaWhatsapp className="w-4 h-4 mr-2" aria-hidden="true" />
                    WhatsApp
                  </Button>
                </a>
                <Link href="/request-a-quote">
                  <Button variant="gold" className="w-full justify-center">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
