"use client";

import { useState } from "react";

import { formatTrNumber } from "@/lib/calculator-formatters";

import { CalculatorShell } from "@/components/calculators/calculator-shell";

type Mode = "percentOf" | "ratio" | "adjust";

export function PercentageCalcTool() {
  const [mode, setMode] = useState<Mode>("percentOf");
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ value: number; explanation: string } | null>(null);

  function handleCalculate() {
    const x = Number(xValue);
    const y = Number(yValue);

    if (!Number.isFinite(x) || !Number.isFinite(y) || (mode === "ratio" && y === 0)) {
      setError("Lütfen geçerli sayılar gir.");
      setResult(null);
      return;
    }

    let value = 0;
    let explanation = "";

    if (mode === "percentOf") {
      value = (x * y) / 100;
      explanation = `${formatTrNumber(x)} sayısının %${formatTrNumber(y)} değeri ${formatTrNumber(value)} eder.`;
    } else if (mode === "ratio") {
      value = (x / y) * 100;
      explanation = `${formatTrNumber(x)}, ${formatTrNumber(y)} sayısının %${formatTrNumber(value, { maximumFractionDigits: 2 })} kadarıdır.`;
    } else {
      value = operation === "add" ? x * (1 + y / 100) : x * (1 - y / 100);
      explanation = `${formatTrNumber(x)} değerine %${formatTrNumber(y)} ${operation === "add" ? "eklendiğinde" : "çıkarıldığında"} sonuç ${formatTrNumber(value)} olur.`;
    }

    setError("");
    setResult({ value, explanation });
  }

  function handleClear() {
    setXValue("");
    setYValue("");
    setOperation("add");
    setError("");
    setResult(null);
  }

  const modeLabels = {
    percentOf: "Bir sayının yüzdesi",
    ratio: "Yüzde oranı",
    adjust: "Yüzde ekle / çıkar",
  } as const;

  return (
    <CalculatorShell
      form={
        <div className="space-y-5">
          <div className="grid gap-2">
            {(Object.keys(modeLabels) as Mode[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                className={`rounded-[20px] px-4 py-3 text-left text-sm font-medium transition ${
                  mode === item
                    ? "bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] text-white"
                    : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                }`}
              >
                {modeLabels[item]}
              </button>
            ))}
          </div>

          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {mode === "percentOf" ? "Sayı" : "X değeri"}
            </span>
            <input
              value={xValue}
              onChange={(event) => setXValue(event.target.value)}
              inputMode="decimal"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>

          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {mode === "percentOf" ? "Yüzde" : "Y değeri"}
            </span>
            <input
              value={yValue}
              onChange={(event) => setYValue(event.target.value)}
              inputMode="decimal"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
            />
          </label>

          {mode === "adjust" ? (
            <label className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">İşlem yönü</span>
              <select
                value={operation}
                onChange={(event) => setOperation(event.target.value as "add" | "subtract")}
                className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
              >
                <option value="add">Ekle</option>
                <option value="subtract">Çıkar</option>
              </select>
            </label>
          ) : null}

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
              <>
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">Sonuç</p>
                <p className="mt-4 text-4xl font-bold text-[color:var(--brand-text-primary)]">{formatTrNumber(result.value, { maximumFractionDigits: 2 })}</p>
              </>
            ) : (
              <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                İki değeri gir ve hangi yüzde işlemini yapmak istediğini seç.
              </p>
            )}
          </div>
          {result ? (
            <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">Açıklama</p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">{result.explanation}</p>
            </div>
          ) : null}
        </div>
      }
    />
  );
}
