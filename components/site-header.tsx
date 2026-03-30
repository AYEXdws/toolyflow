"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { getHomePath, getStaticPath, translatePathname } from "@/lib/paths";

type SiteHeaderProps = {
  locale: Locale;
  labels: {
    tools: string;
    categories: string;
    about: string;
    contact: string;
    language: string;
    menu: string;
  };
};

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const homeHref = getHomePath(locale);
  const navigation = [
    ...(locale === "tr"
      ? [{ href: "/tr/sozluk", label: "Sözlük" }]
      : []),
    { href: `${homeHref}#tools`, label: labels.tools },
    { href: `${homeHref}#categories`, label: labels.categories },
    { href: getStaticPath(locale, "about"), label: labels.about },
  ];

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-[color:var(--brand-border)] bg-[color:var(--brand-bg)]/92 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={homeHref}
              className="flex min-h-11 items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow)]">
                <Image
                  src="/images/toolyflow-mark.png"
                  alt="Toolyflow logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  priority
                />
              </span>
              <span className="text-2xl font-extrabold tracking-[-0.04em] text-[color:var(--brand-text-primary)]">
                Tooly<span className="text-[color:var(--brand-secondary)]">flow</span>
              </span>
            </Link>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={labels.menu}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)] lg:hidden"
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition ${
                    isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition ${
                    isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            <div className="hidden flex-1 items-center justify-between gap-8 lg:flex">
              <div />
              <nav aria-label="Primary" className="flex-1">
                <ul className="flex flex-wrap items-center justify-end gap-2 text-sm text-[color:var(--brand-text-secondary)]">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex rounded-full px-4 py-2 transition hover:bg-white/4 hover:text-[color:var(--brand-text-primary)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <LanguageSwitcher currentLocale={locale} label={labels.language} />
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[220] lg:hidden">
          <button
            type="button"
            aria-label={labels.menu}
            className="absolute inset-0 bg-black/72 backdrop-blur-[3px]"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 flex h-[100dvh] w-full max-w-[380px] flex-col border-l border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] shadow-[-24px_0_60px_rgba(0,0,0,0.42)]">
            <div className="flex items-center justify-between border-b border-[color:var(--brand-border)] px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-badge-text)]">
                  Toolyflow
                </p>
                <p className="mt-2 text-sm text-[color:var(--brand-text-secondary)]">
                  {labels.menu}
                </p>
              </div>
              <button
                type="button"
                aria-label={labels.menu}
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] text-xl text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
              <nav aria-label="Mobile primary">
                <ul className="grid gap-2">
                  {[
                    ...navigation,
                    { href: getStaticPath(locale, "contact"), label: labels.contact },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex min-h-12 items-center justify-between rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-3 text-sm font-medium text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
                      >
                        <span>{item.label}</span>
                        <span className="text-lg text-[color:var(--brand-secondary)]">↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-[color:var(--brand-border)] pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-secondary)]">
                  {labels.language}
                </p>
                <div className="mt-3 grid gap-2">
                  {locales.map((targetLocale) => {
                    const isActive = targetLocale === locale;

                    return (
                      <Link
                        key={targetLocale}
                        href={translatePathname(pathname, targetLocale)}
                        hrefLang={targetLocale}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex min-h-12 items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "border-transparent bg-[linear-gradient(135deg,#1D4ED8,#3B82F6)] text-white"
                            : "border-[color:var(--brand-border)] bg-[color:var(--brand-card)] text-[color:var(--brand-text-primary)] hover:border-[color:var(--brand-border-hover)]"
                        }`}
                      >
                        <span>{localeLabels[targetLocale]}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-80">
                          {targetLocale}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
