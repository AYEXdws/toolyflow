"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type NicknameStyle = "cool" | "dark" | "gaming" | "aesthetic";
type NicknameLength = "short" | "balanced" | "long";
type SymbolMode = "none" | "light" | "bold";

const vowelPattern = /[aeiouyıioöuüáàâäãåæéèêëíìîïóòôöõúùûüýÿ]/i;

type NicknameGeneratorLabels = {
  keywordLabel: string;
  keywordPlaceholder: string;
  styleLabel: string;
  lengthLabel: string;
  symbolsLabel: string;
  pronounceableLabel: string;
  generateMore: string;
  copyButton: string;
  tapToCopy: string;
  copied: string;
  toggleOn: string;
  toggleOff: string;
  styles: Record<NicknameStyle, string>;
  lengthModes: Record<NicknameLength, string>;
  symbolModes: Record<SymbolMode, string>;
  seeds: Record<NicknameStyle, { left: string[]; right: string[] }>;
};

const symbolDecorators: Record<SymbolMode, ((value: string, seed: number) => string)[]> = {
  none: [(value) => value],
  light: [
    (value) => `${value}_`,
    (value) => `${value}.x`,
    (value) => `_${value}`,
    (value) => `${value}.v`,
  ],
  bold: [
    (value) => `${value}.gg`,
    (value) => `${value}tv`,
    (value) => `${value}_x`,
    (value) => `x_${value}`,
  ],
};

function toAsciiHandle(value: string) {
  return value
    .replace(/ı/gi, "i")
    .replace(/ß/gi, "ss")
    .replace(/æ/gi, "ae")
    .replace(/œ/gi, "oe")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function formatKeyword(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  return toAsciiHandle(trimmed)
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.toLowerCase())
    .join("");
}

function createHash(input: string) {
  return [...input].reduce((total, character, index) => {
    return (total + character.charCodeAt(0) * (index + 11)) % 50_021;
  }, 0);
}

function createRandom(seed: number) {
  let state = seed % 2_147_483_647;

  if (state <= 0) {
    state += 2_147_483_646;
  }

  return () => {
    state = (state * 16_807) % 2_147_483_647;
    return (state - 1) / 2_147_483_646;
  };
}

function shuffleWithSeed<T>(items: T[], seed: number) {
  const clone = [...items];
  const random = createRandom(seed);

  for (let index = clone.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(random() * (index + 1));
    [clone[index], clone[nextIndex]] = [clone[nextIndex], clone[index]];
  }

  return clone;
}

function normalizeNickname(value: string) {
  const cleaned = toAsciiHandle(value).replace(/[^0-9\p{L}]/gu, "");

  if (!cleaned) {
    return "";
  }

  return cleaned.toLowerCase();
}

function squeezeNicknamePiece(value: string, maxLength: number) {
  const normalized = normalizeNickname(value);

  if (!normalized) {
    return "";
  }

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const compact = normalized.replace(/[aeiouyıioöuü]/gi, "");

  if (compact.length >= Math.max(3, maxLength - 1)) {
    return compact.slice(0, maxLength);
  }

  return normalized.slice(0, maxLength);
}

function mergeNicknameParts(...parts: string[]) {
  const normalized = parts.map((part) => normalizeNickname(part)).filter(Boolean);

  if (normalized.length === 0) {
    return "";
  }

  return normalized.reduce((combined, next) => {
    if (!combined) {
      return next;
    }

    const lowerCombined = combined.toLowerCase();
    const lowerNext = next.toLowerCase();

    if (lowerCombined.endsWith(lowerNext)) {
      return combined;
    }

    for (let size = Math.min(4, combined.length, next.length); size >= 2; size -= 1) {
      if (lowerCombined.slice(-size) === lowerNext.slice(0, size)) {
        return combined + next.slice(size);
      }
    }

    return combined + next;
  }, "");
}

function splitKeyword(value: string) {
  return value
    .trim()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => normalizeNickname(part));
}

function createKeywordVariants(value: string) {
  const tokens = splitKeyword(value);
  const full = formatKeyword(value);
  const first = tokens[0] ?? "";
  const last = tokens.at(-1) ?? "";
  const short =
    full.length > 8 ? `${full.slice(0, 5)}${full.slice(-2)}` : full.slice(0, 6);
  const prefix = full.slice(0, 4);
  const suffix = full.slice(-4);
  const initials =
    tokens.length > 1 ? tokens.map((part) => part.charAt(0)).join("") : "";

  return [...new Set([full, short, prefix, suffix, first, last, initials].filter(Boolean))];
}

function getLengthBounds(length: NicknameLength) {
  if (length === "short") {
    return [4, 7] as const;
  }

  if (length === "long") {
    return [8, 13] as const;
  }

  return [5, 10] as const;
}

function vowelRatio(value: string) {
  const letters = value.replace(/[^\p{L}]/gu, "");

  if (!letters) {
    return 0;
  }

  const vowels = (letters.match(/[aeiouyıioöuüáàâäãåæéèêëíìîïóòôöõúùûüýÿ]/giu) ?? []).length;
  return vowels / letters.length;
}

