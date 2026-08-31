import Link from "next/link";

import { HomeToolSearch } from "@/components/home-tool-search";
import { StructuredData } from "@/components/structured-data";
import { getDictionary, getToolEntries } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n";
import { getCategoryPath, getToolPath } from "@/lib/paths";
import { siteConfig } from "@/lib/site-config";
import { getCategories, getCategoryLabels } from "@/lib/tool-categories";
import {
  getCalculatorCategory,
  getCalculatorCategoryPath,
  getCalculatorEntries,
  getCalculatorPath,
} from "@/lib/tr-calculators";

type HomePageProps = {
  locale: Locale;
};

const categoryIcons = {
  "creator-tools": "@",
  "text-tools": "Aa",
  "quick-tools": "QR",
  calculators: "%",
} as const;

const toolIcons: Record<string, string> = {
  "bio-generator": "BIO",
  "nickname-generator": "ID",
  "hashtag-generator": "#",
  "case-converter": "Aa",
  "qr-generator": "QR",
  "decision-wheel": "↻",
  "color-code-converter": "HEX",
  "percentage-calculator": "%",
  "discount-calculator": "−",
  "word-counter": "123",
  "text-cleaner": "TXT",
  "credit-calculator": "₺",
  "bmi-calculator": "BMI",
  "age-calculator": "+",
  "yuzde-hesaplayici": "%",
  "rent-increase-calculator": "KİRA",
};

const categoryStyles = [
  { backgroundColor: "#2557FF", color: "#FFFDF8" },
  { backgroundColor: "#C8F135", color: "#14151A" },
  { backgroundColor: "#FF5D2E", color: "#FFFDF8" },
  { backgroundColor: "#14151A", color: "#FFFDF8" },
] as const;

const factualLabels: Record<Locale, { available: string; groups: string; languages: string; finder: string }> = {
  tr: { available: "çalışan araç", groups: "net kategori", languages: "desteklenen dil", finder: "Aracını bul" },
  en: { available: "working tools", groups: "clear categories", languages: "supported languages", finder: "Find your tool" },
  es: { available: "herramientas activas", groups: "categorías claras", languages: "idiomas disponibles", finder: "Encuentra tu herramienta" },
  de: { available: "aktive Tools", groups: "klare Kategorien", languages: "unterstützte Sprachen", finder: "Tool finden" },
  fr: { available: "outils actifs", groups: "catégories claires", languages: "langues disponibles", finder: "Trouver un outil" },
  pt: { available: "ferramentas ativas", groups: "categorias claras", languages: "idiomas disponíveis", finder: "Encontre sua ferramenta" },
};

