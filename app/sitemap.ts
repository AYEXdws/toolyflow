import type { MetadataRoute } from "next";

import { locales, localizePath } from "@/lib/i18n";
import { staticSlugs, toolSlugs } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = locales.flatMap((locale) => [
    {
      url: `${siteConfig.url}${localizePath(locale)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${siteConfig.url}${localizePath(item)}`])
        ),
      },
    },
    ...staticSlugs.map((slug) => ({
      url: `${siteConfig.url}${localizePath(locale, slug)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${siteConfig.url}${localizePath(item, slug)}`])
        ),
      },
    })),
    ...toolSlugs.map((slug) => ({
      url: `${siteConfig.url}${localizePath(locale, slug)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${siteConfig.url}${localizePath(item, slug)}`])
        ),
      },
    })),
  ]);

  return localizedRoutes;
}
