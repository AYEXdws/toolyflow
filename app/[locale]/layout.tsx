import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, getToolEntries } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const tools = getToolEntries(locale as Locale).map((tool) => ({
    slug: tool.slug,
    name: tool.name,
  }));

  return (
    <>
      <SiteHeader
        locale={locale}
        labels={{
          tools: dictionary.header.tools,
          about: dictionary.header.about,
          contact: dictionary.header.contact,
          language: dictionary.shared.language,
        }}
      />
      <div className="flex-1">{children}</div>
      <SiteFooter locale={locale} labels={dictionary.footer} tools={tools} />
    </>
  );
}
