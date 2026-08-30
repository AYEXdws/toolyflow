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

export function DictionaryHomePage({ popularWords, categoryCounts }: DictionaryHomePageProps) {
  const totalWords = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Türkçe Sözlük",
          description: "Argo, deyim ve genel kullanımdaki kelimeleri arayabileceğin Toolyflow Türkçe Sözlük.",
          url: `${siteConfig.url}/tr/sozluk`,
          inLanguage: "tr",
        }}
      />
      <main className="pb-16">
        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid overflow-hidden rounded-[34px] bg-[#14151A] text-white shadow-[var(--brand-shadow-strong)] lg:grid-cols-[minmax(0,1fr)_330px]">
            <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8F135]">Toolyflow / Türkçe Sözlük</p>
              <h1 className="display-type mt-5 text-6xl font-bold leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Türkçe Sözlük.</h1>
              <p className="display-type mt-4 max-w-3xl text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-[#7C9BFF] sm:text-5xl">Kelimenin anlamını, bağlamıyla bul.</p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">Argo, deyim ve günlük dildeki ifadeleri ara; anlamını, örnek cümlesini ve ilgili kelimeleri tek sayfada gör.</p>
            </div>
            <div className="flex flex-col justify-between bg-[#C8F135] p-7 text-[#14151A] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-60">Canlı sözlük arşivi</p>
              <div className="mt-14">
                <p className="display-type text-[clamp(5rem,14vw,9rem)] font-bold leading-none tracking-[-0.06em]">{totalWords}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em]">toplam kelime</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sozluk-sonuclari" className="scroll-mt-28 mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <DictionarySearch initialWords={popularWords} categoryCounts={categoryCounts} totalWords={totalWords} />
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
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <Link href="/tr/sozluk" className="inline-flex min-h-11 items-center text-sm font-bold text-[color:var(--brand-text-secondary)] transition hover:text-[color:var(--brand-secondary)]">← Türkçe Sözlük</Link>
          <div className="mt-4 grid overflow-hidden rounded-[34px] border border-[#14151A] bg-[color:var(--brand-card)] shadow-[var(--brand-shadow-strong)] lg:grid-cols-[minmax(0,1fr)_260px]">
            <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[color:var(--brand-badge-bg)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--brand-badge-text)]">{getDictionaryCategoryLabel(word.kategori)}</span>
                {word.goruntulenme > 0 ? <span className="text-xs font-semibold text-[color:var(--brand-text-tertiary)]">{word.goruntulenme.toLocaleString("tr-TR")} görüntülenme</span> : null}
              </div>
              <h1 className="display-type mt-6 break-words text-6xl font-bold leading-[0.9] tracking-[-0.055em] text-[color:var(--brand-text-primary)] sm:text-7xl lg:text-8xl">{word.kelime}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-9 text-[color:var(--brand-text-secondary)]">{word.anlam}</p>
            </div>
            <div className="flex min-h-48 items-end justify-end bg-[#2557FF] p-8 text-white">
              <span className="display-type text-8xl leading-none" aria-hidden="true">Aa</span>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
          <div className="grid gap-5">
            <article className="rounded-[26px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-6 shadow-[var(--brand-shadow)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">01 / Anlam</p>
              <p className="display-type mt-5 text-3xl leading-snug tracking-[-0.03em] text-[color:var(--brand-text-primary)]">{word.anlam}</p>
            </article>
            <article className="rounded-[26px] bg-[#C8F135] p-6 text-[#14151A] shadow-[var(--brand-shadow)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-60">02 / Örnek cümle</p>
              <p className="mt-5 text-xl font-bold leading-9">“{word.ornek_cumle ?? "Bu kelime için örnek cümle henüz eklenmemiş."}”</p>
            </article>
          </div>

          <aside className="rounded-[26px] bg-[#14151A] p-6 text-white shadow-[var(--brand-shadow)] lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8F135]">Kelime kartı</p>
            <dl className="mt-5 divide-y divide-white/12 text-sm">
              <div className="py-4 first:pt-0">
                <dt className="text-white/45">Kategori</dt>
                <dd className="mt-1 font-bold">{getDictionaryCategoryLabel(word.kategori)}</dd>
              </div>
              <div className="py-4">
                <dt className="text-white/45">Kalıcı bağlantı</dt>
                <dd className="mt-1 break-all font-bold">/{word.slug}</dd>
              </div>
            </dl>
            {word.etiketler.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {word.etiketler.map((tag) => <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/65">#{tag}</span>)}
              </div>
            ) : null}
          </aside>
        </section>

        {relatedWords.length ? (
          <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-badge-text)]">03 / İlgili kelimeler</p>
            <h2 className="display-type mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Aynı kategoriden devam et</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedWords.map((item, index) => (
                <Link key={item.slug} href={`/tr/sozluk/${item.slug}`} className="group min-h-52 rounded-[24px] border border-[color:var(--brand-border)] bg-[color:var(--brand-card)] p-5 shadow-[var(--brand-shadow)] transition hover:-translate-y-1 hover:border-[color:var(--brand-border-hover)]">
                  <span className="text-xs font-bold tabular-nums text-[color:var(--brand-text-tertiary)]">0{index + 1}</span>
                  <h3 className="display-type mt-8 text-3xl font-bold tracking-[-0.035em]">{item.kelime}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[color:var(--brand-text-secondary)]">{item.anlam}</p>
                  <span className="mt-4 inline-flex font-bold text-[color:var(--brand-secondary)] transition group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
