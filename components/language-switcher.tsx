"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { localeLabels, locales, replaceLocaleInPath, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative sm:hidden">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={label}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-foreground)]"
        >
          <span className="text-[color:var(--color-muted)]">{label}</span>
          <span>{currentLocale}</span>
        </button>

        {isOpen ? (
          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 min-w-52 rounded-[22px] border border-black/10 bg-white p-2 shadow-[0_24px_60px_rgba(23,28,24,0.12)]">
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
                      ? "bg-[color:var(--color-accent-soft)] font-semibold text-[color:var(--color-accent-strong)]"
                      : "text-[color:var(--color-foreground)] hover:bg-black/5"
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

      <div className="hidden flex-wrap items-center gap-2 sm:flex">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
          {label}
        </span>
        <div className="flex flex-wrap gap-2">
          {locales.map((locale) => {
            const isActive = locale === currentLocale;

            return (
              <Link
                key={locale}
                href={replaceLocaleInPath(pathname, locale)}
                className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "bg-[color:var(--color-accent)] text-white"
                    : "border border-black/10 text-[color:var(--color-muted)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-foreground)]"
                }`}
                hrefLang={locale}
              >
                {localeLabels[locale]}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
