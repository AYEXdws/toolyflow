import Link from "next/link";

import { ToolCard } from "@/components/tool-card";

type CategoryPageProps = {
  category: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
  };
  labels: {
    toolListHeading: string;
    toolListDescription: string;
    go: string;
  };
  tools: Array<{
    slug: string;
    name: string;
    shortDescription: string;
    eyebrow: string;
    accentLabel: string;
    href: string;
  }>;
  guide?: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      cta: string;
      href: string;
    }>;
  };
};

export function CategoryPage({ category, labels, tools, guide }: CategoryPageProps) {
  return (
    <main className="pb-16">
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid overflow-hidden rounded-[34px] border border-[#14151A] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow-strong)] lg:grid-cols-[minmax(0,1.3fr)_360px]">
          <div className="space-y-5 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">
              {category.eyebrow}
            </p>
            <h1 className="display-type text-5xl font-bold tracking-[-0.045em] text-[color:var(--brand-text-primary)] sm:text-6xl lg:text-7xl">
              {category.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
              {category.description}
            </p>
          </div>

          <div className="grid bg-[#14151A] p-5 text-white sm:p-7">
            {category.highlights.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 border-b border-white/12 px-1 py-5 last:border-b-0"
              >
                <span className="text-xs font-bold text-[#C8F135]">0{index + 1}</span>
                <p className="text-sm leading-7 text-white/68">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">
              {labels.toolListHeading}
            </p>
            <h2 className="display-type mt-3 text-4xl font-bold tracking-[-0.04em] text-[color:var(--brand-text-primary)] sm:text-5xl">
              {category.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.toolListDescription}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} href={tool.href} goLabel={labels.go} />
          ))}
        </div>
      </section>

      {guide ? (
        <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] bg-[#14151A] text-white shadow-[var(--brand-shadow-strong)]">
            <div className="grid gap-6 border-b border-white/12 px-6 py-9 sm:px-9 lg:grid-cols-[0.75fr_1fr] lg:px-11">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8F135]">{guide.eyebrow}</p>
                <h2 className="display-type mt-4 text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl">{guide.title}</h2>
              </div>
              <p className="self-end text-sm leading-7 text-white/65 sm:text-base sm:leading-8">{guide.description}</p>
            </div>
            <div className="grid lg:grid-cols-3">
              {guide.steps.map((step) => (
                <article key={step.number} className="flex min-h-72 flex-col border-b border-white/12 p-6 last:border-b-0 sm:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <span className="text-xs font-bold text-[#7C9BFF]">{step.number}</span>
                  <h3 className="mt-8 text-2xl font-extrabold tracking-[-0.035em]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{step.description}</p>
                  <Link href={step.href} className="group mt-auto inline-flex min-h-11 items-center pt-7 text-sm font-bold text-[#C8F135]">
                    {step.cta}<span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
