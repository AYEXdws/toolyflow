"use client";

import { useState } from "react";

import { formatLocalizedCurrency, formatLocalizedNumber } from "@/lib/calculator-formatters";
import type { Locale } from "@/lib/i18n";
import type { CreditCalculatorLabels } from "@/lib/tr-calculators";

import { CalculatorShell } from "@/components/calculators/calculator-shell";

type PaymentRow = {
  month: number;
  installment: number;
  principal: number;
  interest: number;
  balance: number;
};

type CreditCalculatorToolProps = {
  locale: Locale;
  labels: CreditCalculatorLabels;
};

export function CreditCalculatorTool({ locale, labels }: CreditCalculatorToolProps) {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalRepayment: number;
    totalInterest: number;
    schedule: PaymentRow[];
  } | null>(null);

  function handleCalculate() {
    const principal = Number(amount);
    const monthlyRate = Number(rate) / 100;
    const months = Number(term);

    if (
      !Number.isFinite(principal) ||
      !Number.isFinite(monthlyRate) ||
      !Number.isFinite(months) ||
      principal <= 0 ||
      monthlyRate < 0 ||
      months <= 0
    ) {
      setError(labels.invalidInput);
      setResult(null);
      return;
    }

    const monthlyPayment =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * (1 + monthlyRate) ** months) /
          ((1 + monthlyRate) ** months - 1);

    const totalRepayment = monthlyPayment * months;
    const totalInterest = totalRepayment - principal;
    const schedule: PaymentRow[] = [];
    let balance = principal;

    for (let month = 1; month <= months; month += 1) {
      const interestPayment = monthlyRate === 0 ? 0 : balance * monthlyRate;
      let principalPayment = monthlyPayment - interestPayment;

      if (month === months) {
        principalPayment = balance;
      }

      balance = Math.max(balance - principalPayment, 0);

      schedule.push({
        month,
        installment: month === months ? principalPayment + interestPayment : monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance,
      });
    }

    setError("");
    setResult({
      monthlyPayment,
      totalRepayment,
      totalInterest,
      schedule,
    });
  }

  function handleClear() {
    setAmount("");
    setRate("");
    setTerm("");
    setError("");
    setResult(null);
  }

  return (
    <CalculatorShell
      form={
        <div className="space-y-5">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.amount}</span>
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              inputMode="decimal"
              placeholder="250000"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.rate}</span>
            <input
              value={rate}
              onChange={(event) => setRate(event.target.value)}
              inputMode="decimal"
              placeholder="3.19"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.term}</span>
            <input
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              inputMode="numeric"
              placeholder="24"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          {error ? <p className="text-sm font-medium text-rose-300">{error}</p> : null}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCalculate}
              className="inline-flex min-h-11 items-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {labels.calculate}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex min-h-11 items-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
            >
              {labels.clear}
            </button>
          </div>
        </div>
      }
      result={
        <div className="space-y-4">
          <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
            {result ? (
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                    {labels.monthlyPayment}
                  </p>
                  <p className="mt-4 text-4xl font-bold text-[color:var(--brand-text-primary)]">
                    {formatLocalizedCurrency(locale, result.monthlyPayment)}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4">
                    <p className="text-sm text-[color:var(--brand-text-secondary)]">{labels.totalRepayment}</p>
                    <p className="mt-2 text-xl font-bold text-[color:var(--brand-text-primary)]">
                      {formatLocalizedCurrency(locale, result.totalRepayment)}
                    </p>
                  </div>
                  <div className="rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4">
                    <p className="text-sm text-[color:var(--brand-text-secondary)]">{labels.totalInterest}</p>
                    <p className="mt-2 text-xl font-bold text-[color:var(--brand-text-primary)]">
                      {formatLocalizedCurrency(locale, result.totalInterest)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {labels.empty}
              </p>
            )}
          </div>

          {result ? (
            <div className="overflow-hidden rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
              <div className="border-b border-[color:var(--brand-border)] px-4 py-3">
                <h3 className="text-base font-bold text-[color:var(--brand-text-primary)]">{labels.scheduleTitle}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-[color:var(--brand-text-secondary)]">
                  <thead className="bg-[color:var(--brand-card)] text-[color:var(--brand-text-primary)]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">{labels.scheduleColumns.month}</th>
                      <th className="px-4 py-3 font-semibold">{labels.scheduleColumns.installment}</th>
                      <th className="px-4 py-3 font-semibold">{labels.scheduleColumns.principal}</th>
                      <th className="px-4 py-3 font-semibold">{labels.scheduleColumns.interest}</th>
                      <th className="px-4 py-3 font-semibold">{labels.scheduleColumns.balance}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((row) => (
                      <tr key={row.month} className="border-t border-[color:var(--brand-border)]">
                        <td className="px-4 py-3">{formatLocalizedNumber(locale, row.month)}</td>
                        <td className="px-4 py-3">{formatLocalizedCurrency(locale, row.installment)}</td>
                        <td className="px-4 py-3">{formatLocalizedCurrency(locale, row.principal)}</td>
                        <td className="px-4 py-3">{formatLocalizedCurrency(locale, row.interest)}</td>
                        <td className="px-4 py-3">{formatLocalizedCurrency(locale, row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      }
    />
  );
}
