import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
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
import { isStaticSlug, isToolSlug, staticSlugs, toolSlugs } from "@/lib/routes";
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
    ...[...toolSlugs, ...staticSlugs].map((slug) => ({
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
  const tools = getToolEntries(locale);

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

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-black/8 bg-[color:var(--color-surface)] shadow-[0_24px_80px_rgba(23,28,24,0.08)]">
          <div className="grid gap-10 px-6 py-8 sm:px-8 md:grid-cols-[minmax(0,1fr)_260px] md:items-end md:px-10 md:py-12">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-accent-strong)]">
                {dictionary.home.eyebrow}
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-display text-5xl tracking-tight text-[color:var(--color-foreground)] sm:text-6xl">
                  {dictionary.home.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--color-muted)]">
                  {dictionary.home.tagline}
                </p>
                <p className="max-w-3xl text-base leading-8 text-[color:var(--color-muted)]">
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
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[color:var(--color-foreground)] transition hover:border-[color:var(--color-accent)]"
                >
                  {dictionary.home.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              {dictionary.home.stats.map((stat) => (
                <div key={stat.label} className="rounded-[26px] bg-white p-5">
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
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
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
        <div className="grid gap-5 lg:grid-cols-3">
          {dictionary.home.features.map((feature) => (
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
    </main>
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
  const relatedTools = getToolEntries(locale)
    .filter((item) => item.slug !== slug)
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

  if (isStaticSlug(pageSlug)) {
    return renderStaticPage(locale, pageSlug);
  }

  notFound();
}
