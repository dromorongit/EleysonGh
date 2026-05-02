'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  Package,
  Wrench,
  FileText,
  MessageSquareQuote,
  Mail,
  Users,
  Image,
  Settings,
  LogOut,
  X,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/services', label: 'Services', icon: Wrench },
  { href: '/admin/blog', label: 'Blog / Insights', icon: FileText },
  { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { href: '/admin/quote-requests', label: 'Quote Requests', icon: Mail },
  { href: '/admin/contact-inquiries', label: 'Contact Inquiries', icon: Users },
  { href: '/admin/newsletter', label: 'Newsletter', icon: Users },
  { href: '/admin/media', label: 'Media', icon: Image },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-[#0a192f]">
        <div className="flex min-h-0 flex-1 flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-3 px-6 border-b border-[#1e3a5f]">
            <div className="h-8 w-8 rounded-full bg-[#c9a227] flex items-center justify-center">
              <span className="text-[#0a192f] font-bold text-sm">E</span>
            </div>
            <span className="text-white font-semibold text-lg">Eleyson Admin</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#c9a227] text-[#0a192f]'
                      : 'text-gray-300 hover:bg-[#1e3a5f] hover:text-white'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="border-t border-[#1e3a5f] p-3">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-y-0 left-0 z-30 w-64 bg-[#0a192f] lg:hidden">
          <div className="flex min-h-0 flex-1 flex-col">
            {/* Header with close button */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-[#1e3a5f]">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#c9a227] flex items-center justify-center">
                  <span className="text-[#0a192f] font-bold text-sm">E</span>
                </div>
                <span className="text-white font-semibold text-lg">Eleyson Admin</span>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#c9a227] text-[#0a192f]'
                        : 'text-gray-300 hover:bg-[#1e3a5f] hover:text-white'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="border-t border-[#1e3a5f] p-3">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#1e3a5f] hover:text-white transition-colors"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
