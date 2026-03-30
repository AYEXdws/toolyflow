import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";

import { CategoryPage } from "@/components/category-page";
import { AgeCalculatorTool } from "@/components/calculators/age-calculator";
import { BmiCalculatorTool } from "@/components/calculators/bmi-calculator";
import { CreditCalculatorTool } from "@/components/calculators/credit-calculator";
import { PercentageCalcTool } from "@/components/calculators/percentage-calc-tool";
import { RentIncreaseCalculatorTool } from "@/components/calculators/rent-increase-calculator";
import { ContentPage } from "@/components/content-page";
import { DictionarySearch } from "@/components/dictionary/dictionary-search";
import { StructuredData } from "@/components/structured-data";
import { ToolPageShell } from "@/components/tool-page-shell";
import { BioGenerator } from "@/components/tools/bio-generator";
import { CaseConverter } from "@/components/tools/case-converter";
import { ColorCodeConverter } from "@/components/tools/color-code-converter";
import { DecisionWheel } from "@/components/tools/decision-wheel";
import { DiscountCalculator } from "@/components/tools/discount-calculator";
import { HashtagGenerator } from "@/components/tools/hashtag-generator";
import { NicknameGenerator } from "@/components/tools/nickname-generator";
import { PercentageCalculator } from "@/components/tools/percentage-calculator";
import { QrGenerator } from "@/components/tools/qr-generator";
import { TextCleaner } from "@/components/tools/text-cleaner";
import { WordCounter } from "@/components/tools/word-counter";
import { getDictionary, getToolEntries, getToolEntry } from "@/lib/dictionaries";
import {
  getDictionaryCategoryCounts,
  getDictionaryWordBySlug,
  getPopularDictionaryWords,
  getRelatedDictionaryWords,
} from "@/lib/dictionary";
import { getDictionaryCategoryLabel } from "@/lib/dictionary-shared";
import { isLocale, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/metadata";
import {
  getCategoryPath,
  getCategoryStaticParams,
  getHomePath,
  getStaticPageParams,
  getToolPath,
  getToolStaticParams,
  resolveLocalizedRoute,
} from "@/lib/paths";
import {
  getCategories,
  getCategory,
  getCategoryForTool,
  getCategoryLabels,
  getToolSlugsForCategory,
} from "@/lib/tool-categories";
import { isCategorySlug, isStaticSlug, isToolSlug } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import {
  calculatorSlugs,
  getAgeCalculatorLabels,
  getBmiCalculatorLabels,
  getCalculatorCategory,
  getCalculatorCategoryPath,
  getCalculatorEntries,
  getCalculatorEntry,
  getCalculatorPath,
  getCalculatorRelatedEntries,
  getCalculatorStaticParams,
  getCreditCalculatorLabels,
  getPercentageCalcLabels,
  getRentIncreaseCalculatorLabels,
} from "@/lib/tr-calculators";

type RouteParams = {
  locale: string;
  slug?: string[];
};

type PageProps = {
  params: Promise<RouteParams>;
};

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
    { locale: "es" },
    { locale: "de" },
    { locale: "fr" },
    { locale: "pt" },
    ...getCategoryStaticParams(),
    ...getToolStaticParams(),
    ...getCalculatorStaticParams(),
    ...getStaticPageParams(),
    { locale: "tr", slug: ["sozluk"] },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale as Locale);
  const pathSegments = slug?.filter(Boolean) ?? [];

  if (locale === "tr" && pathSegments.length === 1 && pathSegments[0] === "sozluk") {
    return {
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
        locale: dictionary.localeCode,
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
  }

  if (locale === "tr" && pathSegments.length === 2 && pathSegments[0] === "sozluk") {
    const word = await getDictionaryWordBySlug(pathSegments[1]);

    if (!word) {
      return {};
    }

    const description = `${word.kelime} ne demek? ${word.anlam.slice(0, 120).trim()}${
      word.anlam.length > 120 ? "..." : ""
    }`;

    return {
      metadataBase: new URL(siteConfig.url),
      title: { absolute: `${word.kelime} anlamı — Türkçe Sözlük | Toolyflow` },
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
        title: `${word.kelime} anlamı — Türkçe Sözlük | Toolyflow`,
        description,
        url: `${siteConfig.url}/tr/sozluk/${word.slug}`,
        siteName: siteConfig.name,
        locale: dictionary.localeCode,
        type: "article",
        images: [new URL(siteConfig.ogImagePath, siteConfig.url)],
      },
      twitter: {
        card: "summary_large_image",
        title: `${word.kelime} anlamı — Türkçe Sözlük | Toolyflow`,
        description,
        images: [new URL(siteConfig.ogImagePath, siteConfig.url)],
      },
    };
  }

  const resolved = resolveLocalizedRoute(locale as Locale, slug);

  if (!resolved) {
    return {};
  }

  if (resolved.kind === "home") {
    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: dictionary.home.metaTitle,
      description: dictionary.home.metaDescription,
      keywords: dictionary.home.keywords,
      route: { kind: "home" },
    });
  }

  if (resolved.kind === "tool") {
    const tool = getToolEntry(locale, resolved.slug);

    if (!tool) {
      return {};
    }

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: tool.metaTitle,
      description: tool.metaDescription,
      keywords: tool.keywords,
      route: { kind: "tool", slug: resolved.slug },
    });
  }

  if (resolved.kind === "calculator-category") {
    const category = getCalculatorCategory(locale);

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: category.metaTitle,
      description: category.metaDescription,
      keywords: category.keywords,
      route: { kind: "calculator-category" },
    });
  }

  if (resolved.kind === "calculator") {
    const calculator = getCalculatorEntry(locale, resolved.slug);

    if (!calculator) {
      return {};
    }

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: calculator.metaTitle,
      description: calculator.metaDescription,
      keywords: calculator.keywords,
      route: { kind: "calculator", slug: resolved.slug },
    });
  }

  if (resolved.kind === "category") {
    const category = getCategory(locale, resolved.slug);

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: category.metaTitle,
      description: category.metaDescription,
      keywords: category.keywords,
      route: { kind: "category", slug: resolved.slug },
    });
  }

  if (resolved.kind === "static") {
    const page = dictionary.staticPages[resolved.slug];

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: page.metaTitle,
      description: page.metaDescription,
      keywords: page.keywords,
      route: { kind: "static", slug: resolved.slug },
    });
  }

  return {};
}

