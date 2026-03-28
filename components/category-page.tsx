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
          <div className="space-y-5 rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {category.eyebrow}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--brand-text-primary)] sm:text-5xl">
              {category.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
              {category.description}
            </p>
          </div>

          <div className="grid gap-4">
            {category.highlights.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
              >
                <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {labels.toolListHeading}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
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
    </main>
  );
}
