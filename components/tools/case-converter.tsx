"use client";

import { useMemo, useState } from "react";

type CaseConverterLabels = {
  inputLabel: string;
  placeholder: string;
  characters: string;
  words: string;
  clearText: string;
  uppercase: string;
  lowercase: string;
  capitalize: string;
  copy: string;
  copied: string;
  noText: string;
};

function capitalizeText(value: string) {
  return value.replace(/\b\w+/g, (word) => {
    const [first, ...rest] = word;
    return `${first.toUpperCase()}${rest.join("").toLowerCase()}`;
  });
}

type CaseConverterProps = {
  labels: CaseConverterLabels;
};

export function CaseConverter({ labels }: CaseConverterProps) {
  const [input, setInput] = useState(
    "Toolyflow helps you clean up text in seconds."
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const outputs = useMemo(
    () => [
      { key: "uppercase", label: "Uppercase", value: input.toUpperCase() },
      { key: "lowercase", label: "Lowercase", value: input.toLowerCase() },
      { key: "capitalize", label: "Capitalize", value: capitalizeText(input) },
    ],
    [input]
  );

  async function handleCopy(key: string, value: string) {
    await navigator.clipboard.writeText(value);
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(null), 1600);
  }

  return (
    <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_180px]">
        <label className="space-y-3">
          <span className="text-sm font-medium text-[color:var(--color-foreground)]">
            {labels.inputLabel}
          </span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={10}
            className="min-h-[220px] w-full rounded-[24px] border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-[color:var(--color-foreground)] outline-none transition focus:border-[color:var(--color-accent)]"
            placeholder={labels.placeholder}
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[24px] bg-black/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              {labels.characters}
            </p>
            <p className="mt-2 font-display text-3xl text-[color:var(--color-foreground)]">
              {input.length}
            </p>
          </div>
          <div className="rounded-[24px] bg-black/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              {labels.words}
            </p>
            <p className="mt-2 font-display text-3xl text-[color:var(--color-foreground)]">
              {input.trim() ? input.trim().split(/\s+/).length : 0}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setInput("")}
            className="rounded-[24px] border border-black/10 px-4 py-4 text-left text-sm font-medium text-[color:var(--color-foreground)] transition hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]"
          >
            {labels.clearText}
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {outputs.map((item) => (
          <article
            key={item.key}
            className="rounded-[26px] border border-black/8 bg-white p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {item.key === "uppercase"
                  ? labels.uppercase
                  : item.key === "lowercase"
                    ? labels.lowercase
                    : labels.capitalize}
              </h2>
              <button
                type="button"
                onClick={() => handleCopy(item.key, item.value)}
                className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                {copiedKey === item.key ? labels.copied : labels.copy}
              </button>
            </div>
            <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-[color:var(--color-muted)]">
              {item.value || labels.noText}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
