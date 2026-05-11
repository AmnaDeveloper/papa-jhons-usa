import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // 1. Log all requests with timestamp
    const now = new Date().toISOString();
    console.log(`🌐 [${now}] ${request.method} ${request.nextUrl.pathname}`);

    // 2. Setup response
    const response = NextResponse.next();

    // 3. Add X-Request-Time header
    response.headers.set("X-Request-Time", now);

    // 4. Redirect for best-pizza-delivery-near-me
    if (request.nextUrl.pathname === "/posts/best-pizza-delivery-near-me") {
        return NextResponse.redirect(new URL("/best-pizza-delivery-near-me", request.url), 301);
    }

    // 5. Handle CORS headers for /api/* routes
    if (request.nextUrl.pathname.startsWith("/api/")) {
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set(
            "Access-Control-Allow-Methods",
            "GET, POST, PUT, DELETE, OPTIONS"
        );
        response.headers.set(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization"
        );

        // Handle OPTIONS preflight requests
        if (request.method === "OPTIONS") {
            return NextResponse.json({}, { headers: response.headers });
        }
    }

    return response;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/dynamic (dynamic loading logic)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - \.(svg|png|jpg|jpeg|gif|webp|avif)$
         */
        "/((?!_next/dynamic|_next/static|_next/image|favicon.ico|robots.txt|ads.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
    ],
};
