import type { ReactNode } from "react";
import Link from "next/link";

import { ToolContentSections } from "@/components/tool-content-sections";

type ToolPageShellProps = {
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
  eyebrow,
  title,
  description,
  highlights,
  labels,
  relatedTools,
  content,
  children,
}: ToolPageShellProps) {
  return (
    <main className="pb-16">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <section className="grid overflow-hidden rounded-[34px] bg-[#14151A] text-white shadow-[var(--brand-shadow-strong)] lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8F135]">{eyebrow}</p>
            <h1 className="display-type mt-5 max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col justify-between bg-[#2557FF] p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Toolyflow / Tool</span>
            <div className="mt-12 text-right">
              <span className="display-type text-8xl leading-none text-white/95" aria-hidden="true">↘</span>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
          <section className="min-w-0 space-y-8">
            {children}
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
