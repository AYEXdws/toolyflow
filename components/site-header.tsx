"use client";

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

function BrandMark() {
  return (
    <span aria-hidden="true" className="grid h-10 w-10 shrink-0 grid-cols-2 gap-1 rounded-[14px] bg-[#14151a] p-2 shadow-[0_8px_20px_rgba(20,21,26,0.18)]">
      <span className="rounded-[3px] bg-[#C8F135]" />
      <span className="rounded-[3px] bg-[#2557FF]" />
      <span className="col-span-2 rounded-[3px] bg-[#FFFDF8]" />
    </span>
  );
}

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const homeHref = getHomePath(locale);
  const navigation = [
    { href: `${homeHref}#tools`, label: labels.tools },
    { href: `${homeHref}#categories`, label: labels.categories },
    ...(locale === "tr" ? [{ href: "/tr/sozluk", label: "Sözlük" }] : []),
    { href: getStaticPath(locale, "about"), label: labels.about },
  ];

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] px-3 pt-3 sm:px-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-[22px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)]/94 px-4 py-3 shadow-[0_12px_40px_rgba(36,32,24,0.09)] backdrop-blur-xl sm:px-5">
          <Link
            href={homeHref}
            className="flex min-h-11 items-center gap-3"
            aria-label="Toolyflow"
            onClick={() => setIsMenuOpen(false)}
          >
            <BrandMark />
            <span className="text-xl font-extrabold tracking-[-0.055em] text-[color:var(--brand-text-primary)] sm:text-2xl">
              Tooly<span className="text-[color:var(--brand-secondary)]">flow</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1 rounded-full bg-[color:var(--brand-surface)] p-1 text-sm font-semibold text-[color:var(--brand-text-secondary)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-full px-4 transition hover:bg-[color:var(--brand-card)] hover:text-[color:var(--brand-text-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <LanguageSwitcher currentLocale={locale} label={labels.language} />
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={labels.menu}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#14151A] text-white transition active:scale-95 lg:hidden"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="fixed inset-0 z-[300] lg:hidden" role="dialog" aria-modal="true" aria-label={labels.menu}>
          <button
            type="button"
            aria-label={labels.menu}
            className="absolute inset-0 bg-[#14151A]/48 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 flex w-[min(92vw,390px)] flex-col overflow-hidden border-l border-black/10 bg-[color:var(--brand-card)] shadow-[-30px_0_80px_rgba(20,21,26,0.2)]">
            <div className="flex shrink-0 items-center justify-between border-b border-[color:var(--brand-border)] px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <div className="flex items-center gap-3">
                <BrandMark />
                <div>
                  <p className="text-lg font-extrabold tracking-[-0.04em]">Toolyflow</p>
                  <p className="text-xs text-[color:var(--brand-text-secondary)]">{labels.menu}</p>
                </div>
              </div>
              <button
                type="button"
                aria-label={labels.menu}
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-2xl leading-none text-[color:var(--brand-text-primary)]"
              >
                ×
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
              <nav aria-label="Mobile primary">
                <ul className="grid gap-2">
                  {[...navigation, { href: getStaticPath(locale, "contact"), label: labels.contact }].map((item, index) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex min-h-14 items-center justify-between rounded-[18px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-3 font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)] hover:bg-[color:var(--brand-badge-bg)]"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xs tabular-nums text-[color:var(--brand-text-tertiary)]">0{index + 1}</span>
                          {item.label}
                        </span>
                        <span className="text-lg text-[color:var(--brand-secondary)] transition group-hover:translate-x-1">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-7 border-t border-[color:var(--brand-border)] pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-text-tertiary)]">
                  {labels.language}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {locales.map((targetLocale) => {
                    const isActive = targetLocale === locale;

                    return (
                      <Link
                        key={targetLocale}
                        href={translatePathname(pathname, targetLocale)}
                        hrefLang={targetLocale}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex min-h-12 items-center justify-between rounded-[16px] border px-3 py-2.5 text-sm font-semibold transition ${
                          isActive
                            ? "border-[#2557FF] bg-[#2557FF] text-white"
                            : "border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] text-[color:var(--brand-text-primary)]"
                        }`}
                      >
                        <span>{localeLabels[targetLocale]}</span>
                        <span className="text-[10px] uppercase opacity-60">{targetLocale}</span>
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
