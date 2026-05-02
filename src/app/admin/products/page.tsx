'use client';

import { useState, useEffect, FormEvent } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { EmptyState } from '@/components/admin/EmptyState';
import { Plus, Edit, Trash2, X, Loader2, Star } from 'lucide-react';
import { ImageUploader } from '@/components/admin/ImageUploader';

interface Product {
  _id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  priceOptional: string;
  images: string[];
  isFeatured: boolean;
  status: string;
  createdAt: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: '',
    shortDescription: '',
    longDescription: '',
    priceOptional: '',
    images: [] as string[],
    isFeatured: false,
    status: 'draft' as 'draft' | 'published',
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      slug: name === 'name' ? value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : prev.slug,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const url = editingProduct ? `/api/admin/products/${editingProduct.slug}` : '/api/admin/products';
      const method = editingProduct ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { fetchProducts(); resetForm(); }
      else { alert('Failed to save product'); }
    } catch (error) { console.error('Error saving product:', error); alert('Error saving product'); }
    finally { setSubmitting(false); }
  };

  const resetForm = () => {
    setFormData({ name: '', slug: '', category: '', shortDescription: '', longDescription: '', priceOptional: '', images: [], isFeatured: false, status: 'draft' });
    setEditingProduct(null);
    setShowForm(false);
  };

   const handleEdit = (product: Product) => {
     setEditingProduct(product);
     setFormData({ name: product.name, slug: product.slug, category: product.category, shortDescription: '', longDescription: '', priceOptional: '', images: product.images || [], isFeatured: product.isFeatured, status: product.status as 'draft' | 'published' });
     setShowForm(true);
   };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try { const res = await fetch(`/api/admin/products/${slug}`, { method: 'DELETE' }); if (res.ok) { fetchProducts(); } }
    catch (error) { console.error('Error deleting product:', error); }
  };

  const toggleFeatured = async (product: Product) => {
    try { const res = await fetch(`/api/admin/products/${product.slug}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isFeatured: !product.isFeatured }) }); if (res.ok) { fetchProducts(); } }
    catch (error) { console.error('Error toggling featured:', error); }
  };

  const toggleStatus = async (product: Product) => {
    try { const res = await fetch(`/api/admin/products/${product.slug}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: product.status === 'published' ? 'draft' : 'published' }) }); if (res.ok) { fetchProducts(); } }
    catch (error) { console.error('Error toggling status:', error); }
  };

  return (
    <AdminLayout title="Products">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Manage Products</h2>
          <button onClick={() => { resetForm(); setShowForm(true); }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a192f] text-white rounded-lg hover:bg-[#1e3a5f] transition-colors text-sm font-medium">
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">{editingProduct ? 'Edit Product' : 'Add Product'}</h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600"><X className="h-5 w-5" /></button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                    <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none bg-gray-50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input type="text" name="category" value={formData.category} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (Optional)</label>
                  <input type="text" name="priceOptional" value={formData.priceOptional} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Images</label>
                  <div className="space-y-2">
                    {formData.images.map((url, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <ImageUploader
                          value={url}
                          onChange={(newUrl) => {
                            const newImages = [...formData.images];
                            newImages[index] = newUrl;
                            setFormData(prev => ({ ...prev, images: newImages }));
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newImages = [...formData.images];
                            newImages.splice(index, 1);
                            setFormData(prev => ({ ...prev, images: newImages }));
                          }}
                          className="text-xs text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      <Plus className="h-3 w-3" /> Add Another Image
                    </button>
                  </div>
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
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />} {editingProduct ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : products.length === 0 ? (
          <EmptyState title="No products yet" description="Get started by creating your first product." actionLabel="Add Product" onAction={() => setShowForm(true)} />
        ) : (
          <DataTable headers={['Name', 'Category', 'Status', 'Featured', 'Actions']}>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.slug}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleStatus(product)}><StatusBadge status={product.status} /></button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleFeatured(product)} className="text-gray-400 hover:text-[#c9a227]">
                    <Star className={`h-5 w-5 ${product.isFeatured ? 'fill-[#c9a227] text-[#c9a227]' : ''}`} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-800"><Edit className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(product.slug)} className="text-red-600 hover:text-red-800"><Trash2 className="h-4 w-4" /></button>
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