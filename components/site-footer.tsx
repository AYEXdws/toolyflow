import Link from "next/link";
import Image from "next/image";

import { localizePath, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type SiteFooterProps = {
  locale: Locale;
  labels: {
    description: string;
    categoriesHeading: string;
    toolsHeading: string;
    companyHeading: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  categories: Array<{ slug: string; name: string }>;
  tools: Array<{ slug: string; name: string }>;
};

export function SiteFooter({
  locale,
  labels,
  categories,
  tools,
}: SiteFooterProps) {
  if (locale === "tr") {
    return (
      <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-bg)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)]">
              <Image
                src="/images/logo.svg"
                alt="Toolyflow logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>
            <div>
              <p className="bg-[linear-gradient(135deg,#A855F7,#06B6D4)] bg-clip-text text-lg font-semibold text-transparent">
                Toolyflow
              </p>
              <p className="mt-1 text-sm text-[color:var(--brand-text-secondary)]">
                Türkiye&apos;de ❤️ ile yapıldı
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[color:var(--brand-text-secondary)]">
            <Link
              href={localizePath(locale, "about")}
              className="inline-flex min-h-11 items-center transition hover:text-[color:var(--brand-text-primary)]"
            >
              {labels.about}
            </Link>
            <Link
              href={localizePath(locale, "contact")}
              className="inline-flex min-h-11 items-center transition hover:text-[color:var(--brand-text-primary)]"
            >
              {labels.contact}
            </Link>
            <Link
              href={localizePath(locale, "privacy-policy")}
              className="inline-flex min-h-11 items-center transition hover:text-[color:var(--brand-text-primary)]"
            >
              {labels.privacy}
            </Link>
            <Link
              href={localizePath(locale, "terms-of-service")}
              className="inline-flex min-h-11 items-center transition hover:text-[color:var(--brand-text-primary)]"
            >
              {labels.terms}
            </Link>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-bg)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 xl:grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-2xl font-semibold tracking-tight text-[color:var(--brand-text-primary)]">
            Toolyflow
          </p>
          <p className="max-w-md text-sm leading-7 text-[color:var(--brand-text-secondary)]">
            {labels.description}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-tertiary)]">
            {labels.categoriesHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--brand-text-secondary)]">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={localizePath(locale, category.slug)}
                  className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-tertiary)]">
            {labels.toolsHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--brand-text-secondary)]">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={localizePath(locale, tool.slug)}
                  className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-text-tertiary)]">
            {labels.companyHeading}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--brand-text-secondary)]">
            <li>
              <Link
                href={localizePath(locale, "about")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.about}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "contact")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.contact}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "privacy-policy")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.privacy}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "terms-of-service")}
                className="flex min-h-11 w-full items-center rounded-xl py-1 transition hover:text-[color:var(--brand-text-primary)]"
              >
                {labels.terms}
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm text-[color:var(--brand-text-secondary)]">
            {siteConfig.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
