'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { EmptyState } from '@/components/admin/EmptyState';
import { Trash2, Download } from 'lucide-react';

interface Subscriber {
  _id: string;
  email: string;
  source: string;
  createdAt: string;
}

export default function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubscribers = async () => {
    try {
      const res = await fetch('/api/admin/newsletter');
      const data = await res.json();
      setSubscribers(data.subscribers || []);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;
    try {
      const res = await fetch('/api/admin/newsletter?id=' + id, { method: 'DELETE' });
      if (res.ok) {
        fetchSubscribers();
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  const exportCSV = () => {
    const headers = 'Email,Source,Date\n';
    const rows = subscribers
      .map(function(s) {
        return s.email + ',' + s.source + ',' + new Date(s.createdAt).toLocaleDateString();
      })
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-subscribers.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <AdminLayout title="Newsletter Subscribers">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Manage Newsletter Subscribers</h2>
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a192f] text-white rounded-lg hover:bg-[#1e3a5f] transition-colors text-sm font-medium"
          >
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : subscribers.length === 0 ? (
          <EmptyState
            title="No subscribers yet"
            description="Newsletter signups from the website will appear here."
          />
        ) : (
          <div>
            <p className="text-sm text-gray-600 mb-4">
              Total subscribers:{' '}
              <span className="font-semibold text-gray-900">{subscribers.length}</span>
            </p>
            <DataTable headers={['Email', 'Source', 'Date', 'Actions']}>
              {subscribers.map(function(sub) {
                return (
                  <tr key={sub._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {sub.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.source}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={function() { handleDelete(sub._id); }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </DataTable>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}