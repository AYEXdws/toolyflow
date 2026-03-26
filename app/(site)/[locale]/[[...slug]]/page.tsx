import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CategoryPage } from "@/components/category-page";
import { ContentPage } from "@/components/content-page";
import { HomeToolSearch } from "@/components/home-tool-search";
import { StructuredData } from "@/components/structured-data";
import { ToolCard } from "@/components/tool-card";
import { ToolPageShell } from "@/components/tool-page-shell";
import { BioGenerator } from "@/components/tools/bio-generator";
import { CaseConverter } from "@/components/tools/case-converter";
import { DecisionWheel } from "@/components/tools/decision-wheel";
import { NicknameGenerator } from "@/components/tools/nickname-generator";
import { QrGenerator } from "@/components/tools/qr-generator";
import { getDictionary, getToolEntries } from "@/lib/dictionaries";
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
    const tool = dictionary.tools[pageSlug];

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

function renderHome(locale: Locale) {
  const dictionary = getDictionary(locale);
  const categoryLabels = getCategoryLabels(locale);
  const categories = getCategories(locale);
  const tools = getToolEntries(locale);
  const coreTools = tools.filter((tool) => tool.slug !== "decision-wheel");
  const supportTools = tools.filter((tool) => tool.slug === "decision-wheel");
  const supportFeature = dictionary.home.features[2];
  const heroTools = coreTools.slice(0, 3);
  const searchItems = [
    ...categories.map((category) => ({
      label: category.navLabel,
      description: category.description,
      href: localizePath(locale, category.slug),
      kind: categoryLabels.categoriesHeading,
    })),
    ...tools.map((tool) => ({
      label: tool.name,
      description: tool.shortDescription,
      href: localizePath(locale, tool.slug),
      kind: dictionary.header.tools,
    })),
  ];

  return (
    <main className="pb-16">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: `${siteConfig.url}${localizePath(locale)}`,
          description: dictionary.home.metaDescription,
          inLanguage: locale,
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: dictionary.home.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-black/8 bg-[linear-gradient(160deg,rgba(250,247,239,0.95),rgba(255,255,255,0.98))] shadow-[0_28px_90px_rgba(23,28,24,0.08)]">
          <div className="grid gap-10 px-6 py-8 sm:px-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] xl:px-10 xl:py-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent-strong)]">
                <span>{dictionary.home.eyebrow}</span>
                <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent)]" />
                <span>{dictionary.home.stats[0].value}</span>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-display text-5xl tracking-tight text-[color:var(--color-foreground)] sm:text-6xl xl:text-7xl">
                  {dictionary.home.tagline}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
                  {dictionary.home.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#tools"
                  className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-strong)]"
                >
                  {dictionary.home.primaryCta}
                </Link>
                <Link
                  href={localizePath(locale, "about")}
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[color:var(--color-foreground)] transition hover:border-[color:var(--color-accent)]"
                >
                  {dictionary.home.secondaryCta}
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {dictionary.home.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-black/8 bg-white p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[28px] border border-black/8 bg-[color:var(--color-surface)]/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
                  {dictionary.home.searchLabel}
                </p>
                <div className="mt-4">
                  <HomeToolSearch
                    items={searchItems}
                    placeholder={dictionary.home.searchPlaceholder}
                    emptyLabel={dictionary.home.searchEmpty}
                  />
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[24px] border border-black/8 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
                    {categoryLabels.categoriesHeading}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={localizePath(locale, category.slug)}
                        className="rounded-[20px] border border-black/8 px-4 py-4 transition hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]"
                      >
                        <p className="font-medium text-[color:var(--color-foreground)]">
                          {category.navLabel}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                          {category.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-black/8 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
                    {dictionary.home.toolsEyebrow}
                  </p>
                  <div className="mt-4 space-y-3">
                    {heroTools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={localizePath(locale, tool.slug)}
                        className="flex items-start justify-between gap-4 rounded-[20px] border border-black/8 px-4 py-4 transition hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]"
                      >
                        <div className="min-w-0">
                          <p className="font-medium text-[color:var(--color-foreground)]">
                            {tool.name}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                            {tool.shortDescription}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-[color:var(--color-foreground)]">
                          {dictionary.shared.go}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
              {dictionary.home.whyEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--color-foreground)]">
              {dictionary.home.whyTitle}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--color-muted)]">
            {dictionary.home.whyDescription}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.home.brandPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[28px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)]"
            >
              <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
                {point.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
              {categoryLabels.browseEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--color-foreground)]">
              {categoryLabels.browseTitle}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--color-muted)]">
            {categoryLabels.browseDescription}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={localizePath(locale, category.slug)}
              className="group rounded-[28px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(23,28,24,0.1)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
                {category.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
                {category.navLabel}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                {category.description}
              </p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="font-medium text-[color:var(--color-foreground)]">
                  {category.toolSlugs.length} {categoryLabels.countSuffix}
                </span>
                <span className="rounded-full border border-black/10 px-4 py-2 font-medium text-[color:var(--color-foreground)] transition group-hover:border-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)] group-hover:text-white">
                  {dictionary.shared.go}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
              {dictionary.home.toolsEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--color-foreground)]">
              {dictionary.home.toolsTitle}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--color-muted)]">
            {dictionary.home.toolsDescription}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {coreTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              tool={tool}
              href={localizePath(locale, tool.slug)}
              goLabel={dictionary.shared.go}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
              {dictionary.home.useCasesEyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--color-foreground)]">
              {dictionary.home.useCasesTitle}
          </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--color-muted)]">
            {dictionary.home.useCasesDescription}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.home.useCases.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[28px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)]"
            >
              <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
                {feature.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
            {dictionary.home.faqEyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--color-foreground)]">
            {dictionary.home.faqTitle}
          </h2>
        </div>

        <div className="grid gap-4">
          {dictionary.home.faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-[24px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)]"
            >
              <summary className="cursor-pointer list-none font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--color-muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {supportTools.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
                {dictionary.shared.exploreMore}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--color-foreground)]">
                {supportFeature.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--color-muted)]">
              {supportFeature.description}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                tool={tool}
                href={localizePath(locale, tool.slug)}
                goLabel={dictionary.shared.go}
              />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
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
  const tool = dictionary.tools[slug];
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
      labels={{
        whyUseIt: dictionary.shared.whyUseIt,
        exploreMore: dictionary.shared.exploreMore,
      }}
      relatedTools={relatedTools}
    >
      {slug === "bio-generator" ? (
        <BioGenerator labels={dictionary.bioGenerator} />
      ) : slug === "nickname-generator" ? (
        <NicknameGenerator labels={dictionary.nicknameGenerator} />
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
