import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, getToolEntries } from "@/lib/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getCategories, getCategoryLabels } from "@/lib/tool-categories";
import { siteConfig } from "@/lib/site-config";
import "../../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Toolyflow",
    template: "%s | Toolyflow",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  manifest: "/manifest.webmanifest",
  keywords: [
    "online tools",
    "free online tools",
    "text tools",
    "creator tools",
    "case converter",
    "qr code generator",
    "bio generator",
    "nickname generator",
    "text cleaner",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: new URL(siteConfig.ogImagePath, siteConfig.url),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [new URL(siteConfig.ogImagePath, siteConfig.url)],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleRootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);
  const categoryLabels = getCategoryLabels(typedLocale);
  const categories = getCategories(typedLocale).map((category) => ({
    slug: category.slug,
    name: category.navLabel,
  }));
  const tools = getToolEntries(typedLocale).map((tool) => ({
    slug: tool.slug,
    name: tool.name,
  }));

  return (
    <html
      lang={typedLocale}
      className={`${plusJakartaSans.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full bg-[color:var(--color-background)] text-[color:var(--color-foreground)] antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader
            locale={typedLocale}
            labels={{
              tools: dictionary.header.tools,
              textTools: categories[0].name,
              creatorTools: categories[1].name,
              about: dictionary.header.about,
              contact: dictionary.header.contact,
              language: dictionary.shared.language,
              menu: dictionary.header.menu,
              go: dictionary.shared.go,
            }}
          />
          <div className="flex-1">{children}</div>
          <SiteFooter
            locale={typedLocale}
            labels={{
              ...dictionary.footer,
              categoriesHeading: categoryLabels.categoriesHeading,
            }}
            categories={categories}
            tools={tools}
          />
        </div>
        <Script
          id="adsense-account"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2143362801140173"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
