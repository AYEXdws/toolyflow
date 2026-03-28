"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { isLocale, localizePath, type Locale } from "@/lib/i18n";

const copy: Record<
  Locale,
  {
    title: string;
    description: string;
    cta: string;
  }
> = {
  en: {
    title: "Page not found",
    description:
      "The page you requested does not exist or may have moved. Go back to the main Toolyflow pages to keep browsing the tool library.",
    cta: "Go to tools",
  },
  tr: {
    title: "Sayfa bulunamadı",
    description:
      "İstediğiniz sayfa bulunamadı veya taşınmış olabilir. Araç kütüphanesinde gezinmeye devam etmek için ana Toolyflow sayfalarına dönün.",
    cta: "Araçlara dön",
  },
  es: {
    title: "Página no encontrada",
    description:
      "La página solicitada no existe o puede haberse movido. Vuelve a las páginas principales de Toolyflow para seguir explorando las herramientas.",
    cta: "Ir a herramientas",
  },
  de: {
    title: "Seite nicht gefunden",
    description:
      "Die angeforderte Seite existiert nicht oder wurde verschoben. Geh zurück zu den Toolyflow-Hauptseiten, um weiter im Tool-Bereich zu stöbern.",
    cta: "Zu den Tools",
  },
  fr: {
    title: "Page introuvable",
    description:
      "La page demandée n'existe pas ou a peut-être été déplacée. Revenez aux pages principales de Toolyflow pour continuer à parcourir les outils.",
    cta: "Voir les outils",
  },
  pt: {
    title: "Página não encontrada",
    description:
      "A página solicitada não existe ou pode ter sido movida. Volte para as páginas principais da Toolyflow para continuar explorando as ferramentas.",
    cta: "Ir para as ferramentas",
  },
};

export default function LocalizedNotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale && isLocale(params.locale) ? params.locale : "en";
  const labels = copy[locale];

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <section className="w-full rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-8 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[color:var(--color-foreground)] sm:text-5xl">
          {labels.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--color-muted)]">
          {labels.description}
        </p>
        <Link
          href={`${localizePath(locale)}#tools`}
          className="mt-8 inline-flex rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-strong)]"
        >
          {labels.cta}
        </Link>
      </section>
    </main>
  );
}
