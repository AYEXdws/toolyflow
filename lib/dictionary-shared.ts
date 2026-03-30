export const dictionaryCategories = ["argo", "deyim", "genel"] as const;

export type DictionaryCategory = (typeof dictionaryCategories)[number];

export type DictionaryWord = {
  id: string;
  kelime: string;
  anlam: string;
  ornek_cumle: string | null;
  kategori: string;
  etiketler: string[];
  slug: string;
  goruntulenme: number;
  created_at: string;
};

export const dictionarySelectColumns =
  "id, kelime, anlam, ornek_cumle, kategori, etiketler, slug, goruntulenme, created_at";

export function normalizeDictionaryWord(record: Partial<DictionaryWord>): DictionaryWord {
  return {
    id: record.id ?? "",
    kelime: record.kelime ?? "",
    anlam: record.anlam ?? "",
    ornek_cumle: record.ornek_cumle ?? null,
    kategori: record.kategori ?? "genel",
    etiketler: Array.isArray(record.etiketler) ? record.etiketler : [],
    slug: record.slug ?? "",
    goruntulenme: Number(record.goruntulenme ?? 0),
    created_at: record.created_at ?? "",
  };
}

export function getDictionaryCategoryLabel(category: string) {
  if (category === "argo") return "Argo";
  if (category === "deyim") return "Deyim";
  return "Genel";
}

export function trimMeaning(value: string, maxLength = 132) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trim()}...`;
}
