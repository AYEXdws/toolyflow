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
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 2xl:grid-cols-[minmax(0,1.3fr)_320px]">
          <section className="min-w-0 space-y-8">
            <div className="space-y-5 rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                {eyebrow}
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--brand-text-primary)] sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
                {description}
              </p>
            </div>

            {children}

            <ToolContentSections content={content} />
          </section>

          <aside className="min-w-0 space-y-6">
            <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                {labels.whyUseIt}
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                {labels.exploreMore}
              </h2>
              <div className="mt-5 space-y-3">
                {relatedTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.href}
                    className="block rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-secondary)] transition hover:border-[color:var(--brand-border-hover)] hover:text-[color:var(--brand-text-primary)]"
                  >
                    <span className="block font-medium text-[color:var(--brand-text-primary)]">
                      {tool.name}
                    </span>
                    <span>{tool.shortDescription}</span>
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
