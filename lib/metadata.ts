import type { Metadata } from "next";

import { defaultLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type MetadataInput = {
  locale: Locale;
  localeCode: string;
  title: string;
  description: string;
  slug?: string;
  keywords?: string[];
};

export function createLocalizedMetadata({
  locale,
  localeCode,
  title,
  description,
  slug,
  keywords = [],
}: MetadataInput): Metadata {
  const path = slug ? `/${slug}` : "";
  const canonicalPath = localizePath(locale, slug);
  const fullTitle = `${title} | ${siteConfig.name}`;
  const absoluteUrl = new URL(canonicalPath, siteConfig.url);
  const socialImage = new URL(siteConfig.ogImagePath, siteConfig.url);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        locales.map((item) => [item, localizePath(item, slug)])
      ),
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
    other: {
      "x-default": localizePath(defaultLocale, slug),
      "content-path": path,
    },
  };
}
