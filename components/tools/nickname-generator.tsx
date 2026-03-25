"use client";

import { useMemo, useState } from "react";

type NicknameStyle = "cool" | "dark" | "gaming" | "aesthetic";

type NicknameGeneratorLabels = {
  keywordLabel: string;
  keywordPlaceholder: string;
  styleLabel: string;
  generateMore: string;
  tapToCopy: string;
  copied: string;
  styles: Record<NicknameStyle, string>;
  seeds: Record<NicknameStyle, { left: string[]; right: string[] }>;
};

const styleProfiles: Record<
  NicknameStyle,
  {
    opens: string[];
    middles: string[];
    ends: string[];
    ornaments: string[];
  }
> = {
  cool: {
    opens: ["Aero", "Nova", "Velo", "Zeno", "Kairo", "Rivo", "Sora", "Lyn", "Vex", "Nori"],
    middles: ["va", "ri", "xo", "ly", "no", "el", "za", "io", "ae", "ra"],
    ends: ["n", "x", "on", "is", "or", "ix", "a", "yn", "o", "ex"],
    ornaments: ["", "io", "x", "yn", "z"],
  },
  dark: {
    opens: ["Nox", "Nyra", "Dusk", "Vanta", "Morrow", "Sable", "Hex", "Raven", "Onyx", "Noir"],
    middles: ["ra", "ven", "dre", "mor", "za", "kai", "ny", "vex", "sha", "lor"],
    ends: ["n", "th", "is", "or", "a", "yn", "ex", "iel", "on", "ar"],
    ornaments: ["", "x", "h", "yn", "th"],
  },
  gaming: {
    opens: ["Clutch", "Raze", "Strix", "Kiro", "Blitz", "Ryko", "Vexo", "Jett", "Axel", "Nex"],
    middles: ["ra", "ko", "tri", "xel", "vo", "zen", "ik", "tor", "ly", "ix"],
    ends: ["x", "on", "ar", "ix", "or", "yn", "er", "zo", "ex", "a"],
    ornaments: ["", "x", "tv", "fps", "ix"],
  },
  aesthetic: {
    opens: ["Luna", "Auri", "Melo", "Vela", "Sere", "Mira", "Noa", "Ciel", "Ayla", "Elio"],
    middles: ["li", "ra", "na", "ve", "ya", "lo", "mi", "sa", "el", "ia"],
    ends: ["a", "ia", "yn", "el", "is", "o", "ae", "en", "eve", "iel"],
    ornaments: ["", "a", "ia", "el", "yn"],
  },
};

function formatKeyword(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return trimmed
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
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
  const cleaned = value.replace(/[^0-9\p{L}]/gu, "");

  if (!cleaned) {
    return "";
  }

  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function mergeNicknameParts(...parts: string[]) {
  const normalized = parts
    .map((part) => normalizeNickname(part))
    .filter(Boolean);

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

function isReadableNickname(value: string) {
  return value.length >= 4 && value.length <= 16 && !/\d{4,}/.test(value);
}

function vowelRatio(value: string) {
  const letters = value.replace(/[^a-z]/gi, "");
  if (!letters) {
    return 0;
  }

  const vowels = (letters.match(/[aeiouy]/gi) ?? []).length;
  return vowels / letters.length;
}

function scoreNickname(value: string, keyword: string) {
  let score = 0;
  const ratio = vowelRatio(value);
  const lowerValue = value.toLowerCase();
  const lowerKeyword = formatKeyword(keyword).toLowerCase();

  if (value.length >= 5 && value.length <= 12) {
    score += 16;
  } else if (value.length <= 14) {
    score += 8;
  } else {
    score -= 6;
  }

  if (ratio >= 0.28 && ratio <= 0.62) {
    score += 10;
  }

  if (!/(.)\1\1/i.test(value)) {
    score += 6;
  }

  if (new Set(lowerValue.split("")).size >= Math.floor(lowerValue.length * 0.6)) {
    score += 5;
  }

  if (lowerKeyword && lowerValue.includes(lowerKeyword.slice(0, Math.min(4, lowerKeyword.length)))) {
    score += 7;
  }

  if (/[qxz]{2,}/i.test(value)) {
    score -= 5;
  }

  if (/[^aeiouy]{5,}/i.test(value)) {
    score -= 5;
  }

  return score;
}

function createNicknames(
  keyword: string,
  style: NicknameStyle,
  generationIndex = 0
) {
  const source = styleProfiles[style];
  const variants = createKeywordVariants(keyword);
  const pool = new Set<string>();
  const seed = createHash(`${keyword}-${style}`);
  const keywordOrnaments = variants.length > 0 ? variants : [""];

  for (const open of source.opens) {
    for (const middle of source.middles) {
      for (const end of source.ends) {
        pool.add(mergeNicknameParts(open, middle, end));
        pool.add(mergeNicknameParts(open, end));
        pool.add(
          mergeNicknameParts(
            open,
            middle,
            source.ornaments[(seed + middle.length) % source.ornaments.length]
          )
        );
      }
    }
  }

  for (const variant of keywordOrnaments) {
    for (const open of source.opens) {
      for (const middle of source.middles) {
        for (const end of source.ends) {
          pool.add(mergeNicknameParts(open, variant));
          pool.add(mergeNicknameParts(variant, end));
          pool.add(mergeNicknameParts(open, variant, end));
          pool.add(mergeNicknameParts(variant, middle, end));
          pool.add(mergeNicknameParts(open, middle, variant));
          pool.add(
            mergeNicknameParts(
              variant,
              source.ornaments[(seed + end.length) % source.ornaments.length]
            )
          );
        }
      }
    }
  }

  const rankedPool = [...pool]
    .filter(isReadableNickname)
    .filter((item) => item !== normalizeNickname(keyword))
    .sort((left, right) => {
      const scoreDiff = scoreNickname(right, keyword) - scoreNickname(left, keyword);

      if (scoreDiff !== 0) {
        return scoreDiff;
      }

      return createHash(`${right}-${seed}`) - createHash(`${left}-${seed}`);
    });

  const shuffledPool = shuffleWithSeed(rankedPool.slice(0, 120), seed);
  const batchSize = 10;
  const safePool =
    shuffledPool.length > 0
      ? shuffledPool
      : source.opens.map((item, index) =>
          mergeNicknameParts(item, source.ends[index % source.ends.length])
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
  const [refreshState, setRefreshState] = useState({
    signature: "",
    count: 0,
  });
  const [copiedValue, setCopiedValue] = useState("");
  const currentSignature = `${keyword}-${style}`;
  const refreshCount =
    refreshState.signature === currentSignature ? refreshState.count : 0;

  const results = useMemo(() => {
    return createNicknames(keyword, style, refreshCount);
  }, [keyword, refreshCount, style]);

  async function copyNickname(value: string) {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(""), 1600);
  }

  return (
    <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
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

        <div className="grid gap-4 sm:grid-cols-2">
          {results.map((nickname) => (
            <button
              key={nickname}
              type="button"
              onClick={() => copyNickname(nickname)}
              className="rounded-[24px] border border-black/8 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
            >
              <p className="font-display text-2xl tracking-tight text-[color:var(--color-foreground)]">
                {nickname}
              </p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                {copiedValue === nickname ? labels.copied : labels.tapToCopy}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
