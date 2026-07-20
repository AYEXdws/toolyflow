import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { DictionaryHomePage } from "@/components/dictionary/dictionary-pages";
import {
  getDictionaryCategoryCounts,
  getPopularDictionaryWords,
} from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { absolute: "Türkçe Sözlük | Toolyflow" },
  description:
    "Argo, deyim ve genel kullanımdaki kelimeleri ara. Anlam, örnek cümle ve ilgili kelimeleri Toolyflow Türkçe Sözlük'te keşfet.",
  keywords: [
    "türkçe sözlük",
    "kelime anlamı",
    "argo sözlük",
    "deyim anlamı",
    "örnek cümle",
  ],
  alternates: {
    canonical: "/tr/sozluk",
  },
  openGraph: {
    title: "Türkçe Sözlük | Toolyflow",
    description:
      "Argo, deyim ve genel kullanımdaki kelimeleri ara. Anlam, örnek cümle ve ilgili kelimeleri Toolyflow Türkçe Sözlük'te keşfet.",
    url: `${siteConfig.url}/tr/sozluk`,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [new URL(siteConfig.ogImagePath, siteConfig.url)],
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkçe Sözlük | Toolyflow",
    description:
      "Argo, deyim ve genel kullanımdaki kelimeleri ara. Anlam, örnek cümle ve ilgili kelimeleri Toolyflow Türkçe Sözlük'te keşfet.",
    images: [new URL(siteConfig.ogImagePath, siteConfig.url)],
  },
};

type DictionaryPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function DictionaryPage({ params }: DictionaryPageProps) {
  const { locale } = await params;

  if (locale !== "tr") {
    notFound();
  }

  await connection();

  const [popularWords, categoryCounts] = await Promise.all([
    getPopularDictionaryWords(12),
    getDictionaryCategoryCounts(),
  ]);

  return (
    <DictionaryHomePage
      popularWords={popularWords}
      categoryCounts={categoryCounts}
    />
  );
}
