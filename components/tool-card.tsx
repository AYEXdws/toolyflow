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
    <article className="group relative flex h-full min-h-72 flex-col overflow-hidden rounded-[26px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)] transition duration-200 hover:-translate-y-1 hover:border-[color:var(--brand-border-hover)] hover:shadow-[var(--brand-shadow-strong)]">
      <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[color:var(--brand-badge-bg)] transition duration-300 group-hover:scale-[1.8]" />
      <div className="relative flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--brand-badge-text)]">
          {tool.accentLabel}
        </span>
        <span className="text-xs font-bold text-[color:var(--brand-text-tertiary)]">↗</span>
      </div>

      <div className="relative mt-auto pt-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--brand-text-tertiary)]">{tool.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[color:var(--brand-text-primary)]">{tool.name}</h2>
        <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">{tool.shortDescription}</p>
        <Link href={href} className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-[color:var(--brand-secondary)]">
          {goLabel}<span className="ml-2 transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
