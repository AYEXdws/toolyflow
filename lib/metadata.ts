import type { Metadata } from "next";

import { type Locale } from "@/lib/i18n";
import {
  getAllLocalizedPaths,
  getPathForRoute,
  getXDefaultPath,
} from "@/lib/paths";
import type { CategorySlug, StaticSlug, ToolSlug } from "@/lib/routes";
import type { CalculatorSlug } from "@/lib/tr-calculators";
import { siteConfig } from "@/lib/site-config";

type MetadataInput = {
  locale: Locale;
  localeCode: string;
  title: string;
  description: string;
  keywords?: string[];
  route:
    | { kind: "home" }
    | { kind: "tool"; slug: ToolSlug }
    | { kind: "calculator"; slug: CalculatorSlug }
    | { kind: "calculator-category" }
    | { kind: "category"; slug: CategorySlug }
    | { kind: "static"; slug: StaticSlug };
};

export function createLocalizedMetadata({
  locale,
  localeCode,
  title,
  description,
  keywords = [],
  route,
}: MetadataInput): Metadata {
  const canonicalPath = getPathForRoute(locale, route);
  const hasBrandSuffix = title.endsWith(`| ${siteConfig.name}`);
  const fullTitle = hasBrandSuffix ? title : `${title} | ${siteConfig.name}`;
  const absoluteUrl = new URL(canonicalPath, siteConfig.url);
  const socialImage = new URL(siteConfig.ogImagePath, siteConfig.url);
  const languages = getAllLocalizedPaths(route);

  return {
    metadataBase: new URL(siteConfig.url),
    title: hasBrandSuffix ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        ...languages,
        "x-default": getXDefaultPath(route),
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: localeCode,
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}
