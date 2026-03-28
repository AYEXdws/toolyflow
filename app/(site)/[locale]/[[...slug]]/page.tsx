import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CategoryPage } from "@/components/category-page";
import { ContentPage } from "@/components/content-page";
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
import { isLocale, localizePath, type Locale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/metadata";
import {
  getCategories,
  getCategory,
  getCategoryForTool,
  getCategoryLabels,
  getToolSlugsForCategory,
} from "@/lib/tool-categories";
import {
  categorySlugs,
  isCategorySlug,
  isStaticSlug,
  isToolSlug,
  staticSlugs,
  toolSlugs,
} from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

type RouteParams = {
  locale: string;
  slug?: string[];
};

type PageProps = {
  params: Promise<RouteParams>;
};

export function generateStaticParams() {
  return ["en", "tr", "es", "de", "fr", "pt"].flatMap((locale) => [
    { locale },
    ...[...categorySlugs, ...toolSlugs, ...staticSlugs].map((slug) => ({
      locale,
      slug: [slug],
    })),
  ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale as Locale);
  const pageSlug = slug?.[0];

  if (!pageSlug) {
    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: dictionary.home.metaTitle,
      description: dictionary.home.metaDescription,
      keywords: dictionary.home.keywords,
    });
  }

  if (isToolSlug(pageSlug)) {
    const tool = getToolEntry(locale, pageSlug);

    if (!tool) {
      return {};
    }

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: tool.metaTitle,
      description: tool.metaDescription,
      slug: pageSlug,
      keywords: tool.keywords,
    });
  }

  if (isCategorySlug(pageSlug)) {
    const category = getCategory(locale, pageSlug);

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: category.metaTitle,
      description: category.metaDescription,
      slug: pageSlug,
      keywords: category.keywords,
    });
  }

  if (isStaticSlug(pageSlug)) {
    const page = dictionary.staticPages[pageSlug];

    return createLocalizedMetadata({
      locale,
      localeCode: dictionary.localeCode,
      title: page.metaTitle,
      description: page.metaDescription,
      slug: pageSlug,
      keywords: page.keywords,
    });
  }

  return {};
}

function renderUnifiedHome(locale: Locale) {
  const dictionary = getDictionary(locale);
  const categories = getCategories(locale);
  const categoryLabels = getCategoryLabels(locale);
  const emojiByCategory = {
    "creator-tools": "🎨",
    "text-tools": "✍️",
    "quick-tools": "⚡",
  } as const;
  const categoryPills = categories.map((category) => ({
    label: category.navLabel,
    emoji: emojiByCategory[category.slug],
    href: localizePath(locale, category.slug),
  }));
  const iconMap: Record<string, string> = {
    "word-counter": "📏",
    "text-cleaner": "🧹",
    "color-code-converter": "🎨",
    "percentage-calculator": "％",
    "discount-calculator": "💸",
    "bio-generator": "✨",
    "nickname-generator": "🎯",
    "hashtag-generator": "#",
    "qr-generator": "⚡",
    "case-converter": "✍️",
    "decision-wheel": "🎡",
  };
  const tools = getToolEntries(locale).map((tool) => ({
    ...tool,
    icon: iconMap[tool.slug] ?? "✦",
    badge:
      categories.find((category) => category.slug === getCategoryForTool(tool.slug))?.navLabel ??
      tool.accentLabel,
  }));

  return (
    <main className="bg-[color:var(--brand-bg)] pb-20 font-[family:var(--font-inter)] text-[color:var(--brand-text-primary)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: `${siteConfig.url}${localizePath(locale)}`,
          description:
            "Instagram, TikTok ve YouTube için ihtiyacın olan tüm araçlar ücretsiz, hızlı ve Türkçe.",
          inLanguage: locale,
        }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_55%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pb-12 lg:pt-20">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {dictionary.home.eyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              <span className="block bg-[linear-gradient(135deg,#A855F7,#06B6D4)] bg-clip-text text-transparent">
                {dictionary.home.title}
              </span>
              <span className="mt-2 block">{dictionary.home.tagline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--brand-text-secondary)] sm:text-lg sm:leading-8">
              {dictionary.home.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#tools"
                className="inline-flex min-h-11 items-center rounded-xl bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:translate-y-px"
              >
                {dictionary.home.primaryCta}
              </Link>
              <Link
                href={localizePath(locale, "creator-tools")}
                className="inline-flex min-h-11 items-center rounded-xl border border-[color:var(--brand-border)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
              >
                {categories.find((category) => category.slug === "creator-tools")?.navLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {categoryLabels.browseEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[color:var(--brand-text-primary)]">
              {categoryLabels.browseTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">
              {categoryLabels.browseDescription}
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {categoryPills.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
            >
              <span className="text-lg">{category.emoji}</span>
              <span>{category.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:p-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {dictionary.home.whyEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)] sm:text-4xl">
              {dictionary.home.whyTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)] sm:text-base">
              {dictionary.home.whyDescription}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {dictionary.home.brandPoints.slice(0, 3).map((item, index) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5"
              >
                <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[color:var(--brand-text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {dictionary.header.tools}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[color:var(--brand-text-primary)]">
              {dictionary.home.toolsTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {dictionary.home.toolsDescription}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={localizePath(locale, tool.slug)}
              className="group rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 transition duration-200 hover:scale-[1.02] hover:border-[color:var(--brand-border-hover)] hover:shadow-[0_18px_50px_rgba(124,58,237,0.18)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] text-xl text-white">
                  {tool.icon}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--brand-border)] text-lg text-[color:var(--brand-text-secondary)] transition group-hover:border-[color:var(--brand-border-hover)] group-hover:text-[color:var(--brand-text-primary)]">
                  ↗
                </span>
              </div>

              <div className="mt-5">
                <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  {tool.badge}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[color:var(--brand-text-primary)]">
                  {tool.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
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
      href: localizePath(locale, tool.slug),
    }));

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${siteConfig.name} ${category.title}`,
          description: category.metaDescription,
          url: `${siteConfig.url}${localizePath(locale, slug)}`,
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
      href: localizePath(locale, item.slug),
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
          url: `${siteConfig.url}${localizePath(locale, slug)}`,
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

export default async function LocalizedPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const pageSlug = slug?.[0];

  if (!pageSlug) {
    return renderHome(locale);
  }

  if (isToolSlug(pageSlug)) {
    return renderToolPage(locale, pageSlug);
  }

  if (isCategorySlug(pageSlug)) {
    return renderCategoryPage(locale, pageSlug);
  }

  if (isStaticSlug(pageSlug)) {
    return renderStaticPage(locale, pageSlug);
  }

  notFound();
}
