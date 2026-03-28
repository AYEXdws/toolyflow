"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";

type QrMode = "url" | "text" | "email" | "phone" | "wifi";
type WifiSecurity = "WPA" | "WEP" | "nopass";

type QrGeneratorLabels = {
  inputLabel: string;
  placeholder: string;
  download: string;
  downloadSvg: string;
  clear: string;
  livePreview: string;
  emptyState: string;
  generating: string;
  helper: string;
  typeLabel: string;
  sizeLabel: string;
  foregroundLabel: string;
  backgroundLabel: string;
  urlMode: string;
  textMode: string;
  emailMode: string;
  phoneMode: string;
  wifiMode: string;
  emailLabel: string;
  subjectLabel: string;
  bodyLabel: string;
  phoneLabel: string;
  ssidLabel: string;
  passwordLabel: string;
  securityLabel: string;
  securityWpa: string;
  securityWep: string;
  securityOpen: string;
};

type QrGeneratorProps = {
  labels: QrGeneratorLabels;
};

const sizeOptions = [256, 512, 768] as const;

function buildEmailPayload(email: string, subject: string, body: string) {
  const params = new URLSearchParams();

  if (subject.trim()) {
    params.set("subject", subject.trim());
  }

  if (body.trim()) {
    params.set("body", body.trim());
  }

  const query = params.toString();

  return `mailto:${email.trim()}${query ? `?${query}` : ""}`;
}

