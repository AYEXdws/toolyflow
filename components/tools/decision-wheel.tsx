"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const palette = ["#7c3aed", "#06b6d4", "#8b5cf6", "#4f46e5", "#9333ea", "#0ea5e9"];

type DecisionWheelLabels = {
  inputLabel: string;
  button: string;
  spinning: string;
  helper: string;
  resultLabel: string;
  emptyResult: string;
  starterOptions: string[];
};

function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
}

function describeSector(startAngle: number, endAngle: number) {
  const center = 100;
  const radius = 94;
  const start = polarToCartesian(center, center, radius, endAngle);
  const end = polarToCartesian(center, center, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return `M ${center} ${center} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

function sanitizeOptions(raw: string) {
  return [...new Set(raw.split("\n").map((item) => item.trim()).filter(Boolean))].slice(0, 12);
}

type DecisionWheelProps = {
  labels: DecisionWheelLabels;
};

export function DecisionWheel({ labels }: DecisionWheelProps) {
  const [rawOptions, setRawOptions] = useState(labels.starterOptions.join("\n"));
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const options = useMemo(() => {
    const cleaned = sanitizeOptions(rawOptions);
    return cleaned.length >= 2 ? cleaned : labels.starterOptions;
  }, [labels.starterOptions, rawOptions]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const segmentAngle = 360 / options.length;

  function spinWheel() {
    if (spinning || options.length < 2) {
      return;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    const winningIndex = Math.floor(Math.random() * options.length);
    const normalizedCurrent = ((rotation % 360) + 360) % 360;
    const targetNormalized = (360 - winningIndex * segmentAngle) % 360;
    const delta = (targetNormalized - normalizedCurrent + 360) % 360;
    const fullSpins = (5 + Math.floor(Math.random() * 2)) * 360;
    const nextRotation = rotation + fullSpins + delta;

    setSpinning(true);
    setResult("");
    setRotation(nextRotation);

    timeoutRef.current = window.setTimeout(() => {
      setSpinning(false);
      setResult(options[winningIndex]);
    }, 4800);
  }

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-4">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {labels.inputLabel}
            </span>
            <textarea
              value={rawOptions}
              onChange={(event) => setRawOptions(event.target.value)}
              rows={10}
              className="w-full rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
            />
          </label>
          <button
            type="button"
            onClick={spinWheel}
            disabled={spinning || options.length < 2}
            className="rounded-xl bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {spinning ? labels.spinning : labels.button}
          </button>
          <p className="text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.helper}
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative mx-auto flex max-w-[420px] justify-center">
            <div className="absolute top-1 z-10 h-0 w-0 border-x-[18px] border-t-[28px] border-x-transparent border-t-[color:var(--brand-text-primary)]" />
            <div
              className="aspect-square w-full max-w-[420px] rounded-full border-[10px] border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning
                  ? "transform 4.8s cubic-bezier(0.14, 0.84, 0.18, 1)"
                  : undefined,
              }}
            >
              <svg viewBox="0 0 200 200" className="h-full w-full">
                {options.map((option, index) => {
                  const start = -segmentAngle / 2 + index * segmentAngle;
                  const end = start + segmentAngle;
                  const centerAngle = index * segmentAngle;
                  const labelPosition = polarToCartesian(100, 100, 60, centerAngle);
                  const flipped = centerAngle > 90 && centerAngle < 270;

                  return (
                    <g key={option}>
                      <path
                        d={describeSector(start, end)}
                        fill={palette[index % palette.length]}
                        stroke="#13131A"
                        strokeWidth="1.5"
                      />
                      <text
                        x={labelPosition.x}
                        y={labelPosition.y}
                        fill="#F8FAFC"
                        fontSize="7.5"
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={
                          flipped
                            ? `rotate(${centerAngle + 180} ${labelPosition.x} ${labelPosition.y})`
                            : `rotate(${centerAngle} ${labelPosition.x} ${labelPosition.y})`
                        }
                      >
                        {option.length > 14 ? `${option.slice(0, 12)}…` : option}
                      </text>
                    </g>
                  );
                })}
                <circle cx="100" cy="100" r="16" fill="#13131A" />
                <circle cx="100" cy="100" r="7" fill="#F8FAFC" />
              </svg>
            </div>
          </div>

          <div className="rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              {labels.resultLabel}
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
              {result || labels.emptyResult}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
