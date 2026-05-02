'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { Image as ImageIcon, Upload, ExternalLink } from 'lucide-react';

export default function AdminMediaPage() {
  return (
    <AdminLayout title="Media Library">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Media Library</h2>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a192f] text-white rounded-lg hover:bg-[#1e3a5f] transition-colors text-sm font-medium">
            <Upload className="h-4 w-4" /> Upload Media
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="text-center py-12">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Media Library</h3>
            <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
              Upload and manage images, documents, and other media files. Images can be uploaded directly
              or integrated with Cloudinary for optimized delivery.
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                To enable Cloudinary integration, add the following environment variables:
              </p>
              <div className="mt-3 bg-gray-50 rounded-lg p-4 text-left max-w-md mx-auto">
                <code className="text-xs text-gray-700">
                  CLOUDINARY_CLOUD_NAME=your_cloud_name<br />
                  CLOUDINARY_API_KEY=your_api_key<br />
                  CLOUDINARY_API_SECRET=your_api_secret
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Image Usage Guidelines</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227] mt-0.5">•</span>
              <span>Use JPG or WebP format for photos and complex images</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227] mt-0.5">•</span>
              <span>Use PNG for images with transparency or simple graphics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227] mt-0.5">•</span>
              <span>Optimize images before uploading (recommended: under 500KB)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227] mt-0.5">•</span>
              <span>Use descriptive filenames (e.g., solar-installation-accra.jpg)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a227] mt-0.5">•</span>
              <span>Store images in /public/images/ folder for static assets</span>
            </li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}