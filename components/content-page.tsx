import Link from "next/link";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    body: string;
    items?: string[];
    emailLabel?: string;
    email?: string;
  }>;
};

export function ContentPage({
  eyebrow,
  title,
  description,
  sections,
}: ContentPageProps) {
  return (
    <main className="pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid overflow-hidden rounded-[34px] bg-[#14151A] text-white shadow-[var(--brand-shadow-strong)] md:grid-cols-[minmax(0,1fr)_220px]">
          <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8F135]">{eyebrow}</p>
            <h1 className="display-type mt-5 text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65">{description}</p>
          </div>
          <div className="hidden items-end justify-end bg-[#FF5D2E] p-8 md:flex">
            <span className="display-type text-8xl" aria-hidden="true">i</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section, index) => (
              <section key={section.title} className="rounded-[26px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)] sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="display-type mt-3 text-3xl font-bold tracking-[-0.04em] text-[color:var(--brand-text-primary)]">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-base leading-8 text-[color:var(--brand-text-secondary)]">
                  {section.body}
                </p>
                {section.items?.length ? (
                  <ul className="space-y-3 pt-1">
                    {section.items.map((item) => (
                      <li key={item} className="border-b border-[color:var(--brand-border)] py-3 text-sm leading-7 text-[color:var(--brand-text-secondary)] last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.email ? (
                  <div className="pt-1">
                    <Link
                      href={`mailto:${section.email}`}
                      className="inline-flex min-h-11 flex-wrap items-center gap-2 rounded-[14px] bg-[#2557FF] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                    >
                      <span>{section.emailLabel ?? "Email"}</span>
                      <span>{section.email}</span>
                    </Link>
                  </div>
                ) : null}
              </section>
            ))}
        </div>
      </section>
    </main>
  );
}
