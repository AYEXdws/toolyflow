import type { ReactNode } from "react";

type CalculatorShellProps = {
  form: ReactNode;
  result: ReactNode;
};

export function CalculatorShell({ form, result }: CalculatorShellProps) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow)]">
      <div className="grid xl:grid-cols-[380px_minmax(0,1fr)]">
        <div className="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 sm:p-8 xl:border-b-0 xl:border-r">{form}</div>
        <div className="p-6 sm:p-8">{result}</div>
      </div>
    </section>
  );
}
