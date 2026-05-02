import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

// Admin routes that require authentication
const adminRoutes = ['/admin'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for an admin route
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

  if (isAdminRoute) {
    // Allow access to login page without authentication
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Get token from cookie
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      // Redirect to login if no token
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Verify token
    const payload = verifyToken(token);
    if (!payload) {
      // Invalid token, redirect to login
      const loginUrl = new URL('/admin/login', request.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('admin_token');
      return response;
    }

    // Valid token, allow access
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
