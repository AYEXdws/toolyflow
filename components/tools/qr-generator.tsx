"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type QrGeneratorLabels = {
  inputLabel: string;
  placeholder: string;
  download: string;
  clear: string;
  livePreview: string;
  emptyState: string;
  generating: string;
  helper: string;
};

type QrGeneratorProps = {
  labels: QrGeneratorLabels;
};

export function QrGenerator({ labels }: QrGeneratorProps) {
  const [value, setValue] = useState("https://toolyflow.com");
  const [qrCode, setQrCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    let active = true;

    async function generate() {
      if (!value.trim()) {
        setQrCode("");
        return;
      }

      setIsGenerating(true);

      try {
        const result = await QRCode.toDataURL(value, {
          margin: 2,
          width: 720,
          color: {
            dark: "#132019",
            light: "#fffdf8",
          },
        });

        if (active) {
          setQrCode(result);
        }
      } finally {
        if (active) {
          setIsGenerating(false);
        }
      }
    }

    void generate();

    return () => {
      active = false;
    };
  }, [value]);

  function downloadQrCode() {
    if (!qrCode) {
      return;
    }

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "toolyflow-qr-code.png";
    link.click();
  }

  return (
    <section className="rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4">
          <label className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--color-foreground)]">
              {labels.inputLabel}
            </span>
            <textarea
              value={value}
              onChange={(event) => setValue(event.target.value)}
              rows={7}
              className="w-full rounded-[24px] border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-[color:var(--color-foreground)] outline-none transition focus:border-[color:var(--color-accent)]"
              placeholder={labels.placeholder}
            />
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={downloadQrCode}
              disabled={!qrCode}
              className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {labels.download}
            </button>
            <button
              type="button"
              onClick={() => setValue("")}
              className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[color:var(--color-foreground)] transition hover:border-[color:var(--color-accent)]"
            >
              {labels.clear}
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-black/8 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
            {labels.livePreview}
          </p>
          <div className="mt-5 flex min-h-[280px] items-center justify-center rounded-[24px] bg-[color:var(--color-surface-strong)] p-4">
            {qrCode ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={qrCode}
                alt="Generated QR code preview"
                className="h-auto w-full max-w-[240px]"
              />
            ) : (
              <p className="max-w-[220px] text-center text-sm leading-7 text-[color:var(--color-muted)]">
                {labels.emptyState}
              </p>
            )}
          </div>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
            {isGenerating ? labels.generating : labels.helper}
          </p>
        </div>
      </div>
    </section>
  );
}
