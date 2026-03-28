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
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="space-y-5 rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-8 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--color-accent-strong)]">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[color:var(--color-foreground)] sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[color:var(--color-muted)]">
            {description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-8 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
                  {section.title}
                </h2>
                <p className="whitespace-pre-line text-base leading-8 text-[color:var(--color-muted)]">
                  {section.body}
                </p>
                {section.items?.length ? (
                  <ul className="space-y-3 pt-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[20px] bg-black/[0.03] px-4 py-3 text-sm leading-7 text-[color:var(--color-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.email ? (
                  <div className="pt-1">
                    <Link
                      href={`mailto:${section.email}`}
                      className="inline-flex min-h-11 flex-wrap items-center gap-2 rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] px-4 py-2.5 text-sm font-medium text-[color:var(--color-accent-strong)] transition hover:bg-white"
                    >
                      <span>{section.emailLabel ?? "Email"}</span>
                      <span>{section.email}</span>
                    </Link>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
