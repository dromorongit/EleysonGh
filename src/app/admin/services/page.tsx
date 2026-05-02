'use client';

import { useState, useEffect, FormEvent } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { EmptyState } from '@/components/admin/EmptyState';
import { Plus, Edit, Trash2, X, Loader2 } from 'lucide-react';
import { ImageUploader } from '@/components/admin/ImageUploader';

interface Service {
  _id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  featuredImage: string;
  status: string;
  createdAt: string;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Solar',
    shortDescription: '',
    longDescription: '',
    featuredImage: '',
    status: 'draft' as 'draft' | 'published',
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/admin/services');
      const data = await res.json();
      setServices(data.services || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      slug: name === 'title' ? value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : prev.slug,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const url = editingService ? `/api/admin/services/${editingService.slug}` : '/api/admin/services';
      const method = editingService ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { fetchServices(); resetForm(); }
      else { alert('Failed to save service'); }
    } catch (error) { console.error('Error saving service:', error); alert('Error saving service'); }
    finally { setSubmitting(false); }
  };

  const resetForm = () => {
    setFormData({ title: '', slug: '', category: 'Solar', shortDescription: '', longDescription: '', featuredImage: '', status: 'draft' });
    setEditingService(null);
    setShowForm(false);
  };

   const handleEdit = (service: Service) => {
     setEditingService(service);
     setFormData({ title: service.title, slug: service.slug, category: service.category, shortDescription: '', longDescription: '', featuredImage: service.featuredImage, status: service.status as 'draft' | 'published' });
     setShowForm(true);
   };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try { const res = await fetch(`/api/admin/services/${slug}`, { method: 'DELETE' }); if (res.ok) { fetchServices(); } }
    catch (error) { console.error('Error deleting service:', error); }
  };

  const toggleStatus = async (service: Service) => {
    try { const res = await fetch(`/api/admin/services/${service.slug}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: service.status === 'published' ? 'draft' : 'published' }) }); if (res.ok) { fetchServices(); } }
    catch (error) { console.error('Error toggling status:', error); }
  };

  return (
    <AdminLayout title="Services">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Manage Services</h2>
          <button onClick={() => { resetForm(); setShowForm(true); }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a192f] text-white rounded-lg hover:bg-[#1e3a5f] transition-colors text-sm font-medium">
            <Plus className="h-4 w-4" /> Add Service
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">{editingService ? 'Edit Service' : 'Add Service'}</h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600"><X className="h-5 w-5" /></button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                    <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none bg-gray-50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none">
                    <option value="Solar">Solar</option>
                    <option value="Hydro">Hydro</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Training">Training</option>
                    <option value="Energy Audit">Energy Audit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
                  <textarea name="shortDescription" value={formData.shortDescription} onChange={handleInputChange} required rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Long Description</label>
                  <textarea name="longDescription" value={formData.longDescription} onChange={handleInputChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
                  <ImageUploader
                    value={formData.featuredImage}
                    onChange={(url) => setFormData(prev => ({ ...prev, featuredImage: url }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select name="status" value={formData.status} onChange={handleInputChange} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button type="button" onClick={resetForm} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] disabled:opacity-50">
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />} {editingService ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : services.length === 0 ? (
          <EmptyState title="No services yet" description="Get started by creating your first service." actionLabel="Add Service" onAction={() => setShowForm(true)} />
        ) : (
          <DataTable headers={['Title', 'Category', 'Status', 'Actions']}>
            {services.map((service) => (
              <tr key={service._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{service.title}</div>
                  <div className="text-sm text-gray-500">{service.slug}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleStatus(service)}><StatusBadge status={service.status} /></button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleEdit(service)} className="text-blue-600 hover:text-blue-800"><Edit className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(service.slug)} className="text-red-600 hover:text-red-800"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </DataTable>
        )}
      </div>
    </AdminLayout>
  );
}