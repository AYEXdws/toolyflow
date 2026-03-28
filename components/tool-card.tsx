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
  goLabel: string;
};

export function ToolCard({ tool, href, goLabel }: ToolCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 transition duration-200 hover:scale-[1.02] hover:border-[color:var(--brand-border-hover)] hover:shadow-[0_18px_50px_rgba(124,58,237,0.16)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
          {tool.accentLabel}
        </span>
        <span className="text-[11px] uppercase tracking-[0.06em] text-[color:var(--brand-text-tertiary)]">
          {tool.eyebrow}
        </span>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl leading-none font-bold tracking-tight text-[color:var(--brand-text-primary)]">
          {tool.name}
        </h2>
        <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href={href}
          className="inline-flex min-h-11 items-center rounded-xl border border-[color:var(--brand-border)] px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-text-primary)] transition group-hover:border-[color:var(--brand-border-hover)] group-hover:bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] group-hover:text-white"
        >
          {goLabel}
        </Link>
      </div>
    </article>
  );
}
