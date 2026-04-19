'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-500 rounded"></div>
            <span className="text-xl font-bold">Eleyson Ghana Limited</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA and Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+233XXXXXXXXX"
              className="flex items-center space-x-1 text-sm hover:text-amber-400"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              className="flex items-center space-x-1 text-sm hover:text-amber-400"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/request-quote"
              className="bg-amber-500 text-slate-900 px-4 py-2 rounded hover:bg-amber-400 transition-colors font-semibold"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 hover:text-amber-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="tel:+233XXXXXXXXX"
                  className="flex items-center space-x-2 py-2 hover:text-amber-400"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  className="flex items-center space-x-2 py-2 hover:text-amber-400"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/request-quote"
                  className="block bg-amber-500 text-slate-900 px-4 py-2 rounded hover:bg-amber-400 transition-colors font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Request Quote
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