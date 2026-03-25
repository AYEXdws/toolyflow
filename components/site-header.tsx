import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import { localizePath, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  labels: {
    tools: string;
    about: string;
    contact: string;
    language: string;
  };
};

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
  const navigation = [
    { href: `${localizePath(locale)}#tools`, label: labels.tools },
    { href: localizePath(locale, "about"), label: labels.about },
    { href: localizePath(locale, "contact"), label: labels.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[color:var(--color-surface)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={localizePath(locale)} className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--color-accent)] text-sm font-semibold tracking-[0.24em] text-white">
            TF
          </span>
          <span className="font-display text-xl tracking-tight text-[color:var(--color-foreground)]">
            Toolyflow
          </span>
        </Link>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:items-end">
          <nav aria-label="Primary" className="w-full sm:w-auto">
            <ul className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--color-muted)] sm:justify-end">
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
    </header>
  );
}