function longestConsonantRun(value: string) {
  const letters = value.replace(/[^\p{L}]/gu, "");
  let longest = 0;
  let current = 0;

  for (const character of letters) {
    if (vowelPattern.test(character)) {
      current = 0;
    } else {
      current += 1;
      longest = Math.max(longest, current);
    }
  }

  return longest;
}

function isReadableNickname(value: string, length: NicknameLength, pronounceable: boolean) {
  const [minLength, maxLength] = getLengthBounds(length);

  if (value.length < minLength || value.length > maxLength) {
    return false;
  }

  if (/\d{4,}/.test(value)) {
    return false;
  }

  if (pronounceable) {
    const ratio = vowelRatio(value);

    if (ratio < 0.24 || ratio > 0.62 || longestConsonantRun(value) >= 5) {
      return false;
    }
  }

  return !/(.)\1\1/i.test(value);
}

function isDisplaySafeNickname(value: string, length: NicknameLength) {
  const [, maxLength] = getLengthBounds(length);

  return value.length <= maxLength + 2 && !/[._-]{2,}/.test(value);
}

function decorateNickname(value: string, mode: SymbolMode, seed: number) {
  const decorators = symbolDecorators[mode];

  if (mode === "none") {
    return value;
  }

  return decorators[seed % decorators.length](value, seed);
}

function scoreNickname(
  value: string,
  keyword: string,
  pronounceable: boolean,
  styleSeed: { left: string[]; right: string[] }
) {
  let score = 0;
  const ratio = vowelRatio(value);
  const lowerValue = value.toLowerCase();
  const lowerKeyword = formatKeyword(keyword).toLowerCase();
  const leftMatches = styleSeed.left.some((item) =>
    lowerValue.startsWith(normalizeNickname(item).toLowerCase().slice(0, 3))
  );
  const rightMatches = styleSeed.right.some((item) =>
    lowerValue.endsWith(normalizeNickname(item).toLowerCase().slice(-3))
  );

  if (value.length >= 5 && value.length <= 12) {
    score += 16;
  } else if (value.length <= 15) {
    score += 8;
  } else {
    score -= 6;
  }

  if (ratio >= 0.28 && ratio <= 0.62) {
    score += 8;
  }

  if (new Set(lowerValue.split("")).size >= Math.floor(lowerValue.length * 0.65)) {
    score += 5;
  }

  if (lowerKeyword && lowerValue.includes(lowerKeyword.slice(0, Math.min(4, lowerKeyword.length)))) {
    score += 8;
  }

  if (leftMatches) {
    score += 8;
  }

  if (rightMatches) {
    score += 8;
  }

  if (pronounceable && longestConsonantRun(value) < 4) {
    score += 6;
  }

  if (/[qxz]{2,}/i.test(value)) {
    score -= 5;
  }

  if (/(.)\1\1/i.test(value)) {
    score -= 8;
  }

  return score;
}

function createNicknames(
  keyword: string,
  style: NicknameStyle,
  length: NicknameLength,
  symbolMode: SymbolMode,
  pronounceable: boolean,
  labels: NicknameGeneratorLabels,
  generationIndex = 0
) {
  const styleSeed = labels.seeds[style];
  const variants = createKeywordVariants(keyword);
  const pool = new Set<string>();
  const seed = createHash(`${keyword}-${style}-${length}-${symbolMode}-${pronounceable}`);
  const keywordOrnaments = variants.length > 0 ? variants : [""];
  const pieceLimit =
    length === "short" ? 4 : length === "balanced" ? 6 : 8;
  const leftSeedParts = styleSeed.left.map((item) => squeezeNicknamePiece(item, pieceLimit));
  const rightSeedParts = styleSeed.right.map((item) => squeezeNicknamePiece(item, pieceLimit));
  const keywordPieces = keywordOrnaments.map((item) =>
    squeezeNicknamePiece(item, length === "short" ? 4 : 6)
  );

  for (const left of leftSeedParts) {
    for (const right of rightSeedParts) {
      pool.add(mergeNicknameParts(left, right));
    }
  }

  for (const variant of keywordPieces) {
    for (const left of leftSeedParts) {
      for (const right of rightSeedParts) {
        pool.add(mergeNicknameParts(left, variant));
        pool.add(mergeNicknameParts(variant, right));
        pool.add(mergeNicknameParts(left, variant, right));
      }
    }
  }

  for (const variant of keywordOrnaments) {
    for (const left of leftSeedParts) {
      for (const right of rightSeedParts) {
        pool.add(mergeNicknameParts(left, variant));
        pool.add(mergeNicknameParts(variant, right));
        pool.add(mergeNicknameParts(left, variant, right));
      }
    }
  }

  const rankedBasePool = [...pool]
    .filter((item) => item !== normalizeNickname(keyword))
    .filter((item) => isReadableNickname(item, length, pronounceable))
    .sort((left, right) => {
      const scoreDiff =
        scoreNickname(right, keyword, pronounceable, styleSeed) -
        scoreNickname(left, keyword, pronounceable, styleSeed);

      if (scoreDiff !== 0) {
        return scoreDiff;
      }

      return createHash(`${right}-${seed}`) - createHash(`${left}-${seed}`);
    });

  const decoratedPool = rankedBasePool
    .slice(0, 120)
    .map((item, index) => decorateNickname(item, symbolMode, seed + index))
    .filter((item) => isDisplaySafeNickname(item, length));
  const shuffledPool = shuffleWithSeed([...new Set(decoratedPool)], seed);
  const batchSize = 6;
  const safePool =
    shuffledPool.length > 0
      ? shuffledPool
      : leftSeedParts.map((item, index) =>
          decorateNickname(
            mergeNicknameParts(item, rightSeedParts[index % rightSeedParts.length]),
            symbolMode,
            seed + index
          )
        );
  const startIndex = (generationIndex * batchSize) % safePool.length;

  return Array.from({ length: Math.min(batchSize, safePool.length) }, (_, offset) => {
    return safePool[(startIndex + offset) % safePool.length];
  });
}

