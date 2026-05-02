'use client';

import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { EmptyState } from '@/components/admin/EmptyState';
import { Eye, Trash2, X } from 'lucide-react';

interface QuoteRequest {
  _id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectType: string;
  location: string;
  budgetRange: string;
  preferredContactMethod: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminQuoteRequestsPage() {
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null);

  const fetchRequests = async () => {
    try {
      const res = await fetch('/api/admin/quote-requests');
      const data = await res.json();
      setRequests(data.requests || []);
    } catch (error) {
      console.error('Error fetching quote requests:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRequests(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this quote request?')) return;
    try {
      const res = await fetch(`/api/admin/quote-requests/${id}`, { method: 'DELETE' });
      if (res.ok) { fetchRequests(); }
    } catch (error) { console.error('Error deleting quote request:', error); }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/admin/quote-requests/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (res.ok) { fetchRequests(); }
    } catch (error) { console.error('Error updating status:', error); }
  };

  return (
    <AdminLayout title="Quote Requests">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Manage Quote Requests</h2>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : requests.length === 0 ? (
          <EmptyState title="No quote requests yet" description="Quote requests from the website will appear here." />
        ) : (
          <DataTable headers={['Name', 'Email', 'Service', 'Location', 'Status', 'Date', 'Actions']}>
            {requests.map((req) => (
              <tr key={req._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{req.fullName}</div>
                  <div className="text-sm text-gray-500">{req.companyName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.serviceType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={req.status}
                    onChange={(e) => updateStatus(req._id, e.target.value)}
                    className="text-xs border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(req.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setSelectedRequest(req)} className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(req._id)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </DataTable>
        )}

        {selectedRequest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">Quote Request Details</h3>
                <button onClick={() => setSelectedRequest(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="text-sm text-gray-900">{selectedRequest.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Company</p>
                    <p className="text-sm text-gray-900">{selectedRequest.companyName || '-'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-sm text-gray-900">{selectedRequest.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="text-sm text-gray-900">{selectedRequest.phone || '-'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Service Type</p>
                    <p className="text-sm text-gray-900">{selectedRequest.serviceType || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Project Type</p>
                    <p className="text-sm text-gray-900">{selectedRequest.projectType || '-'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-sm text-gray-900">{selectedRequest.location || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Budget Range</p>
                    <p className="text-sm text-gray-900">{selectedRequest.budgetRange || '-'}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Preferred Contact</p>
                  <p className="text-sm text-gray-900">{selectedRequest.preferredContactMethod || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Message</p>
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedRequest.message || '-'}</p>
                </div>
                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedRequest(null)}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}