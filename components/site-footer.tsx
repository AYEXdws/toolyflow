import Link from "next/link";

import { type Locale } from "@/lib/i18n";
import { getCategoryPath, getStaticPath } from "@/lib/paths";

type SiteFooterProps = {
  locale: Locale;
  labels: {
    slogan: string;
    madeIn: string;
    categoriesHeading: string;
    companyHeading: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
  categories: Array<{ slug: string; name: string }>;
};

export function SiteFooter({ locale, labels, categories }: SiteFooterProps) {
  return (
    <footer className="mt-16 px-3 pb-3 sm:px-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#14151A] text-white">
        <div className="grid gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1.25fr_0.8fr_0.8fr] lg:px-12 lg:py-14">
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="grid h-11 w-11 grid-cols-2 gap-1 rounded-[14px] border border-white/10 bg-white/8 p-2">
                <span className="rounded-[3px] bg-[#C8F135]" />
                <span className="rounded-[3px] bg-[#2557FF]" />
                <span className="col-span-2 rounded-[3px] bg-white" />
              </span>
              <span className="text-2xl font-extrabold tracking-[-0.055em]">
                Tooly<span className="text-[#7C9BFF]">flow</span>
              </span>
            </Link>
            <p className="display-type mt-7 max-w-md text-3xl leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              {labels.slogan}
            </p>
            <p className="mt-5 text-sm text-white/55">{labels.madeIn}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8F135]">
              {labels.categoriesHeading}
            </p>
            <ul className="mt-5 space-y-1 text-sm text-white/70">
              {locale === "tr" ? (
                <li>
                  <Link href="/tr/sozluk" className="flex min-h-11 items-center border-b border-white/8 transition hover:translate-x-1 hover:text-white">
                    Türkçe Sözlük
                  </Link>
                </li>
              ) : null}
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={getCategoryPath(locale, category.slug as Parameters<typeof getCategoryPath>[1])}
                    className="flex min-h-11 items-center border-b border-white/8 transition hover:translate-x-1 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8F135]">
              {labels.companyHeading}
            </p>
            <ul className="mt-5 space-y-1 text-sm text-white/70">
              {[
                { href: getStaticPath(locale, "about"), label: labels.about },
                { href: getStaticPath(locale, "contact"), label: labels.contact },
                { href: getStaticPath(locale, "privacy-policy"), label: labels.privacy },
                { href: getStaticPath(locale, "terms-of-service"), label: labels.terms },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex min-h-11 items-center border-b border-white/8 transition hover:translate-x-1 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <span>{labels.copyright}</span>
          <span>toolyflow.com</span>
        </div>
      </div>
    </footer>
  );
}
