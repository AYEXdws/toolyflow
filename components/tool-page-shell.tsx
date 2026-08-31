import type { ReactNode } from "react";
import Link from "next/link";

import { ToolContentSections } from "@/components/tool-content-sections";
import type { Locale } from "@/lib/i18n";

const navigationLabels: Record<
  Locale,
  { home: string; useTool: string; howTo: string; examples: string; faq: string; breadcrumb: string }
> = {
  tr: { home: "Ana sayfa", useTool: "Aracı kullan", howTo: "Nasıl kullanılır", examples: "Örnekler", faq: "Sık sorulanlar", breadcrumb: "Sayfa yolu" },
  en: { home: "Home", useTool: "Use the tool", howTo: "How to use", examples: "Examples", faq: "FAQ", breadcrumb: "Breadcrumb" },
  es: { home: "Inicio", useTool: "Usar la herramienta", howTo: "Cómo usar", examples: "Ejemplos", faq: "Preguntas", breadcrumb: "Ruta de navegación" },
  de: { home: "Startseite", useTool: "Tool nutzen", howTo: "Anleitung", examples: "Beispiele", faq: "FAQ", breadcrumb: "Brotkrümelnavigation" },
  fr: { home: "Accueil", useTool: "Utiliser l'outil", howTo: "Mode d'emploi", examples: "Exemples", faq: "FAQ", breadcrumb: "Fil d'Ariane" },
  pt: { home: "Início", useTool: "Usar a ferramenta", howTo: "Como usar", examples: "Exemplos", faq: "Perguntas", breadcrumb: "Navegação estrutural" },
};

type ToolPageShellProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  labels: {
    whyUseIt: string;
    exploreMore: string;
  };
  relatedTools: Array<{
    slug: string;
    name: string;
    shortDescription: string;
    href: string;
  }>;
  category: {
    label: string;
    href: string;
  };
  content: {
    howToUseTitle: string;
    howToUseDescription: string;
    howToUseSteps: Array<{ title: string; body: string }>;
    useCasesTitle: string;
    useCasesDescription: string;
    useCases: Array<{ title: string; description: string }>;
    examplesTitle: string;
    examplesDescription: string;
    examples: Array<{
      title: string;
      inputLabel: string;
      input: string;
      outputLabel: string;
      output: string;
      note: string;
    }>;
    faqTitle: string;
    faqs: Array<{ question: string; answer: string }>;
  };
  children: ReactNode;
};

export function ToolPageShell({
  locale,
  eyebrow,
  title,
  description,
  highlights,
  labels,
  relatedTools,
  category,
  content,
  children,
}: ToolPageShellProps) {
  const navigation = navigationLabels[locale];

  return (
    <main className="pb-16">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <nav aria-label={navigation.breadcrumb} className="mb-5 flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-bold text-[color:var(--brand-text-secondary)]">
          <Link href={`/${locale}`} className="min-h-9 shrink-0 rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-3 py-2 transition hover:border-[color:var(--brand-border-hover)]">{navigation.home}</Link>
          <span aria-hidden="true">/</span>
          <Link href={category.href} className="min-h-9 shrink-0 rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-3 py-2 transition hover:border-[color:var(--brand-border-hover)]">{category.label}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="truncate text-[color:var(--brand-text-primary)]">{title}</span>
        </nav>

        <section className="grid overflow-hidden rounded-[34px] bg-[#14151A] text-white shadow-[var(--brand-shadow-strong)] lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8F135]">{eyebrow}</p>
            <h1 className="display-type mt-5 max-w-4xl break-words text-[clamp(2.75rem,9vw,4.75rem)] font-bold leading-[0.94] tracking-[-0.05em]">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col justify-between bg-[#2557FF] p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Toolyflow / {category.label}</span>
            <div className="mt-12 text-right">
              <span className="display-type text-8xl leading-none text-white/95" aria-hidden="true">↘</span>
            </div>
          </div>
        </section>

        <nav aria-label={navigation.useTool} className="mt-5 flex gap-2 overflow-x-auto rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-2 shadow-[var(--brand-shadow)]">
          {[
            { href: "#tool-interface", label: navigation.useTool },
            { href: "#how-to", label: navigation.howTo },
            { href: "#examples", label: navigation.examples },
            { href: "#faq", label: navigation.faq },
          ].map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-[14px] px-4 text-xs font-bold transition sm:text-sm ${
                index === 0
                  ? "bg-[#2557FF] text-white"
                  : "hover:bg-[color:var(--brand-surface)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
          <section className="min-w-0 space-y-8">
            <div id="tool-interface" className="scroll-mt-28">{children}</div>
            <ToolContentSections content={content} />
          </section>

          <aside className="min-w-0 space-y-5 xl:sticky xl:top-28 xl:self-start">
            <div className="rounded-[26px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">01 / {labels.whyUseIt}</p>
              <ul className="mt-5 space-y-0 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {highlights.map((item, index) => (
                  <li key={item} className="flex gap-3 border-b border-[color:var(--brand-border)] py-4 first:pt-0 last:border-0 last:pb-0">
                    <span className="text-xs font-bold text-[color:var(--brand-secondary)]">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] bg-[#C8F135] p-6 text-[#14151A] shadow-[var(--brand-shadow)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-60">02 / {labels.exploreMore}</p>
              <div className="mt-5 divide-y divide-black/12">
                {relatedTools.map((tool) => (
                  <Link key={tool.slug} href={tool.href} className="group block py-4 first:pt-0 last:pb-0">
                    <span className="flex items-start justify-between gap-3 font-extrabold tracking-[-0.025em]">
                      {tool.name}<span className="transition group-hover:translate-x-1">→</span>
                    </span>
                    <span className="mt-1 block text-xs leading-5 opacity-65">{tool.shortDescription}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
