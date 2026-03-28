"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { localeLabels, locales, replaceLocaleInPath, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

const primaryLocales: Locale[] = ["tr", "en"];

const moreLabels: Record<Locale, string> = {
  tr: "Diğer",
  en: "More",
  es: "Más",
  de: "Mehr",
  fr: "Plus",
  pt: "Mais",
};

export function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const secondaryLocales = locales.filter((locale) => !primaryLocales.includes(locale));
  const isSecondaryActive = secondaryLocales.includes(currentLocale);
  const dropdownLabel = isSecondaryActive ? localeLabels[currentLocale] : moreLabels[currentLocale];

  return (
    <>
      <div className="relative sm:hidden">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={label}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-primary)]"
        >
          <span className="text-[color:var(--brand-text-secondary)]">{label}</span>
          <span>{localeLabels[currentLocale]}</span>
        </button>

        {isOpen ? (
          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 min-w-52 rounded-[22px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
            {locales.map((locale) => {
              const isActive = locale === currentLocale;

              return (
                <Link
                  key={locale}
                  href={replaceLocaleInPath(pathname, locale)}
                  hrefLang={locale}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-[color:var(--brand-badge-bg)] font-semibold text-[color:var(--brand-badge-text)]"
                      : "text-[color:var(--brand-text-primary)] hover:bg-white/4"
                  }`}
                >
                  <span>{localeLabels[locale]}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {locale}
                  </span>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="relative hidden items-center gap-2 sm:flex">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-secondary)]">
          {label}
        </span>
        <div className="flex flex-wrap gap-2">
          {primaryLocales.map((locale) => {
            const isActive = locale === currentLocale;

            return (
              <Link
                key={locale}
                href={replaceLocaleInPath(pathname, locale)}
                hrefLang={locale}
                className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] text-white"
                    : "border border-[color:var(--brand-border)] text-[color:var(--brand-text-secondary)] hover:border-[color:var(--brand-border-hover)] hover:text-[color:var(--brand-text-primary)]"
                }`}
              >
                {localeLabels[locale]}
              </Link>
            );
          })}

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={label}
            onClick={() => setIsOpen((value) => !value)}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              isSecondaryActive
                ? "bg-[linear-gradient(135deg,#7C3AED,#06B6D4)] text-white"
                : "border border-[color:var(--brand-border)] text-[color:var(--brand-text-secondary)] hover:border-[color:var(--brand-border-hover)] hover:text-[color:var(--brand-text-primary)]"
            }`}
          >
            {dropdownLabel}
          </button>
        </div>

        {isOpen ? (
          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 min-w-56 rounded-[22px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
            {secondaryLocales.map((locale) => {
              const isActive = locale === currentLocale;

              return (
                <Link
                  key={locale}
                  href={replaceLocaleInPath(pathname, locale)}
                  hrefLang={locale}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-[color:var(--brand-badge-bg)] font-semibold text-[color:var(--brand-badge-text)]"
                      : "text-[color:var(--brand-text-primary)] hover:bg-white/4"
                  }`}
                >
                  <span>{localeLabels[locale]}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {locale}
                  </span>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}
