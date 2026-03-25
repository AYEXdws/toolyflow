import Link from "next/link";

type ToolCardProps = {
  tool: {
    slug: string;
    name: string;
    shortDescription: string;
    eyebrow: string;
    accentLabel: string;
  };
  href: string;
  openToolLabel: string;
  goLabel: string;
};

export function ToolCard({
  tool,
  href,
  openToolLabel,
  goLabel,
}: ToolCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(23,28,24,0.1)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full bg-[color:var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
          {tool.accentLabel}
        </span>
        <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
          {tool.eyebrow}
        </span>
      </div>

      <div className="space-y-4">
        <h2 className="font-display text-3xl leading-none tracking-tight text-[color:var(--color-foreground)]">
          {tool.name}
        </h2>
        <p className="text-sm leading-7 text-[color:var(--color-muted)]">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm font-medium text-[color:var(--color-foreground)]">
          {openToolLabel}
        </span>
        <Link
          href={href}
          className="inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[color:var(--color-foreground)] transition group-hover:border-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)] group-hover:text-white"
        >
          {goLabel}
        </Link>
      </div>
    </article>
  );
}
