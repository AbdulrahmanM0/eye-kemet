import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value || null;
  const url = req.nextUrl.clone();

  if (token && (url.pathname.startsWith("/signin") || url.pathname.startsWith("/signup"))) {
    url.pathname = "/"; 
    return NextResponse.redirect(url);
  }

//   const protectedRoutes = ["/dashboard", "/profile", "/settings"]; 
//   if (!token && protectedRoutes.some((path) => url.pathname.startsWith(path))) {
//     url.pathname = "/signin";
//     return NextResponse.redirect(url);
//   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/profile/:path*", 
    "/settings/:path*", 
    "/signin/:path*",  
    "/signup/:path*",   
  ],
};