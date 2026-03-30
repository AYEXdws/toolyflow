import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import {
  getAllLocalizedPaths,
  getPathForRoute,
} from "@/lib/paths";
import { categorySlugs, staticSlugs, toolSlugs } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { getAllDictionaryWordSlugs } from "@/lib/dictionary";
import {
  calculatorSlugs,
} from "@/lib/tr-calculators";

const now = new Date();

function buildAlternates(route: Parameters<typeof getAllLocalizedPaths>[0]) {
  return {
    languages: Object.fromEntries(
      Object.entries(getAllLocalizedPaths(route)).map(([locale, path]) => [
        locale,
        `${siteConfig.url}${path}`,
      ])
    ),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedRoutes = locales.flatMap((locale) => [
    {
      url: `${siteConfig.url}${getPathForRoute(locale, { kind: "home" })}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
      alternates: buildAlternates({ kind: "home" }),
    },
    ...staticSlugs.map((slug) => ({
      url: `${siteConfig.url}${getPathForRoute(locale, { kind: "static", slug })}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: buildAlternates({ kind: "static", slug }),
    })),
    ...categorySlugs.map((slug) => ({
      url: `${siteConfig.url}${getPathForRoute(locale, { kind: "category", slug })}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: buildAlternates({ kind: "category", slug }),
    })),
    ...toolSlugs.map((slug) => ({
      url: `${siteConfig.url}${getPathForRoute(locale, { kind: "tool", slug })}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: buildAlternates({ kind: "tool", slug }),
    })),
    {
      url: `${siteConfig.url}${getPathForRoute(locale, { kind: "calculator-category" })}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: buildAlternates({ kind: "calculator-category" }),
    },
    ...calculatorSlugs.map((slug) => ({
      url: `${siteConfig.url}${getPathForRoute(locale, { kind: "calculator", slug })}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: buildAlternates({ kind: "calculator", slug }),
    })),
  ]);

  const dictionarySlugs = await getAllDictionaryWordSlugs();
  const dictionaryRoutes = [
    {
      url: `${siteConfig.url}/tr/sozluk`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...dictionarySlugs.map((slug) => ({
      url: `${siteConfig.url}/tr/sozluk/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  return [...localizedRoutes, ...dictionaryRoutes];
}
