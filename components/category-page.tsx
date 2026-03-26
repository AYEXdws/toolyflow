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
};

export function CategoryPage({ category, labels, tools }: CategoryPageProps) {
  return (
    <main className="pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_320px]">
          <div className="space-y-5 rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-8 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--color-accent-strong)]">
              {category.eyebrow}
            </p>
            <h1 className="font-display text-4xl tracking-tight text-[color:var(--color-foreground)] sm:text-5xl">
              {category.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--color-muted)]">
              {category.description}
            </p>
          </div>

          <div className="grid gap-4">
            {category.highlights.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)]"
              >
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
              {labels.toolListHeading}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[color:var(--color-foreground)]">
              {category.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--color-muted)]">
            {labels.toolListDescription}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} href={tool.href} goLabel={labels.go} />
          ))}
        </div>
      </section>
    </main>
  );
}