type NicknameGeneratorProps = {
  labels: NicknameGeneratorLabels;
};

export function NicknameGenerator({ labels }: NicknameGeneratorProps) {
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState<NicknameStyle>("cool");
  const [length, setLength] = useState<NicknameLength>("balanced");
  const [symbolMode, setSymbolMode] = useState<SymbolMode>("none");
  const [pronounceable, setPronounceable] = useState(true);
  const [refreshState, setRefreshState] = useState({
    signature: "",
    count: 0,
  });
  const [copiedValue, setCopiedValue] = useState("");
  const currentSignature = `${keyword}-${style}-${length}-${symbolMode}-${pronounceable}`;
  const refreshCount =
    refreshState.signature === currentSignature ? refreshState.count : 0;

  const results = useMemo(() => {
    return createNicknames(
      keyword,
      style,
      length,
      symbolMode,
      pronounceable,
      labels,
      refreshCount
    );
  }, [keyword, labels, length, pronounceable, refreshCount, style, symbolMode]);

  async function copyNickname(value: string) {
    const copied = await copyToClipboard(value);

    if (!copied) {
      return;
    }

    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(""), 1600);
  }

  return (
    <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[340px_minmax(0,1fr)]">
        <div className="space-y-5">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.keywordLabel}
            </span>
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              className="w-full rounded-[20px] border border-black/10 bg-white px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none transition focus:border-[color:var(--color-accent)]"
              placeholder={labels.keywordPlaceholder}
            />
          </label>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.styleLabel}
            </span>
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(labels.styles) as NicknameStyle[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStyle(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    style === item
                      ? "bg-[color:var(--color-accent)] text-white"
                      : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  {labels.styles[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.lengthLabel}
            </span>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(labels.lengthModes) as NicknameLength[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLength(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    length === item
                      ? "bg-[color:var(--color-accent)] text-white"
                      : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  {labels.lengthModes[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.symbolsLabel}
            </span>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(labels.symbolModes) as SymbolMode[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSymbolMode(item)}
                  className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                    symbolMode === item
                      ? "bg-[color:var(--color-accent)] text-white"
                      : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  {labels.symbolModes[item]}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setPronounceable((value) => !value)}
            className={`w-full rounded-[20px] px-4 py-3 text-left text-sm font-medium transition ${
              pronounceable
                ? "bg-[color:var(--color-accent)] text-white"
                : "border border-black/10 bg-white text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)]"
            }`}
          >
            <span className="block text-xs uppercase tracking-[0.22em] opacity-80">
              {labels.pronounceableLabel}
            </span>
            <span className="mt-2 block">
              {pronounceable ? labels.toggleOn : labels.toggleOff}
            </span>
          </button>

          <button
            type="button"
            onClick={() =>
              setRefreshState((current) => ({
                signature: currentSignature,
                count: current.signature === currentSignature ? current.count + 1 : 1,
              }))
            }
            className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-strong)]"
          >
            {labels.generateMore}
          </button>
        </div>

        <div className="grid gap-4">
          {results.map((nickname) => (
            <article
              key={nickname}
              className="min-w-0 rounded-[24px] border border-black/8 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
            >
              <div className="flex min-h-[156px] flex-col justify-between gap-5">
                <div className="min-w-0">
                  <p className="break-words font-display text-[clamp(1.5rem,4vw,2.2rem)] leading-[0.95] tracking-tight text-[color:var(--color-foreground)]">
                    {nickname}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                    {labels.tapToCopy}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copyNickname(nickname)}
                  className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-[color:var(--color-accent)] bg-[color:var(--color-surface)] px-4 py-2.5 text-sm font-semibold text-[color:var(--color-accent-strong)] transition hover:bg-[color:var(--color-accent)] hover:text-white"
                >
                  {copiedValue === nickname ? labels.copied : labels.copyButton}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
