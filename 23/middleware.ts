import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory store for rate limiting
const rateLimit = new Map()

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // Maximum requests per window

export function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check if the user is authenticated
    const authToken = request.cookies.get('admin_auth_token')?.value
    
    // If no auth token or invalid token, redirect to login
    if (!authToken) {
      const url = new URL('/admin/login', request.url)
      url.searchParams.set('from', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }
    
    // In a real app, you would verify the token here
    // For now, we'll just check if it exists
    try {
      // Simple check - in production you would verify JWT or session
      if (authToken !== process.env.ADMIN_API_KEY) {
        throw new Error('Invalid token')
      }
    } catch (error) {
      // If token verification fails, redirect to login
      const url = new URL('/admin/login', request.url)
      url.searchParams.set('from', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }
  }
  
  // Only apply rate limiting to the contact API
  if (request.nextUrl.pathname === '/api/contact') {
    // Get client IP from headers or use 'anonymous' if not available
    const ip = request.headers.get('x-forwarded-for') || 'anonymous'
    const now = Date.now()
    const windowStart = now - RATE_LIMIT_WINDOW

    // Clean up old entries
    for (const [key, timestamp] of rateLimit.entries()) {
      if (timestamp < windowStart) {
        rateLimit.delete(key)
      }
    }

    // Count requests in current window
    const requestCount = [...rateLimit.entries()]
      .filter(([key, timestamp]) => key.startsWith(ip) && timestamp > windowStart)
      .length

    if (requestCount >= MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({
          error: 'Too many requests, please try again later.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '60',
          },
        }
      )
    }

    // Store this request
    rateLimit.set(`${ip}-${now}`, now)
  }

  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ['/admin/:path*', '/api/contact']
} 