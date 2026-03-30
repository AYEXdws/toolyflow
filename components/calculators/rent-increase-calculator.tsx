"use client";

import { useState } from "react";

import { formatTrCurrency, formatTrNumber } from "@/lib/calculator-formatters";

import { CalculatorShell } from "@/components/calculators/calculator-shell";

type IncreaseRow = {
  period: number;
  previousRent: number;
  increaseAmount: number;
  newRent: number;
};

export function RentIncreaseCalculatorTool() {
  const [currentRent, setCurrentRent] = useState("");
  const [increaseRate, setIncreaseRate] = useState("");
  const [increaseCount, setIncreaseCount] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    newRent: number;
    totalIncrease: number;
    table: IncreaseRow[];
  } | null>(null);

  function handleCalculate() {
    const rent = Number(currentRent);
    const rate = Number(increaseRate);
    const count = Number(increaseCount);

    if (!Number.isFinite(rent) || !Number.isFinite(rate) || !Number.isFinite(count) || rent <= 0 || rate < 0 || count <= 0) {
      setError("Lütfen geçerli kira, artış oranı ve artış sayısı gir.");
      setResult(null);
      return;
    }

    const table: IncreaseRow[] = [];
    let rollingRent = rent;

    for (let period = 1; period <= count; period += 1) {
      const increaseAmountValue = rollingRent * (rate / 100);
      const newRentValue = rollingRent + increaseAmountValue;

      table.push({
        period,
        previousRent: rollingRent,
        increaseAmount: increaseAmountValue,
        newRent: newRentValue,
      });

      rollingRent = newRentValue;
    }

    setError("");
    setResult({
      newRent: rollingRent,
      totalIncrease: rollingRent - rent,
      table,
    });
  }

  function handleClear() {
    setCurrentRent("");
    setIncreaseRate("");
    setIncreaseCount("");
    setError("");
    setResult(null);
  }

  return (
    <CalculatorShell
      form={
        <div className="space-y-5">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">Mevcut kira (TL)</span>
            <input value={currentRent} onChange={(event) => setCurrentRent(event.target.value)} inputMode="decimal" placeholder="15000" className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]" />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">Artış oranı (%)</span>
            <input value={increaseRate} onChange={(event) => setIncreaseRate(event.target.value)} inputMode="decimal" placeholder="25" className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]" />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">Artış sayısı</span>
            <input value={increaseCount} onChange={(event) => setIncreaseCount(event.target.value)} inputMode="numeric" placeholder="2" className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]" />
          </label>
          {error ? <p className="text-sm font-medium text-rose-300">{error}</p> : null}
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={handleCalculate} className="inline-flex min-h-11 items-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Hesapla
            </button>
            <button type="button" onClick={handleClear} className="inline-flex min-h-11 items-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]">
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">Yeni kira tutarı</p>
                  <p className="mt-4 text-4xl font-bold text-[color:var(--brand-text-primary)]">{formatTrCurrency(result.newRent)}</p>
                </div>
                <div className="rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4">
                  <p className="text-sm text-[color:var(--brand-text-secondary)]">Artış miktarı</p>
                  <p className="mt-2 text-xl font-bold text-[color:var(--brand-text-primary)]">{formatTrCurrency(result.totalIncrease)}</p>
                </div>
              </div>
            ) : (
              <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                Mevcut kira ve artış oranını gir. Yeni kira tutarı ve artış tablosu burada oluşacak.
              </p>
            )}
          </div>
          {result ? (
            <div className="overflow-hidden rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
              <div className="border-b border-[color:var(--brand-border)] px-4 py-3">
                <h3 className="text-base font-bold text-[color:var(--brand-text-primary)]">Artış tablosu</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-[color:var(--brand-text-secondary)]">
                  <thead className="bg-[color:var(--brand-card)] text-[color:var(--brand-text-primary)]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Dönem</th>
                      <th className="px-4 py-3 font-semibold">Önceki kira</th>
                      <th className="px-4 py-3 font-semibold">Artış</th>
                      <th className="px-4 py-3 font-semibold">Yeni kira</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.table.map((row) => (
                      <tr key={row.period} className="border-t border-[color:var(--brand-border)]">
                        <td className="px-4 py-3">{formatTrNumber(row.period)}</td>
                        <td className="px-4 py-3">{formatTrCurrency(row.previousRent)}</td>
                        <td className="px-4 py-3">{formatTrCurrency(row.increaseAmount)}</td>
                        <td className="px-4 py-3">{formatTrCurrency(row.newRent)}</td>
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
