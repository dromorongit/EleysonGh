"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Solar Solutions", href: "/solar-solutions" },
      { name: "Hydro & Water Solutions", href: "/hydro-water-solutions" },
      { name: "Energy Audits", href: "/energy-audits" },
      { name: "Maintenance & Support", href: "/maintenance-support" },
      { name: "Training & Workshops", href: "/training-workshops" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Products", href: "/products" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-serif font-bold text-primary-900">
                Eleyson Ghana
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <button
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="flex items-center space-x-1 text-secondary-700 hover:text-primary-800 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-secondary-700 hover:text-primary-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && solutionsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-primary-100 py-2"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-800"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="accent" size="sm">
              Request Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-secondary-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-primary-100">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <div className="font-medium text-secondary-900 mb-2">
                      {item.name}
                    </div>
                    <div className="ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-secondary-700 hover:text-primary-800"
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
                    className="block text-secondary-700 hover:text-primary-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-primary-100 space-y-3">
              <Button variant="outline" className="w-full justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button className="w-full justify-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button variant="accent" className="w-full justify-center">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}