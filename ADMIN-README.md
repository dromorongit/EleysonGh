# Eleyson Ghana Limited - Phase 2 Admin System & CMS

## Overview

This Phase 2 implementation adds a secure, scalable admin dashboard and CMS backend to the existing Eleyson Ghana Limited premium frontend website. The admin system allows authorized users to manage website content, projects, products, blog posts, testimonials, inquiries, and quote requests without changing the existing public website design.

## Quick Start

### 1. Set up Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
# Database (required)
MONGODB_URI=mongodb://localhost:27017/eleyson-ghana
# Or use MongoDB Atlas: MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/eleyson-ghana

# Authentication (required - use a strong random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Site URL (required)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Cloudinary (optional - for media uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Seed the Database

Run the seed script to create the initial admin user and sample data:

```bash
npm run seed
```

**Default Admin Credentials:**
- Email: `admin@eleysonghana.com`
- Password: `ChangeMeImmediately123!`

**IMPORTANT: Change the default password immediately after first login!**

### 4. Start the Development Server

```bash
npm run dev
```

- Public website: http://localhost:3000
- Admin login: http://localhost:3000/admin/login
- Admin dashboard: http://localhost:3000/admin

## Files Created/Modified

### Database & Models
- `src/lib/db.ts` - MongoDB connection with caching
- `src/models/AdminUser.ts` - Admin user model
- `src/models/Project.ts` - Project model
- `src/models/Product.ts` - Product model
- `src/models/Service.ts` - Service model
- `src/models/BlogPost.ts` - Blog post model
- `src/models/Testimonial.ts` - Testimonial model
- `src/models/QuoteRequest.ts` - Quote request model
- `src/models/ContactInquiry.ts` - Contact inquiry model
- `src/models/NewsletterSubscriber.ts` - Newsletter subscriber model
- `src/models/SiteSettings.ts` - Site settings model

### Authentication
- `src/lib/auth.ts` - JWT token generation and verification
- `src/lib/adminAuth.ts` - Admin route protection helper
- `src/middleware.ts` - Next.js middleware for route protection
- `src/app/api/admin/auth/login/route.ts` - Login API
- `src/app/api/admin/auth/logout/route.ts` - Logout API

### Admin Components
- `src/components/admin/AdminLayout.tsx` - Admin page layout
- `src/components/admin/Sidebar.tsx` - Admin sidebar navigation
- `src/components/admin/AdminHeader.tsx` - Admin header
- `src/components/admin/StatCard.tsx` - Statistics card component
- `src/components/admin/DataTable.tsx` - Data table component
- `src/components/admin/StatusBadge.tsx` - Status badge component
- `src/components/admin/EmptyState.tsx` - Empty state component

### Admin Pages
- `src/app/admin/login/page.tsx` - Admin login page
- `src/app/admin/page.tsx` - Admin dashboard
- `src/app/admin/projects/page.tsx` - Projects management
- `src/app/admin/products/page.tsx` - Products management
- `src/app/admin/services/page.tsx` - Services management
- `src/app/admin/blog/page.tsx` - Blog management
- `src/app/admin/testimonials/page.tsx` - Testimonials management
- `src/app/admin/quote-requests/page.tsx` - Quote requests inbox
- `src/app/admin/contact-inquiries/page.tsx` - Contact inquiries inbox
- `src/app/admin/newsletter/page.tsx` - Newsletter subscribers
- `src/app/admin/media/page.tsx` - Media library
- `src/app/admin/settings/page.tsx` - Site settings

### API Routes (Admin)
- `src/app/api/admin/projects/route.ts` - Projects CRUD
- `src/app/api/admin/projects/[slug]/route.ts` - Single project CRUD
- `src/app/api/admin/products/route.ts` - Products CRUD
- `src/app/api/admin/products/[slug]/route.ts` - Single product CRUD
- `src/app/api/admin/services/route.ts` - Services CRUD
- `src/app/api/admin/services/[slug]/route.ts` - Single service CRUD
- `src/app/api/admin/blog/route.ts` - Blog posts CRUD
- `src/app/api/admin/blog/[slug]/route.ts` - Single blog post CRUD
- `src/app/api/admin/testimonials/route.ts` - Testimonials CRUD
- `src/app/api/admin/testimonials/[id]/route.ts` - Single testimonial CRUD
- `src/app/api/admin/quote-requests/route.ts` - Quote requests list
- `src/app/api/admin/quote-requests/[id]/route.ts` - Quote request update/delete
- `src/app/api/admin/contact-inquiries/route.ts` - Contact inquiries list
- `src/app/api/admin/contact-inquiries/[id]/route.ts` - Contact inquiry update/delete
- `src/app/api/admin/newsletter/route.ts` - Newsletter subscribers

