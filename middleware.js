// middleware.js (Website 2 ke liye)
import { NextResponse } from "next/server";

export function middleware(request) {
  const ua = request.headers.get("user-agent");

  // Bot patterns check karein
  const botPatterns = [
    'facebookexternalhit',
    'googlebot',
    'bot',
    'crawler',
    'spider',
    'slurp',
    'telegrambot'
  ];

  // Check karein User Agent me bot shabd hai ya nahi
  const isBot = botPatterns.some(pattern => ua && ua.toLowerCase().includes(pattern));

  // Agar Bot hai to Block Kar do (403 Error)
  if (isBot) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Agar Real User hai to allow karein
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
