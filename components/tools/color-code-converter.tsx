"use client";

import { useMemo, useState } from "react";

import { copyToClipboard } from "@/lib/copy-to-clipboard";

type ColorCodeConverterLabels = {
  inputLabel: string;
  placeholder: string;
  helper: string;
  previewLabel: string;
  clearText: string;
  copy: string;
  copied: string;
  invalid: string;
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
  };
};

type Props = {
  labels: ColorCodeConverterLabels;
};

type Rgb = { r: number; g: number; b: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function toHex(value: number) {
  return value.toString(16).padStart(2, "0").toUpperCase();
}

function rgbToHex({ r, g, b }: Rgb) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl({ r, g, b }: Rgb) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  const lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (delta !== 0) {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));

    switch (max) {
      case red:
        hue = ((green - blue) / delta) % 6;
        break;
      case green:
        hue = (blue - red) / delta + 2;
        break;
      default:
        hue = (red - green) / delta + 4;
        break;
    }
  }

  return {
    h: Math.round(((hue * 60 + 360) % 360) || 0),
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100),
  };
}

function hslToRgb(h: number, s: number, l: number): Rgb {
  const hue = ((h % 360) + 360) % 360;
  const saturation = clamp(s, 0, 100) / 100;
  const lightness = clamp(l, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const segment = hue / 60;
  const x = chroma * (1 - Math.abs((segment % 2) - 1));
  let red = 0;
  let green = 0;
  let blue = 0;

  if (segment >= 0 && segment < 1) {
    red = chroma;
    green = x;
  } else if (segment < 2) {
    red = x;
    green = chroma;
  } else if (segment < 3) {
    green = chroma;
    blue = x;
  } else if (segment < 4) {
    green = x;
    blue = chroma;
  } else if (segment < 5) {
    red = x;
    blue = chroma;
  } else {
    red = chroma;
    blue = x;
  }

  const match = lightness - chroma / 2;

  return {
    r: Math.round((red + match) * 255),
    g: Math.round((green + match) * 255),
    b: Math.round((blue + match) * 255),
  };
}

function parseColor(value: string): Rgb | null {
  const input = value.trim();

  if (!input) {
    return { r: 124, g: 58, b: 237 };
  }

  const hex = input.match(/^#?([a-f0-9]{3}|[a-f0-9]{6})$/i);

  if (hex) {
    const raw = hex[1].length === 3 ? hex[1].split("").map((item) => `${item}${item}`).join("") : hex[1];

    return {
      r: parseInt(raw.slice(0, 2), 16),
      g: parseInt(raw.slice(2, 4), 16),
      b: parseInt(raw.slice(4, 6), 16),
    };
  }

  const rgb = input.match(/^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/i);

  if (rgb) {
    return {
      r: clamp(Number(rgb[1]), 0, 255),
      g: clamp(Number(rgb[2]), 0, 255),
      b: clamp(Number(rgb[3]), 0, 255),
    };
  }

  const hsl = input.match(/^hsl\(\s*(-?[0-9]{1,3}(?:\.[0-9]+)?)\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3})%\s*\)$/i);

  if (hsl) {
    return hslToRgb(Number(hsl[1]), Number(hsl[2]), Number(hsl[3]));
  }

  return null;
}

export function ColorCodeConverter({ labels }: Props) {
  const [input, setInput] = useState("#3B82F6");
  const [copied, setCopied] = useState("");
  const parsed = useMemo(() => parseColor(input), [input]);

  const output = useMemo(() => {
    if (!parsed) {
      return null;
    }

    const hex = rgbToHex(parsed);
    const hsl = rgbToHsl(parsed);

    return {
      hex,
      rgb: `rgb(${parsed.r}, ${parsed.g}, ${parsed.b})`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
    };
  }, [parsed]);

  async function handleCopy(key: string, value: string) {
    const didCopy = await copyToClipboard(value);

    if (!didCopy) {
      return;
    }

    setCopied(key);
    window.setTimeout(() => setCopied(""), 1600);
  }

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-4">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {labels.inputLabel}
            </span>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.16)]"
              placeholder={labels.placeholder}
            />
          </label>

          <div className="flex gap-3">
            <input
              type="color"
              value={output?.hex ?? "#3B82F6"}
              onChange={(event) => setInput(event.target.value.toUpperCase())}
              className="h-12 w-16 rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-1"
            />
            <button
              type="button"
              onClick={() => setInput("")}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
            >
              {labels.clearText}
            </button>
          </div>

          <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-text-tertiary)]">
              {labels.previewLabel}
            </p>
            <div
              className="mt-3 h-28 rounded-[20px] border border-[color:var(--brand-border)]"
              style={{ backgroundColor: output?.hex ?? "#0A0A0F" }}
            />
          </div>

          <p className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.helper}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {output
            ? ([
                { key: "hex", label: labels.formats.hex, value: output.hex },
                { key: "rgb", label: labels.formats.rgb, value: output.rgb },
                { key: "hsl", label: labels.formats.hsl, value: output.hsl },
              ] as const).map((item) => (
                <article
                  key={item.key}
                  className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                        {item.label}
                      </p>
                      <p className="mt-3 break-all text-lg font-bold text-[color:var(--brand-text-primary)]">
                        {item.value}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.key, item.value)}
                      className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      {copied === item.key ? labels.copied : labels.copy}
                    </button>
                  </div>
                </article>
              ))
            : (
              <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5 text-sm leading-7 text-[color:var(--brand-text-secondary)] md:col-span-3">
                {labels.invalid}
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
