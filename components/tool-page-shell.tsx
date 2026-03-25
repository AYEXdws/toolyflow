import type { ReactNode } from "react";
import Link from "next/link";

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
  children: ReactNode;
};

export function ToolPageShell({
  eyebrow,
  title,
  description,
  highlights,
  labels,
  relatedTools,
  children,
}: ToolPageShellProps) {
  return (
    <main className="pb-16">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.3fr)_320px]">
          <section className="space-y-8">
            <div className="space-y-5 rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-8 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--color-accent-strong)]">
                {eyebrow}
              </p>
              <h1 className="font-display text-4xl tracking-tight text-[color:var(--color-foreground)] sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-[color:var(--color-muted)]">
                {description}
              </p>
            </div>

            {children}
          </section>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)]">
              <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {labels.whyUseIt}
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {highlights.map((item) => (
                  <li key={item} className="rounded-2xl bg-black/[0.03] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)]">
              <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {labels.exploreMore}
              </h2>
              <div className="mt-5 space-y-3">
                {relatedTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.href}
                    className="block rounded-2xl border border-black/8 px-4 py-3 text-sm text-[color:var(--color-muted)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-foreground)]"
                  >
                    <span className="block font-medium text-[color:var(--color-foreground)]">
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