function renderUnifiedHome(locale: Locale) {
  const dictionary = getDictionary(locale);
  const categories = getCategories(locale);
  const categoryLabels = getCategoryLabels(locale);
  const emojiByCategory = {
    "creator-tools": "✍️",
    "text-tools": "📝",
    "quick-tools": "⚡",
  } as const;
  const iconMap: Record<string, string> = {
    "bio-generator": "✨",
    "nickname-generator": "🎯",
    "hashtag-generator": "#",
    "case-converter": "📝",
    "qr-generator": "⚡",
    "decision-wheel": "🎡",
    "color-code-converter": "🎨",
    "percentage-calculator": "％",
    "discount-calculator": "💸",
    "word-counter": "📏",
    "text-cleaner": "🧹",
  };
  const categoryDescriptions: Record<Locale, Record<(typeof categories)[number]["slug"], string>> = {
    tr: {
      "creator-tools": "Bio, hashtag, kullanıcı adı ve daha fazlası",
      "text-tools": "Metni dönüştür, düzenle, temizle",
      "quick-tools": "QR kod, karar çarkı, hesaplayıcılar",
    },
    en: {
      "creator-tools": "Bios, hashtags, usernames, and more",
      "text-tools": "Convert, clean, and tighten text fast",
      "quick-tools": "QR codes, decision wheels, and calculators",
    },
    es: {
      "creator-tools": "Bios, hashtags, nombres de usuario y más",
      "text-tools": "Convierte, limpia y ajusta texto rápido",
      "quick-tools": "Códigos QR, rueda de decisión y calculadoras",
    },
    de: {
      "creator-tools": "Bios, Hashtags, Usernames und mehr",
      "text-tools": "Text umwandeln, bereinigen und glätten",
      "quick-tools": "QR-Codes, Entscheidungsrad und Rechner",
    },
    fr: {
      "creator-tools": "Bios, hashtags, pseudos et plus",
      "text-tools": "Convertir, nettoyer et corriger un texte",
      "quick-tools": "QR codes, roue de décision et calculateurs",
    },
    pt: {
      "creator-tools": "Bios, hashtags, nomes de usuário e mais",
      "text-tools": "Converta, limpe e ajuste texto rápido",
      "quick-tools": "QR codes, roda de decisão e calculadoras",
    },
  };
  const groupedCategories = categories.map((category) => ({
    ...category,
    emoji: emojiByCategory[category.slug],
    href: getCategoryPath(locale, category.slug),
    summary: categoryDescriptions[locale][category.slug],
    tools: getToolEntries(locale)
      .filter((tool) => category.toolSlugs.includes(tool.slug))
      .map((tool) => ({
        ...tool,
        icon: iconMap[tool.slug] ?? "✦",
      })),
  }));
  const calculatorCategoryContent = getCalculatorCategory(locale);
  const calculatorCategory = {
    slug: "calculators",
    navLabel: calculatorCategoryContent.title,
    emoji: "🧮",
    href: getCalculatorCategoryPath(locale),
    summary: calculatorCategoryContent.description,
    toolSlugs: [...calculatorSlugs],
    tools: getCalculatorEntries(locale).map((tool) => ({
      ...tool,
      icon: tool.icon,
    })),
  };
  const homeGroups = [...groupedCategories, calculatorCategory];
  const dictionaryPromo =
    locale === "tr"
      ? {
          href: "/tr/sozluk",
          eyebrow: "Yeni bölüm",
          title: "Türkçe Sözlük",
          description:
            "Argo, deyim ve genel kullanımdaki kelimeleri ara. Anlam, örnek cümle ve benzer kelimeleri tek yerde keşfet.",
        }
      : null;

  return (
    <main className="bg-[color:var(--brand-bg)] pb-20 font-[family:var(--font-inter)] text-[color:var(--brand-text-primary)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: `${siteConfig.url}${getHomePath(locale)}`,
          description: dictionary.home.metaDescription,
          inLanguage: locale,
        }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_58%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {dictionary.home.eyebrow}
              </p>
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                <span className="block text-[color:var(--brand-text-primary)]">{dictionary.home.title}</span>
                <span className="mt-2 block text-[color:var(--brand-secondary)]">{dictionary.home.tagline}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--brand-text-secondary)] sm:text-lg sm:leading-8">
                {dictionary.home.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#tools"
                  className="inline-flex min-h-11 items-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:opacity-95 active:translate-y-px"
                >
                  {dictionary.home.primaryCta}
                </Link>
                <Link
                  href="#categories"
                  className="inline-flex min-h-11 items-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
                >
                  {dictionary.home.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="hidden rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)] lg:block">
              <div className="relative aspect-square overflow-hidden rounded-[22px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_40%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="w-full rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 text-center shadow-[var(--brand-shadow)]">
                    <Image
                      src="/images/toolyflow-mark.png"
                      alt="Toolyflow mark"
                      width={112}
                      height={112}
                      className="mx-auto h-28 w-28 object-contain"
                    />
                    <p className="mt-6 text-2xl font-extrabold tracking-[-0.04em] text-[color:var(--brand-text-primary)]">
                      Tooly<span className="text-[color:var(--brand-secondary)]">flow</span>
                    </p>
                    <p className="mt-3 text-sm text-[color:var(--brand-text-secondary)]">
                      {dictionary.footer.slogan}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {categoryLabels.categoriesHeading}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[color:var(--brand-text-primary)]">
              {categoryLabels.categoriesHeading}
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeGroups.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="group rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)] transition duration-200 hover:scale-[1.02] hover:border-[color:var(--brand-border-hover)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] text-xl text-white">
                  {category.emoji}
                </span>
                <span className="text-sm font-semibold text-[color:var(--brand-secondary)]">
                  {category.toolSlugs.length}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[color:var(--brand-text-primary)]">
                {category.navLabel}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {category.summary}
              </p>
            </Link>
          ))}
        </div>

        {dictionaryPromo ? (
          <div className="mt-6">
            <Link
              href={dictionaryPromo.href}
              className="group flex flex-col gap-4 rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)] transition duration-200 hover:scale-[1.01] hover:border-[color:var(--brand-border-hover)] md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  {dictionaryPromo.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[color:var(--brand-text-primary)]">
                  {dictionaryPromo.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                  {dictionaryPromo.description}
                </p>
              </div>
              <span className="inline-flex min-h-11 items-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-5 py-3 text-sm font-semibold text-white transition group-hover:opacity-95">
                Keşfet
              </span>
            </Link>
          </div>
        ) : null}
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {dictionary.header.tools}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[color:var(--brand-text-primary)]">
              {dictionary.header.tools}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {dictionary.home.toolsDescription}
          </p>
        </div>

        <div className="space-y-10">
          {homeGroups.map((category) => (
            <section key={category.slug} className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                    {category.navLabel}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[color:var(--brand-text-primary)]">
                    {category.summary}
                  </h3>
                </div>
                <Link
                  href={category.href}
                  className="hidden rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)] sm:inline-flex"
                >
                  {dictionary.shared.go}
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={calculatorSlugs.includes(tool.slug as (typeof calculatorSlugs)[number]) ? getCalculatorPath(locale, tool.slug as (typeof calculatorSlugs)[number]) : getToolPath(locale, tool.slug as Parameters<typeof getToolPath>[1])}
                    className="group rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 transition duration-200 hover:scale-[1.02] hover:border-[color:var(--brand-border-hover)] hover:shadow-[0_18px_50px_rgba(29,78,216,0.18)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] text-xl text-white">
                        {tool.icon}
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--brand-border)] text-lg text-[color:var(--brand-text-secondary)] transition group-hover:border-[color:var(--brand-border-hover)] group-hover:text-[color:var(--brand-text-primary)]">
                        ↗
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                        {category.navLabel}
                      </span>
                      <h4 className="mt-4 text-xl font-bold text-[color:var(--brand-text-primary)]">
                        {tool.name}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                        {tool.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

async function renderDictionaryHome() {
  const [popularWords, categoryCounts] = await Promise.all([
    getPopularDictionaryWords(12),
    getDictionaryCategoryCounts(),
  ]);
  const totalWords = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);

  const categoryCards = [
    {
      slug: "argo",
      title: "Argo",
      description: "Günlük dilde ve internet kültüründe sık kullanılan argo ifadeleri hızlıca bul.",
    },
    {
      slug: "deyim",
      title: "Deyim",
      description: "Kalıplaşmış ifadelerin anlamını ve örnek kullanımını tek yerde gör.",
    },
    {
      slug: "genel",
      title: "Genel",
      description: "Sık aranan kelimeler, modern kullanım örnekleri ve açıklamalar.",
    },
  ] as const;

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Türkçe Sözlük",
          description:
            "Argo, deyim ve genel kullanımdaki kelimeleri arayabileceğin Toolyflow Türkçe Sözlük.",
          url: `${siteConfig.url}/tr/sozluk`,
          inLanguage: "tr",
        }}
      />
      <main className="pb-16">
        <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="space-y-5 rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              Türkçe sözlük modülü
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--brand-text-primary)] sm:text-5xl">
              Türkçe Sözlük
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
              Kelime, ifade ve internet jargonunu tek yerde ara. Anlamı, örnek cümleyi ve ilgili
              kelimeleri aynı sayfada gör.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-badge-text)]">
                Toplam {totalWords} kelime
              </span>
              <span className="inline-flex rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-2 text-sm text-[color:var(--brand-text-secondary)]">
                3 kategori: argo, deyim, genel
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {categoryCards.map((card) => (
              <div
                key={card.slug}
                className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                    {card.title}
                  </span>
                  <span className="text-sm font-semibold text-[color:var(--brand-secondary)]">
                    {categoryCounts[card.slug]}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <DictionarySearch
            initialWords={popularWords}
            categoryCounts={categoryCounts}
            totalWords={totalWords}
          />
        </section>
      </main>
    </>
  );
}

function renderCalculatorCategoryPage(locale: Locale) {
  const dictionary = getDictionary(locale);
  const calculatorCategory = getCalculatorCategory(locale);
  const tools = getCalculatorEntries(locale).map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    shortDescription: tool.shortDescription,
    eyebrow: tool.eyebrow,
    accentLabel: tool.accentLabel,
    href: getCalculatorPath(locale, tool.slug),
  }));

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${siteConfig.name} ${calculatorCategory.title}`,
          description: calculatorCategory.metaDescription,
          url: `${siteConfig.url}${getCalculatorCategoryPath(locale)}`,
          inLanguage: locale,
        }}
      />
      <CategoryPage
        category={{
          eyebrow: calculatorCategory.eyebrow,
          title: calculatorCategory.title,
          description: calculatorCategory.description,
          highlights: [...calculatorCategory.highlights],
        }}
        labels={{
          toolListHeading: calculatorCategory.title,
          toolListDescription:
            locale === "tr"
              ? "Günlük finans, sağlık ve oran hesaplarında en sık açılan araçları tek yerde bul."
              : locale === "en"
                ? "Keep the most useful finance, health, and percentage calculators in one focused category."
                : locale === "es"
                  ? "Reúne calculadoras de finanzas, salud y porcentaje en una sola categoría."
                  : locale === "de"
                    ? "Bündle die wichtigsten Finanz-, Gesundheits- und Prozentrechner in einer Kategorie."
                    : locale === "fr"
                      ? "Retrouve les calculateurs de finance, santé et pourcentage dans une seule catégorie."
                      : "Reúna calculadoras de finanças, saúde e percentagem em uma única categoria.",
          go: dictionary.shared.go,
        }}
        tools={tools}
      />
    </>
  );
}

function renderHome(locale: Locale) {
  return renderUnifiedHome(locale);
}

function renderCategoryPage(locale: Locale, slug: string) {
  if (!isCategorySlug(slug)) {
    return notFound();
  }

  const dictionary = getDictionary(locale);
  const category = getCategory(locale, slug);
  const categoryLabels = getCategoryLabels(locale);
  const tools = getToolEntries(locale)
    .filter((tool) => category.toolSlugs.includes(tool.slug))
    .map((tool) => ({
      ...tool,
      href: getToolPath(locale, tool.slug),
    }));

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${siteConfig.name} ${category.title}`,
          description: category.metaDescription,
          url: `${siteConfig.url}${getCategoryPath(locale, slug as Parameters<typeof getCategoryPath>[1])}`,
          inLanguage: locale,
        }}
      />
      <CategoryPage
        category={category}
        labels={{
          toolListHeading: categoryLabels.categoryToolsHeading,
          toolListDescription: categoryLabels.categoryToolsDescription,
          go: dictionary.shared.go,
        }}
        tools={tools}
      />
    </>
  );
}

