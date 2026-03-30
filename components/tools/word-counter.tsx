"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type WordCounterLabels = {
  inputLabel: string;
  placeholder: string;
  helper: string;
  defaultText: string;
  clearText: string;
  copyText: string;
  copied: string;
  words: string;
  characters: string;
  noSpaces: string;
  sentences: string;
  paragraphs: string;
  readingTime: string;
  topWords: string;
  emptyTerms: string;
};

type WordCounterProps = {
  labels: WordCounterLabels;
};

function extractTerms(value: string) {
  return (
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .match(/[\p{L}\p{N}]{3,}/gu) ?? []
  );
}

export function WordCounter({ labels }: WordCounterProps) {
  const [input, setInput] = useState(labels.defaultText);
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const trimmed = input.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const characters = input.length;
    const noSpaces = input.replace(/\s/g, "").length;
    const sentences = trimmed ? (trimmed.match(/[.!?]+/g)?.length ?? 1) : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean).length : 0;
    const readingTime = words === 0 ? "<1m" : `${Math.max(1, Math.ceil(words / 200))}m`;
    const topTerms = Object.entries(
      extractTerms(input).reduce<Record<string, number>>((accumulator, term) => {
        accumulator[term] = (accumulator[term] ?? 0) + 1;
        return accumulator;
      }, {})
    )
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
      .slice(0, 8);

    return {
      words,
      characters,
      noSpaces,
      sentences,
      paragraphs,
      readingTime,
      topTerms,
    };
  }, [input]);

  async function handleCopy() {
    const didCopy = await copyToClipboard(input);

    if (!didCopy) {
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-4">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {labels.inputLabel}
            </span>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={11}
              className="min-h-[260px] w-full rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.16)]"
              placeholder={labels.placeholder}
            />
          </label>

          <p className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.helper}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {copied ? labels.copied : labels.copyText}
            </button>
            <button
              type="button"
              onClick={() => setInput("")}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
            >
              {labels.clearText}
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {[
            { label: labels.words, value: stats.words },
            { label: labels.characters, value: stats.characters },
            { label: labels.noSpaces, value: stats.noSpaces },
            { label: labels.sentences, value: stats.sentences },
            { label: labels.paragraphs, value: stats.paragraphs },
            { label: labels.readingTime, value: stats.readingTime },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4"
            >
              <p className="text-[11px] uppercase tracking-[0.06em] text-[color:var(--brand-text-tertiary)]">
                {item.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-[color:var(--brand-text-primary)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
        <h2 className="text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
          {labels.topWords}
        </h2>
        {stats.topTerms.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {stats.topTerms.map(([term, count]) => (
              <span
                key={term}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-card)] px-4 py-2 text-sm font-medium text-[color:var(--brand-text-primary)]"
              >
                <span>{term}</span>
                <span className="rounded-full bg-[color:var(--brand-badge-bg)] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  {count}
                </span>
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.emptyTerms}
          </p>
        )}
      </div>
    </section>
  );
}