export function HomePage({ locale }: HomePageProps) {
  const dictionary = getDictionary(locale);
  const categoryLabels = getCategoryLabels(locale);
  const toolEntries = getToolEntries(locale);
  const calculatorEntries = getCalculatorEntries(locale);
  const calculatorCategory = getCalculatorCategory(locale);
  const labels = factualLabels[locale];

  const groups = [
    ...getCategories(locale).map((category) => ({
      slug: category.slug,
      name: category.navLabel,
      description: category.description,
      href: getCategoryPath(locale, category.slug),
      tools: toolEntries
        .filter((tool) => category.toolSlugs.includes(tool.slug))
        .map((tool) => ({
          ...tool,
          href: getToolPath(locale, tool.slug),
        })),
    })),
    {
      slug: "calculators" as const,
      name: calculatorCategory.title,
      description: calculatorCategory.description,
      href: getCalculatorCategoryPath(locale),
      tools: calculatorEntries.map((tool) => ({
        ...tool,
        href: getCalculatorPath(locale, tool.slug),
      })),
    },
  ];

  const allTools = groups.flatMap((group) =>
    group.tools.map((tool) => ({
      label: tool.name,
      description: tool.shortDescription,
      href: tool.href,
      kind: group.name,
    }))
  );

  const searchItems = [
    ...allTools,
    ...groups.map((group) => ({
      label: group.name,
      description: group.description,
      href: group.href,
      kind: categoryLabels.categoriesHeading,
    })),
  ];

  return (
    <main className="pb-10 text-[color:var(--brand-text-primary)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: `${siteConfig.url}/${locale}`,
          description: dictionary.home.metaDescription,
          inLanguage: locale,
        }}
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.72fr)] lg:items-stretch">
          <div className="reveal-up utility-noise relative overflow-hidden rounded-[34px] bg-[#14151A] px-6 py-9 text-white shadow-[var(--brand-shadow-strong)] sm:px-10 sm:py-12 lg:min-h-[590px] lg:px-12 lg:py-14">
            <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full border-[44px] border-[#2557FF]/70" />
            <div className="absolute -bottom-24 right-16 h-56 w-56 rotate-12 rounded-[56px] bg-[#C8F135] opacity-30" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C8F135]">
                  {dictionary.home.eyebrow}
                </p>
                <h1 className="display-type mt-8 max-w-4xl text-[clamp(3.6rem,9vw,7.5rem)] leading-[0.82] tracking-[-0.055em]">
                  <span className="block">{dictionary.home.title}</span>
                  <span className="block text-[#7C9BFF]">{dictionary.home.tagline}</span>
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                  {dictionary.home.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#tools" className="inline-flex min-h-12 items-center rounded-[14px] bg-[#C8F135] px-5 py-3 text-sm font-bold text-[#14151A] transition hover:-translate-y-0.5 active:translate-y-0">
                    {dictionary.home.primaryCta}
                    <span className="ml-3" aria-hidden="true">↓</span>
                  </Link>
                  <Link href="#categories" className="inline-flex min-h-12 items-center rounded-[14px] border border-white/18 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/14">
                    {dictionary.home.secondaryCta}
                  </Link>
                </div>
              </div>

              <dl className="mt-14 grid grid-cols-3 gap-3 border-t border-white/12 pt-6">
                {[
                  { value: allTools.length, label: labels.available },
                  { value: groups.length, label: labels.groups },
                  { value: locales.length, label: labels.languages },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-white/45 sm:text-xs">{item.label}</dt>
                    <dd className="mt-2 text-2xl font-extrabold tabular-nums sm:text-3xl">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="reveal-up-delay flex flex-col rounded-[34px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4 shadow-[var(--brand-shadow)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">{dictionary.home.searchLabel}</p>
                <h2 className="display-type mt-2 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{labels.finder}</h2>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2557FF] text-xl text-white" aria-hidden="true">⌕</span>
            </div>
            <HomeToolSearch items={searchItems} placeholder={dictionary.home.searchPlaceholder} emptyLabel={dictionary.home.searchEmpty} />
          </div>
        </div>
      </section>

      <section id="categories" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">01 / {categoryLabels.categoriesHeading}</p>
            <h2 className="display-type mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{categoryLabels.browseTitle}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">{categoryLabels.browseDescription}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group, index) => (
            <Link
              key={group.slug}
              href={group.href}
              style={categoryStyles[index]}
              className="group relative min-h-64 overflow-hidden rounded-[28px] p-6 transition duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-3xl font-black tracking-[-0.08em]">{categoryIcons[group.slug]}</span>
                <span className="rounded-full border border-current/20 px-3 py-1 text-xs font-bold tabular-nums">0{index + 1}</span>
              </div>
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-60">{group.tools.length} {categoryLabels.countSuffix}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em]">{group.name}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 opacity-75">{group.description}</p>
                <span className="mt-5 inline-flex text-xl transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="tools" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.6fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">02 / {dictionary.header.tools}</p>
            <h2 className="display-type mt-3 text-5xl font-bold tracking-[-0.045em] sm:text-6xl">{dictionary.home.toolsTitle}</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[color:var(--brand-text-secondary)] lg:justify-self-end">{dictionary.home.toolsDescription}</p>
        </div>

        <div className="space-y-12">
          {groups.map((group, groupIndex) => (
            <section key={group.slug} aria-labelledby={`group-${group.slug}`} className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-text-tertiary)]">0{groupIndex + 1}</p>
                <h3 id={`group-${group.slug}`} className="display-type mt-2 text-3xl font-bold tracking-[-0.035em]">{group.name}</h3>
                <Link href={group.href} className="mt-4 inline-flex min-h-11 items-center rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 text-sm font-bold transition hover:border-[color:var(--brand-border-hover)]">
                  {dictionary.shared.go} <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {group.tools.map((tool, toolIndex) => (
                  <Link key={tool.slug} href={tool.href} className="group flex min-h-64 flex-col rounded-[26px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)] transition duration-200 hover:-translate-y-1 hover:border-[color:var(--brand-border-hover)] hover:shadow-[var(--brand-shadow-strong)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[13px] bg-[color:var(--brand-surface)] px-2 text-xs font-black tracking-[-0.04em] text-[color:var(--brand-text-primary)]">{toolIcons[tool.slug] ?? "TF"}</span>
                      <span className="text-xs font-bold tabular-nums text-[color:var(--brand-text-tertiary)]">{String(toolIndex + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-auto pt-8">
                      <h4 className="text-xl font-extrabold tracking-[-0.035em]">{tool.name}</h4>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">{tool.shortDescription}</p>
                      <span className="mt-5 inline-flex items-center text-sm font-bold text-[color:var(--brand-secondary)]">
                        {dictionary.shared.go}<span className="ml-2 transition group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {locale === "tr" ? (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link href="/tr/sozluk" className="group grid overflow-hidden rounded-[30px] border border-[#14151A] bg-[#FFFDF8] shadow-[var(--brand-shadow)] lg:grid-cols-[1fr_260px]">
            <div className="p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1740CC]">03 / Türkçe Sözlük</p>
              <h2 className="display-type mt-3 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Bir kelimeyi ararken anlamını da bağlamını da bul.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--brand-text-secondary)]">Argo, deyim ve genel kullanımdaki ifadeleri örnek cümleleriyle birlikte keşfet.</p>
            </div>
            <div className="flex min-h-52 items-center justify-center bg-[#C8F135] p-8 text-[#14151A]">
              <span className="display-type text-8xl transition duration-300 group-hover:rotate-6 group-hover:scale-110">S</span>
            </div>
          </Link>
        </section>
      ) : null}
    </main>
  );
}
