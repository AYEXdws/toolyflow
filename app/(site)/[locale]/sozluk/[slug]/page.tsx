import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { DictionaryWordPage } from "@/components/dictionary/dictionary-pages";
import {
  getDictionaryWordBySlug,
  getRelatedDictionaryWords,
} from "@/lib/dictionary";
import { siteConfig } from "@/lib/site-config";

type DictionaryWordRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: DictionaryWordRouteProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (locale !== "tr") {
    return {};
  }

  const word = await getDictionaryWordBySlug(slug);

  if (!word) {
    return {};
  }

  const description = `${word.kelime} ne demek? ${word.anlam.slice(0, 120).trim()}${
    word.anlam.length > 120 ? "..." : ""
  }`;
  const title = `${word.kelime} anlamı — Türkçe Sözlük | Toolyflow`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: title },
    description,
    keywords: [
      word.kelime,
      `${word.kelime} anlamı`,
      `${word.kelime} ne demek`,
      "türkçe sözlük",
      word.kategori,
    ],
    alternates: {
      canonical: `/tr/sozluk/${word.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/tr/sozluk/${word.slug}`,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "article",
      images: [new URL(siteConfig.ogImagePath, siteConfig.url)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL(siteConfig.ogImagePath, siteConfig.url)],
    },
  };
}

export default async function DictionaryEntryPage({
  params,
}: DictionaryWordRouteProps) {
  const { locale, slug } = await params;

  if (locale !== "tr") {
    notFound();
  }

  await connection();

  const word = await getDictionaryWordBySlug(slug);

  if (!word) {
    notFound();
  }

  const relatedWords = await getRelatedDictionaryWords(word.kategori, word.slug, 4);

  return <DictionaryWordPage word={word} relatedWords={relatedWords} />;
}
