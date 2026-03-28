"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type DiscountCalculatorLabels = {
  originalPrice: string;
  discountRate: string;
  extraDiscount: string;
  helper: string;
  copy: string;
  copied: string;
  clear: string;
  results: {
    finalPrice: string;
    totalSaving: string;
    totalDiscount: string;
    priceAfterMainDiscount: string;
  };
};

type Props = {
  labels: DiscountCalculatorLabels;
};

function formatCurrencyLike(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

export function DiscountCalculator({ labels }: Props) {
  const [price, setPrice] = useState("1200");
  const [discount, setDiscount] = useState("25");
  const [extraDiscount, setExtraDiscount] = useState("10");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const basePrice = Math.max(0, Number(price) || 0);
    const mainDiscount = Math.min(100, Math.max(0, Number(discount) || 0));
    const extra = Math.min(100, Math.max(0, Number(extraDiscount) || 0));
    const afterMainDiscount = basePrice * (1 - mainDiscount / 100);
    const finalPrice = afterMainDiscount * (1 - extra / 100);
    const totalSaving = basePrice - finalPrice;
    const totalDiscount = basePrice === 0 ? 0 : (totalSaving / basePrice) * 100;

    return {
      afterMainDiscount,
      finalPrice,
      totalSaving,
      totalDiscount,
    };
  }, [discount, extraDiscount, price]);

  async function handleCopy() {
    const summary = [
      `${labels.results.finalPrice}: ${formatCurrencyLike(result.finalPrice)}`,
      `${labels.results.totalSaving}: ${formatCurrencyLike(result.totalSaving)}`,
      `${labels.results.totalDiscount}: ${formatCurrencyLike(result.totalDiscount)}%`,
    ].join("\n");
    const didCopy = await copyToClipboard(summary);

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
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.originalPrice}</span>
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              inputMode="decimal"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
            />
          </label>

          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.discountRate}</span>
            <input
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
              inputMode="decimal"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
            />
          </label>

          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">{labels.extraDiscount}</span>
            <input
              value={extraDiscount}
              onChange={(event) => setExtraDiscount(event.target.value)}
              inputMode="decimal"
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
            />
          </label>

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
                setPrice("1200");
                setDiscount("25");
                setExtraDiscount("10");
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
          {[
            { label: labels.results.finalPrice, value: formatCurrencyLike(result.finalPrice) },
            { label: labels.results.totalSaving, value: formatCurrencyLike(result.totalSaving) },
            { label: labels.results.totalDiscount, value: `${formatCurrencyLike(result.totalDiscount)}%` },
            {
              label: labels.results.priceAfterMainDiscount,
              value: formatCurrencyLike(result.afterMainDiscount),
            },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">{item.label}</p>
              <p className="mt-4 text-3xl font-bold text-[color:var(--brand-text-primary)]">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
