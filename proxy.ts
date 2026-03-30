import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { getCategoryPath, getToolPath, resolveLocalizedRoute } from "@/lib/paths";
import { categorySlugs, isToolSlug, type CategorySlug } from "@/lib/routes";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 301);
  }

  const firstSegment = segments[0];

  if (!isLocale(firstSegment)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
      301
    );
  }

  const locale = firstSegment as Locale;
  const rest = segments.slice(1);

  if (rest.length === 1 && isToolSlug(rest[0])) {
    const target = getToolPath(locale, rest[0]);

    if (target !== pathname) {
      return NextResponse.redirect(new URL(target, request.url), 301);
    }
  }

  if (rest.length === 1 && categorySlugs.includes(rest[0] as CategorySlug)) {
    const target = getCategoryPath(locale, rest[0] as CategorySlug);

    if (target !== pathname) {
      return NextResponse.redirect(new URL(target, request.url), 301);
    }
  }

  const resolved = resolveLocalizedRoute(locale, rest);

  if (resolved?.redirectTo && resolved.redirectTo !== pathname) {
    return NextResponse.redirect(new URL(resolved.redirectTo, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|opengraph-image|twitter-image|.*\\..*).*)",
  ],
};
