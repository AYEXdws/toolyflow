"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type CaseConverterLabels = {
  inputLabel: string;
  placeholder: string;
  initialText?: string;
  characters: string;
  words: string;
  lines: string;
  readingTime: string;
  clearText: string;
  uppercase: string;
  lowercase: string;
  sentenceCase: string;
  titleCase: string;
  camelCase: string;
  pascalCase: string;
  snakeCase: string;
  kebabCase: string;
  trimmedText: string;
  singleLine: string;
  copy: string;
  copied: string;
  noText: string;
};

type CaseOutput = {
  key: string;
  label: string;
  value: string;
};

function normalizeLineSpaces(value: string) {
  return value.replace(/[ \t]+/g, " ").trim();
}

function normalizeText(value: string) {
  return value
    .split(/\r?\n/)
    .map((line) => normalizeLineSpaces(line))
    .filter((line, index, lines) => line || (index > 0 && index < lines.length - 1))
    .join("\n")
    .trim();
}

function toSentenceCase(value: string) {
  const lowered = value.toLowerCase();

  return lowered.replace(/(^\s*[a-z\u00c0-\u024f])|([.!?]\s+[a-z\u00c0-\u024f])/giu, (match) =>
    match.toUpperCase()
  );
}

function toTitleCase(value: string) {
  return value.replace(/\b[\p{L}\p{N}]+/gu, (word) => {
    const [first = "", ...rest] = word;
    return `${first.toUpperCase()}${rest.join("").toLowerCase()}`;
  });
}

function toWordTokens(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.toLowerCase());
}

function toCamelCase(value: string) {
  const tokens = toWordTokens(value);

  if (tokens.length === 0) {
    return "";
  }

  return tokens
    .map((token, index) =>
      index === 0 ? token : `${token.charAt(0).toUpperCase()}${token.slice(1)}`
    )
    .join("");
}

function toPascalCase(value: string) {
  return toWordTokens(value)
    .map((token) => `${token.charAt(0).toUpperCase()}${token.slice(1)}`)
    .join("");
}

function joinTokens(value: string, separator: string) {
  return toWordTokens(value).join(separator);
}

type CaseConverterProps = {
  labels: CaseConverterLabels;
};

export function CaseConverter({ labels }: CaseConverterProps) {
  const [input, setInput] = useState(labels.initialText ?? "");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const stats = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const lines = input ? input.split(/\r?\n/).length : 0;
    const readingMinutes = words === 0 ? "<1m" : `${Math.max(1, Math.ceil(words / 200))}m`;

    return {
      characters: input.length,
      words,
      lines,
      readingMinutes,
    };
  }, [input]);

  const outputs = useMemo<CaseOutput[]>(
    () => [
      { key: "uppercase", label: labels.uppercase, value: input.toUpperCase() },
      { key: "lowercase", label: labels.lowercase, value: input.toLowerCase() },
      { key: "sentenceCase", label: labels.sentenceCase, value: toSentenceCase(input) },
      { key: "titleCase", label: labels.titleCase, value: toTitleCase(input) },
      { key: "camelCase", label: labels.camelCase, value: toCamelCase(input) },
      { key: "pascalCase", label: labels.pascalCase, value: toPascalCase(input) },
      { key: "snakeCase", label: labels.snakeCase, value: joinTokens(input, "_") },
      { key: "kebabCase", label: labels.kebabCase, value: joinTokens(input, "-") },
      { key: "trimmedText", label: labels.trimmedText, value: normalizeText(input) },
      {
        key: "singleLine",
        label: labels.singleLine,
        value: normalizeText(input).replace(/\s*\n+\s*/g, " "),
      },
    ],
    [input, labels]
  );

  async function handleCopy(key: string, value: string) {
    const copied = await copyToClipboard(value);

    if (!copied) {
      return;
    }

    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(null), 1600);
  }

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
        <label className="space-y-3">
          <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
            {labels.inputLabel}
          </span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={10}
            className="min-h-[220px] w-full rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
            placeholder={labels.placeholder}
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4">
            <p className="text-[11px] uppercase tracking-[0.06em] text-[color:var(--brand-text-tertiary)]">
              {labels.characters}
            </p>
            <p className="mt-2 text-3xl font-bold text-[color:var(--brand-text-primary)]">
              {stats.characters}
            </p>
          </div>
          <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4">
            <p className="text-[11px] uppercase tracking-[0.06em] text-[color:var(--brand-text-tertiary)]">
              {labels.words}
            </p>
            <p className="mt-2 text-3xl font-bold text-[color:var(--brand-text-primary)]">
              {stats.words}
            </p>
          </div>
          <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4">
            <p className="text-[11px] uppercase tracking-[0.06em] text-[color:var(--brand-text-tertiary)]">
              {labels.lines}
            </p>
            <p className="mt-2 text-3xl font-bold text-[color:var(--brand-text-primary)]">
              {stats.lines}
            </p>
          </div>
          <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4">
            <p className="text-[11px] uppercase tracking-[0.06em] text-[color:var(--brand-text-tertiary)]">
              {labels.readingTime}
            </p>
            <p className="mt-2 text-3xl font-bold text-[color:var(--brand-text-primary)]">
              {stats.readingMinutes}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setInput("")}
            className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-left text-sm font-medium text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)] hover:bg-white/4 lg:col-span-1 sm:col-span-2"
          >
            {labels.clearText}
          </button>
        </div>
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
                className="w-full min-h-11 shrink-0 rounded-xl bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] px-4 py-2.5 text-sm font-semibold text-white sm:w-auto"
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
