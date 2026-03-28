import Link from "next/link";

type ToolContentSectionsProps = {
  content: {
    howToUseTitle: string;
    howToUseDescription: string;
    howToUseSteps: Array<{ title: string; body: string }>;
    useCasesTitle: string;
    useCasesDescription: string;
    useCases: Array<{ title: string; description: string }>;
    examplesTitle: string;
    examplesDescription: string;
    examples: Array<{
      title: string;
      inputLabel: string;
      input: string;
      outputLabel: string;
      output: string;
      note: string;
    }>;
    faqTitle: string;
    faqs: Array<{ question: string; answer: string }>;
  };
  relatedHeading: string;
  relatedTools: Array<{
    slug: string;
    name: string;
    shortDescription: string;
    href: string;
  }>;
};

export function ToolContentSections({
  content,
  relatedHeading,
  relatedTools,
}: ToolContentSectionsProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-7 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
            {content.howToUseTitle}
          </h2>
          <p className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
            {content.howToUseDescription}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.howToUseSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[24px] border border-black/8 bg-white px-5 py-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent-strong)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-7 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
            {content.useCasesTitle}
          </h2>
          <p className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
            {content.useCasesDescription}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="rounded-[24px] border border-black/8 bg-white px-5 py-5"
            >
              <h3 className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-7 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
            {content.examplesTitle}
          </h2>
          <p className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
            {content.examplesDescription}
          </p>
        </div>
        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {content.examples.map((example) => (
            <article
              key={example.title}
              className="rounded-[24px] border border-black/8 bg-white px-5 py-5"
            >
              <h3 className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {example.title}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="min-w-0 rounded-[20px] bg-black/[0.03] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent-strong)]">
                    {example.inputLabel}
                  </p>
                  <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-7 text-[color:var(--color-foreground)]">
                    {example.input}
                  </pre>
                </div>
                <div className="min-w-0 rounded-[20px] bg-[color:var(--color-accent-soft)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent-strong)]">
                    {example.outputLabel}
                  </p>
                  <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-7 text-[color:var(--color-foreground)]">
                    {example.output}
                  </pre>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                {example.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-7 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
        <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
          {content.faqTitle}
        </h2>
        <div className="mt-6 space-y-4">
          {content.faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-[24px] border border-black/8 bg-white px-5 py-5"
            >
              <h3 className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] px-6 py-7 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:px-8">
        <h2 className="font-display text-3xl tracking-tight text-[color:var(--color-foreground)]">
          {relatedHeading}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedTools.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="rounded-[24px] border border-black/8 bg-white px-5 py-5 transition hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]"
            >
              <h3 className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {tool.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                {tool.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
