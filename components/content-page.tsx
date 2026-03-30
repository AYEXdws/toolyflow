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
        <div className="space-y-5 rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--brand-text-primary)] sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
            {description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                  {section.title}
                </h2>
                <p className="whitespace-pre-line text-base leading-8 text-[color:var(--brand-text-secondary)]">
                  {section.body}
                </p>
                {section.items?.length ? (
                  <ul className="space-y-3 pt-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]"
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
                      className="inline-flex min-h-11 flex-wrap items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
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
