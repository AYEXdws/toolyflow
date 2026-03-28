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
};

export function ToolContentSections({ content }: ToolContentSectionsProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
            {content.howToUseTitle}
          </h2>
          <p className="mt-3 text-base leading-8 text-[color:var(--brand-text-secondary)]">
            {content.howToUseDescription}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.howToUseSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
            {content.useCasesTitle}
          </h2>
          <p className="mt-3 text-base leading-8 text-[color:var(--brand-text-secondary)]">
            {content.useCasesDescription}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-5"
            >
              <h3 className="text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
            {content.examplesTitle}
          </h2>
          <p className="mt-3 text-base leading-8 text-[color:var(--brand-text-secondary)]">
            {content.examplesDescription}
          </p>
        </div>
        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {content.examples.map((example) => (
            <article
              key={example.title}
              className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-5"
            >
              <h3 className="text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                {example.title}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="min-w-0 rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                    {example.inputLabel}
                  </p>
                  <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-7 text-[color:var(--brand-text-primary)]">
                    {example.input}
                  </pre>
                </div>
                <div className="min-w-0 rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-badge-bg)] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                    {example.outputLabel}
                  </p>
                  <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-7 text-[color:var(--brand-text-primary)]">
                    {example.output}
                  </pre>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {example.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
          {content.faqTitle}
        </h2>
        <div className="mt-6 space-y-4">
          {content.faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-5"
            >
              <h3 className="text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
