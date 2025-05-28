import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get user info from cookie
  const userCookie = request.cookies.get('user')
  
  console.log(`Middleware: Path: ${request.nextUrl.pathname}`);
  console.log(`Middleware: User Cookie: ${userCookie ? userCookie.value : 'Not found'}`);

  // Check if accessing dashboard without login
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!userCookie || !userCookie.value) {
      // Redirect to login if no valid user cookie
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    try {
      // Verify the cookie value is valid JSON
      const userData = JSON.parse(userCookie.value)
      if (!userData || !userData._id || !userData.email) {
        // Invalid user data structure
        return NextResponse.redirect(new URL('/login', request.url))
      }
    } catch (error) {
      // Invalid JSON in cookie
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Check if trying to access login page while already logged in
  if (request.nextUrl.pathname.startsWith('/login')) {
    if (userCookie && userCookie.value) {
      try {
        const userData = JSON.parse(userCookie.value)
        if (userData && userData.id && userData.email) {
          // Valid user data, redirect to dashboard
          return NextResponse.redirect(new URL('/dashboard', request.url))
        }
      } catch (error) {
        // Invalid JSON in cookie, allow access to login
        return NextResponse.next()
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
} 