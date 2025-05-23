import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuth = !!token;
  const pathname = request.nextUrl.pathname;
  const userIdFromToken = token?.sub;

  // Check if the path starts with /user/
  const isUserRoute = pathname.startsWith('/user/');

  // If accessing auth pages while authenticated, redirect to user's dashboard
  if ((pathname.startsWith("/login") || pathname.startsWith("/register")) && isAuth && userIdFromToken) {
    return NextResponse.redirect(new URL(`/user/${userIdFromToken}/dashboard`, request.url));
  }

  // If accessing user routes while not authenticated, redirect to login
  if (isUserRoute && !isAuth) {
    let from = pathname;
    if (request.nextUrl.search) {
      from += request.nextUrl.search;
    }
    return NextResponse.redirect(
      new URL(`/login?from=${encodeURIComponent(from)}`, request.url)
    );
  }

  // If accessing user routes while authenticated, check if the userId in the path matches the authenticated user's ID
  if (isUserRoute && isAuth && userIdFromToken) {
    const pathSegments = pathname.split('/');
    // Find the index of 'user' segment and get the next segment as pathUserId
    const userSegmentIndex = pathSegments.findIndex(segment => segment === 'user');
    const pathUserId = userSegmentIndex !== -1 && userSegmentIndex + 1 < pathSegments.length 
      ? pathSegments[userSegmentIndex + 1] 
      : null;

    // If there's no userId in the path or it doesn't match the authenticated user's ID
    if (!pathUserId || pathUserId !== userIdFromToken) {
       // Redirect to the authenticated user's dashboard
       return NextResponse.redirect(new URL(`/user/${userIdFromToken}/dashboard`, request.url));
    }
  }

   // Handle the base /user route for authenticated users
   if (pathname === '/user' && isAuth && userIdFromToken) {
     return NextResponse.redirect(new URL(`/user/${userIdFromToken}/dashboard`, request.url));
   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/user", // Also match the base /user path
    "/login",
    "/register",
  ],
}; 