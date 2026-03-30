import type { ReactNode } from "react";

type CalculatorShellProps = {
  form: ReactNode;
  result: ReactNode;
};

export function CalculatorShell({ form, result }: CalculatorShellProps) {
  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
        <div>{form}</div>
        <div>{result}</div>
      </div>
    </section>
  );
}
