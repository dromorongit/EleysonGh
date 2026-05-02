'use client';

import { useState, useEffect, FormEvent } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { EmptyState } from '@/components/admin/EmptyState';
import { Plus, Edit, Trash2, X, Loader2, Star } from 'lucide-react';
import { ImageUploader } from '@/components/admin/ImageUploader';

interface Testimonial {
  _id: string;
  clientName: string;
  clientRole: string;
  company: string;
  quote: string;
  rating: number;
  imageOptional: string;
  isFeatured: boolean;
  status: string;
  createdAt: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    clientName: '',
    clientRole: '',
    company: '',
    quote: '',
    rating: 5,
    imageOptional: '',
    isFeatured: false,
    status: 'published' as 'draft' | 'published',
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/admin/testimonials');
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTestimonials(); }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const url = editingTestimonial ? `/api/admin/testimonials/${editingTestimonial._id}` : '/api/admin/testimonials';
      const method = editingTestimonial ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { fetchTestimonials(); resetForm(); }
      else { alert('Failed to save testimonial'); }
    } catch (error) { console.error('Error saving testimonial:', error); alert('Error saving testimonial'); }
    finally { setSubmitting(false); }
  };

  const resetForm = () => {
    setFormData({ clientName: '', clientRole: '', company: '', quote: '', rating: 5, imageOptional: '', isFeatured: false, status: 'published' });
    setEditingTestimonial(null);
    setShowForm(false);
  };

   const handleEdit = (testimonial: Testimonial) => {
     setEditingTestimonial(testimonial);
     setFormData({ clientName: testimonial.clientName, clientRole: testimonial.clientRole, company: testimonial.company, quote: testimonial.quote, rating: testimonial.rating, imageOptional: testimonial.imageOptional, isFeatured: testimonial.isFeatured, status: testimonial.status as 'draft' | 'published' });
     setShowForm(true);
   };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    try { const res = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' }); if (res.ok) { fetchTestimonials(); } }
    catch (error) { console.error('Error deleting testimonial:', error); }
  };

  const toggleFeatured = async (testimonial: Testimonial) => {
    try { const res = await fetch(`/api/admin/testimonials/${testimonial._id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isFeatured: !testimonial.isFeatured }) }); if (res.ok) { fetchTestimonials(); } }
    catch (error) { console.error('Error toggling featured:', error); }
  };

  const toggleStatus = async (testimonial: Testimonial) => {
    try { const res = await fetch(`/api/admin/testimonials/${testimonial._id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: testimonial.status === 'published' ? 'draft' : 'published' }) }); if (res.ok) { fetchTestimonials(); } }
    catch (error) { console.error('Error toggling status:', error); }
  };

  return (
    <AdminLayout title="Testimonials">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Manage Testimonials</h2>
          <button onClick={() => { resetForm(); setShowForm(true); }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a192f] text-white rounded-lg hover:bg-[#1e3a5f] transition-colors text-sm font-medium">
            <Plus className="h-4 w-4" /> Add Testimonial
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">{editingTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600"><X className="h-5 w-5" /></button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client Name *</label>
                    <input type="text" name="clientName" value={formData.clientName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client Role</label>
                    <input type="text" name="clientRole" value={formData.clientRole} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quote *</label>
                  <textarea name="quote" value={formData.quote} onChange={handleInputChange} required rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
                  <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} min={1} max={5} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image (Optional)</label>
                  <ImageUploader
                    value={formData.imageOptional}
                    onChange={(url) => setFormData(prev => ({ ...prev, imageOptional: url }))}
                  />
                </div>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleInputChange} className="rounded border-gray-300 text-[#0a192f] focus:ring-[#0a192f]" />
                    <span className="text-sm text-gray-700">Featured</span>
                  </label>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select name="status" value={formData.status} onChange={handleInputChange} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none">
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button type="button" onClick={resetForm} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] disabled:opacity-50">
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />} {editingTestimonial ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : testimonials.length === 0 ? (
          <EmptyState title="No testimonials yet" description="Get started by adding your first testimonial." actionLabel="Add Testimonial" onAction={() => setShowForm(true)} />
        ) : (
          <DataTable headers={['Client', 'Company', 'Rating', 'Status', 'Featured', 'Actions']}>
            {testimonials.map((testimonial) => (
              <tr key={testimonial._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{testimonial.clientName}</div>
                  <div className="text-sm text-gray-500">{testimonial.clientRole}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{testimonial.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'fill-[#c9a227] text-[#c9a227]' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleStatus(testimonial)}><StatusBadge status={testimonial.status} /></button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleFeatured(testimonial)} className="text-gray-400 hover:text-[#c9a227]">
                    <Star className={`h-5 w-5 ${testimonial.isFeatured ? 'fill-[#c9a227] text-[#c9a227]' : ''}`} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleEdit(testimonial)} className="text-blue-600 hover:text-blue-800"><Edit className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(testimonial._id)} className="text-red-600 hover:text-red-800"><Trash2 className="h-4 w-4" /></button>
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