import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { CategoryPage } from "@/components/category-page";
import { AgeCalculatorTool } from "@/components/calculators/age-calculator";
import { BmiCalculatorTool } from "@/components/calculators/bmi-calculator";
import { CreditCalculatorTool } from "@/components/calculators/credit-calculator";
import { PercentageCalcTool } from "@/components/calculators/percentage-calc-tool";
import { RentIncreaseCalculatorTool } from "@/components/calculators/rent-increase-calculator";
import { ContentPage } from "@/components/content-page";
import { HomePage } from "@/components/home-page";
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
import {
  getCreatorCategoryGuide,
  getCreatorToolEnhancements,
} from "@/lib/creator-tool-localizations";
import { getDictionary, getToolEntries, getToolEntry } from "@/lib/dictionaries";
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
  getCategory,
  getCategoryForTool,
  getCategoryLabels,
  getToolSlugsForCategory,
} from "@/lib/tool-categories";
import { isCategorySlug, isStaticSlug, isToolSlug } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import {
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
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale as Locale);

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
  return <HomePage locale={locale} />;
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
  const creatorGuide =
    slug === "creator-tools"
      ? {
          ...getCreatorCategoryGuide(locale),
          steps: getCreatorCategoryGuide(locale).steps.map((step) => ({
            ...step,
            href: getToolPath(locale, step.toolSlug),
          })),
        }
      : undefined;

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
        guide={creatorGuide}
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
  const creatorEnhancements = getCreatorToolEnhancements(locale);
  const tool = getToolEntry(locale, slug);

  if (!tool) {
    return notFound();
  }
  const toolCategory = getCategoryForTool(slug);
  const category = getCategory(locale, toolCategory ?? "quick-tools");
  const categoryHref = getCategoryPath(locale, category.slug);
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
      locale={locale}
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
      category={{ label: category.navLabel, href: categoryHref }}
    >
      {slug === "bio-generator" ? (
        <BioGenerator labels={{ ...dictionary.bioGenerator, ...creatorEnhancements.bio }} />
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
        <NicknameGenerator labels={{ ...dictionary.nicknameGenerator, ...creatorEnhancements.nickname }} />
      ) : slug === "hashtag-generator" ? (
        <HashtagGenerator labels={{ ...dictionary.hashtagGenerator, ...creatorEnhancements.hashtag }} />
      ) : slug === "qr-generator" ? (
        <QrGenerator labels={dictionary.qrGenerator} />
      ) : slug === "case-converter" ? (
        <CaseConverter
          locale={locale}
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
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: dictionary.home.title,
              item: `${siteConfig.url}${getHomePath(locale)}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: category.title,
              item: `${siteConfig.url}${categoryHref}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: tool.name,
              item: `${siteConfig.url}${getToolPath(locale, slug)}`,
            },
          ],
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
  const calculatorCategory = getCalculatorCategory(locale);
  const calculatorCategoryHref = getCalculatorCategoryPath(locale);
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
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: dictionary.home.title,
              item: `${siteConfig.url}${getHomePath(locale)}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: calculatorCategory.title,
              item: `${siteConfig.url}${calculatorCategoryHref}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: calculator.name,
              item: `${siteConfig.url}${getCalculatorPath(locale, calculator.slug)}`,
            },
          ],
        }}
      />
      <ToolPageShell
        locale={locale}
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
        category={{ label: calculatorCategory.title, href: calculatorCategoryHref }}
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

export default async function LocalizedPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
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
