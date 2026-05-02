'use client';

import { useState, useEffect, FormEvent } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { EmptyState } from '@/components/admin/EmptyState';
import { Plus, Edit, Trash2, Eye, X, Loader2, Star } from 'lucide-react';
import Link from 'next/link';
import { ImageUploader } from '@/components/admin/ImageUploader';

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  clientType: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  impact: string;
  technicalSpecs: { key: string; value: string }[];
  featuredImage: string;
  galleryImages: string[];
  isFeatured: boolean;
  status: string;
  createdAt: string;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Other',
    location: '',
    clientType: '',
    shortDescription: '',
    challenge: '',
    solution: '',
    impact: '',
    featuredImage: '',
    galleryImages: [] as string[],
    isFeatured: false,
    status: 'draft' as 'draft' | 'published',
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/admin/projects');
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      slug: name === 'title' ? value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : prev.slug,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = editingProject
        ? `/api/admin/projects/${editingProject.slug}`
        : '/api/admin/projects';
      const method = editingProject ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        fetchProjects();
        resetForm();
      } else {
        alert('Failed to save project');
      }
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project');
    } finally {
      setSubmitting(false);
    }
  };

   const resetForm = () => {
     setFormData({
       title: '',
       slug: '',
       category: 'Other',
       location: '',
       clientType: '',
       shortDescription: '',
       challenge: '',
       solution: '',
       impact: '',
       featuredImage: '',
       galleryImages: [] as string[],
       isFeatured: false,
       status: 'draft',
     });
     setEditingProject(null);
     setShowForm(false);
   };

   const handleEdit = (project: Project) => {
     setEditingProject(project);
     setFormData({
       title: project.title,
       slug: project.slug,
       category: project.category,
       location: project.location,
       clientType: '',
       shortDescription: '',
       challenge: '',
       solution: '',
       impact: '',
       featuredImage: project.featuredImage || '',
       galleryImages: project.galleryImages || [],
       isFeatured: project.isFeatured,
       status: project.status as 'draft' | 'published',
     });
     setShowForm(true);
   };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`/api/admin/projects/${slug}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const toggleFeatured = async (project: Project) => {
    try {
      const res = await fetch(`/api/admin/projects/${project.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isFeatured: !project.isFeatured }),
      });
      if (res.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error('Error toggling featured:', error);
    }
  };

  const toggleStatus = async (project: Project) => {
    try {
      const res = await fetch(`/api/admin/projects/${project.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: project.status === 'published' ? 'draft' : 'published' }),
      });
      if (res.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  return (
    <AdminLayout title="Projects">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Manage Projects</h2>
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a192f] text-white rounded-lg hover:bg-[#1e3a5f] transition-colors text-sm font-medium"
          >
            <Plus className="h-4 w-4" />
            Add Project
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  {editingProject ? 'Edit Project' : 'Add Project'}
                </h3>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none bg-gray-50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                    >
                      <option value="Solar">Solar</option>
                      <option value="Hydro">Hydro</option>
                      <option value="Energy">Energy</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Challenge</label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Solution</label>
                  <textarea
                    name="solution"
                    value={formData.solution}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Impact</label>
                  <textarea
                    name="impact"
                    value={formData.impact}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                  />
                </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
                    <ImageUploader
                      value={formData.featuredImage}
                      onChange={(url) => setFormData(prev => ({ ...prev, featuredImage: url }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images</label>
                    <div className="space-y-2">
                      {formData.galleryImages.map((url, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <ImageUploader
                            value={url}
                            onChange={(newUrl) => {
                              const newGalleryImages = [...formData.galleryImages];
                              newGalleryImages[index] = newUrl;
                              setFormData(prev => ({ ...prev, galleryImages: newGalleryImages }));
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newGalleryImages = [...formData.galleryImages];
                              newGalleryImages.splice(index, 1);
                              setFormData(prev => ({ ...prev, galleryImages: newGalleryImages }));
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
                          setFormData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, ''] }));
                        }}
                        className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        <Plus className="h-3 w-3" /> Add Another Image
                      </button>
                    </div>
                  </div>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isFeatured"
                      checked={formData.isFeatured}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-[#0a192f] focus:ring-[#0a192f]"
                    />
                    <span className="text-sm text-gray-700">Featured</span>
                  </label>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] disabled:opacity-50"
                  >
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    {editingProject ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Table */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : projects.length === 0 ? (
          <EmptyState
            title="No projects yet"
            description="Get started by creating your first project."
            actionLabel="Add Project"
            onAction={() => setShowForm(true)}
          />
        ) : (
          <DataTable headers={['Title', 'Category', 'Location', 'Status', 'Featured', 'Actions']}>
            {projects.map((project) => (
              <tr key={project._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{project.title}</div>
                  <div className="text-sm text-gray-500">{project.slug}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleStatus(project)}>
                    <StatusBadge status={project.status} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => toggleFeatured(project)} className="text-gray-400 hover:text-[#c9a227]">
                    <Star className={`h-5 w-5 ${project.isFeatured ? 'fill-[#c9a227] text-[#c9a227]' : ''}`} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleEdit(project)} className="text-blue-600 hover:text-blue-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(project.slug)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
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