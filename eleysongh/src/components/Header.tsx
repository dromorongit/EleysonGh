'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-neutral-200'
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl shadow-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                Eleyson Ghana
              </span>
              <span className="text-xs text-neutral-600 font-medium tracking-wide">
                LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-700 transition-all duration-200 rounded-lg hover:bg-primary-50 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
              </Link>
            ))}
          </nav>

          {/* CTA and Contact */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+233XXXXXXXXX"
                className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-primary-700 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-primary-700 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-secondary-50 group-hover:bg-secondary-100 transition-colors">
                  <MessageCircle size={16} />
                </div>
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
            <Link
              href="/request-quote"
              className="btn-primary text-sm px-6 py-3"
            >
              Request Quote
              <ChevronDown size={16} className="rotate-[-90deg]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md">
            <nav className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 space-y-4 border-t border-neutral-200 mt-6">
                <a
                  href="tel:+233XXXXXXXXX"
                  className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary-50">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium">Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:text-primary-700 hover:bg-secondary-50 rounded-lg transition-colors"
                >
                  <div className="p-2 rounded-lg bg-secondary-50">
                    <MessageCircle size={18} />
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </a>
                <Link
                  href="/request-quote"
                  className="block w-full btn-primary text-center py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Request Quote
                  <ChevronDown size={16} className="rotate-[-90deg] ml-2" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;