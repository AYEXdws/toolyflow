import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import {
  getAllLocalizedPaths,
  getCategoryPath,
  getHomePath,
  getStaticPath,
  getToolPath,
} from "@/lib/paths";
import { categorySlugs, staticSlugs, toolSlugs } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { getAllDictionaryWordSlugs } from "@/lib/dictionary";
import {
  getTrCalculatorCategoryPath,
  getTrCalculatorPath,
  trCalculatorSlugs,
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
      url: `${siteConfig.url}${getHomePath(locale)}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
      alternates: buildAlternates({ kind: "home" }),
    },
    ...staticSlugs.map((slug) => ({
      url: `${siteConfig.url}${getStaticPath(locale, slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: buildAlternates({ kind: "static", slug }),
    })),
    ...categorySlugs.map((slug) => ({
      url: `${siteConfig.url}${getCategoryPath(locale, slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: buildAlternates({ kind: "category", slug }),
    })),
    ...toolSlugs.map((slug) => ({
      url: `${siteConfig.url}${getToolPath(locale, slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: buildAlternates({ kind: "tool", slug }),
    })),
  ]);

  const trCalculatorRoutes = [
    {
      url: `${siteConfig.url}${getTrCalculatorCategoryPath()}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...trCalculatorSlugs.map((slug) => ({
      url: `${siteConfig.url}${getTrCalculatorPath(slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

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

  return [...localizedRoutes, ...trCalculatorRoutes, ...dictionaryRoutes];
}
