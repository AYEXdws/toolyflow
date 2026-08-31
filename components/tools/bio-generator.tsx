"use client";

import { useState, type ReactNode } from "react";

import {
  generateBioOptions,
  type BioGeneratorInput,
  type BioGeneratorRuntimeLabels,
  type BioLength,
  type BioOption,
  type BioPlatform,
} from "@/lib/creator-generators";
import type { BioCtaMode, CreatorTone } from "@/lib/creator-tool-localizations";
import { copyToClipboard } from "@/lib/copy-to-clipboard";

type BioGeneratorLabels = BioGeneratorRuntimeLabels & {
  nameLabel: string;
  namePlaceholder: string;
  platformLabel: string;
  toneLabel: string;
  lengthLabel: string;
  emojiLabel: string;
  ctaLabel: string;
  generate: string;
  copy: string;
  copied: string;
  toggleOn: string;
  toggleOff: string;
};

type BioGeneratorProps = {
  labels: BioGeneratorLabels;
};

const initialInput: BioGeneratorInput = {
  name: "",
  niche: "",
  audience: "",
  value: "",
  platform: "instagram",
  tone: "cool",
  length: "balanced",
  emojiEnabled: true,
  ctaMode: "none",
};

export function BioGenerator({ labels }: BioGeneratorProps) {
  const [input, setInput] = useState<BioGeneratorInput>(initialInput);
  const [results, setResults] = useState<BioOption[]>([]);
  const [generationState, setGenerationState] = useState({ signature: "", count: -1 });
  const [copiedValue, setCopiedValue] = useState("");
  const [error, setError] = useState("");

  function updateInput<Key extends keyof BioGeneratorInput>(key: Key, value: BioGeneratorInput[Key]) {
    setInput((current) => ({ ...current, [key]: value }));
    if (key === "niche" && String(value).trim()) setError("");
  }

  function handleGenerate() {
    if (!input.niche.trim()) {
      setError(labels.requiredMessage);
      return;
    }

    const signature = JSON.stringify(input);
    const nextIndex = generationState.signature === signature ? generationState.count + 1 : 0;
    setResults(generateBioOptions(input, labels, nextIndex));
    setGenerationState({ signature, count: nextIndex });
    setError("");
  }

  async function handleCopy(value: string) {
    const copied = await copyToClipboard(value);
    if (!copied) return;
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(""), 1600);
  }

  return (
    <section className="overflow-hidden rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow)]">
      <div className="grid lg:grid-cols-[390px_minmax(0,1fr)]">
        <div className="border-b border-[color:var(--brand-border)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--brand-badge-text)]">01</p>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {labels.presets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setInput((current) => ({ ...current, niche: preset.niche, audience: preset.audience, value: preset.value }));
                      setError("");
                    }}
                    className="min-h-10 shrink-0 rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 text-xs font-bold transition hover:border-[color:var(--brand-border-hover)]"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-[color:var(--brand-text-tertiary)]">{labels.presetLabel}</p>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-bold text-[color:var(--brand-text-primary)]">{labels.nicheLabel}</span>
              <input
                value={input.niche}
                onChange={(event) => updateInput("niche", event.target.value)}
                className="min-h-12 w-full rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 text-sm outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
                placeholder={labels.nichePlaceholder}
                aria-invalid={Boolean(error)}
              />
              {error ? <span className="block text-sm font-semibold text-[#C33B20]">{error}</span> : null}
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-bold text-[color:var(--brand-text-primary)]">{labels.audienceLabel}</span>
              <input
                value={input.audience}
                onChange={(event) => updateInput("audience", event.target.value)}
                className="min-h-12 w-full rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 text-sm outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
                placeholder={labels.audiencePlaceholder}
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-bold text-[color:var(--brand-text-primary)]">{labels.valueLabel}</span>
              <textarea
                value={input.value}
                onChange={(event) => updateInput("value", event.target.value)}
                className="min-h-24 w-full resize-y rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm leading-6 outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
                placeholder={labels.valuePlaceholder}
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-bold text-[color:var(--brand-text-primary)]">{labels.nameLabel}</span>
              <input
                value={input.name}
                onChange={(event) => updateInput("name", event.target.value)}
                className="min-h-12 w-full rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 text-sm outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
                placeholder={labels.namePlaceholder}
              />
            </label>
          </div>

          <div className="mt-8 space-y-6 border-t border-[color:var(--brand-border)] pt-7">
            <ChoiceGroup label={labels.platformLabel} columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-2">
              {(Object.keys(labels.platforms) as BioPlatform[]).map((platform) => (
                <ChoiceButton key={platform} active={input.platform === platform} onClick={() => updateInput("platform", platform)}>
                  {labels.platforms[platform]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <ChoiceGroup label={labels.toneLabel} columns="grid-cols-2">
              {(Object.keys(labels.tones) as CreatorTone[]).map((tone) => (
                <ChoiceButton key={tone} active={input.tone === tone} onClick={() => updateInput("tone", tone)}>
                  {labels.tones[tone]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <ChoiceGroup label={labels.lengthLabel} columns="grid-cols-3">
              {(Object.keys(labels.lengths) as BioLength[]).map((length) => (
                <ChoiceButton key={length} active={input.length === length} onClick={() => updateInput("length", length)}>
                  {labels.lengths[length]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <ChoiceGroup label={labels.ctaLabel} columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-2">
              {(Object.keys(labels.ctaModes) as BioCtaMode[]).map((mode) => (
                <ChoiceButton key={mode} active={input.ctaMode === mode} onClick={() => updateInput("ctaMode", mode)}>
                  {labels.ctaModes[mode]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <button
              type="button"
              aria-pressed={input.emojiEnabled}
              onClick={() => updateInput("emojiEnabled", !input.emojiEnabled)}
              className={`flex min-h-12 w-full items-center justify-between rounded-[16px] border px-4 text-sm font-bold transition ${
                input.emojiEnabled
                  ? "border-[#14151A] bg-[#14151A] text-white"
                  : "border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]"
              }`}
            >
              <span>{labels.emojiLabel}</span>
              <span>{input.emojiEnabled ? labels.toggleOn : labels.toggleOff}</span>
            </button>

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
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--brand-badge-text)]">02</p>
            <h2 className="display-type mt-3 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{labels.resultsTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">{labels.resultsDescription}</p>
          </div>

          {results.length === 0 ? (
            <div className="flex min-h-[360px] flex-col justify-end rounded-[26px] border border-dashed border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 sm:p-8">
              <span className="display-type text-7xl text-[#2557FF]" aria-hidden="true">B.</span>
              <h3 className="mt-8 text-2xl font-extrabold tracking-tight">{labels.emptyTitle}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">{labels.emptyDescription}</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {results.map((bio, index) => (
                <article key={bio.id} className="min-w-0 rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[0_12px_30px_rgba(36,32,24,0.06)] sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[color:var(--brand-badge-text)]">{labels.optionLabel} {index + 1}</span>
                      <span className="rounded-full border border-[color:var(--brand-border)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em]">{bio.label}</span>
                      <span className="rounded-full border border-[color:var(--brand-border)] px-3 py-1 text-[11px] font-bold tabular-nums">{bio.characterCount} {labels.characterLabel}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(bio.text)}
                      className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-[14px] bg-[#14151A] px-4 text-sm font-bold text-white transition hover:bg-[#2557FF] sm:w-auto"
                    >
                      {copiedValue === bio.text ? labels.copied : labels.copy}
                    </button>
                  </div>
                  <p className="mt-6 whitespace-pre-line break-words text-[clamp(1.05rem,2.4vw,1.3rem)] font-semibold leading-8 tracking-[-0.015em] text-[color:var(--brand-text-primary)]">{bio.text}</p>
                </article>
              ))}
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
