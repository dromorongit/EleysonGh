'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { StatCard } from '@/components/admin/StatCard';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { FolderKanban, Package, FileText, Mail, Users, MessageSquareQuote, Plus } from 'lucide-react';
import Link from 'next/link';

interface Stats {
  totalProjects: number;
  totalProducts: number;
  totalBlogPosts: number;
  totalQuoteRequests: number;
  unreadInquiries: number;
  totalSubscribers: number;
  recentProjects: any[];
  recentQuoteRequests: any[];
  recentInquiries: any[];
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [projectsRes, productsRes, blogRes, quotesRes, inquiriesRes, newsletterRes] = await Promise.all([
          fetch('/api/admin/projects?limit=5'),
          fetch('/api/admin/products?limit=1'),
          fetch('/api/admin/blog?limit=1'),
          fetch('/api/admin/quote-requests?limit=5'),
          fetch('/api/admin/contact-inquiries?limit=5'),
          fetch('/api/admin/newsletter?limit=1'),
        ]);

        const projectsData = await projectsRes.json();
        const productsData = await productsRes.json();
        const blogData = await blogRes.json();
        const quotesData = await quotesRes.json();
        const inquiriesData = await inquiriesRes.json();
        const newsletterData = await newsletterRes.json();

        setStats({
          totalProjects: projectsData.total || 0,
          totalProducts: productsData.total || 0,
          totalBlogPosts: blogData.total || 0,
          totalQuoteRequests: quotesData.total || 0,
          unreadInquiries: inquiriesData.inquiries?.filter((i: any) => i.status === 'new').length || 0,
          totalSubscribers: newsletterData.total || 0,
          recentProjects: projectsData.projects || [],
          recentQuoteRequests: quotesData.requests || [],
          recentInquiries: inquiriesData.inquiries || [],
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <AdminLayout title="Dashboard">
        <div className="text-center py-12 text-gray-500">Loading...</div>
      </AdminLayout>
    );
  }

  if (!stats) {
    return (
      <AdminLayout title="Dashboard">
        <div className="text-center py-12 text-red-500">Error loading dashboard data.</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Projects"
            value={stats.totalProjects}
            icon={<FolderKanban className="h-6 w-6" />}
            color="navy"
          />
          <StatCard
            title="Total Products"
            value={stats.totalProducts}
            icon={<Package className="h-6 w-6" />}
            color="gold"
          />
          <StatCard
            title="Blog Posts"
            value={stats.totalBlogPosts}
            icon={<FileText className="h-6 w-6" />}
            color="blue"
          />
          <StatCard
            title="Quote Requests"
            value={stats.totalQuoteRequests}
            icon={<Mail className="h-6 w-6" />}
            color="green"
          />
          <StatCard
            title="Unread Inquiries"
            value={stats.unreadInquiries}
            icon={<MessageSquareQuote className="h-6 w-6" />}
            color="red"
          />
          <StatCard
            title="Newsletter Subscribers"
            value={stats.totalSubscribers}
            icon={<Users className="h-6 w-6" />}
            color="navy"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/admin/projects"
              className="flex items-center gap-2 p-3 bg-[#0a192f] text-white rounded-lg hover:bg-[#1e3a5f] transition-colors text-sm font-medium"
            >
              <Plus className="h-4 w-4" />
              New Project
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-2 p-3 bg-[#c9a227] text-[#0a192f] rounded-lg hover:bg-[#b8911f] transition-colors text-sm font-medium"
            >
              <Plus className="h-4 w-4" />
              New Product
            </Link>
            <Link
              href="/admin/blog"
              className="flex items-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <Plus className="h-4 w-4" />
              New Post
            </Link>
            <Link
              href="/admin/testimonials"
              className="flex items-center gap-2 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <Plus className="h-4 w-4" />
              New Testimonial
            </Link>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
            <Link href="/admin/projects" className="text-sm text-[#0a192f] hover:underline">
              View All
            </Link>
          </div>
          {stats.recentProjects.length === 0 ? (
            <p className="text-gray-500 text-sm">No projects yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {stats.recentProjects.map((project: any) => (
                    <tr key={project._id}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{project.title}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{project.category}</td>
                      <td className="px-4 py-3 text-sm"><StatusBadge status={project.status} /></td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Quote Requests */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Quote Requests</h2>
            <Link href="/admin/quote-requests" className="text-sm text-[#0a192f] hover:underline">
              View All
            </Link>
          </div>
          {stats.recentQuoteRequests.length === 0 ? (
            <p className="text-gray-500 text-sm">No quote requests yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {stats.recentQuoteRequests.map((req: any) => (
                    <tr key={req._id}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{req.fullName}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{req.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{req.serviceType}</td>
                      <td className="px-4 py-3 text-sm"><StatusBadge status={req.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Contact Inquiries */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Contact Inquiries</h2>
            <Link href="/admin/contact-inquiries" className="text-sm text-[#0a192f] hover:underline">
              View All
            </Link>
          </div>
          {stats.recentInquiries.length === 0 ? (
            <p className="text-gray-500 text-sm">No contact inquiries yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {stats.recentInquiries.map((inquiry: any) => (
                    <tr key={inquiry._id}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{inquiry.fullName}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{inquiry.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{inquiry.subject}</td>
                      <td className="px-4 py-3 text-sm"><StatusBadge status={inquiry.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
