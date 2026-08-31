"use client";

import { useState, type ReactNode } from "react";

import {
  generateNicknameOptions,
  type NicknameGeneratorInput,
  type NicknameGeneratorRuntimeLabels,
  type NicknameLength,
  type NicknameOption,
  type NicknameStyle,
  type SymbolMode,
} from "@/lib/creator-generators";
import type { NicknameUseCase } from "@/lib/creator-tool-localizations";
import { copyToClipboard } from "@/lib/copy-to-clipboard";

type NicknameGeneratorLabels = NicknameGeneratorRuntimeLabels & {
  keywordLabel: string;
  keywordPlaceholder: string;
  styleLabel: string;
  lengthLabel: string;
  symbolsLabel: string;
  pronounceableLabel: string;
  copyButton: string;
  copied: string;
  toggleOn: string;
  toggleOff: string;
};

type NicknameGeneratorProps = {
  labels: NicknameGeneratorLabels;
};

const initialInput: NicknameGeneratorInput = {
  keyword: "",
  useCase: "social",
  style: "cool",
  length: "balanced",
  symbolMode: "none",
  pronounceable: true,
};

export function NicknameGenerator({ labels }: NicknameGeneratorProps) {
  const [input, setInput] = useState(initialInput);
  const [results, setResults] = useState<NicknameOption[]>([]);
  const [generationState, setGenerationState] = useState({ signature: "", count: -1 });
  const [copiedValue, setCopiedValue] = useState("");

  function updateInput<Key extends keyof NicknameGeneratorInput>(key: Key, value: NicknameGeneratorInput[Key]) {
    setInput((current) => ({ ...current, [key]: value }));
  }

  function handleGenerate() {
    const signature = JSON.stringify(input);
    const nextIndex = generationState.signature === signature ? generationState.count + 1 : 0;
    setResults(generateNicknameOptions(input, labels, nextIndex));
    setGenerationState({ signature, count: nextIndex });
  }

  async function handleCopy(value: string) {
    const copied = await copyToClipboard(value);
    if (!copied) return;
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(""), 1600);
  }

  return (
    <section className="overflow-hidden rounded-[30px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow)]">
      <div className="grid lg:grid-cols-[370px_minmax(0,1fr)]">
        <div className="border-b border-[color:var(--brand-border)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--brand-badge-text)]">01</p>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-bold text-[color:var(--brand-text-primary)]">{labels.keywordLabel}</span>
            <input
              value={input.keyword}
              onChange={(event) => updateInput("keyword", event.target.value)}
              className="min-h-12 w-full rounded-[16px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 text-sm outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[var(--brand-ring)]"
              placeholder={labels.keywordPlaceholder}
            />
          </label>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {labels.presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => updateInput("keyword", preset)}
                className="min-h-9 shrink-0 rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-3 text-xs font-bold transition hover:border-[color:var(--brand-border-hover)]"
              >
                {preset}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-[color:var(--brand-text-tertiary)]">{labels.presetLabel}</p>

          <div className="mt-7 space-y-6 border-t border-[color:var(--brand-border)] pt-7">
            <ChoiceGroup label={labels.useCaseLabel} columns="grid-cols-2">
              {(Object.keys(labels.useCases) as NicknameUseCase[]).map((useCase) => (
                <ChoiceButton key={useCase} active={input.useCase === useCase} onClick={() => updateInput("useCase", useCase)}>
                  {labels.useCases[useCase]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <ChoiceGroup label={labels.styleLabel} columns="grid-cols-2">
              {(Object.keys(labels.styles) as NicknameStyle[]).map((style) => (
                <ChoiceButton key={style} active={input.style === style} onClick={() => updateInput("style", style)}>
                  {labels.styles[style]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <ChoiceGroup label={labels.lengthLabel} columns="grid-cols-3">
              {(Object.keys(labels.lengthModes) as NicknameLength[]).map((length) => (
                <ChoiceButton key={length} active={input.length === length} onClick={() => updateInput("length", length)}>
                  {labels.lengthModes[length]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <ChoiceGroup label={labels.symbolsLabel} columns="grid-cols-3">
              {(Object.keys(labels.symbolModes) as SymbolMode[]).map((mode) => (
                <ChoiceButton key={mode} active={input.symbolMode === mode} onClick={() => updateInput("symbolMode", mode)}>
                  {labels.symbolModes[mode]}
                </ChoiceButton>
              ))}
            </ChoiceGroup>

            <button
              type="button"
              aria-pressed={input.pronounceable}
              onClick={() => updateInput("pronounceable", !input.pronounceable)}
              className={`flex min-h-12 w-full items-center justify-between rounded-[16px] border px-4 text-sm font-bold transition ${
                input.pronounceable
                  ? "border-[#14151A] bg-[#14151A] text-white"
                  : "border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]"
              }`}
            >
              <span>{labels.pronounceableLabel}</span>
              <span>{input.pronounceable ? labels.toggleOn : labels.toggleOff}</span>
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
              <span className="display-type text-7xl text-[#2557FF]" aria-hidden="true">@</span>
              <h3 className="mt-8 text-2xl font-extrabold tracking-tight">{labels.emptyTitle}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--brand-text-secondary)]">{labels.emptyDescription}</p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                {results.map((result) => (
                  <article key={result.value} className="min-w-0 rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[0_12px_30px_rgba(36,32,24,0.06)]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.07em] text-[color:var(--brand-badge-text)]">{labels.archetypes[result.archetype]}</span>
                      <span className="text-[11px] font-bold tabular-nums text-[color:var(--brand-text-tertiary)]">{result.value.length} {labels.characterLabel}</span>
                    </div>
                    <p className="mt-6 break-all text-[clamp(1.55rem,5vw,2.35rem)] font-black leading-none tracking-[-0.055em] text-[color:var(--brand-text-primary)]">{result.value}</p>
                    <div className="mt-4 flex min-h-6 flex-wrap gap-x-3 gap-y-1 text-xs font-semibold text-[color:var(--brand-text-secondary)]">
                      {result.reasons.map((reason) => <span key={reason}>• {reason}</span>)}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(result.value)}
                      className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-[14px] bg-[#14151A] px-4 text-sm font-bold text-white transition hover:bg-[#2557FF]"
                    >
                      {copiedValue === result.value ? labels.copied : labels.copyButton}
                    </button>
                  </article>
                ))}
              </div>
              <p className="mt-5 rounded-[18px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-3 text-xs leading-6 text-[color:var(--brand-text-secondary)]">{labels.availabilityNote}</p>
            </>
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
