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
    </main>
  );
}
