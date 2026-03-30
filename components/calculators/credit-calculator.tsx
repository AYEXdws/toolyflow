"use client";

import { useState } from "react";

import { formatTrCurrency, formatTrNumber } from "@/lib/calculator-formatters";

import { CalculatorShell } from "@/components/calculators/calculator-shell";

type PaymentRow = {
  month: number;
  installment: number;
  principal: number;
  interest: number;
  balance: number;
};

export function CreditCalculatorTool() {
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
      setError("Lütfen geçerli kredi tutarı, faiz oranı ve vade gir.");
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
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">Kredi tutarı (TL)</span>
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              inputMode="decimal"
              placeholder="250000"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">Faiz oranı (aylık %)</span>
            <input
              value={rate}
              onChange={(event) => setRate(event.target.value)}
              inputMode="decimal"
              placeholder="3.19"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">Vade (ay)</span>
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
              Hesapla
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex min-h-11 items-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
            >
              Temizle
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
                    Aylık taksit
                  </p>
                  <p className="mt-4 text-4xl font-bold text-[color:var(--brand-text-primary)]">
                    {formatTrCurrency(result.monthlyPayment)}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4">
                    <p className="text-sm text-[color:var(--brand-text-secondary)]">Toplam geri ödeme</p>
                    <p className="mt-2 text-xl font-bold text-[color:var(--brand-text-primary)]">
                      {formatTrCurrency(result.totalRepayment)}
                    </p>
                  </div>
                  <div className="rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4">
                    <p className="text-sm text-[color:var(--brand-text-secondary)]">Toplam faiz</p>
                    <p className="mt-2 text-xl font-bold text-[color:var(--brand-text-primary)]">
                      {formatTrCurrency(result.totalInterest)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                Kredi tutarı, faiz oranı ve vadeyi gir. Aylık taksit ve toplam ödeme burada görünecek.
              </p>
            )}
          </div>

          {result ? (
            <div className="overflow-hidden rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
              <div className="border-b border-[color:var(--brand-border)] px-4 py-3">
                <h3 className="text-base font-bold text-[color:var(--brand-text-primary)]">Ödeme tablosu</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-[color:var(--brand-text-secondary)]">
                  <thead className="bg-[color:var(--brand-card)] text-[color:var(--brand-text-primary)]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Ay</th>
                      <th className="px-4 py-3 font-semibold">Taksit</th>
                      <th className="px-4 py-3 font-semibold">Anapara</th>
                      <th className="px-4 py-3 font-semibold">Faiz</th>
                      <th className="px-4 py-3 font-semibold">Kalan borç</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((row) => (
                      <tr key={row.month} className="border-t border-[color:var(--brand-border)]">
                        <td className="px-4 py-3">{formatTrNumber(row.month)}</td>
                        <td className="px-4 py-3">{formatTrCurrency(row.installment)}</td>
                        <td className="px-4 py-3">{formatTrCurrency(row.principal)}</td>
                        <td className="px-4 py-3">{formatTrCurrency(row.interest)}</td>
                        <td className="px-4 py-3">{formatTrCurrency(row.balance)}</td>
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
