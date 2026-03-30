"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type TextCleanerLabels = {
  inputLabel: string;
  placeholder: string;
  helper: string;
  defaultText: string;
  clearText: string;
  copy: string;
  copied: string;
  cleanedText: string;
  removeBlankLines: string;
  uniqueLines: string;
  singleLine: string;
  commaList: string;
  noText: string;
};

type TextCleanerProps = {
  labels: TextCleanerLabels;
};

function normalizeSpaces(value: string) {
  return value
    .split(/\r?\n/)
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .join("\n");
}

function removeEmptyLines(value: string) {
  return normalizeSpaces(value)
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .join("\n");
}

function uniqueLines(value: string) {
  const seen = new Set<string>();

  return removeEmptyLines(value)
    .split(/\r?\n/)
    .filter((line) => {
      const key = line.toLowerCase();

      if (!line || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .join("\n");
}

export function TextCleaner({ labels }: TextCleanerProps) {
  const [input, setInput] = useState(labels.defaultText);
  const [copiedKey, setCopiedKey] = useState("");

  const outputs = useMemo(() => {
    const compact = normalizeSpaces(input).trim();
    const withoutBlankLines = removeEmptyLines(input);
    const deduped = uniqueLines(input);
    const oneLine = withoutBlankLines.replace(/\s*\n+\s*/g, " ").trim();
    const commaList = withoutBlankLines
      .split(/\r?\n/)
      .filter(Boolean)
      .join(", ");

    return [
      { key: "cleanedText", label: labels.cleanedText, value: compact },
      { key: "removeBlankLines", label: labels.removeBlankLines, value: withoutBlankLines },
      { key: "uniqueLines", label: labels.uniqueLines, value: deduped },
      { key: "singleLine", label: labels.singleLine, value: oneLine },
      { key: "commaList", label: labels.commaList, value: commaList },
    ];
  }, [input, labels]);

  async function handleCopy(key: string, value: string) {
    const didCopy = await copyToClipboard(value);

    if (!didCopy) {
      return;
    }

    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(""), 1600);
  }

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="space-y-4">
        <label className="space-y-3">
          <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
            {labels.inputLabel}
          </span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={10}
            className="min-h-[220px] w-full rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.16)]"
            placeholder={labels.placeholder}
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setInput("")}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
          >
            {labels.clearText}
          </button>
        </div>

        <p className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
          {labels.helper}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {outputs.map((item) => (
          <article
            key={item.key}
            className="min-w-0 rounded-[26px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="min-w-0 text-xl font-bold tracking-tight text-[color:var(--brand-text-primary)] sm:text-2xl">
                {item.label}
              </h2>
              <button
                type="button"
                onClick={() => handleCopy(item.key, item.value)}
                className="w-full min-h-11 shrink-0 rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-4 py-2.5 text-sm font-semibold text-white sm:w-auto"
              >
                {copiedKey === item.key ? labels.copied : labels.copy}
              </button>
            </div>
            <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-[color:var(--brand-text-secondary)]">
              {item.value || labels.noText}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
