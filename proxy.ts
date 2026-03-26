import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const firstSegment = segments[0];

  if (!isLocale(firstSegment)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|opengraph-image|twitter-image|.*\\..*).*)",
  ],
};
