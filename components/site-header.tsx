"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { localizePath, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  labels: {
    textTools: string;
    creatorTools: string;
    about: string;
    contact: string;
    language: string;
  };
};

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { href: localizePath(locale, "text-tools"), label: labels.textTools },
    { href: localizePath(locale, "creator-tools"), label: labels.creatorTools },
    { href: localizePath(locale, "about"), label: labels.about },
    { href: localizePath(locale, "contact"), label: labels.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[color:var(--color-surface)] backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={localizePath(locale)}
            className="flex min-h-11 items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_10px_24px_rgba(23,28,24,0.08)]">
              <Image
                src="/images/logo.svg"
                alt="Toolyflow logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
            </span>
            <span className="font-display text-xl tracking-tight text-[color:var(--color-foreground)]">
              Toolyflow
            </span>
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-[color:var(--color-foreground)] shadow-[0_10px_24px_rgba(23,28,24,0.08)] transition hover:border-[color:var(--color-accent)] lg:hidden"
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

          <div className="hidden items-end gap-4 lg:flex lg:flex-col">
            <nav aria-label="Primary">
              <ul className="flex flex-wrap items-center justify-end gap-2 text-sm text-[color:var(--color-muted)]">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex rounded-full px-4 py-2 transition hover:bg-black/5 hover:text-[color:var(--color-foreground)]"
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

        {isMenuOpen ? (
          <div className="mt-4 rounded-[28px] border border-black/8 bg-white p-4 shadow-[0_24px_60px_rgba(23,28,24,0.12)] lg:hidden">
            <nav aria-label="Mobile primary">
              <ul className="grid gap-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between rounded-[18px] border border-black/8 px-4 py-3 text-sm font-medium text-[color:var(--color-foreground)] transition hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                        Go
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-4 border-t border-black/8 pt-4">
              <LanguageSwitcher currentLocale={locale} label={labels.language} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
