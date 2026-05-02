'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { EmptyState } from '@/components/admin/EmptyState';
import { Eye, Trash2, X } from 'lucide-react';

interface ContactInquiry {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminContactInquiriesPage() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);

  const fetchInquiries = async () => {
    try {
      const res = await fetch('/api/admin/contact-inquiries');
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInquiries(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const res = await fetch(`/api/admin/contact-inquiries/${id}`, { method: 'DELETE' });
      if (res.ok) { fetchInquiries(); }
    } catch (error) { console.error('Error deleting inquiry:', error); }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/admin/contact-inquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (res.ok) { fetchInquiries(); }
    } catch (error) { console.error('Error updating status:', error); }
  };

  return (
    <AdminLayout title="Contact Inquiries">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Manage Contact Inquiries</h2>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : inquiries.length === 0 ? (
          <EmptyState title="No contact inquiries yet" description="Contact form submissions will appear here." />
        ) : (
          <DataTable headers={['Name', 'Email', 'Subject', 'Status', 'Date', 'Actions']}>
            {inquiries.map((inquiry) => (
              <tr key={inquiry._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inquiry.fullName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.subject || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={inquiry.status}
                    onChange={(e) => updateStatus(inquiry._id, e.target.value)}
                    className="text-xs border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(inquiry.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setSelectedInquiry(inquiry)} className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(inquiry._id)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </DataTable>
        )}

        {selectedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">Inquiry Details</h3>
                <button onClick={() => setSelectedInquiry(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="text-sm text-gray-900">{selectedInquiry.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-sm text-gray-900">{selectedInquiry.email}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-sm text-gray-900">{selectedInquiry.phone || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Subject</p>
                  <p className="text-sm text-gray-900">{selectedInquiry.subject || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Message</p>
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedInquiry.message || '-'}</p>
                </div>
                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button onClick={() => setSelectedInquiry(null)} className="px-4 py-2 text-sm font-medium text-white bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f]">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}