"use client";

import { useState, type ReactNode } from "react";

import {
  generateHashtagOptions,
  type HashtagGeneratorInput,
  type HashtagGeneratorRuntimeLabels,
  type HashtagOption,
  type HashtagPlatform,
  type HashtagPopularity,
} from "@/lib/creator-generators";
import type { HashtagGroup } from "@/lib/creator-tool-localizations";
import { copyToClipboard } from "@/lib/copy-to-clipboard";

type HashtagGeneratorLabels = HashtagGeneratorRuntimeLabels & {
  nicheLabel: string;
  nichePlaceholder: string;
  platformLabel: string;
  popularityLabel: string;
  helper: string;
  generate: string;
  copyAll: string;
  copyOne: string;
  copied: string;
  allCopied: string;
  countSuffix: string;
};

type HashtagGeneratorProps = {
  labels: HashtagGeneratorLabels;
};

const initialInput: HashtagGeneratorInput = {
  topic: "",
  location: "",
  platform: "instagram",
  popularity: "balanced",
  count: 25,
};

const groupOrder: HashtagGroup[] = ["topic", "community", "discovery", "broad"];

export function HashtagGenerator({ labels }: HashtagGeneratorProps) {
  const [input, setInput] = useState(initialInput);
  const [results, setResults] = useState<HashtagOption[]>([]);
  const [generationState, setGenerationState] = useState({ signature: "", count: -1 });
  const [copiedTag, setCopiedTag] = useState("");
  const [allCopied, setAllCopied] = useState(false);
  const [error, setError] = useState("");

  function updateInput<Key extends keyof HashtagGeneratorInput>(key: Key, value: HashtagGeneratorInput[Key]) {
    setInput((current) => ({ ...current, [key]: value }));
    if (key === "topic" && String(value).trim()) setError("");
  }

  function handleGenerate() {
    if (!input.topic.trim()) {
      setError(labels.requiredMessage);
      return;
    }
    const signature = JSON.stringify(input);
    const nextIndex = generationState.signature === signature ? generationState.count + 1 : 0;
    setResults(generateHashtagOptions(input, labels, nextIndex));
    setGenerationState({ signature, count: nextIndex });
    setError("");
  }

  async function copyAll() {
    const copied = await copyToClipboard(results.map((item) => item.value).join(" "));
    if (!copied) return;
    setAllCopied(true);
    window.setTimeout(() => setAllCopied(false), 1600);
  }

  async function copyOne(tag: string) {
    const copied = await copyToClipboard(tag);
    if (!copied) return;
    setCopiedTag(tag);
    window.setTimeout(() => setCopiedTag(""), 1600);
  }

  return (
    <section className="overflow-hidden rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow)]">
      <div className="grid lg:grid-cols-[370px_minmax(0,1fr)]">
        <div className="border-b border-[color:var(--brand-border)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--brand-badge-text)]">01</p>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-bold text-[color:var(--brand-text-primary)]">{labels.nicheLabel}</span>
            <input
              value={input.topic}
              onChange={(event) => updateInput("topic", event.target.value)}
              className="min-h-12 w-full rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 text-sm outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
              placeholder={labels.nichePlaceholder}
              aria-invalid={Boolean(error)}
            />
            {error ? <span className="block text-sm font-semibold text-[#C33B20]">{error}</span> : null}
          </label>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {labels.presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  updateInput("topic", preset);
                  setError("");
                }}
                className="min-h-9 shrink-0 rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-3 text-xs font-bold transition hover:border-[color:var(--brand-border-hover)]"
              >
                {preset}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-[color:var(--brand-text-tertiary)]">{labels.presetLabel}</p>

          <label className="mt-6 block space-y-2">
            <span className="text-sm font-bold text-[color:var(--brand-text-primary)]">{labels.locationLabel}</span>
            <input
              value={input.location}
              onChange={(event) => updateInput("location", event.target.value)}
              className="min-h-12 w-full rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 text-sm outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
              placeholder={labels.locationPlaceholder}
            />
          </label>

          <div className="mt-7 space-y-6 border-t border-[color:var(--brand-border)] pt-7">
            <ChoiceGroup label={labels.platformLabel} columns="grid-cols-2">
              {(Object.keys(labels.platforms) as HashtagPlatform[]).map((platform) => (
                <ChoiceButton key={platform} active={input.platform === platform} onClick={() => updateInput("platform", platform)}>
                  {labels.platforms[platform]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <ChoiceGroup label={labels.popularityLabel} columns="grid-cols-3">
              {(Object.keys(labels.popularityModes) as HashtagPopularity[]).map((popularity) => (
                <ChoiceButton key={popularity} active={input.popularity === popularity} onClick={() => updateInput("popularity", popularity)}>
                  {labels.popularityModes[popularity]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>
            <p className="-mt-3 text-xs leading-6 text-[color:var(--brand-text-secondary)]">{labels.strategyDescriptions[input.popularity]}</p>

            <ChoiceGroup label={labels.countLabel} columns="grid-cols-3">
              {([20, 25, 30] as const).map((count) => (
                <ChoiceButton key={count} active={input.count === count} onClick={() => updateInput("count", count)}>{count}</ChoiceButton>
              ))}
            </ChoiceGroup>

            <p className="rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-xs leading-6 text-[color:var(--brand-text-secondary)]">{labels.dataNotice}</p>

            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex min-h-13 w-full items-center justify-center rounded-[16px] bg-[#2557FF] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#1740CC] active:translate-y-0"
            >
              {results.length ? labels.regenerate : labels.generate}
              <span className="ml-3" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <div className="min-w-0 bg-[color:var(--brand-surface)] p-5 sm:p-7 lg:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--brand-badge-text)]">02</p>
              <h2 className="display-type mt-3 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{labels.resultsTitle}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">{labels.resultsDescription}</p>
            </div>
            {results.length ? (
              <button
                type="button"
                onClick={copyAll}
                className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-[14px] bg-[#14151A] px-5 text-sm font-bold text-white transition hover:bg-[#2557FF] sm:w-auto"
              >
                {allCopied ? labels.allCopied : labels.copyAll}
              </button>
            ) : null}
          </div>

          {results.length === 0 ? (
            <div className="mt-6 flex min-h-[360px] flex-col justify-end rounded-[26px] border border-dashed border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 sm:p-8">
              <span className="display-type text-7xl text-[#2557FF]" aria-hidden="true">#</span>
              <h3 className="mt-8 text-2xl font-extrabold tracking-tight">{labels.resultsTitle}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">{labels.helper}</p>
            </div>
          ) : (
            <div className="mt-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#C8F135] px-4 py-2 text-sm font-black text-[#14151A]">{results.length} {labels.countSuffix}</span>
                <span className="text-xs font-semibold text-[color:var(--brand-text-secondary)]">{labels.strategyDescriptions[input.popularity]}</span>
              </div>

              {groupOrder.map((group) => {
                const tags = results.filter((item) => item.group === group);
                if (tags.length === 0) return null;
                return (
                  <section key={group} className="rounded-[22px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4 sm:p-5">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-sm font-extrabold">{labels.groupLabels[group]}</h3>
                      <span className="text-xs font-bold tabular-nums text-[color:var(--brand-text-tertiary)]">{tags.length}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <button
                          key={tag.value}
                          type="button"
                          onClick={() => copyOne(tag.value)}
                          title={labels.copyOne}
                          className={`min-h-10 max-w-full rounded-full border px-3 py-2 text-left text-xs font-bold transition sm:text-sm ${
                            copiedTag === tag.value
                              ? "border-[#2557FF] bg-[#2557FF] text-white"
                              : "border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] hover:border-[color:var(--brand-border-hover)]"
                          }`}
                        >
                          <span className="break-all">{copiedTag === tag.value ? labels.copied : tag.value}</span>
                        </button>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ChoiceGroup({ label, columns, children }: { label: string; columns: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-bold text-[color:var(--brand-text-primary)]">{label}</legend>
      <div className={`grid gap-2 ${columns}`}>{children}</div>
    </fieldset>
  );
}

function ChoiceButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-[14px] border px-3 py-2 text-xs font-bold transition sm:text-sm ${
        active
          ? "border-[#2557FF] bg-[#2557FF] text-white"
          : "border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] hover:border-[color:var(--brand-border-hover)]"
      }`}
    >
      {children}
    </button>
  );
}
