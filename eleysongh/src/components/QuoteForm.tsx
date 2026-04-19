'use client';

import { useState } from 'react';
import { quoteSchema, type QuoteFormData } from '@/lib/validations';

const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: '',
    specificService: '',
    location: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    projectDescription: '',
  });
  const [errors, setErrors] = useState<Partial<QuoteFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const validatedData = quoteSchema.parse(formData);
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          serviceCategory: '',
          specificService: '',
          location: '',
          projectType: '',
          budgetRange: '',
          timeline: '',
          projectDescription: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        const zodError = error as any;
        const fieldErrors: Partial<QuoteFormData> = {};
        zodError.errors.forEach((err: any) => {
          fieldErrors[err.path[0] as keyof QuoteFormData] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                errors.fullName ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="serviceCategory" className="block text-sm font-medium text-slate-700 mb-2">
              Service Category *
            </label>
            <select
              id="serviceCategory"
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                errors.serviceCategory ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            >
              <option value="">Select a category</option>
              <option value="Solar Engineering">Solar Engineering</option>
              <option value="Hydrogeological Engineering">Hydrogeological Engineering</option>
              <option value="Integrated Solutions">Integrated Solutions</option>
            </select>
            {errors.serviceCategory && <p className="mt-1 text-sm text-red-600">{errors.serviceCategory}</p>}
          </div>

          <div>
            <label htmlFor="specificService" className="block text-sm font-medium text-slate-700 mb-2">
              Specific Service
            </label>
            <input
              type="text"
              id="specificService"
              name="specificService"
              value={formData.specificService}
              onChange={handleChange}
              placeholder="e.g., Solar Panel Installation, Borehole Drilling"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
              Project Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, Region, Ghana"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                errors.location ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            />
            {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                errors.projectType ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            >
              <option value="">Select project type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Agricultural">Agricultural</option>
              <option value="Government">Government</option>
              <option value="Institutional">Institutional</option>
            </select>
            {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-700 mb-2">
              Budget Range
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select budget range</option>
              <option value="Under ₵50,000">Under ₵50,000</option>
              <option value="₵50,000 - ₵200,000">₵50,000 - ₵200,000</option>
              <option value="₵200,000 - ₵500,000">₵200,000 - ₵500,000</option>
              <option value="₵500,000 - ₵1,000,000">₵500,000 - ₵1,000,000</option>
              <option value="Over ₵1,000,000">Over ₵1,000,000</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
              Desired Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="ASAP">As soon as possible</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="Planning phase">Still in planning phase</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="projectDescription" className="block text-sm font-medium text-slate-700 mb-2">
            Project Description *
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={6}
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Please provide detailed information about your project requirements, including specific goals, challenges, and any other relevant details..."
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
              errors.projectDescription ? 'border-red-500' : 'border-slate-300'
            }`}
            required
          />
          {errors.projectDescription && <p className="mt-1 text-sm text-red-600">{errors.projectDescription}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting Quote Request...' : 'Request Detailed Quote'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Quote request submitted successfully!</p>
          <p className="text-green-700 text-sm mt-1">
            Thank you for your interest. Our team will review your requirements and provide a detailed quote within 24-48 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">There was an error submitting your quote request.</p>
          <p className="text-red-700 text-sm mt-1">
            Please try again or contact us directly. We're here to help with your project needs.
          </p>
        </div>
      )}
    </form>
  );
};

export default QuoteForm;