### API Routes (Public)
- `src/app/api/projects/route.ts` - Public projects fetch (published only)
- `src/app/api/products/route.ts` - Public products fetch (published only)
- `src/app/api/blog/route.ts` - Public blog posts fetch (published only)
- `src/app/api/testimonials/route.ts` - Public testimonials fetch (published only)
- `src/app/api/quote-request/route.ts` - Public quote request submission
- `src/app/api/contact/route.ts` - Public contact form submission
- `src/app/api/newsletter/route.ts` - Public newsletter subscription

### Public Frontend Integration
- `src/app/projects/page.tsx` - Updated to fetch from CMS with fallback

### Scripts & Config
- `scripts/seed.ts` - Database seed script
- `.env.local.example` - Environment variables template
- `package.json` - Added seed script

## Admin Routes

| Route | Description |
|-------|-------------|
| `/admin/login` | Admin login page |
| `/admin` | Dashboard with statistics |
| `/admin/projects` | Manage projects |
| `/admin/products` | Manage products |
| `/admin/services` | Manage services |
| `/admin/blog` | Manage blog posts |
| `/admin/testimonials` | Manage testimonials |
| `/admin/quote-requests` | View quote requests |
| `/admin/contact-inquiries` | View contact inquiries |
| `/admin/newsletter` | Manage newsletter subscribers |
| `/admin/media` | Media library |
| `/admin/settings` | Site settings |

## Database Models

### AdminUser
- name, email, passwordHash, role (ADMIN/EDITOR), timestamps

### Project
- title, slug, category (Solar/Hydro/Energy/Other), location, clientType, shortDescription, challenge, solution, impact, technicalSpecs, featuredImage, galleryImages, isFeatured, status (draft/published), timestamps

### Product
- name, slug, category, shortDescription, longDescription, specifications, benefits, useCases, priceOptional, images, isFeatured, status (draft/published), timestamps

### Service
- title, slug, category (Solar/Hydro/Maintenance/Training/Energy Audit), shortDescription, longDescription, features, processSteps, featuredImage, status (draft/published), timestamps

### BlogPost
- title, slug, category, excerpt, content, featuredImage, author, status (draft/published), publishedAt, timestamps

### Testimonial
- clientName, clientRole, company, quote, rating (1-5), imageOptional, isFeatured, status (draft/published), timestamps

### QuoteRequest
- fullName, companyName, email, phone, serviceType, projectType, location, budgetRange, preferredContactMethod, message, status (new/contacted/in_progress/closed), timestamps

### ContactInquiry
- fullName, email, phone, subject, message, status (new/read/replied/closed), timestamps

### NewsletterSubscriber
- email, source, timestamps

### SiteSettings
- companyName, tagline, phone, whatsapp, email, address, socialLinks, seoTitle, seoDescription, timestamps

## How Public Pages Connect to CMS Data

1. **Projects Page** (`/projects`): Fetches published projects from `/api/projects`. If no CMS data exists, shows elegant placeholder content.

2. **Products Page** (`/products`): Can fetch published products from `/api/products`. Falls back to existing static content.

3. **Blog/Insights Page** (`/insights`): Can fetch published blog posts from `/api/blog`. Falls back to existing static content.

4. **Testimonials Page** (`/testimonials`): Can fetch published testimonials from `/api/testimonials`. Falls back to existing static content.

5. **Quote Request Form**: Submits to `/api/quote-request` which stores in QuoteRequest collection.

6. **Contact Form**: Submits to `/api/contact` which stores in ContactInquiry collection.

7. **Newsletter Signup**: Submits to `/api/newsletter` which stores in NewsletterSubscriber collection.

**Fallback Rule**: If database has no content, the existing polished placeholder/sample content is shown so the frontend never looks empty.

## Security

- All `/admin` routes are protected by Next.js middleware
- JWT tokens stored in httpOnly cookies
- Passwords hashed with bcrypt (12 rounds)
- Server-side validation with Zod on all form submissions
- Admin API routes require valid authentication token
- Public API routes only return published content

## Deployment (Railway)

1. Create a MongoDB database (MongoDB Atlas recommended)
2. Set environment variables in Railway dashboard
3. Connect your GitHub repository
4. Deploy - Railway will automatically run `npm run build`

## Limitations & Next Steps

1. **Image Uploads**: Currently uses URL-based image references. Cloudinary integration is prepared but not fully implemented. Next step: Add file upload component with Cloudinary API.

2. **Rich Text Editor**: Blog posts and long descriptions use plain textareas. Next step: Integrate a rich text editor like TipTap or Quill.

3. **Pagination**: Admin lists show all items. Next step: Add proper pagination for large datasets.

4. **Search & Filtering**: Basic status filtering exists. Next step: Add full-text search and advanced filtering.

5. **Email Notifications**: Form submissions are stored but no email alerts are sent. Next step: Integrate Resend or SendGrid for admin notifications.

6. **Analytics Dashboard**: Basic statistics shown. Next step: Add charts and trend analytics.

7. **Role-based Access**: ADMIN and EDITOR roles exist but have same permissions. Next step: Implement granular permissions.

8. **Public Page Integration**: Only the projects page is fully integrated. Next step: Update products, insights, and testimonials pages to fetch from CMS.
