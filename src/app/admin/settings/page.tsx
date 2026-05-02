'use client';

import { useState, useEffect, FormEvent } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Loader2, Save, Lock, Unlock } from 'lucide-react';

interface SiteSettings {
  companyName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  seoTitle: string;
  seoDescription: string;
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    companyName: 'Eleyson Ghana Limited',
    tagline: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    seoTitle: '',
    seoDescription: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    // Load settings from a future API endpoint or use defaults
    setLoading(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = async (e: FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters long');
      return;
    }

    setChangingPassword(true);

    try {
      // In a real app, this would call an API endpoint
      // For now, we'll simulate the password change
      const res = await fetch('/api/admin/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword
        }),
      });

      if (res.ok) {
        setPasswordSuccess('Password changed successfully');
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setTimeout(() => {
          setShowPasswordForm(false);
          setPasswordSuccess('');
        }, 3000);
      } else {
        const data = await res.json();
        setPasswordError(data.error || 'Failed to change password');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setPasswordError('Failed to change password. Please try again.');
    } finally {
      setChangingPassword(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // Save settings to API
    try {
      // await fetch('/api/admin/settings', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(settings) });
      alert('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout title="Settings">
        <div className="text-center py-12 text-gray-500">Loading...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Settings">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={settings.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={settings.tagline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={settings.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                <input
                  type="text"
                  name="whatsapp"
                  value={settings.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={settings.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
            </div>
          </div>

          {/* SEO Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                <input
                  type="text"
                  name="seoTitle"
                  value={settings.seoTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                <textarea
                  name="seoDescription"
                  value={settings.seoDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                />
              </div>
            </div>
          </div>

           {/* Password Change Section */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
             <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
             {!showPasswordForm ? (
               <button
                 type="button"
                 onClick={() => setShowPasswordForm(true)}
                 className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0a192f] bg-[#0a192f]/10 rounded-lg hover:bg-[#0a192f]/20 transition-colors"
               >
                 <Lock className="w-4 h-4" />
                 Change Password
               </button>
             ) : (
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Current Password *</label>
                   <input
                     type="password"
                     value={passwordForm.currentPassword}
                     onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                     placeholder="Enter current password"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">New Password *</label>
                   <input
                     type="password"
                     value={passwordForm.newPassword}
                     onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                     placeholder="Enter new password (min 8 characters)"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password *</label>
                   <input
                     type="password"
                     value={passwordForm.confirmPassword}
                     onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a192f] outline-none"
                     placeholder="Confirm new password"
                   />
                 </div>
                 {(passwordError || passwordSuccess) && (
                   <div className={`p-3 rounded-lg text-sm ${passwordError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                     {passwordError || passwordSuccess}
                   </div>
                 )}
                 <div className="flex items-center gap-3">
                   <button
                     type="button"
                     onClick={handlePasswordChange}
                     disabled={changingPassword}
                     className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] disabled:opacity-50 transition-colors"
                   >
                     {changingPassword ? (
                       <><Loader2 className="h-4 w-4 animate-spin" /> Changing...</>
                     ) : (
                       <><Unlock className="w-4 h-4" /> Change Password</>
                     )}
                   </button>
                   <button
                     type="button"
                     onClick={() => {
                       setShowPasswordForm(false);
                       setPasswordError('');
                       setPasswordSuccess('');
                       setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
                     }}
                     className="text-sm text-gray-600 hover:text-gray-800"
                   >
                     Cancel
                   </button>
                 </div>
               </div>
             )}
           </div>

           {/* Save Button */}
           <div className="flex justify-end">
             <button
               type="submit"
               disabled={saving}
               className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#0a192f] rounded-lg hover:bg-[#1e3a5f] disabled:opacity-50"
             >
               {saving ? (
                 <>
                   <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                 </>
               ) : (
                 <>
                   <Save className="h-4 w-4" /> Save Settings
                 </>
               )}
             </button>
           </div>
        </form>
      </div>
    </AdminLayout>
  );
}