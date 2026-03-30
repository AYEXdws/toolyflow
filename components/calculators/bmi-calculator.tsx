"use client";

import { useState } from "react";

import { formatLocalizedNumber } from "@/lib/calculator-formatters";
import type { Locale } from "@/lib/i18n";
import type { BmiCalculatorLabels } from "@/lib/tr-calculators";

import { CalculatorShell } from "@/components/calculators/calculator-shell";

type BMIResult = {
  bmi: number;
  category: string;
  comment: string;
  color: string;
};

type BmiCalculatorToolProps = {
  locale: Locale;
  labels: BmiCalculatorLabels;
};

export function BmiCalculatorTool({ locale, labels }: BmiCalculatorToolProps) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  function handleCalculate() {
    const heightCm = Number(height);
    const weightKg = Number(weight);

    if (!Number.isFinite(heightCm) || !Number.isFinite(weightKg) || heightCm <= 0 || weightKg <= 0) {
      setError(labels.invalidInput);
      setResult(null);
      return;
    }

    const bmi = weightKg / (heightCm / 100) ** 2;
    let category = labels.categories.normal;
    let comment = labels.comments.normal;
    let color = "#10B981";

    if (bmi < 18.5) {
      category = labels.categories.underweight;
      comment = labels.comments.underweight;
      color = "#F59E0B";
    } else if (bmi >= 25 && bmi < 30) {
      category = labels.categories.overweight;
      comment = labels.comments.overweight;
      color = "#F97316";
    } else if (bmi >= 30) {
      category = labels.categories.obese;
      comment = labels.comments.obese;
      color = "#FB7185";
    }

    const suffix =
      gender === "male"
        ? labels.comments.maleSuffix
        : gender === "female"
          ? labels.comments.femaleSuffix
          : "";

    setError("");
    setResult({
      bmi,
      category,
      comment: `${comment}${suffix}`,
      color,
    });
  }

  function handleClear() {
    setHeight("");
    setWeight("");
    setGender("");
    setError("");
    setResult(null);
  }

  return (
    <CalculatorShell
      form={
        <div className="space-y-5">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.height}</span>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              inputMode="decimal"
              placeholder="175"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.weight}</span>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              inputMode="decimal"
              placeholder="70"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.gender}</span>
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            >
              <option value="">{labels.skipGender}</option>
              <option value="male">{labels.male}</option>
              <option value="female">{labels.female}</option>
            </select>
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
        <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
          {result ? (
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">{labels.resultTitle}</p>
              <div className="flex flex-wrap items-end gap-3">
                <p className="text-5xl font-bold" style={{ color: result.color }}>
                  {formatLocalizedNumber(locale, result.bmi, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                </p>
                <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]" style={{ background: `${result.color}1A`, color: result.color }}>
                  {result.category}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[color:var(--brand-card)]">
                <div className="h-full rounded-full" style={{ width: `${Math.min(result.bmi * 2.5, 100)}%`, background: result.color }} />
              </div>
              <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">{result.comment}</p>
            </div>
          ) : (
            <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
              {labels.empty}
            </p>
          )}
        </div>
      }
    />
  );
}