function renderStaticPage(locale: Locale, slug: string) {
  if (!isStaticSlug(slug)) {
    return notFound();
  }

  const dictionary = getDictionary(locale);
  const page = dictionary.staticPages[slug];

  return (
    <ContentPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      sections={page.sections}
    />
  );
}

function renderToolPage(locale: Locale, slug: string) {
  if (!isToolSlug(slug)) {
    return notFound();
  }

  const dictionary = getDictionary(locale);
  const tool = getToolEntry(locale, slug);

  if (!tool) {
    return notFound();
  }
  const toolCategory = getCategoryForTool(slug);
  const prioritizedSlugs = toolCategory
    ? getToolSlugsForCategory(toolCategory).filter((item) => item !== slug)
    : [];
  const relatedTools = getToolEntries(locale)
    .filter((item) => item.slug !== slug)
    .sort((left, right) => {
      const leftPriority = prioritizedSlugs.includes(left.slug) ? 0 : 1;
      const rightPriority = prioritizedSlugs.includes(right.slug) ? 0 : 1;

      if (leftPriority !== rightPriority) {
        return leftPriority - rightPriority;
      }

      return 0;
    })
    .slice(0, 3)
    .map((item) => ({
      slug: item.slug,
      name: item.name,
      shortDescription: item.shortDescription,
      href: getToolPath(locale, item.slug),
    }));

  const shell = (
    <ToolPageShell
      eyebrow={tool.eyebrow}
      title={tool.name}
      description={tool.description}
      highlights={tool.highlights}
      content={tool.content}
      labels={{
        whyUseIt: dictionary.shared.whyUseIt,
        exploreMore: dictionary.shared.exploreMore,
      }}
      relatedTools={relatedTools}
    >
      {slug === "bio-generator" ? (
        <BioGenerator labels={dictionary.bioGenerator} />
      ) : slug === "word-counter" ? (
        <WordCounter labels={dictionary.wordCounter} />
      ) : slug === "text-cleaner" ? (
        <TextCleaner labels={dictionary.textCleaner} />
      ) : slug === "color-code-converter" ? (
        <ColorCodeConverter labels={dictionary.colorCodeConverter} />
      ) : slug === "percentage-calculator" ? (
        <PercentageCalculator labels={dictionary.percentageCalculator} />
      ) : slug === "discount-calculator" ? (
        <DiscountCalculator labels={dictionary.discountCalculator} />
      ) : slug === "nickname-generator" ? (
        <NicknameGenerator labels={dictionary.nicknameGenerator} />
      ) : slug === "hashtag-generator" ? (
        <HashtagGenerator labels={dictionary.hashtagGenerator} />
      ) : slug === "qr-generator" ? (
        <QrGenerator labels={dictionary.qrGenerator} />
      ) : slug === "case-converter" ? (
        <CaseConverter
          labels={{
            ...dictionary.caseConverter,
            noText: dictionary.shared.noText,
          }}
        />
      ) : (
        <DecisionWheel labels={dictionary.decisionWheel} />
      )}
    </ToolPageShell>
  );

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${siteConfig.name} ${tool.name}`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          description: tool.structuredDescription,
          url: `${siteConfig.url}${getToolPath(locale, slug)}`,
          inLanguage: locale,
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tool.content.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      {shell}
    </>
  );
}

function renderCalculatorPage(locale: Locale, slug: string) {
  const calculator = getCalculatorEntry(locale, slug);

  if (!calculator) {
    return notFound();
  }

  const dictionary = getDictionary(locale);
  const relatedTools = getCalculatorRelatedEntries(locale, calculator.related).map((entry) => ({
    slug: entry.slug,
    name: entry.name,
    shortDescription: entry.shortDescription,
    href: getCalculatorPath(locale, entry.slug),
  }));

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${siteConfig.name} ${calculator.name}`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          description: calculator.structuredDescription,
          url: `${siteConfig.url}${getCalculatorPath(locale, calculator.slug)}`,
          inLanguage: locale,
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: calculator.content.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <ToolPageShell
        eyebrow={calculator.eyebrow}
        title={calculator.name}
        description={calculator.description}
        highlights={calculator.highlights}
        content={calculator.content}
        labels={{
          whyUseIt: dictionary.shared.whyUseIt,
          exploreMore: dictionary.shared.exploreMore,
        }}
        relatedTools={relatedTools}
      >
        {calculator.slug === "kredi-hesaplayici" ? (
          <CreditCalculatorTool locale={locale} labels={getCreditCalculatorLabels(locale)} />
        ) : calculator.slug === "bmi-hesaplayici" ? (
          <BmiCalculatorTool locale={locale} labels={getBmiCalculatorLabels(locale)} />
        ) : calculator.slug === "yas-hesaplayici" ? (
          <AgeCalculatorTool locale={locale} labels={getAgeCalculatorLabels(locale)} />
        ) : calculator.slug === "yuzde-hesaplayici" ? (
          <PercentageCalcTool locale={locale} labels={getPercentageCalcLabels(locale)} />
        ) : (
          <RentIncreaseCalculatorTool locale={locale} labels={getRentIncreaseCalculatorLabels(locale)} />
        )}
      </ToolPageShell>
    </>
  );
}