function buildWifiPayload(ssid: string, password: string, security: WifiSecurity) {
  const escapedSsid = ssid.replace(/([\\;,:"'])/g, "\\$1");
  const escapedPassword = password.replace(/([\\;,:"'])/g, "\\$1");

  return `WIFI:T:${security};S:${escapedSsid};P:${escapedPassword};;`;
}

export function QrGenerator({ labels }: QrGeneratorProps) {
  const [mode, setMode] = useState<QrMode>("url");
  const [textValue, setTextValue] = useState("https://toolyflow.com");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [phone, setPhone] = useState("");
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState<WifiSecurity>("WPA");
  const [size, setSize] = useState<(typeof sizeOptions)[number]>(512);
  const [foreground, setForeground] = useState("#0A0A0F");
  const [background, setBackground] = useState("#F8FAFC");
  const [pngUrl, setPngUrl] = useState("");
  const [svgMarkup, setSvgMarkup] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const qrValue = useMemo(() => {
    if (mode === "url" || mode === "text") {
      return textValue.trim();
    }

    if (mode === "email") {
      return email.trim() ? buildEmailPayload(email, subject, body) : "";
    }

    if (mode === "phone") {
      return phone.trim() ? `tel:${phone.trim()}` : "";
    }

    return ssid.trim() ? buildWifiPayload(ssid.trim(), password.trim(), security) : "";
  }, [body, email, mode, password, phone, security, ssid, subject, textValue]);

  useEffect(() => {
    let active = true;

    async function generate() {
      if (!qrValue) {
        setPngUrl("");
        setSvgMarkup("");
        return;
      }

      setIsGenerating(true);

      try {
        const [pngResult, svgResult] = await Promise.all([
          QRCode.toDataURL(qrValue, {
            margin: 1,
            width: size,
            color: {
              dark: foreground,
              light: background,
            },
          }),
          QRCode.toString(qrValue, {
            type: "svg",
            margin: 1,
            width: size,
            color: {
              dark: foreground,
              light: background,
            },
          }),
        ]);

        if (active) {
          setPngUrl(pngResult);
          setSvgMarkup(svgResult);
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
  }, [background, foreground, qrValue, size]);

  function clearInputs() {
    setTextValue("");
    setEmail("");
    setSubject("");
    setBody("");
    setPhone("");
    setSsid("");
    setPassword("");
  }

  function downloadPng() {
    if (!pngUrl) {
      return;
    }

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "toolyflow-qr-code.png";
    link.click();
  }

  function downloadSvg() {
    if (!svgMarkup) {
      return;
    }

    const blob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "toolyflow-qr-code.svg";
    link.click();
    URL.revokeObjectURL(url);
  }

  const modes: Array<{ key: QrMode; label: string }> = [
    { key: "url", label: labels.urlMode },
    { key: "text", label: labels.textMode },
    { key: "email", label: labels.emailMode },
    { key: "phone", label: labels.phoneMode },
    { key: "wifi", label: labels.wifiMode },
  ];

  const securityLabels: Record<WifiSecurity, string> = {
    WPA: labels.securityWpa,
    WEP: labels.securityWep,
    nopass: labels.securityOpen,
  };

  return (
    <section className="rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <div className="space-y-3">
            <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
              {labels.typeLabel}
            </span>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-5">
              {modes.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setMode(item.key)}
                  className={`rounded-[20px] px-3 py-3 text-center text-sm font-medium transition sm:px-4 ${
                    mode === item.key
                      ? "bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] text-white"
                      : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {(mode === "url" || mode === "text") && (
            <label className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                {labels.inputLabel}
              </span>
              <textarea
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
                rows={7}
                className="w-full rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-4 text-sm leading-7 text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
                placeholder={labels.placeholder}
              />
            </label>
          )}

          {mode === "email" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-3 md:col-span-2">
                <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                  {labels.emailLabel}
                </span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
                  placeholder="hello@example.com"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                  {labels.subjectLabel}
                </span>
                <input
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                  {labels.bodyLabel}
                </span>
                <input
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
                />
              </label>
            </div>
          )}

          {mode === "phone" && (
            <label className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                {labels.phoneLabel}
              </span>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
                placeholder="+90 555 000 0000"
              />
            </label>
          )}

          {mode === "wifi" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-3">
                <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                  {labels.ssidLabel}
                </span>
                <input
                  value={ssid}
                  onChange={(event) => setSsid(event.target.value)}
                  className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                  {labels.passwordLabel}
                </span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-3 text-sm text-[color:var(--brand-text-primary)] outline-none transition focus:border-[color:var(--brand-border-hover)] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]"
                />
              </label>
              <div className="space-y-3 md:col-span-2">
                <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                  {labels.securityLabel}
                </span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {(Object.keys(securityLabels) as WifiSecurity[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSecurity(item)}
                      className={`rounded-[20px] px-4 py-3 text-sm font-medium transition ${
                        security === item
                          ? "bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] text-white"
                          : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                      }`}
                    >
                      {securityLabels[item]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                {labels.sizeLabel}
              </span>
              <div className="flex flex-wrap gap-3">
                {sizeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    className={`min-h-11 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                      size === option
                        ? "bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] text-white"
                        : "border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <label className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                {labels.foregroundLabel}
              </span>
              <input
                type="color"
                value={foreground}
                onChange={(event) => setForeground(event.target.value)}
                className="h-12 w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-2"
              />
            </label>

            <label className="space-y-3">
              <span className="text-sm font-medium text-[color:var(--brand-text-primary)]">
                {labels.backgroundLabel}
              </span>
              <input
                type="color"
                value={background}
                onChange={(event) => setBackground(event.target.value)}
                className="h-12 w-full rounded-[20px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-2"
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={downloadPng}
              disabled={!pngUrl}
              className="rounded-xl bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {labels.download}
            </button>
            <button
              type="button"
              onClick={downloadSvg}
              disabled={!svgMarkup}
              className="rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-medium text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {labels.downloadSvg}
            </button>
            <button
              type="button"
              onClick={clearInputs}
              className="rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-5 py-3 text-sm font-medium text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
            >
              {labels.clear}
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
            {labels.livePreview}
          </p>
          <div className="mt-5 flex min-h-[320px] items-center justify-center rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-4">
            {pngUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={pngUrl}
                alt="Generated QR code preview"
                className="h-auto w-full max-w-[260px]"
              />
            ) : (
              <p className="max-w-[240px] text-center text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                {labels.emptyState}
              </p>
            )}
          </div>
          <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {isGenerating ? labels.generating : labels.helper}
          </p>
        </div>
      </div>
    </section>
  );
}
