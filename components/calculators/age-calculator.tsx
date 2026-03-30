"use client";

import { useState } from "react";

import { formatLocalizedNumber } from "@/lib/calculator-formatters";
import type { Locale } from "@/lib/i18n";
import type { AgeCalculatorLabels } from "@/lib/tr-calculators";

import { CalculatorShell } from "@/components/calculators/calculator-shell";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  livedDays: number;
  nextBirthdayDays: number;
};

function createSafeDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day, 12);
}

function diffInDays(start: Date, end: Date) {
  return Math.round((end.getTime() - start.getTime()) / 86400000);
}

type AgeCalculatorToolProps = {
  locale: Locale;
  labels: AgeCalculatorLabels;
};

export function AgeCalculatorTool({ locale, labels }: AgeCalculatorToolProps) {
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);

  function handleCalculate() {
    if (!birthDate) {
      setError(labels.invalidDate);
      setResult(null);
      return;
    }

    const birth = createSafeDate(birthDate);
    const today = new Date();
    const safeToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12);

    if (birth > safeToday) {
      setError(labels.futureDate);
      setResult(null);
      return;
    }

    let years = safeToday.getFullYear() - birth.getFullYear();
    let months = safeToday.getMonth() - birth.getMonth();
    let days = safeToday.getDate() - birth.getDate();

    if (days < 0) {
      const previousMonthDays = new Date(safeToday.getFullYear(), safeToday.getMonth(), 0).getDate();
      days += previousMonthDays;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    let nextBirthday = new Date(safeToday.getFullYear(), birth.getMonth(), birth.getDate(), 12);

    if (nextBirthday < safeToday) {
      nextBirthday = new Date(safeToday.getFullYear() + 1, birth.getMonth(), birth.getDate(), 12);
    }

    setError("");
    setResult({
      years,
      months,
      days,
      livedDays: diffInDays(birth, safeToday),
      nextBirthdayDays: diffInDays(safeToday, nextBirthday),
    });
  }

  function handleClear() {
    setBirthDate("");
    setError("");
    setResult(null);
  }

  return (
    <CalculatorShell
      form={
        <div className="space-y-5">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.birthDate}</span>
            <input
              type="date"
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          {error ? <p className="text-sm font-medium text-rose-300">{error}</p> : null}
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={handleCalculate} className="inline-flex min-h-11 items-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              {labels.calculate}
            </button>
            <button type="button" onClick={handleClear} className="inline-flex min-h-11 items-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]">
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">{labels.exactAge}</p>
                <p className="text-4xl font-bold text-[color:var(--brand-text-primary)]">
                  {formatLocalizedNumber(locale, result.years)} {labels.years}, {formatLocalizedNumber(locale, result.months)} {labels.months}, {formatLocalizedNumber(locale, result.days)} {labels.days}
                </p>
              </div>
            ) : (
              <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {labels.empty}
              </p>
            )}
          </div>
          {result ? (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">{labels.livedDays}</p>
                <p className="mt-4 text-3xl font-bold text-[color:var(--brand-text-primary)]">{formatLocalizedNumber(locale, result.livedDays)}</p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">{labels.nextBirthdayDays}</p>
                <p className="mt-4 text-3xl font-bold text-[color:var(--brand-text-primary)]">{formatLocalizedNumber(locale, result.nextBirthdayDays)}</p>
              </div>
            </div>
          ) : null}
        </div>
      }
    />
  );
}
