import type { MetadataRoute } from "next";

import { locales, localizePath } from "@/lib/i18n";
import { categorySlugs, staticSlugs, toolSlugs } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

const now = new Date();

function buildAlternates(slug?: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${siteConfig.url}${localizePath(locale, slug)}`])
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = locales.flatMap((locale) => [
    {
      url: `${siteConfig.url}${localizePath(locale)}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: buildAlternates(),
    },
    ...staticSlugs.map((slug) => ({
      url: `${siteConfig.url}${localizePath(locale, slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: buildAlternates(slug),
    })),
    ...categorySlugs.map((slug) => ({
      url: `${siteConfig.url}${localizePath(locale, slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.85 : 0.75,
      alternates: buildAlternates(slug),
    })),
    ...toolSlugs.map((slug) => ({
      url: `${siteConfig.url}${localizePath(locale, slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.9 : 0.8,
      alternates: buildAlternates(slug),
    })),
  ]);

  return localizedRoutes;
}