async function renderDictionaryWordPage(slug: string) {
  const word = await getDictionaryWordBySlug(slug);

  if (!word) {
    return notFound();
  }

  const relatedWords = await getRelatedDictionaryWords(word.kategori, word.slug, 4);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: word.kelime,
          description: word.anlam,
          inDefinedTermSet: `${siteConfig.url}/tr/sozluk`,
          url: `${siteConfig.url}/tr/sozluk/${word.slug}`,
          inLanguage: "tr",
        }}
      />
      <main className="pb-16">
        <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="space-y-5 rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                {getDictionaryCategoryLabel(word.kategori)}
              </span>
              <span className="text-sm text-[color:var(--brand-text-secondary)]">
                {word.goruntulenme.toLocaleString("tr-TR")} görüntülenme
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--brand-text-primary)] sm:text-5xl">
              {word.kelime}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
              {word.anlam}
            </p>
            {word.etiketler.length ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {word.etiketler.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-3 py-1 text-[11px] font-medium text-[color:var(--brand-text-secondary)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-6">
              <article className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  Anlam
                </p>
                <p className="mt-4 text-base leading-8 text-[color:var(--brand-text-secondary)]">
                  {word.anlam}
                </p>
              </article>

              <article className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  Örnek cümle
                </p>
                <p className="mt-4 text-base leading-8 text-[color:var(--brand-text-secondary)]">
                  {word.ornek_cumle ?? "Bu kelime için örnek cümle henüz eklenmemiş."}
                </p>
              </article>
            </div>

            <aside className="space-y-4">
              <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  Kategori
                </p>
                <p className="mt-3 text-lg font-bold text-[color:var(--brand-text-primary)]">
                  {getDictionaryCategoryLabel(word.kategori)}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              İlgili kelimeler
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
              Aynı kategoriden başka kelimeler
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedWords.map((item) => (
              <Link
                key={item.slug}
                href={`/tr/sozluk/${item.slug}`}
                className="group rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)] transition duration-200 hover:scale-[1.02] hover:border-[color:var(--brand-border-hover)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                    {getDictionaryCategoryLabel(item.kategori)}
                  </span>
                  <span className="text-lg text-[color:var(--brand-secondary)]">↗</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                  {item.kelime}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                  {item.anlam}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default async function LocalizedPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const pathSegments = slug?.filter(Boolean) ?? [];

  if (locale === "tr" && pathSegments.length === 1 && pathSegments[0] === "sozluk") {
    return renderDictionaryHome();
  }

  if (locale === "tr" && pathSegments.length === 2 && pathSegments[0] === "sozluk") {
    return renderDictionaryWordPage(pathSegments[1]);
  }

  const resolved = resolveLocalizedRoute(locale, slug);

  if (!resolved) {
    notFound();
  }

  if (resolved.redirectTo) {
    permanentRedirect(resolved.redirectTo);
  }

  if (resolved.kind === "home") {
    return renderHome(locale);
  }

  if (resolved.kind === "tool") {
    return renderToolPage(locale, resolved.slug);
  }

  if (resolved.kind === "calculator-category") {
    return renderCalculatorCategoryPage(locale);
  }

  if (resolved.kind === "calculator") {
    return renderCalculatorPage(locale, resolved.slug);
  }

  if (resolved.kind === "category") {
    return renderCategoryPage(locale, resolved.slug);
  }

  if (resolved.kind === "static") {
    return renderStaticPage(locale, resolved.slug);
  }

  notFound();
}
