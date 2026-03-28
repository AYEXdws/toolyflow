"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type PercentageCalculatorLabels = {
  modeLabel: string;
  modes: {
    percentOf: string;
    whatPercent: string;
    changeBy: string;
  };
  firstValue: string;
  secondValue: string;
  percentageValue: string;
  helper: string;
  copy: string;
  copied: string;
  result: string;
  formula: string;
  clear: string;
};

type Mode = "percentOf" | "whatPercent" | "changeBy";

type Props = {
  labels: PercentageCalculatorLabels;
};

function formatNumber(value: number) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

export function PercentageCalculator({ labels }: Props) {
  const [mode, setMode] = useState<Mode>("percentOf");
  const [first, setFirst] = useState("20");
  const [second, setSecond] = useState("250");
  const [percentage, setPercentage] = useState("15");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const firstNumber = Number(first) || 0;
    const secondNumber = Number(second) || 0;
    const percentageNumber = Number(percentage) || 0;

    if (mode === "percentOf") {
      const value = (percentageNumber / 100) * secondNumber;
      return {
        result: value,
        formula: `${formatNumber(percentageNumber)} / 100 × ${formatNumber(secondNumber)}`,
      };
    }

    if (mode === "whatPercent") {
      const value = secondNumber === 0 ? 0 : (firstNumber / secondNumber) * 100;
      return {
        result: value,
        formula: `${formatNumber(firstNumber)} / ${formatNumber(secondNumber)} × 100`,
      };
    }

    const value = firstNumber + (firstNumber * percentageNumber) / 100;
    return {
      result: value,
      formula: `${formatNumber(firstNumber)} + (${formatNumber(firstNumber)} × ${formatNumber(percentageNumber)} / 100)`,
    };
  }, [first, mode, percentage, second]);

  async function handleCopy() {
    const didCopy = await copyToClipboard(`${labels.result}: ${formatNumber(result.result)}\n${labels.formula}: ${result.formula}`);

    if (!didCopy) {
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
        <div className="space-y-5">
          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.modeLabel}</span>
            <div className="grid gap-3">
              {(Object.keys(labels.modes) as Mode[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={`rounded-[20px] px-4 py-3 text-left text-sm font-medium transition ${
                    mode === item
                      ? "bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] text-white"
                      : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                  }`}
                >
                  {labels.modes[item]}
                </button>
              ))}
            </div>
          </div>

          {(mode === "percentOf" || mode === "changeBy") && (
            <label className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.percentageValue}</span>
              <input
                value={percentage}
                onChange={(event) => setPercentage(event.target.value)}
                inputMode="decimal"
                className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
              />
            </label>
          )}

          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.firstValue}</span>
            <input
              value={first}
              onChange={(event) => setFirst(event.target.value)}
              inputMode="decimal"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
            />
          </label>

          {(mode === "percentOf" || mode === "whatPercent") && (
            <label className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                {mode === "percentOf" ? labels.secondValue : labels.secondValue}
              </span>
              <input
                value={second}
                onChange={(event) => setSecond(event.target.value)}
                inputMode="decimal"
                className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
              />
            </label>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {copied ? labels.copied : labels.copy}
            </button>
            <button
              type="button"
              onClick={() => {
                setFirst("20");
                setSecond("250");
                setPercentage("15");
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
            >
              {labels.clear}
            </button>
          </div>

          <p className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.helper}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">{labels.result}</p>
            <p className="mt-4 text-4xl font-bold text-[color:var(--brand-text-primary)]">{formatNumber(result.result)}</p>
          </article>
          <article className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">{labels.formula}</p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)] break-words">{result.formula}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
