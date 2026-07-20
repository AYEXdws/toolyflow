import Link from "next/link";

import { DictionarySearch } from "@/components/dictionary/dictionary-search";
import { StructuredData } from "@/components/structured-data";
import {
  getDictionaryCategoryLabel,
  type DictionaryCategory,
  type DictionaryWord,
} from "@/lib/dictionary-shared";
import { siteConfig } from "@/lib/site-config";

type DictionaryHomePageProps = {
  popularWords: DictionaryWord[];
  categoryCounts: Record<DictionaryCategory, number>;
};

export function DictionaryHomePage({
  popularWords,
  categoryCounts,
}: DictionaryHomePageProps) {
  const totalWords = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Türkçe Sözlük",
          description:
            "Argo, deyim ve genel kullanımdaki kelimeleri arayabileceğin Toolyflow Türkçe Sözlük.",
          url: `${siteConfig.url}/tr/sozluk`,
          inLanguage: "tr",
        }}
      />
      <main className="pb-16">
        <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="space-y-5 rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
              Türkçe sözlük modülü
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--brand-text-primary)] sm:text-5xl">
              Türkçe Sözlük
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
              Kelime, ifade ve internet jargonunu tek yerde ara. Anlamı, örnek cümleyi ve ilgili
              kelimeleri aynı sayfada gör.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-badge-text)]">
                Toplam {totalWords} kelime
              </span>
              <span className="inline-flex rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-2 text-sm text-[color:var(--brand-text-secondary)]">
                3 kategori: argo, deyim, genel
              </span>
            </div>
          </div>
        </section>

        <section id="sozluk-sonuclari" className="scroll-mt-28 mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <DictionarySearch
            initialWords={popularWords}
            categoryCounts={categoryCounts}
            totalWords={totalWords}
          />
        </section>
      </main>
    </>
  );
}

type DictionaryWordPageProps = {
  word: DictionaryWord;
  relatedWords: DictionaryWord[];
};

export function DictionaryWordPage({ word, relatedWords }: DictionaryWordPageProps) {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: word.kelime,
          description: word.anlam,
          inDefinedTermSet: `${siteConfig.url}/tr/sozluk`,
          url: `${siteConfig.url}/tr/sozluk/${word.slug}`,
          inLanguage: "tr",
        }}
      />
      <main className="pb-16">
        <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="space-y-5 rounded-[32px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                {getDictionaryCategoryLabel(word.kategori)}
              </span>
              {word.goruntulenme > 0 ? (
                <span className="text-sm text-[color:var(--brand-text-secondary)]">
                  {word.goruntulenme.toLocaleString("tr-TR")} görüntülenme
                </span>
              ) : null}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--brand-text-primary)] sm:text-5xl">
              {word.kelime}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
              {word.anlam}
            </p>
            {word.etiketler.length ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {word.etiketler.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-3 py-1 text-[11px] font-medium text-[color:var(--brand-text-secondary)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-6">
              <article className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  Anlam
                </p>
                <p className="mt-4 text-base leading-8 text-[color:var(--brand-text-secondary)]">
                  {word.anlam}
                </p>
              </article>

              <article className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  Örnek cümle
                </p>
                <p className="mt-4 text-base leading-8 text-[color:var(--brand-text-secondary)]">
                  {word.ornek_cumle ?? "Bu kelime için örnek cümle henüz eklenmemiş."}
                </p>
              </article>
            </div>

            <aside className="space-y-4">
              <div className="rounded-[28px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                  Kategori
                </p>
                <p className="mt-3 text-lg font-bold text-[color:var(--brand-text-primary)]">
                  {getDictionaryCategoryLabel(word.kategori)}
                </p>
              </div>
              <Link
                href="/tr/sozluk"
                className="flex min-h-11 items-center justify-center rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] px-4 py-3 text-sm font-semibold text-[color:var(--brand-text-primary)] transition hover:border-[color:var(--brand-border-hover)]"
              >
                Sözlüğe dön
              </Link>
            </aside>
          </div>
        </section>

        {relatedWords.length ? (
          <section className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                İlgili kelimeler
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                Aynı kategoriden başka kelimeler
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedWords.map((item) => (
                <Link
                  key={item.slug}
                  href={`/tr/sozluk/${item.slug}`}
                  className="group rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)] transition duration-200 hover:scale-[1.02] hover:border-[color:var(--brand-border-hover)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[color:var(--brand-badge-text)]">
                      {getDictionaryCategoryLabel(item.kategori)}
                    </span>
                    <span className="text-lg text-[color:var(--brand-secondary)]">↗</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-[color:var(--brand-text-primary)]">
                    {item.kelime}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
                    {item.anlam}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
