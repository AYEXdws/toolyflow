import type { Locale } from "@/lib/i18n";
import type { ToolContentBlock } from "@/lib/utility-tool-localizations";

export const calculatorSlugs = [
  "kredi-hesaplayici",
  "bmi-hesaplayici",
  "yas-hesaplayici",
  "yuzde-hesaplayici",
  "kira-artis-hesaplayici",
] as const;

export type CalculatorSlug = (typeof calculatorSlugs)[number];
export type TrCalculatorSlug = CalculatorSlug;

export type AgeCalculatorLabels = {
  birthDate: string;
  calculate: string;
  clear: string;
  invalidDate: string;
  futureDate: string;
  exactAge: string;
  years: string;
  months: string;
  days: string;
  empty: string;
  livedDays: string;
  nextBirthdayDays: string;
};

export type BmiCalculatorLabels = {
  height: string;
  weight: string;
  gender: string;
  skipGender: string;
  male: string;
  female: string;
  calculate: string;
  clear: string;
  invalidInput: string;
  resultTitle: string;
  empty: string;
  categories: {
    underweight: string;
    normal: string;
    overweight: string;
    obese: string;
  };
  comments: {
    underweight: string;
    normal: string;
    overweight: string;
    obese: string;
    maleSuffix: string;
    femaleSuffix: string;
  };
};

export type CreditCalculatorLabels = {
  amount: string;
  rate: string;
  term: string;
  calculate: string;
  clear: string;
  invalidInput: string;
  monthlyPayment: string;
  totalRepayment: string;
  totalInterest: string;
  empty: string;
  scheduleTitle: string;
  scheduleColumns: {
    month: string;
    installment: string;
    principal: string;
    interest: string;
    balance: string;
  };
};

export type PercentageCalcLabels = {
  modes: {
    percentOf: string;
    ratio: string;
    adjust: string;
  };
  xLabel: string;
  yLabel: string;
  percentageLabel: string;
  operationLabel: string;
  add: string;
  subtract: string;
  calculate: string;
  clear: string;
  invalidInput: string;
  result: string;
  explanation: string;
  empty: string;
  explanations: {
    percentOf: string;
    ratio: string;
    add: string;
    subtract: string;
  };
};

export type RentIncreaseCalculatorLabels = {
  currentRent: string;
  increaseRate: string;
  increaseCount: string;
  calculate: string;
  clear: string;
  invalidInput: string;
  newRent: string;
  totalIncrease: string;
  empty: string;
  tableTitle: string;
  tableColumns: {
    period: string;
    previousRent: string;
    increase: string;
    newRent: string;
  };
};

export type CalculatorEntry = {
  slug: CalculatorSlug;
  routeSlug: string;
  icon: string;
  name: string;
  shortDescription: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  accentLabel: string;
  highlights: string[];
  structuredDescription: string;
  content: ToolContentBlock;
  related: CalculatorSlug[];
};

export type CalculatorCategory = {
  slug: "calculators";
  title: string;
  eyebrow: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  highlights: string[];
};

type LocaleStrings = {
  category: CalculatorCategory;
  toolListDescription: string;
  categoryPath: string;
  prefix: string;
  routeSlugs: Record<CalculatorSlug, string>;
};

const localeRouteStrings: Record<Locale, LocaleStrings> = {
  tr: {
    category: {
      slug: "calculators",
      title: "Hesaplayıcılar",
      eyebrow: "Günlük hesap işleri",
      description: "Kredi, BMI, yaş, yüzde ve kira artışı hesaplarını tek yerde hızlıca çöz.",
      metaTitle: "Hesaplayıcılar | Toolyflow",
      metaDescription: "Kredi, BMI, yaş, yüzde ve kira artışı için ücretsiz online hesaplayıcıları keşfet.",
      keywords: ["hesaplayıcılar", "kredi hesaplayıcı", "bmi hesaplayıcı", "yaş hesaplayıcı", "yüzde hesaplayıcı", "kira artış hesaplayıcı"],
      highlights: [
        "Günlük finans, sağlık ve oran hesaplarını tek kategoride toplar.",
        "Hesap sonuçlarını anlaşılır kartlar ve net özetlerle gösterir.",
      ],
    },
    toolListDescription: "Günlük finans, sağlık ve oran hesaplarında en sık açılan araçları tek yerde bul.",
    categoryPath: "hesaplayicilar",
    prefix: "hesaplayici",
    routeSlugs: {
      "kredi-hesaplayici": "kredi-hesaplayici",
      "bmi-hesaplayici": "bmi-hesaplayici",
      "yas-hesaplayici": "yas-hesaplayici",
      "yuzde-hesaplayici": "yuzde-hesaplayici",
      "kira-artis-hesaplayici": "kira-artis-hesaplayici",
    },
  },
  en: {
    category: {
      slug: "calculators",
      title: "Calculators",
      eyebrow: "Everyday calculations",
      description: "Solve credit, BMI, age, percentage, and rent increase checks in one focused space.",
      metaTitle: "Calculators | Toolyflow",
      metaDescription: "Explore free online calculators for loans, BMI, age, percentages, and rent increases.",
      keywords: ["calculators", "credit calculator", "BMI calculator", "age calculator", "percentage calculator", "rent increase calculator"],
      highlights: [
        "Groups the most practical money, health, and ratio checks in one place.",
        "Shows clear summaries instead of making you decode raw math.",
      ],
    },
    toolListDescription: "Keep common money, age, and ratio checks in one clean calculator hub.",
    categoryPath: "calculators",
    prefix: "calculator",
    routeSlugs: {
      "kredi-hesaplayici": "credit-calculator",
      "bmi-hesaplayici": "bmi-calculator",
      "yas-hesaplayici": "age-calculator",
      "yuzde-hesaplayici": "percentage-calculator",
      "kira-artis-hesaplayici": "rent-increase-calculator",
    },
  },
  es: {
    category: {
      slug: "calculators",
      title: "Calculadoras",
      eyebrow: "Cálculos del día a día",
      description: "Resuelve cálculos de préstamo, IMC, edad, porcentaje y alquiler en un solo lugar.",
      metaTitle: "Calculadoras | Toolyflow",
      metaDescription: "Descubre calculadoras gratis para préstamos, IMC, edad, porcentajes y aumentos de alquiler.",
      keywords: ["calculadoras", "calculadora de crédito", "calculadora IMC", "calculadora de edad", "calculadora de porcentaje", "calculadora de alquiler"],
      highlights: [
        "Reúne los cálculos más útiles de dinero, salud y porcentajes.",
        "Entrega resultados claros sin obligarte a revisar fórmulas manualmente.",
      ],
    },
    toolListDescription: "Todo lo que sueles calcular a mano, ahora en una sola categoría.",
    categoryPath: "calculadoras",
    prefix: "calculadora",
    routeSlugs: {
      "kredi-hesaplayici": "calculadora-credito",
      "bmi-hesaplayici": "calculadora-imc",
      "yas-hesaplayici": "calculadora-edad",
      "yuzde-hesaplayici": "calculadora-porcentaje",
      "kira-artis-hesaplayici": "calculadora-aumento-alquiler",
    },
  },
  de: {
    category: {
      slug: "calculators",
      title: "Rechner",
      eyebrow: "Alltagsrechner",
      description: "Prüfe Kredit, BMI, Alter, Prozentwerte und Mietanpassungen auf einer Seite.",
      metaTitle: "Rechner | Toolyflow",
      metaDescription: "Kostenlose Online-Rechner für Kredit, BMI, Alter, Prozentwerte und Mieterhöhungen.",
      keywords: ["rechner", "kreditrechner", "BMI-Rechner", "altersrechner", "prozentrechner", "mieterhöhungsrechner"],
      highlights: [
        "Bündelt praktische Finanz-, Gesundheits- und Prozentrechner.",
        "Zeigt Ergebnisse verständlich statt nur rohe Zahlen auszugeben.",
      ],
    },
    toolListDescription: "Halte die wichtigsten Alltagsrechner in einer klaren Kategorie zusammen.",
    categoryPath: "rechner",
    prefix: "rechner",
    routeSlugs: {
      "kredi-hesaplayici": "kreditrechner",
      "bmi-hesaplayici": "bmi-rechner",
      "yas-hesaplayici": "altersrechner",
      "yuzde-hesaplayici": "prozentrechner",
      "kira-artis-hesaplayici": "mieterhoehungsrechner",
    },
  },
  fr: {
    category: {
      slug: "calculators",
      title: "Calculateurs",
      eyebrow: "Calculs du quotidien",
      description: "Retrouve les calculs de crédit, IMC, âge, pourcentage et hausse de loyer au même endroit.",
      metaTitle: "Calculateurs | Toolyflow",
      metaDescription: "Explore des calculateurs gratuits pour le crédit, l’IMC, l’âge, les pourcentages et la hausse de loyer.",
      keywords: ["calculateurs", "calculateur de crédit", "calculateur IMC", "calculateur d’âge", "calculateur de pourcentage", "calculateur loyer"],
      highlights: [
        "Regroupe les calculs les plus utiles du quotidien dans une seule rubrique.",
        "Affiche des résultats lisibles sans surcharge inutile.",
      ],
    },
    toolListDescription: "Une catégorie simple pour les calculs que tu réouvres souvent.",
    categoryPath: "calculateurs",
    prefix: "calculatrice",
    routeSlugs: {
      "kredi-hesaplayici": "calculateur-credit",
      "bmi-hesaplayici": "calculateur-imc",
      "yas-hesaplayici": "calculateur-age",
      "yuzde-hesaplayici": "calculateur-pourcentage",
      "kira-artis-hesaplayici": "calculateur-augmentation-loyer",
    },
  },
  pt: {
    category: {
      slug: "calculators",
      title: "Calculadoras",
      eyebrow: "Cálculos do dia a dia",
      description: "Resolva crédito, IMC, idade, porcentagens e aumento de aluguel em um só lugar.",
      metaTitle: "Calculadoras | Toolyflow",
      metaDescription: "Explore calculadoras grátis para crédito, IMC, idade, porcentagens e aumento de aluguel.",
      keywords: ["calculadoras", "calculadora de crédito", "calculadora IMC", "calculadora de idade", "calculadora de porcentagem", "calculadora de aluguel"],
      highlights: [
        "Reúne cálculos práticos de finanças, saúde e porcentagem.",
        "Mostra o resultado com resumos claros e leitura rápida.",
      ],
    },
    toolListDescription: "Os cálculos mais úteis do dia a dia em uma única categoria.",
    categoryPath: "calculadoras",
    prefix: "calculadora",
    routeSlugs: {
      "kredi-hesaplayici": "calculadora-credito",
      "bmi-hesaplayici": "calculadora-imc",
      "yas-hesaplayici": "calculadora-idade",
      "yuzde-hesaplayici": "calculadora-percentagem",
      "kira-artis-hesaplayici": "calculadora-aumento-aluguel",
    },
  },
};

const ageLabels: Record<Locale, AgeCalculatorLabels> = {
  tr: {
    birthDate: "Doğum tarihi",
    calculate: "Hesapla",
    clear: "Temizle",
    invalidDate: "Lütfen geçerli bir doğum tarihi seç.",
    futureDate: "Doğum tarihi bugünden büyük olamaz.",
    exactAge: "Tam yaş",
    years: "yıl",
    months: "ay",
    days: "gün",
    empty: "Doğum tarihini seç. Tam yaşın ve detaylı sonuçlar burada görünecek.",
    livedDays: "Yaşanan gün",
    nextBirthdayDays: "Sonraki doğum gününe kalan gün",
  },
  en: {
    birthDate: "Birth date",
    calculate: "Calculate",
    clear: "Clear",
    invalidDate: "Choose a valid birth date.",
    futureDate: "Birth date cannot be in the future.",
    exactAge: "Exact age",
    years: "years",
    months: "months",
    days: "days",
    empty: "Pick a birth date. Your exact age and extra details will show here.",
    livedDays: "Days lived",
    nextBirthdayDays: "Days until next birthday",
  },
  es: {
    birthDate: "Fecha de nacimiento",
    calculate: "Calcular",
    clear: "Limpiar",
    invalidDate: "Elige una fecha de nacimiento válida.",
    futureDate: "La fecha de nacimiento no puede estar en el futuro.",
    exactAge: "Edad exacta",
    years: "años",
    months: "meses",
    days: "días",
    empty: "Elige una fecha de nacimiento. La edad exacta aparecerá aquí.",
    livedDays: "Días vividos",
    nextBirthdayDays: "Días hasta el próximo cumpleaños",
  },
  de: {
    birthDate: "Geburtsdatum",
    calculate: "Berechnen",
    clear: "Leeren",
    invalidDate: "Wähle ein gültiges Geburtsdatum.",
    futureDate: "Das Geburtsdatum darf nicht in der Zukunft liegen.",
    exactAge: "Genaues Alter",
    years: "Jahre",
    months: "Monate",
    days: "Tage",
    empty: "Wähle ein Geburtsdatum. Das genaue Alter erscheint hier.",
    livedDays: "Gelebte Tage",
    nextBirthdayDays: "Tage bis zum nächsten Geburtstag",
  },
  fr: {
    birthDate: "Date de naissance",
    calculate: "Calculer",
    clear: "Effacer",
    invalidDate: "Choisis une date de naissance valide.",
    futureDate: "La date de naissance ne peut pas être dans le futur.",
    exactAge: "Âge exact",
    years: "ans",
    months: "mois",
    days: "jours",
    empty: "Choisis une date de naissance. L’âge exact s’affichera ici.",
    livedDays: "Jours vécus",
    nextBirthdayDays: "Jours avant le prochain anniversaire",
  },
  pt: {
    birthDate: "Data de nascimento",
    calculate: "Calcular",
    clear: "Limpar",
    invalidDate: "Escolha uma data de nascimento válida.",
    futureDate: "A data de nascimento não pode estar no futuro.",
    exactAge: "Idade exata",
    years: "anos",
    months: "meses",
    days: "dias",
    empty: "Escolha a data de nascimento. A idade exata aparecerá aqui.",
    livedDays: "Dias vividos",
    nextBirthdayDays: "Dias até o próximo aniversário",
  },
};

const bmiLabels: Record<Locale, BmiCalculatorLabels> = {
  tr: {
    height: "Boy (cm)",
    weight: "Kilo (kg)",
    gender: "Cinsiyet (opsiyonel)",
    skipGender: "Seçmeden devam et",
    male: "Erkek",
    female: "Kadın",
    calculate: "Hesapla",
    clear: "Temizle",
    invalidInput: "Lütfen geçerli boy ve kilo gir.",
    resultTitle: "BMI değerin",
    empty: "Boy ve kilo bilgilerini gir. BMI değerin ve kısa yorum burada görünecek.",
    categories: {
      underweight: "Zayıf",
      normal: "Normal",
      overweight: "Fazla kilolu",
      obese: "Obez",
    },
    comments: {
      underweight: "BMI değerin düşük görünüyor. Dengeli beslenme ve uzman görüşü faydalı olabilir.",
      normal: "BMI değerin normal aralıkta. Mevcut düzenini koruyabilirsin.",
      overweight: "BMI değerin normal aralığın üzerinde. Yaşam tarzı düzenlemeleri faydalı olabilir.",
      obese: "BMI değerin yüksek aralıkta. Profesyonel destek değerlendirmek iyi bir adım olabilir.",
      maleSuffix: " Erkek kullanıcılar için yağ oranı ve aktivite düzeyi de değerlendirilmelidir.",
      femaleSuffix: " Kadın kullanıcılar için bel çevresi ve yağ oranı da değerlendirilmelidir.",
    },
  },
  en: {
    height: "Height (cm)",
    weight: "Weight (kg)",
    gender: "Gender (optional)",
    skipGender: "Continue without selecting",
    male: "Male",
    female: "Female",
    calculate: "Calculate",
    clear: "Clear",
    invalidInput: "Enter a valid height and weight.",
    resultTitle: "Your BMI",
    empty: "Enter height and weight. Your BMI and a short reading will appear here.",
    categories: {
      underweight: "Underweight",
      normal: "Normal",
      overweight: "Overweight",
      obese: "Obese",
    },
    comments: {
      underweight: "Your BMI looks low. A balanced plan and professional advice could help.",
      normal: "Your BMI sits in the normal range. Keep the routine that is working for you.",
      overweight: "Your BMI is above the normal range. A few lifestyle adjustments may help.",
      obese: "Your BMI is in a higher range. It may be worth checking in with a professional.",
      maleSuffix: " For men, body fat rate and activity level also matter.",
      femaleSuffix: " For women, waist measurement and body fat rate also matter.",
    },
  },
  es: {
    height: "Altura (cm)",
    weight: "Peso (kg)",
    gender: "Género (opcional)",
    skipGender: "Continuar sin elegir",
    male: "Hombre",
    female: "Mujer",
    calculate: "Calcular",
    clear: "Limpiar",
    invalidInput: "Ingresa una altura y un peso válidos.",
    resultTitle: "Tu IMC",
    empty: "Ingresa altura y peso. El resultado del IMC aparecerá aquí.",
    categories: {
      underweight: "Bajo peso",
      normal: "Normal",
      overweight: "Sobrepeso",
      obese: "Obesidad",
    },
    comments: {
      underweight: "El IMC se ve bajo. Una alimentación equilibrada y apoyo profesional pueden ayudar.",
      normal: "El IMC está en un rango normal. Mantén la rutina que ya te funciona.",
      overweight: "El IMC está por encima del rango normal. Algunos ajustes pueden ayudar.",
      obese: "El IMC está en un rango alto. Puede valer la pena consultar a un profesional.",
      maleSuffix: " En hombres también conviene revisar grasa corporal y actividad física.",
      femaleSuffix: " En mujeres también conviene revisar cintura y grasa corporal.",
    },
  },
  de: {
    height: "Größe (cm)",
    weight: "Gewicht (kg)",
    gender: "Geschlecht (optional)",
    skipGender: "Ohne Auswahl fortfahren",
    male: "Männlich",
    female: "Weiblich",
    calculate: "Berechnen",
    clear: "Leeren",
    invalidInput: "Gib eine gültige Größe und ein gültiges Gewicht ein.",
    resultTitle: "Dein BMI",
    empty: "Größe und Gewicht eingeben. Dein BMI erscheint hier.",
    categories: {
      underweight: "Untergewicht",
      normal: "Normal",
      overweight: "Übergewicht",
      obese: "Adipositas",
    },
    comments: {
      underweight: "Der BMI wirkt niedrig. Eine ausgewogene Ernährung und fachlicher Rat könnten helfen.",
      normal: "Der BMI liegt im Normalbereich. Behalte deine Routine bei.",
      overweight: "Der BMI liegt über dem Normalbereich. Kleine Anpassungen können helfen.",
      obese: "Der BMI liegt in einem höheren Bereich. Fachliche Unterstützung kann sinnvoll sein.",
      maleSuffix: " Bei Männern sollten auch Körperfett und Aktivitätsniveau berücksichtigt werden.",
      femaleSuffix: " Bei Frauen sollten auch Taillenumfang und Körperfett beachtet werden.",
    },
  },
  fr: {
    height: "Taille (cm)",
    weight: "Poids (kg)",
    gender: "Genre (optionnel)",
    skipGender: "Continuer sans choisir",
    male: "Homme",
    female: "Femme",
    calculate: "Calculer",
    clear: "Effacer",
    invalidInput: "Entre une taille et un poids valides.",
    resultTitle: "Ton IMC",
    empty: "Entre ta taille et ton poids. Le résultat IMC apparaîtra ici.",
    categories: {
      underweight: "Insuffisance pondérale",
      normal: "Normal",
      overweight: "Surpoids",
      obese: "Obésité",
    },
    comments: {
      underweight: "L’IMC semble bas. Une alimentation équilibrée et un avis pro peuvent aider.",
      normal: "L’IMC est dans la zone normale. Garde la routine qui te convient.",
      overweight: "L’IMC est au-dessus de la zone normale. Quelques ajustements peuvent aider.",
      obese: "L’IMC est dans une zone élevée. Un accompagnement professionnel peut être utile.",
      maleSuffix: " Chez les hommes, le taux de masse grasse et l’activité comptent aussi.",
      femaleSuffix: " Chez les femmes, le tour de taille et la masse grasse comptent aussi.",
    },
  },
  pt: {
    height: "Altura (cm)",
    weight: "Peso (kg)",
    gender: "Género (opcional)",
    skipGender: "Continuar sem selecionar",
    male: "Homem",
    female: "Mulher",
    calculate: "Calcular",
    clear: "Limpar",
    invalidInput: "Digite altura e peso válidos.",
    resultTitle: "Seu IMC",
    empty: "Digite altura e peso. O resultado do IMC aparece aqui.",
    categories: {
      underweight: "Abaixo do peso",
      normal: "Normal",
      overweight: "Sobrepeso",
      obese: "Obesidade",
    },
    comments: {
      underweight: "O IMC parece baixo. Uma rotina equilibrada e apoio profissional podem ajudar.",
      normal: "O IMC está na faixa normal. Mantenha a rotina que está funcionando.",
      overweight: "O IMC está acima da faixa normal. Alguns ajustes podem ajudar.",
      obese: "O IMC está em uma faixa mais alta. Apoio profissional pode ser útil.",
      maleSuffix: " Para homens, gordura corporal e nível de atividade também importam.",
      femaleSuffix: " Para mulheres, cintura e gordura corporal também importam.",
    },
  },
};

const creditLabels: Record<Locale, CreditCalculatorLabels> = {
  tr: {
    amount: "Kredi tutarı (TL)",
    rate: "Faiz oranı (aylık %)",
    term: "Vade (ay)",
    calculate: "Hesapla",
    clear: "Temizle",
    invalidInput: "Lütfen geçerli kredi tutarı, faiz oranı ve vade gir.",
    monthlyPayment: "Aylık taksit",
    totalRepayment: "Toplam geri ödeme",
    totalInterest: "Toplam faiz",
    empty: "Kredi tutarı, faiz oranı ve vadeyi gir. Aylık taksit ve toplam ödeme burada görünecek.",
    scheduleTitle: "Ödeme tablosu",
    scheduleColumns: {
      month: "Ay",
      installment: "Taksit",
      principal: "Anapara",
      interest: "Faiz",
      balance: "Kalan borç",
    },
  },
  en: {
    amount: "Loan amount",
    rate: "Interest rate (monthly %)",
    term: "Term (months)",
    calculate: "Calculate",
    clear: "Clear",
    invalidInput: "Enter a valid loan amount, interest rate, and term.",
    monthlyPayment: "Monthly payment",
    totalRepayment: "Total repayment",
    totalInterest: "Total interest",
    empty: "Enter amount, rate, and term. The monthly payment will appear here.",
    scheduleTitle: "Payment schedule",
    scheduleColumns: {
      month: "Month",
      installment: "Payment",
      principal: "Principal",
      interest: "Interest",
      balance: "Balance",
    },
  },
  es: {
    amount: "Monto del crédito",
    rate: "Interés mensual (%)",
    term: "Plazo (meses)",
    calculate: "Calcular",
    clear: "Limpiar",
    invalidInput: "Ingresa un monto, interés y plazo válidos.",
    monthlyPayment: "Cuota mensual",
    totalRepayment: "Pago total",
    totalInterest: "Interés total",
    empty: "Ingresa monto, interés y plazo. La cuota aparecerá aquí.",
    scheduleTitle: "Tabla de pagos",
    scheduleColumns: {
      month: "Mes",
      installment: "Cuota",
      principal: "Capital",
      interest: "Interés",
      balance: "Saldo",
    },
  },
  de: {
    amount: "Kreditbetrag",
    rate: "Zinssatz (monatlich %)",
    term: "Laufzeit (Monate)",
    calculate: "Berechnen",
    clear: "Leeren",
    invalidInput: "Gib einen gültigen Kreditbetrag, Zinssatz und eine Laufzeit ein.",
    monthlyPayment: "Monatliche Rate",
    totalRepayment: "Gesamtrückzahlung",
    totalInterest: "Gesamtzins",
    empty: "Betrag, Zins und Laufzeit eingeben. Die Monatsrate erscheint hier.",
    scheduleTitle: "Tilgungsplan",
    scheduleColumns: {
      month: "Monat",
      installment: "Rate",
      principal: "Tilgung",
      interest: "Zinsen",
      balance: "Restschuld",
    },
  },
  fr: {
    amount: "Montant du crédit",
    rate: "Taux mensuel (%)",
    term: "Durée (mois)",
    calculate: "Calculer",
    clear: "Effacer",
    invalidInput: "Entre un montant, un taux et une durée valides.",
    monthlyPayment: "Mensualité",
    totalRepayment: "Remboursement total",
    totalInterest: "Intérêts totaux",
    empty: "Entre montant, taux et durée. La mensualité s’affichera ici.",
    scheduleTitle: "Tableau de remboursement",
    scheduleColumns: {
      month: "Mois",
      installment: "Mensualité",
      principal: "Capital",
      interest: "Intérêts",
      balance: "Solde restant",
    },
  },
  pt: {
    amount: "Valor do crédito",
    rate: "Taxa mensal (%)",
    term: "Prazo (meses)",
    calculate: "Calcular",
    clear: "Limpar",
    invalidInput: "Digite valor, taxa e prazo válidos.",
    monthlyPayment: "Parcela mensal",
    totalRepayment: "Pagamento total",
    totalInterest: "Juros totais",
    empty: "Digite valor, taxa e prazo. A parcela aparecerá aqui.",
    scheduleTitle: "Tabela de pagamento",
    scheduleColumns: {
      month: "Mês",
      installment: "Parcela",
      principal: "Principal",
      interest: "Juros",
      balance: "Saldo",
    },
  },
};

const percentageLabels: Record<Locale, PercentageCalcLabels> = {
  tr: {
    modes: { percentOf: "Bir sayının yüzdesi", ratio: "Yüzde oranı", adjust: "Yüzde ekle / çıkar" },
    xLabel: "X değeri",
    yLabel: "Y değeri",
    percentageLabel: "Yüzde",
    operationLabel: "İşlem yönü",
    add: "Ekle",
    subtract: "Çıkar",
    calculate: "Hesapla",
    clear: "Temizle",
    invalidInput: "Lütfen geçerli sayılar gir.",
    result: "Sonuç",
    explanation: "Açıklama",
    empty: "İki değeri gir ve hangi yüzde işlemini yapmak istediğini seç.",
    explanations: {
      percentOf: "{x} sayısının %{y} değeri {value} eder.",
      ratio: "{x}, {y} sayısının %{value} kadarıdır.",
      add: "{x} değerine %{y} eklendiğinde sonuç {value} olur.",
      subtract: "{x} değerinden %{y} çıkarıldığında sonuç {value} olur.",
    },
  },
  en: {
    modes: { percentOf: "Percent of a number", ratio: "Percentage ratio", adjust: "Add / subtract percentage" },
    xLabel: "Base value",
    yLabel: "Comparison value",
    percentageLabel: "Percentage",
    operationLabel: "Operation",
    add: "Add",
    subtract: "Subtract",
    calculate: "Calculate",
    clear: "Clear",
    invalidInput: "Enter valid numbers.",
    result: "Result",
    explanation: "Explanation",
    empty: "Enter two values and choose the percentage operation you need.",
    explanations: {
      percentOf: "{y}% of {x} is {value}.",
      ratio: "{x} is {value}% of {y}.",
      add: "Adding {y}% to {x} gives {value}.",
      subtract: "Subtracting {y}% from {x} gives {value}.",
    },
  },
  es: {
    modes: { percentOf: "Porcentaje de un número", ratio: "Relación porcentual", adjust: "Sumar / restar porcentaje" },
    xLabel: "Valor base",
    yLabel: "Valor de comparación",
    percentageLabel: "Porcentaje",
    operationLabel: "Operación",
    add: "Sumar",
    subtract: "Restar",
    calculate: "Calcular",
    clear: "Limpiar",
    invalidInput: "Ingresa números válidos.",
    result: "Resultado",
    explanation: "Explicación",
    empty: "Ingresa dos valores y elige la operación porcentual.",
    explanations: {
      percentOf: "El {y}% de {x} es {value}.",
      ratio: "{x} representa el {value}% de {y}.",
      add: "Al sumar {y}% a {x}, el resultado es {value}.",
      subtract: "Al restar {y}% de {x}, el resultado es {value}.",
    },
  },
  de: {
    modes: { percentOf: "Prozent eines Werts", ratio: "Prozentanteil", adjust: "Prozent addieren / abziehen" },
    xLabel: "Ausgangswert",
    yLabel: "Vergleichswert",
    percentageLabel: "Prozentsatz",
    operationLabel: "Operation",
    add: "Addieren",
    subtract: "Abziehen",
    calculate: "Berechnen",
    clear: "Leeren",
    invalidInput: "Gib gültige Zahlen ein.",
    result: "Ergebnis",
    explanation: "Erklärung",
    empty: "Gib zwei Werte ein und wähle die gewünschte Prozentoperation.",
    explanations: {
      percentOf: "{y}% von {x} sind {value}.",
      ratio: "{x} entsprechen {value}% von {y}.",
      add: "Wenn man {y}% zu {x} addiert, ergibt sich {value}.",
      subtract: "Wenn man {y}% von {x} abzieht, ergibt sich {value}.",
    },
  },
  fr: {
    modes: { percentOf: "Pourcentage d’une valeur", ratio: "Part en pourcentage", adjust: "Ajouter / retirer un pourcentage" },
    xLabel: "Valeur de base",
    yLabel: "Valeur de comparaison",
    percentageLabel: "Pourcentage",
    operationLabel: "Opération",
    add: "Ajouter",
    subtract: "Retirer",
    calculate: "Calculer",
    clear: "Effacer",
    invalidInput: "Entre des nombres valides.",
    result: "Résultat",
    explanation: "Explication",
    empty: "Entre deux valeurs et choisis l’opération en pourcentage.",
    explanations: {
      percentOf: "{y}% de {x} donnent {value}.",
      ratio: "{x} représente {value}% de {y}.",
      add: "Ajouter {y}% à {x} donne {value}.",
      subtract: "Retirer {y}% de {x} donne {value}.",
    },
  },
  pt: {
    modes: { percentOf: "Percentual de um valor", ratio: "Relação percentual", adjust: "Somar / subtrair porcentagem" },
    xLabel: "Valor base",
    yLabel: "Valor de comparação",
    percentageLabel: "Percentual",
    operationLabel: "Operação",
    add: "Somar",
    subtract: "Subtrair",
    calculate: "Calcular",
    clear: "Limpar",
    invalidInput: "Digite números válidos.",
    result: "Resultado",
    explanation: "Explicação",
    empty: "Digite dois valores e escolha a operação percentual.",
    explanations: {
      percentOf: "{y}% de {x} é {value}.",
      ratio: "{x} representa {value}% de {y}.",
      add: "Somando {y}% a {x}, o resultado é {value}.",
      subtract: "Subtraindo {y}% de {x}, o resultado é {value}.",
    },
  },
};

const rentLabels: Record<Locale, RentIncreaseCalculatorLabels> = {
  tr: {
    currentRent: "Mevcut kira (TL)",
    increaseRate: "Artış oranı (%)",
    increaseCount: "Artış sayısı",
    calculate: "Hesapla",
    clear: "Temizle",
    invalidInput: "Lütfen geçerli kira, artış oranı ve artış sayısı gir.",
    newRent: "Yeni kira tutarı",
    totalIncrease: "Artış miktarı",
    empty: "Mevcut kira ve artış oranını gir. Yeni kira tutarı ve artış tablosu burada oluşacak.",
    tableTitle: "Artış tablosu",
    tableColumns: {
      period: "Dönem",
      previousRent: "Önceki kira",
      increase: "Artış",
      newRent: "Yeni kira",
    },
  },
  en: {
    currentRent: "Current rent",
    increaseRate: "Increase rate (%)",
    increaseCount: "Number of increases",
    calculate: "Calculate",
    clear: "Clear",
    invalidInput: "Enter a valid rent, increase rate, and increase count.",
    newRent: "New rent amount",
    totalIncrease: "Total increase",
    empty: "Enter the current rent and increase rate. The updated rent will appear here.",
    tableTitle: "Increase table",
    tableColumns: {
      period: "Period",
      previousRent: "Previous rent",
      increase: "Increase",
      newRent: "New rent",
    },
  },
  es: {
    currentRent: "Alquiler actual",
    increaseRate: "Tasa de aumento (%)",
    increaseCount: "Cantidad de aumentos",
    calculate: "Calcular",
    clear: "Limpiar",
    invalidInput: "Ingresa un alquiler, una tasa y una cantidad válidos.",
    newRent: "Nuevo alquiler",
    totalIncrease: "Aumento total",
    empty: "Ingresa el alquiler actual y la tasa. El nuevo valor aparecerá aquí.",
    tableTitle: "Tabla de aumento",
    tableColumns: {
      period: "Periodo",
      previousRent: "Alquiler anterior",
      increase: "Aumento",
      newRent: "Nuevo alquiler",
    },
  },
  de: {
    currentRent: "Aktuelle Miete",
    increaseRate: "Erhöhungsrate (%)",
    increaseCount: "Anzahl der Erhöhungen",
    calculate: "Berechnen",
    clear: "Leeren",
    invalidInput: "Gib eine gültige Miete, Rate und Anzahl ein.",
    newRent: "Neue Miete",
    totalIncrease: "Gesamterhöhung",
    empty: "Aktuelle Miete und Rate eingeben. Die neue Miete erscheint hier.",
    tableTitle: "Erhöhungstabelle",
    tableColumns: {
      period: "Periode",
      previousRent: "Vorherige Miete",
      increase: "Erhöhung",
      newRent: "Neue Miete",
    },
  },
  fr: {
    currentRent: "Loyer actuel",
    increaseRate: "Taux d’augmentation (%)",
    increaseCount: "Nombre d’augmentations",
    calculate: "Calculer",
    clear: "Effacer",
    invalidInput: "Entre un loyer, un taux et un nombre valides.",
    newRent: "Nouveau loyer",
    totalIncrease: "Hausse totale",
    empty: "Entre le loyer actuel et le taux. Le nouveau montant apparaîtra ici.",
    tableTitle: "Tableau d’augmentation",
    tableColumns: {
      period: "Période",
      previousRent: "Loyer précédent",
      increase: "Hausse",
      newRent: "Nouveau loyer",
    },
  },
  pt: {
    currentRent: "Aluguel atual",
    increaseRate: "Taxa de aumento (%)",
    increaseCount: "Número de aumentos",
    calculate: "Calcular",
    clear: "Limpar",
    invalidInput: "Digite aluguel, taxa e quantidade válidos.",
    newRent: "Novo aluguel",
    totalIncrease: "Aumento total",
    empty: "Digite o aluguel atual e a taxa. O novo valor aparece aqui.",
    tableTitle: "Tabela de aumento",
    tableColumns: {
      period: "Período",
      previousRent: "Aluguel anterior",
      increase: "Aumento",
      newRent: "Novo aluguel",
    },
  },
};

function buildContent(
  locale: Locale,
  values: {
    howToTitle: string;
    howToDescription: string;
    steps: ReadonlyArray<{ title: string; body: string }>;
    useCasesTitle: string;
    useCasesDescription: string;
    useCases: ReadonlyArray<{ title: string; description: string }>;
    exampleTitle: string;
    exampleInput: string;
    exampleOutput: string;
    exampleNote: string;
    faqTitle: string;
    faqs: ReadonlyArray<{ question: string; answer: string }>;
  }
): ToolContentBlock {
  const inputLabelByLocale: Record<Locale, string> = {
    tr: "Kurulum",
    en: "Setup",
    es: "Configuración",
    de: "Setup",
    fr: "Configuration",
    pt: "Configuração",
  };
  const outputLabelByLocale: Record<Locale, string> = {
    tr: "Çıktı",
    en: "Output",
    es: "Resultado",
    de: "Ausgabe",
    fr: "Résultat",
    pt: "Resultado",
  };

  return {
    howToUseTitle: values.howToTitle,
    howToUseDescription: values.howToDescription,
    howToUseSteps: [...values.steps],
    useCasesTitle: values.useCasesTitle,
    useCasesDescription: values.useCasesDescription,
    useCases: [...values.useCases],
    examplesTitle: values.exampleTitle,
    examplesDescription: values.exampleNote,
    examples: [
      {
        title: values.exampleTitle,
        inputLabel: inputLabelByLocale[locale],
        input: values.exampleInput,
        outputLabel: outputLabelByLocale[locale],
        output: values.exampleOutput,
        note: values.exampleNote,
      },
    ],
    faqTitle: values.faqTitle,
    faqs: [...values.faqs],
  };
}

function creditContent(locale: Locale): ToolContentBlock {
  const byLocale = {
    tr: {
      howToTitle: "Kredi hesaplayıcı nasıl kullanılır?",
      howToDescription: "Tutarı, aylık faizi ve vadeyi gir. Aylık taksit ve toplam geri ödeme anında oluşur.",
      steps: [
        { title: "Tutarı gir", body: "Çekmeyi düşündüğün kredi tutarını yaz." },
        { title: "Faiz ve vadeyi ekle", body: "Aylık faiz oranı ile vade süresini ay olarak gir." },
        { title: "Özet tabloyu oku", body: "Aylık taksit, toplam geri ödeme ve ödeme planını birlikte incele." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Teklif kıyaslarken veya aylık taksit yükünü görmek istediğinde en çok işine yarar.",
      useCases: [
        { title: "Banka tekliflerini karşılaştır", description: "Aynı tutar için farklı faiz ve vade kombinasyonlarını kıyasla." },
        { title: "Aylık bütçeyi kontrol et", description: "Taksidin aylık giderlerine uyup uymadığını hızlıca gör." },
        { title: "Toplam maliyeti aç", description: "Sadece taksite değil, toplam faize de bak." },
      ],
      exampleTitle: "24 aylık kredi senaryosu",
      exampleInput: "Kredi tutarı: 250.000\nFaiz: %3,19\nVade: 24 ay",
      exampleOutput: "Aylık taksit, toplam geri ödeme ve ödeme planı oluşur.",
      exampleNote: "Teklif kıyaslarken ilk bakışta faydalıdır.",
      faqTitle: "Kredi hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Aylık taksit nasıl bulunur?", answer: "Eşit taksit formülü; anapara, faiz ve vade birlikte hesaplanır." },
        { question: "Faiz 0 olursa ne olur?", answer: "Tutar doğrudan vade sayısına bölünür ve toplam faiz 0 görünür." },
        { question: "Bu sonuç resmi teklif yerine geçer mi?", answer: "Hayır. Bankanın resmi planı ve masrafları ayrıca kontrol etmelisin." },
      ],
    },
    en: {
      howToTitle: "How to use the credit calculator",
      howToDescription: "Enter the amount, monthly rate, and term. The monthly payment and full repayment summary appear instantly.",
      steps: [
        { title: "Enter the amount", body: "Use the full loan amount you want to test." },
        { title: "Add rate and term", body: "Enter the monthly interest rate and the term in months." },
        { title: "Read the breakdown", body: "Check the monthly payment, total repayment, and schedule together." },
      ],
      useCasesTitle: "Best use cases",
      useCasesDescription: "Useful when you are comparing offers or checking whether a monthly payment fits your budget.",
      useCases: [
        { title: "Compare loan offers", description: "Try the same amount with different rates and terms." },
        { title: "Check monthly affordability", description: "See whether the payment feels realistic before applying." },
        { title: "Inspect the real cost", description: "Open the total repayment instead of stopping at the monthly number." },
      ],
      exampleTitle: "24-month loan example",
      exampleInput: "Loan amount: 250,000\nInterest: 3.19%\nTerm: 24 months",
      exampleOutput: "Monthly payment, total repayment, and payment schedule appear together.",
      exampleNote: "A strong first pass when you are comparing offers.",
      faqTitle: "Credit calculator FAQ",
      faqs: [
        { question: "How is the monthly payment calculated?", answer: "The tool uses the standard amortized payment formula with principal, monthly rate, and term." },
        { question: "What if the rate is zero?", answer: "The amount is divided by the number of months and total interest becomes zero." },
        { question: "Does this replace a bank quote?", answer: "No. Use it for planning, then verify the bank’s official numbers and fees." },
      ],
    },
    es: {
      howToTitle: "Cómo usar la calculadora de crédito",
      howToDescription: "Introduce monto, interés mensual y plazo. La cuota mensual aparece al instante.",
      steps: [
        { title: "Escribe el monto", body: "Usa el valor total del crédito que quieres probar." },
        { title: "Añade interés y plazo", body: "Introduce la tasa mensual y el plazo en meses." },
        { title: "Revisa el desglose", body: "Consulta cuota, pago total y tabla en la misma pantalla." },
      ],
      useCasesTitle: "Mejores usos",
      useCasesDescription: "Sirve para comparar ofertas o ver si una cuota entra en tu presupuesto.",
      useCases: [
        { title: "Comparar ofertas", description: "Prueba diferentes tasas con el mismo monto." },
        { title: "Ver la cuota real", description: "Comprueba si el pago mensual te cuadra antes de avanzar." },
        { title: "Abrir el coste total", description: "Mira el pago total y no solo la cuota." },
      ],
      exampleTitle: "Escenario de 24 meses",
      exampleInput: "Monto: 250.000\nInterés: 3,19%\nPlazo: 24 meses",
      exampleOutput: "Aparecen cuota mensual, pago total y tabla de pagos.",
      exampleNote: "Muy útil para una comparación rápida.",
      faqTitle: "Preguntas frecuentes",
      faqs: [
        { question: "¿Cómo se calcula la cuota?", answer: "Se usa la fórmula estándar con capital, interés mensual y plazo." },
        { question: "¿Qué pasa si el interés es cero?", answer: "El monto se divide por los meses y el interés total queda en cero." },
        { question: "¿Sirve como oferta oficial?", answer: "No. Úsala como referencia y luego confirma con el banco." },
      ],
    },
    de: {
      howToTitle: "So nutzt du den Kreditrechner",
      howToDescription: "Betrag, Monatszins und Laufzeit eingeben. Rate und Gesamtrückzahlung werden sofort berechnet.",
      steps: [
        { title: "Betrag eintragen", body: "Nutze den Kreditbetrag, den du testen möchtest." },
        { title: "Zins und Laufzeit ergänzen", body: "Gib Monatszins und Laufzeit in Monaten ein." },
        { title: "Ergebnis lesen", body: "Prüfe Monatsrate, Gesamtrückzahlung und Tilgungsplan zusammen." },
      ],
      useCasesTitle: "Beste Einsatzfälle",
      useCasesDescription: "Hilfreich beim Vergleich von Angeboten oder bei der Frage, ob eine Rate ins Budget passt.",
      useCases: [
        { title: "Angebote vergleichen", description: "Teste denselben Betrag mit mehreren Zinssätzen." },
        { title: "Monatsrate prüfen", description: "Sieh schnell, ob die Rate für dich realistisch ist." },
        { title: "Gesamtkosten öffnen", description: "Bewerte die volle Rückzahlung statt nur die Monatsrate." },
      ],
      exampleTitle: "24-Monate-Beispiel",
      exampleInput: "Kreditbetrag: 250.000\nZins: 3,19%\nLaufzeit: 24 Monate",
      exampleOutput: "Monatsrate, Gesamtrückzahlung und Tilgungsplan erscheinen zusammen.",
      exampleNote: "Praktisch für einen schnellen Angebotsvergleich.",
      faqTitle: "Kreditrechner FAQ",
      faqs: [
        { question: "Wie wird die Monatsrate berechnet?", answer: "Mit der Standardformel auf Basis von Betrag, Monatszins und Laufzeit." },
        { question: "Was passiert bei 0% Zins?", answer: "Der Betrag wird gleichmäßig auf die Laufzeit verteilt." },
        { question: "Ersetzt das ein offizielles Angebot?", answer: "Nein. Prüfe die finalen Zahlen immer direkt bei der Bank." },
      ],
    },
    fr: {
      howToTitle: "Comment utiliser le calculateur de crédit",
      howToDescription: "Saisis le montant, le taux mensuel et la durée. La mensualité est calculée tout de suite.",
      steps: [
        { title: "Entre le montant", body: "Utilise le montant total du crédit que tu veux tester." },
        { title: "Ajoute taux et durée", body: "Renseigne le taux mensuel et la durée en mois." },
        { title: "Lis le détail", body: "Mensualité, remboursement total et tableau apparaissent ensemble." },
      ],
      useCasesTitle: "Cas d’usage",
      useCasesDescription: "Très utile pour comparer des offres ou vérifier si une mensualité reste supportable.",
      useCases: [
        { title: "Comparer des offres", description: "Teste plusieurs taux avec le même montant." },
        { title: "Vérifier la mensualité", description: "Vois rapidement si la charge mensuelle reste réaliste." },
        { title: "Voir le coût total", description: "Ne t’arrête pas à la mensualité, regarde aussi le total." },
      ],
      exampleTitle: "Exemple sur 24 mois",
      exampleInput: "Montant: 250 000\nTaux: 3,19%\nDurée: 24 mois",
      exampleOutput: "Mensualité, remboursement total et tableau de paiement s’affichent ensemble.",
      exampleNote: "Utile pour une première comparaison.",
      faqTitle: "FAQ calculateur de crédit",
      faqs: [
        { question: "Comment la mensualité est-elle calculée ?", answer: "Avec la formule standard basée sur le capital, le taux mensuel et la durée." },
        { question: "Que se passe-t-il si le taux est à 0 % ?", answer: "Le montant est réparti directement sur le nombre de mois." },
        { question: "Est-ce une offre officielle ?", answer: "Non. C’est un outil d’estimation, pas un devis bancaire officiel." },
      ],
    },
    pt: {
      howToTitle: "Como usar a calculadora de crédito",
      howToDescription: "Digite valor, taxa mensal e prazo. A parcela mensal aparece na hora.",
      steps: [
        { title: "Informe o valor", body: "Use o valor total do crédito que você quer testar." },
        { title: "Adicione taxa e prazo", body: "Digite a taxa mensal e o prazo em meses." },
        { title: "Leia o resumo", body: "Parcela, pagamento total e tabela aparecem juntos." },
      ],
      useCasesTitle: "Melhores usos",
      useCasesDescription: "Ótima para comparar ofertas ou ver se a parcela cabe no orçamento.",
      useCases: [
        { title: "Comparar ofertas", description: "Teste o mesmo valor com taxas diferentes." },
        { title: "Checar a parcela", description: "Veja rápido se o valor mensal parece viável." },
        { title: "Abrir o custo total", description: "Confira o total pago e não só a parcela." },
      ],
      exampleTitle: "Cenário de 24 meses",
      exampleInput: "Valor: 250.000\nTaxa: 3,19%\nPrazo: 24 meses",
      exampleOutput: "Parcela mensal, total pago e tabela aparecem juntos.",
      exampleNote: "Bom para uma comparação rápida.",
      faqTitle: "FAQ da calculadora de crédito",
      faqs: [
        { question: "Como a parcela é calculada?", answer: "Com a fórmula padrão baseada em principal, taxa mensal e prazo." },
        { question: "O que acontece se a taxa for zero?", answer: "O valor é dividido pelo número de meses e os juros ficam em zero." },
        { question: "Isso substitui a proposta do banco?", answer: "Não. Use como base e confirme os números finais com o banco." },
      ],
    },
  } as const;

  return buildContent(locale, byLocale[locale]);
}

function bmiContent(locale: Locale): ToolContentBlock {
  const byLocale = {
    tr: {
      howToTitle: "BMI hesaplayıcı nasıl kullanılır?",
      howToDescription: "Boy ve kilonu gir. İstersen cinsiyet seç ve sonucu tek ekranda gör.",
      steps: [
        { title: "Boyu ve kiloyu gir", body: "Boyunu santimetre, kilonu kilogram olarak yaz." },
        { title: "İstersen cinsiyet ekle", body: "Bu alan yorumu kişiselleştirir ama hesabı değiştirmez." },
        { title: "Sonucu oku", body: "BMI değeri, kategori ve kısa yorum birlikte görünür." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Genel bir referans aradığında veya düzenli takibini tek sayıda görmek istediğinde işine yarar.",
      useCases: [
        { title: "Kişisel takip", description: "Boy-kilo dengesini düzenli aralıklarla kontrol et." },
        { title: "Diyet ve spor başlangıcı", description: "Yeni bir sürece başlarken kaba bir referans değer al." },
        { title: "Hızlı ön değerlendirme", description: "Tek bakışta hangi aralıkta olduğunu gör." },
      ],
      exampleTitle: "Günlük BMI kontrolü",
      exampleInput: "Boy: 175 cm\nKilo: 70 kg",
      exampleOutput: "BMI değeri, kategori etiketi ve kısa yorum oluşur.",
      exampleNote: "Detaylı sağlık analizi yerine hızlı bir ilk bakış sağlar.",
      faqTitle: "BMI hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "BMI neyi gösterir?", answer: "Boy ve kilo ilişkisini tek sayıda özetler." },
        { question: "Tek başına yeterli mi?", answer: "Hayır. Sağlık değerlendirmesi için ek ölçümler de önemlidir." },
        { question: "Cinsiyet sonucu değiştirir mi?", answer: "Hayır. Bu sürümde yalnızca yorum metnini etkiler." },
      ],
    },
    en: {
      howToTitle: "How to use the BMI calculator",
      howToDescription: "Enter height and weight, add gender if you want, and read the result in one view.",
      steps: [
        { title: "Enter height and weight", body: "Use centimeters for height and kilograms for weight." },
        { title: "Add gender if needed", body: "It personalizes the comment, but it does not change the BMI math." },
        { title: "Read the result", body: "The value, range, and short comment appear together." },
      ],
      useCasesTitle: "Best use cases",
      useCasesDescription: "Helpful for a quick reference number or for tracking how weight changes affect your BMI over time.",
      useCases: [
        { title: "Personal check-ins", description: "Keep a fast reference point as your weight changes." },
        { title: "Starting a routine", description: "Use it as a rough benchmark before a diet or training plan." },
        { title: "Quick overview", description: "See your current range without opening a heavier health app." },
      ],
      exampleTitle: "Quick BMI check",
      exampleInput: "Height: 175 cm\nWeight: 70 kg",
      exampleOutput: "The BMI value, range label, and short comment appear.",
      exampleNote: "Best used as a quick first pass, not a diagnosis.",
      faqTitle: "BMI calculator FAQ",
      faqs: [
        { question: "What does BMI show?", answer: "It summarizes the relationship between your height and weight in a single value." },
        { question: "Is BMI enough on its own?", answer: "No. It is a helpful screen, but not a full health evaluation." },
        { question: "Does gender change the number?", answer: "No. In this version it only adjusts the extra comment." },
      ],
    },
    es: {
      howToTitle: "Cómo usar la calculadora IMC",
      howToDescription: "Ingresa altura y peso. Si quieres, añade género y lee el resultado en la misma pantalla.",
      steps: [
        { title: "Escribe altura y peso", body: "Usa centímetros para la altura y kilos para el peso." },
        { title: "Añade género si quieres", body: "Solo personaliza el comentario, no cambia el cálculo." },
        { title: "Lee el resultado", body: "Valor, rango y comentario aparecen juntos." },
      ],
      useCasesTitle: "Mejores usos",
      useCasesDescription: "Sirve como referencia rápida o para seguir cambios generales en el tiempo.",
      useCases: [
        { title: "Seguimiento personal", description: "Mantén un punto de referencia simple." },
        { title: "Inicio de dieta o ejercicio", description: "Úsalo como guía rápida al empezar una rutina." },
        { title: "Resumen rápido", description: "Ve en qué rango estás sin abrir otra app." },
      ],
      exampleTitle: "Chequeo rápido de IMC",
      exampleInput: "Altura: 175 cm\nPeso: 70 kg",
      exampleOutput: "Aparecen el valor IMC, la categoría y un comentario corto.",
      exampleNote: "Es una referencia rápida, no un diagnóstico.",
      faqTitle: "Preguntas frecuentes sobre IMC",
      faqs: [
        { question: "¿Qué muestra el IMC?", answer: "Resume la relación entre altura y peso en un valor." },
        { question: "¿Basta por sí solo?", answer: "No. Ayuda como referencia, pero no sustituye una evaluación completa." },
        { question: "¿El género cambia el número?", answer: "No. En esta versión solo ajusta el comentario." },
      ],
    },
    de: {
      howToTitle: "So nutzt du den BMI-Rechner",
      howToDescription: "Größe und Gewicht eingeben, optional Geschlecht wählen und das Ergebnis sofort lesen.",
      steps: [
        { title: "Größe und Gewicht eingeben", body: "Nutze Zentimeter und Kilogramm." },
        { title: "Geschlecht optional ergänzen", body: "Das personalisiert nur den Kommentar." },
        { title: "Ergebnis lesen", body: "BMI-Wert, Bereich und Hinweis erscheinen zusammen." },
      ],
      useCasesTitle: "Beste Einsatzfälle",
      useCasesDescription: "Praktisch als grober Referenzwert oder für einfache Verlaufskontrolle.",
      useCases: [
        { title: "Persönliche Kontrolle", description: "Halte einen schnellen Referenzwert fest." },
        { title: "Start einer Routine", description: "Nützlich als erster grober Ausgangspunkt." },
        { title: "Schneller Überblick", description: "Sieh deinen Bereich, ohne weitere Tools zu öffnen." },
      ],
      exampleTitle: "Schneller BMI-Check",
      exampleInput: "Größe: 175 cm\nGewicht: 70 kg",
      exampleOutput: "BMI-Wert, Kategorie und kurzer Hinweis erscheinen.",
      exampleNote: "Gut für einen schnellen ersten Überblick, nicht als Diagnose.",
      faqTitle: "BMI-Rechner FAQ",
      faqs: [
        { question: "Was zeigt der BMI?", answer: "Er fasst das Verhältnis von Größe und Gewicht in einer Zahl zusammen." },
        { question: "Reicht der BMI allein?", answer: "Nein. Er ist nur ein erster Richtwert." },
        { question: "Ändert Geschlecht das Ergebnis?", answer: "Nein. In dieser Version verändert es nur den Hinweistext." },
      ],
    },
    fr: {
      howToTitle: "Comment utiliser le calculateur IMC",
      howToDescription: "Entre taille et poids, ajoute le genre si tu veux, puis lis le résultat au même endroit.",
      steps: [
        { title: "Entre taille et poids", body: "Utilise les centimètres et les kilogrammes." },
        { title: "Ajoute le genre si besoin", body: "Cela personnalise seulement le commentaire." },
        { title: "Lis le résultat", body: "Valeur IMC, catégorie et commentaire s’affichent ensemble." },
      ],
      useCasesTitle: "Cas d’usage",
      useCasesDescription: "Utile pour un repère rapide ou pour suivre une évolution générale.",
      useCases: [
        { title: "Suivi personnel", description: "Garde un point de repère simple." },
        { title: "Début d’une routine", description: "Pratique comme base rapide avant un programme." },
        { title: "Vue rapide", description: "Vois ta zone actuelle sans ouvrir une autre appli." },
      ],
      exampleTitle: "Vérification rapide de l’IMC",
      exampleInput: "Taille : 175 cm\nPoids : 70 kg",
      exampleOutput: "La valeur IMC, la catégorie et un court commentaire apparaissent.",
      exampleNote: "Utile comme repère rapide, pas comme diagnostic.",
      faqTitle: "FAQ calculateur IMC",
      faqs: [
        { question: "Que montre l’IMC ?", answer: "Il résume la relation entre taille et poids en une seule valeur." },
        { question: "L’IMC suffit-il seul ?", answer: "Non. C’est un repère, pas une évaluation complète." },
        { question: "Le genre change-t-il le résultat ?", answer: "Non. Ici, il personnalise seulement le commentaire." },
      ],
    },
    pt: {
      howToTitle: "Como usar a calculadora de IMC",
      howToDescription: "Digite altura e peso, adicione gênero se quiser e veja o resultado na mesma tela.",
      steps: [
        { title: "Digite altura e peso", body: "Use centímetros para altura e quilos para peso." },
        { title: "Adicione gênero se quiser", body: "Isso apenas personaliza o comentário." },
        { title: "Leia o resultado", body: "Valor do IMC, faixa e comentário aparecem juntos." },
      ],
      useCasesTitle: "Melhores usos",
      useCasesDescription: "Bom para uma referência rápida ou para acompanhar mudanças ao longo do tempo.",
      useCases: [
        { title: "Acompanhamento pessoal", description: "Mantenha um ponto de referência simples." },
        { title: "Início de rotina", description: "Use como base rápida antes de dieta ou treino." },
        { title: "Visão rápida", description: "Veja sua faixa atual sem abrir outro app." },
      ],
      exampleTitle: "Checagem rápida de IMC",
      exampleInput: "Altura: 175 cm\nPeso: 70 kg",
      exampleOutput: "Valor do IMC, categoria e comentário curto aparecem.",
      exampleNote: "Útil como primeira leitura, não como diagnóstico.",
      faqTitle: "FAQ da calculadora de IMC",
      faqs: [
        { question: "O que o IMC mostra?", answer: "Resume a relação entre altura e peso em um único valor." },
        { question: "O IMC é suficiente sozinho?", answer: "Não. Ele serve como referência, não como avaliação completa." },
        { question: "Gênero muda o resultado?", answer: "Não. Nesta versão ele só ajusta o comentário." },
      ],
    },
  } as const;

  return buildContent(locale, byLocale[locale]);
}

function ageContent(locale: Locale): ToolContentBlock {
  const byLocale = {
    tr: {
      howToTitle: "Yaş hesaplayıcı nasıl kullanılır?",
      howToDescription: "Doğum tarihini seç ve tam yaşını gün detayına kadar gör.",
      steps: [
        { title: "Doğum tarihini seç", body: "Takvim alanından doğum gününü belirle." },
        { title: "Hesapla", body: "Araç tam yaşı yıl, ay ve gün olarak çıkarır." },
        { title: "Ek detayları incele", body: "Yaşadığın gün sayısı ve sonraki doğum gününü gör." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Form doldururken, yaş sınırı kontrol ederken veya merak için kullanışlıdır.",
      useCases: [
        { title: "Resmi formlar", description: "Yaklaşık değil, tam yaş gerektiğinde hızlıca kullan." },
        { title: "Doğum günü takibi", description: "Sonraki doğum gününe kaç gün kaldığını gör." },
        { title: "Kişisel merak", description: "Toplam yaşanan gün sayısını hızlıca öğren." },
      ],
      exampleTitle: "Doğum tarihi kontrolü",
      exampleInput: "Doğum tarihi: 14.09.1998",
      exampleOutput: "Tam yaş, yaşanan gün ve sonraki doğum günü bilgisi oluşur.",
      exampleNote: "Form ve başvuru süreçlerinde pratiktir.",
      faqTitle: "Yaş hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Tam yaş nasıl bulunur?", answer: "Doğum tarihi bugünün tarihiyle karşılaştırılır ve yıl, ay, gün farkı ayrı hesaplanır." },
        { question: "Sonraki doğum günü nasıl hesaplanır?", answer: "Bu yıl içindeki doğum günü baz alınır; geçtiyse bir sonraki yıl seçilir." },
        { question: "Farklı tarihe göre hesap yapılabilir mi?", answer: "Bu sürüm bugünün tarihine göre çalışır." },
      ],
    },
    en: {
      howToTitle: "How to use the age calculator",
      howToDescription: "Pick your birth date and see your exact age down to the day.",
      steps: [
        { title: "Choose a birth date", body: "Use the date field to set the correct day, month, and year." },
        { title: "Run the calculation", body: "The tool returns years, months, and days." },
        { title: "Read the extra details", body: "You also get days lived and time until the next birthday." },
      ],
      useCasesTitle: "Best use cases",
      useCasesDescription: "Useful for forms, age checks, or quick personal reference.",
      useCases: [
        { title: "Official forms", description: "Use exact age instead of rough year math." },
        { title: "Birthday countdown", description: "See how many days remain until your next birthday." },
        { title: "Personal reference", description: "Check total days lived in one clean view." },
      ],
      exampleTitle: "Birth date example",
      exampleInput: "Birth date: 14.09.1998",
      exampleOutput: "Exact age, total days lived, and next birthday details appear.",
      exampleNote: "Useful when a rough age is not enough.",
      faqTitle: "Age calculator FAQ",
      faqs: [
        { question: "How is exact age calculated?", answer: "The tool compares the birth date with today and resolves the difference into years, months, and days." },
        { question: "How is the next birthday computed?", answer: "It checks the birthday in the current year and moves to the next year if needed." },
        { question: "Can I calculate age for another reference date?", answer: "This version uses today as the reference date." },
      ],
    },
    es: {
      howToTitle: "Cómo usar la calculadora de edad",
      howToDescription: "Elige la fecha de nacimiento y mira la edad exacta hasta el día.",
      steps: [
        { title: "Selecciona la fecha", body: "Usa el campo de fecha para marcar día, mes y año." },
        { title: "Calcula", body: "La herramienta devuelve años, meses y días." },
        { title: "Revisa los detalles", body: "También verás días vividos y tiempo hasta el próximo cumpleaños." },
      ],
      useCasesTitle: "Mejores usos",
      useCasesDescription: "Sirve para formularios, controles de edad o una referencia rápida.",
      useCases: [
        { title: "Formularios", description: "Úsala cuando necesitas la edad exacta." },
        { title: "Cuenta regresiva", description: "Mira cuántos días faltan para tu cumpleaños." },
        { title: "Referencia personal", description: "Ve cuántos días has vivido en total." },
      ],
      exampleTitle: "Ejemplo de fecha de nacimiento",
      exampleInput: "Fecha: 14.09.1998",
      exampleOutput: "Se muestran edad exacta, días vividos y próximo cumpleaños.",
      exampleNote: "Muy útil cuando una edad aproximada no basta.",
      faqTitle: "Preguntas frecuentes",
      faqs: [
        { question: "¿Cómo se calcula la edad exacta?", answer: "La herramienta compara la fecha de nacimiento con hoy y separa la diferencia en años, meses y días." },
        { question: "¿Cómo calcula el próximo cumpleaños?", answer: "Revisa el cumpleaños de este año y, si ya pasó, usa el siguiente año." },
        { question: "¿Puedo usar otra fecha de referencia?", answer: "Esta versión usa la fecha de hoy." },
      ],
    },
    de: {
      howToTitle: "So nutzt du den Altersrechner",
      howToDescription: "Geburtsdatum wählen und das genaue Alter bis auf den Tag sehen.",
      steps: [
        { title: "Geburtsdatum auswählen", body: "Tag, Monat und Jahr korrekt setzen." },
        { title: "Berechnen", body: "Das Tool zeigt Jahre, Monate und Tage." },
        { title: "Details lesen", body: "Zusätzlich erscheinen gelebte Tage und der nächste Geburtstag." },
      ],
      useCasesTitle: "Beste Einsatzfälle",
      useCasesDescription: "Hilfreich für Formulare, Altersgrenzen oder den schnellen Überblick.",
      useCases: [
        { title: "Formulare", description: "Nutze das genaue Alter statt einer groben Jahreszahl." },
        { title: "Geburtstags-Countdown", description: "Sieh die Tage bis zum nächsten Geburtstag." },
        { title: "Persönlicher Überblick", description: "Lass dir die gesamte Anzahl gelebter Tage anzeigen." },
      ],
      exampleTitle: "Beispiel Geburtsdatum",
      exampleInput: "Geburtsdatum: 14.09.1998",
      exampleOutput: "Genaues Alter, gelebte Tage und nächster Geburtstag werden angezeigt.",
      exampleNote: "Praktisch, wenn ein grober Wert nicht reicht.",
      faqTitle: "Altersrechner FAQ",
      faqs: [
        { question: "Wie wird das genaue Alter berechnet?", answer: "Das Tool vergleicht Geburtsdatum und heutiges Datum und zerlegt die Differenz in Jahre, Monate und Tage." },
        { question: "Wie wird der nächste Geburtstag berechnet?", answer: "Es prüft den Geburtstag im aktuellen Jahr und springt bei Bedarf ins nächste Jahr." },
        { question: "Kann ich mit einem anderen Stichtag rechnen?", answer: "Diese Version nutzt immer das heutige Datum." },
      ],
    },
    fr: {
      howToTitle: "Comment utiliser le calculateur d’âge",
      howToDescription: "Choisis la date de naissance et vois l’âge exact jusqu’au jour.",
      steps: [
        { title: "Choisis la date", body: "Sélectionne correctement le jour, le mois et l’année." },
        { title: "Calcule", body: "L’outil affiche années, mois et jours." },
        { title: "Lis les détails", body: "Tu vois aussi le nombre de jours vécus et le prochain anniversaire." },
      ],
      useCasesTitle: "Cas d’usage",
      useCasesDescription: "Pratique pour les formulaires, les seuils d’âge ou une vérification rapide.",
      useCases: [
        { title: "Formulaires", description: "Utilise l’âge exact quand l’année seule ne suffit pas." },
        { title: "Compte à rebours", description: "Vois combien de jours restent avant le prochain anniversaire." },
        { title: "Référence perso", description: "Affiche le total de jours vécus." },
      ],
      exampleTitle: "Exemple de date de naissance",
      exampleInput: "Date : 14.09.1998",
      exampleOutput: "Âge exact, jours vécus et prochain anniversaire s’affichent.",
      exampleNote: "Utile quand une estimation rapide ne suffit pas.",
      faqTitle: "FAQ calculateur d’âge",
      faqs: [
        { question: "Comment l’âge exact est-il calculé ?", answer: "L’outil compare la date de naissance à la date du jour puis sépare l’écart en années, mois et jours." },
        { question: "Comment le prochain anniversaire est-il calculé ?", answer: "Il regarde l’anniversaire dans l’année en cours, puis passe à l’année suivante si besoin." },
        { question: "Puis-je choisir une autre date de référence ?", answer: "Cette version utilise uniquement la date d’aujourd’hui." },
      ],
    },
    pt: {
      howToTitle: "Como usar a calculadora de idade",
      howToDescription: "Escolha a data de nascimento e veja a idade exata até o dia.",
      steps: [
        { title: "Escolha a data", body: "Defina corretamente dia, mês e ano." },
        { title: "Calcule", body: "A ferramenta mostra anos, meses e dias." },
        { title: "Veja os detalhes", body: "Você também vê dias vividos e o próximo aniversário." },
      ],
      useCasesTitle: "Melhores usos",
      useCasesDescription: "Boa para formulários, checagem de idade ou referência rápida.",
      useCases: [
        { title: "Formulários", description: "Use a idade exata quando o ano sozinho não basta." },
        { title: "Contagem para o aniversário", description: "Veja quantos dias faltam para o próximo aniversário." },
        { title: "Referência pessoal", description: "Confira o total de dias vividos." },
      ],
      exampleTitle: "Exemplo de nascimento",
      exampleInput: "Data: 14.09.1998",
      exampleOutput: "Idade exata, dias vividos e próximo aniversário aparecem.",
      exampleNote: "Prático quando um valor aproximado não basta.",
      faqTitle: "FAQ da calculadora de idade",
      faqs: [
        { question: "Como a idade exata é calculada?", answer: "A ferramenta compara a data de nascimento com a data de hoje e separa a diferença em anos, meses e dias." },
        { question: "Como calcula o próximo aniversário?", answer: "Ela verifica o aniversário neste ano e, se já passou, usa o ano seguinte." },
        { question: "Posso usar outra data de referência?", answer: "Esta versão usa sempre a data de hoje." },
      ],
    },
  } as const;

  return buildContent(locale, byLocale[locale]);
}

function percentageContent(locale: Locale): ToolContentBlock {
  const byLocale = {
    tr: {
      howToTitle: "Yüzde hesaplayıcı nasıl kullanılır?",
      howToDescription: "İhtiyacın olan modu seç, iki değeri gir ve sonucu tek kartta gör.",
      steps: [
        { title: "İşlem modunu seç", body: "Bir sayının yüzdesi, oran veya yüzde ekleme-çıkarma modlarından birini seç." },
        { title: "Değerleri gir", body: "Temel sayıları ve gerekiyorsa yüzde değerini yaz." },
        { title: "Sonucu yorumla", body: "Araç sonuçla birlikte kısa bir açıklama da üretir." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "İndirim, zam, oran ve bütçe hesaplarında hızlıca iş görür.",
      useCases: [
        { title: "İndirim hesabı", description: "Bir fiyatın yüzde kaç düştüğünü veya yeni tutarı gör." },
        { title: "Oran kontrolü", description: "Bir değerin diğerinin yüzde kaçı olduğunu hızlıca hesapla." },
        { title: "Bütçe planı", description: "Bir tutara yüzde ekleyip çıkararak yeni sonucu bul." },
      ],
      exampleTitle: "Yüzde örneği",
      exampleInput: "Sayı: 250\nYüzde: 20",
      exampleOutput: "250 sayısının %20 değeri 50 eder.",
      exampleNote: "Günlük oran hesapları için pratiktir.",
      faqTitle: "Yüzde hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Hangi mod ne işe yarar?", answer: "İlk mod yüzdesini bulur, ikinci mod oran hesaplar, üçüncü mod ise yüzde ekler veya çıkarır." },
        { question: "Neden ondalıklı sonuç çıkabilir?", answer: "Bazı işlemler tam sayıya bölünmez; daha doğru sonuç için ondalık gösterilir." },
        { question: "Negatif değer kullanılabilir mi?", answer: "Teknik olarak evet, ama çoğu günlük kullanımda pozitif değerler daha anlamlıdır." },
      ],
    },
    en: {
      howToTitle: "How to use the percentage calculator",
      howToDescription: "Choose the mode you need, enter two values, and read the result in one place.",
      steps: [
        { title: "Pick a mode", body: "Choose between percent-of, ratio, or percentage add/subtract." },
        { title: "Enter the values", body: "Fill in the base numbers and the percentage when needed." },
        { title: "Read the result", body: "The tool shows both the number and a short explanation." },
      ],
      useCasesTitle: "Best use cases",
      useCasesDescription: "Useful for discounts, price increases, ratios, and everyday budget checks.",
      useCases: [
        { title: "Discount math", description: "Quickly calculate the new amount after a discount." },
        { title: "Ratio checks", description: "See what percent one value represents of another." },
        { title: "Budget planning", description: "Add or remove a percentage from a value without mental math." },
      ],
      exampleTitle: "Percentage example",
      exampleInput: "Value: 250\nPercentage: 20",
      exampleOutput: "20% of 250 is 50.",
      exampleNote: "Handy for fast price and ratio checks.",
      faqTitle: "Percentage calculator FAQ",
      faqs: [
        { question: "What does each mode do?", answer: "The first mode finds a percentage of a number, the second finds a ratio, and the third adds or subtracts a percentage." },
        { question: "Why can the result be decimal?", answer: "Some percentage calculations do not divide into whole numbers cleanly." },
        { question: "Can I use negative values?", answer: "Yes, though most everyday uses make more sense with positive values." },
      ],
    },
    es: {
      howToTitle: "Cómo usar la calculadora de porcentaje",
      howToDescription: "Elige el modo, introduce dos valores y lee el resultado en la misma pantalla.",
      steps: [
        { title: "Elige el modo", body: "Selecciona porcentaje de un número, relación o sumar/restar porcentaje." },
        { title: "Escribe los valores", body: "Introduce los números base y el porcentaje si hace falta." },
        { title: "Lee el resultado", body: "La herramienta muestra el número y una explicación corta." },
      ],
      useCasesTitle: "Mejores usos",
      useCasesDescription: "Ideal para descuentos, subidas, ratios y cálculos rápidos del día a día.",
      useCases: [
        { title: "Descuentos", description: "Calcula rápido un precio con rebaja." },
        { title: "Relaciones", description: "Mira qué porcentaje representa un valor frente a otro." },
        { title: "Presupuesto", description: "Suma o resta porcentajes sin hacer cuentas mentales." },
      ],
      exampleTitle: "Ejemplo de porcentaje",
      exampleInput: "Valor: 250\nPorcentaje: 20",
      exampleOutput: "El 20% de 250 es 50.",
      exampleNote: "Muy útil para precios y ratios rápidos.",
      faqTitle: "Preguntas frecuentes",
      faqs: [
        { question: "¿Qué hace cada modo?", answer: "Uno calcula un porcentaje, otro una relación y el tercero suma o resta un porcentaje." },
        { question: "¿Por qué puede salir decimal?", answer: "Porque algunas operaciones porcentuales no dan un entero exacto." },
        { question: "¿Puedo usar valores negativos?", answer: "Sí, aunque para usos cotidianos suelen tener más sentido valores positivos." },
      ],
    },
    de: {
      howToTitle: "So nutzt du den Prozentrechner",
      howToDescription: "Wähle den passenden Modus, gib zwei Werte ein und lies das Ergebnis direkt ab.",
      steps: [
        { title: "Modus wählen", body: "Prozent eines Werts, Anteil oder Prozent addieren/abziehen auswählen." },
        { title: "Werte eingeben", body: "Grundwerte und gegebenenfalls den Prozentsatz eintragen." },
        { title: "Ergebnis lesen", body: "Das Tool zeigt die Zahl und eine kurze Erklärung." },
      ],
      useCasesTitle: "Beste Einsatzfälle",
      useCasesDescription: "Nützlich für Rabatte, Preisänderungen, Anteile und schnelle Alltagsrechnungen.",
      useCases: [
        { title: "Rabatt prüfen", description: "Neuen Preis nach einem Nachlass sofort sehen." },
        { title: "Anteile berechnen", description: "Schnell prüfen, wie viel Prozent ein Wert vom anderen ist." },
        { title: "Budget anpassen", description: "Einen Prozentwert addieren oder abziehen ohne Taschenrechner." },
      ],
      exampleTitle: "Prozentbeispiel",
      exampleInput: "Wert: 250\nProzent: 20",
      exampleOutput: "20% von 250 sind 50.",
      exampleNote: "Praktisch für schnelle Preis- und Verhältnischecks.",
      faqTitle: "Prozentrechner FAQ",
      faqs: [
        { question: "Was macht jeder Modus?", answer: "Ein Modus berechnet einen Prozentwert, einer den Anteil, und einer addiert oder subtrahiert Prozent." },
        { question: "Warum kann ein Dezimalwert erscheinen?", answer: "Weil manche Prozentrechnungen nicht glatt aufgehen." },
        { question: "Sind negative Werte erlaubt?", answer: "Ja, aber im Alltag sind positive Werte meist sinnvoller." },
      ],
    },
    fr: {
      howToTitle: "Comment utiliser le calculateur de pourcentage",
      howToDescription: "Choisis un mode, saisis deux valeurs et lis le résultat tout de suite.",
      steps: [
        { title: "Choisis un mode", body: "Pourcentage d’une valeur, part en pourcentage ou ajout/retrait d’un pourcentage." },
        { title: "Entre les valeurs", body: "Ajoute les nombres de base et le pourcentage si besoin." },
        { title: "Lis le résultat", body: "L’outil affiche le résultat avec une courte explication." },
      ],
      useCasesTitle: "Cas d’usage",
      useCasesDescription: "Pratique pour les remises, hausses, ratios et calculs rapides du quotidien.",
      useCases: [
        { title: "Remises", description: "Calcule vite le nouveau prix après une réduction." },
        { title: "Ratios", description: "Vois quel pourcentage représente une valeur par rapport à une autre." },
        { title: "Budget", description: "Ajoute ou retire un pourcentage sans faire le calcul à la main." },
      ],
      exampleTitle: "Exemple de pourcentage",
      exampleInput: "Valeur : 250\nPourcentage : 20",
      exampleOutput: "20% de 250 donnent 50.",
      exampleNote: "Très utile pour les contrôles rapides de prix.",
      faqTitle: "FAQ calculateur de pourcentage",
      faqs: [
        { question: "À quoi sert chaque mode ?", answer: "Un mode calcule un pourcentage, un autre une part, et le troisième ajoute ou retire un pourcentage." },
        { question: "Pourquoi le résultat peut-il être décimal ?", answer: "Parce que certaines opérations ne donnent pas un entier exact." },
        { question: "Puis-je entrer des valeurs négatives ?", answer: "Oui, même si les valeurs positives sont les plus courantes." },
      ],
    },
    pt: {
      howToTitle: "Como usar a calculadora de porcentagem",
      howToDescription: "Escolha o modo, digite dois valores e veja o resultado na hora.",
      steps: [
        { title: "Escolha o modo", body: "Percentual de um valor, relação percentual ou somar/subtrair porcentagem." },
        { title: "Digite os valores", body: "Preencha os números base e a porcentagem quando necessário." },
        { title: "Leia o resultado", body: "A ferramenta mostra o número e uma explicação curta." },
      ],
      useCasesTitle: "Melhores usos",
      useCasesDescription: "Útil para descontos, aumentos, proporções e contas rápidas do dia a dia.",
      useCases: [
        { title: "Descontos", description: "Calcule o novo preço depois de uma redução." },
        { title: "Proporções", description: "Veja que porcentagem um valor representa do outro." },
        { title: "Orçamento", description: "Some ou retire um percentual sem fazer a conta manualmente." },
      ],
      exampleTitle: "Exemplo de porcentagem",
      exampleInput: "Valor: 250\nPercentual: 20",
      exampleOutput: "20% de 250 é 50.",
      exampleNote: "Ótima para verificações rápidas de preço e proporção.",
      faqTitle: "FAQ da calculadora de porcentagem",
      faqs: [
        { question: "O que cada modo faz?", answer: "Um calcula o percentual, outro a relação e o terceiro soma ou retira um percentual." },
        { question: "Por que pode aparecer decimal?", answer: "Porque algumas contas percentuais não fecham em número inteiro." },
        { question: "Posso usar valores negativos?", answer: "Sim, embora no uso diário valores positivos sejam mais comuns." },
      ],
    },
  } as const;

  return buildContent(locale, byLocale[locale]);
}

function rentContent(locale: Locale): ToolContentBlock {
  const byLocale = {
    tr: {
      howToTitle: "Kira artış hesaplayıcı nasıl kullanılır?",
      howToDescription: "Mevcut kirayı, artış oranını ve artış sayısını gir. Yeni kira ve tablo anında oluşur.",
      steps: [
        { title: "Mevcut kirayı yaz", body: "Şu anki kira tutarını temel değer olarak gir." },
        { title: "Artış oranını belirle", body: "Yüzde artış oranını ve kaç dönem uygulamak istediğini seç." },
        { title: "Tabloyu incele", body: "Yeni kira ve her dönemdeki artış miktarını birlikte gör." },
      ],
      useCasesTitle: "En iyi kullanım alanları",
      useCasesDescription: "Kira güncellemesi öncesinde senaryoları hızlıca karşılaştırmak için çok uygundur.",
      useCases: [
        { title: "Yeni kira tahmini", description: "Tek artışla yeni kira tutarını anında bul." },
        { title: "Çok dönemli kontrol", description: "Birden fazla artış sonrası toplam farkı gör." },
        { title: "Pazarlık hazırlığı", description: "Oran değiştiğinde sonucun nasıl etkilediğini hızlıca aç." },
      ],
      exampleTitle: "Kira artış örneği",
      exampleInput: "Mevcut kira: 15.000\nArtış oranı: %25\nArtış sayısı: 2",
      exampleOutput: "Yeni kira tutarı ve dönem dönem artış tablosu oluşur.",
      exampleNote: "Kira senaryolarını hızlı kıyaslamak için kullanışlıdır.",
      faqTitle: "Kira artış hesaplayıcı sık sorulan sorular",
      faqs: [
        { question: "Artış sayısı ne işe yarar?", answer: "Aynı oranı birden fazla dönem üst üste uygular ve bileşik etkiyi gösterir." },
        { question: "Bu araç resmi sınır yerine geçer mi?", answer: "Hayır. Yasal oran ve sözleşme koşulları ayrıca kontrol edilmelidir." },
        { question: "Sıfır artış kullanılabilir mi?", answer: "Evet. O durumda yeni kira mevcut kira ile aynı kalır." },
      ],
    },
    en: {
      howToTitle: "How to use the rent increase calculator",
      howToDescription: "Enter the current rent, the increase rate, and how many times it should apply.",
      steps: [
        { title: "Enter the current rent", body: "Use the existing rent as the base value." },
        { title: "Set the increase rate", body: "Add the percentage increase and how many periods to apply it." },
        { title: "Read the table", body: "See the updated rent and the increase amount for each step." },
      ],
      useCasesTitle: "Best use cases",
      useCasesDescription: "Useful for testing scenarios before a rent update or negotiation.",
      useCases: [
        { title: "Estimate the new rent", description: "See the next amount after one increase." },
        { title: "Test repeated increases", description: "Understand the compound effect across multiple periods." },
        { title: "Prepare comparisons", description: "Check how a different rate changes the outcome." },
      ],
      exampleTitle: "Rent increase example",
      exampleInput: "Current rent: 15,000\nIncrease rate: 25%\nIncrease count: 2",
      exampleOutput: "The updated rent and the period-by-period table appear together.",
      exampleNote: "Useful when you want a clearer view before discussing numbers.",
      faqTitle: "Rent increase calculator FAQ",
      faqs: [
        { question: "What does increase count mean?", answer: "It applies the same increase more than once so you can see the compounded result." },
        { question: "Does this replace legal guidance?", answer: "No. Always verify contract terms and local rules separately." },
        { question: "Can I use 0%?", answer: "Yes. The rent stays the same if the increase rate is zero." },
      ],
    },
    es: {
      howToTitle: "Cómo usar la calculadora de aumento de alquiler",
      howToDescription: "Ingresa el alquiler actual, la tasa y cuántas veces se aplicará.",
      steps: [
        { title: "Escribe el alquiler actual", body: "Usa el alquiler actual como base del cálculo." },
        { title: "Define la tasa", body: "Introduce el porcentaje y cuántos periodos quieres aplicar." },
        { title: "Lee la tabla", body: "Verás el nuevo alquiler y el aumento en cada periodo." },
      ],
      useCasesTitle: "Mejores usos",
      useCasesDescription: "Muy útil para probar escenarios antes de una actualización del alquiler.",
      useCases: [
        { title: "Estimar nuevo alquiler", description: "Obtén el nuevo valor con un solo aumento." },
        { title: "Ver aumentos repetidos", description: "Entiende el efecto acumulado en varios periodos." },
        { title: "Preparar comparaciones", description: "Comprueba cómo cambia el resultado con otra tasa." },
      ],
      exampleTitle: "Ejemplo de aumento",
      exampleInput: "Alquiler actual: 15.000\nAumento: 25%\nCantidad: 2",
      exampleOutput: "Aparecen el nuevo alquiler y la tabla por periodos.",
      exampleNote: "Práctica para comparar escenarios rápido.",
      faqTitle: "Preguntas frecuentes",
      faqs: [
        { question: "¿Qué significa cantidad de aumentos?", answer: "Aplica la misma subida varias veces para mostrar el efecto acumulado." },
        { question: "¿Sustituye orientación legal?", answer: "No. Revisa aparte contrato y límites locales." },
        { question: "¿Puedo usar 0%?", answer: "Sí. En ese caso el alquiler se mantiene igual." },
      ],
    },
    de: {
      howToTitle: "So nutzt du den Mieterhöhungsrechner",
      howToDescription: "Aktuelle Miete, Erhöhungsrate und Anzahl der Erhöhungen eingeben.",
      steps: [
        { title: "Aktuelle Miete eingeben", body: "Nutze die bestehende Miete als Basis." },
        { title: "Rate festlegen", body: "Gib den Prozentsatz und die Anzahl der Perioden ein." },
        { title: "Tabelle lesen", body: "Sieh die neue Miete und jede einzelne Erhöhung." },
      ],
      useCasesTitle: "Beste Einsatzfälle",
      useCasesDescription: "Hilfreich, wenn du Szenarien vor einer Mietanpassung prüfen willst.",
      useCases: [
        { title: "Neue Miete schätzen", description: "Ermittle schnell den Wert nach einer Erhöhung." },
        { title: "Mehrere Erhöhungen testen", description: "Verstehe den kumulierten Effekt über mehrere Perioden." },
        { title: "Szenarien vergleichen", description: "Prüfe, wie sich eine andere Rate auswirkt." },
      ],
      exampleTitle: "Beispiel Mieterhöhung",
      exampleInput: "Aktuelle Miete: 15.000\nErhöhung: 25%\nAnzahl: 2",
      exampleOutput: "Neue Miete und periodische Übersicht erscheinen zusammen.",
      exampleNote: "Praktisch, um mehrere Varianten schnell zu prüfen.",
      faqTitle: "Mieterhöhungsrechner FAQ",
      faqs: [
        { question: "Was bedeutet Anzahl der Erhöhungen?", answer: "Dieselbe Rate wird mehrfach angewendet, damit du den kumulierten Effekt siehst." },
        { question: "Ersetzt das rechtliche Prüfung?", answer: "Nein. Vertrag und lokale Regeln musst du separat prüfen." },
        { question: "Kann ich 0% eingeben?", answer: "Ja. Dann bleibt die Miete unverändert." },
      ],
    },
    fr: {
      howToTitle: "Comment utiliser le calculateur d’augmentation de loyer",
      howToDescription: "Entre le loyer actuel, le taux et le nombre d’augmentations à appliquer.",
      steps: [
        { title: "Entre le loyer actuel", body: "Utilise le loyer en cours comme base." },
        { title: "Définis le taux", body: "Ajoute le pourcentage et le nombre de périodes." },
        { title: "Lis le tableau", body: "Le nouveau loyer et le détail de chaque hausse s’affichent." },
      ],
      useCasesTitle: "Cas d’usage",
      useCasesDescription: "Très utile pour tester plusieurs scénarios avant une mise à jour du loyer.",
      useCases: [
        { title: "Estimer le nouveau loyer", description: "Vois rapidement le montant après une hausse." },
        { title: "Tester plusieurs hausses", description: "Comprends l’effet cumulé sur plusieurs périodes." },
        { title: "Comparer plusieurs taux", description: "Mesure l’impact d’un autre pourcentage." },
      ],
      exampleTitle: "Exemple d’augmentation",
      exampleInput: "Loyer actuel : 15 000\nHausse : 25%\nNombre : 2",
      exampleOutput: "Le nouveau loyer et le tableau par période apparaissent.",
      exampleNote: "Pratique pour comparer rapidement plusieurs scénarios.",
      faqTitle: "FAQ calculateur de loyer",
      faqs: [
        { question: "À quoi sert le nombre d’augmentations ?", answer: "Il applique la même hausse plusieurs fois pour montrer l’effet cumulé." },
        { question: "Est-ce un avis légal ?", answer: "Non. Il faut toujours vérifier le contrat et les règles locales." },
        { question: "Puis-je entrer 0 % ?", answer: "Oui. Le loyer reste alors inchangé." },
      ],
    },
    pt: {
      howToTitle: "Como usar a calculadora de aumento de aluguel",
      howToDescription: "Digite o aluguel atual, a taxa e quantas vezes o aumento será aplicado.",
      steps: [
        { title: "Digite o aluguel atual", body: "Use o valor atual como base." },
        { title: "Defina a taxa", body: "Informe o percentual e o número de períodos." },
        { title: "Leia a tabela", body: "O novo aluguel e cada aumento aparecem juntos." },
      ],
      useCasesTitle: "Melhores usos",
      useCasesDescription: "Ótima para testar cenários antes de atualizar o aluguel.",
      useCases: [
        { title: "Estimar novo aluguel", description: "Veja o valor após um aumento." },
        { title: "Testar vários aumentos", description: "Entenda o efeito acumulado em mais de um período." },
        { title: "Comparar cenários", description: "Confira como outra taxa muda o resultado." },
      ],
      exampleTitle: "Exemplo de aumento",
      exampleInput: "Aluguel atual: 15.000\nTaxa: 25%\nQuantidade: 2",
      exampleOutput: "Novo aluguel e tabela por período aparecem juntos.",
      exampleNote: "Bom para comparar cenários rapidamente.",
      faqTitle: "FAQ da calculadora de aluguel",
      faqs: [
        { question: "O que significa número de aumentos?", answer: "Aplica a mesma taxa mais de uma vez para mostrar o efeito acumulado." },
        { question: "Isso substitui orientação legal?", answer: "Não. É preciso revisar contrato e regras locais separadamente." },
        { question: "Posso usar 0%?", answer: "Sim. Nesse caso o aluguel não muda." },
      ],
    },
  } as const;

  return buildContent(locale, byLocale[locale]);
}

type CalculatorLocaleEntryInput = Omit<CalculatorEntry, "routeSlug">;

const localizedCalculatorData: Record<Locale, Record<CalculatorSlug, CalculatorLocaleEntryInput>> = {
  tr: {
    "kredi-hesaplayici": {
      slug: "kredi-hesaplayici",
      icon: "🏦",
      name: "Kredi Hesaplayıcı",
      shortDescription: "Aylık taksit, toplam geri ödeme ve faiz yükünü saniyeler içinde gör.",
      description: "Kredi tutarı, faiz oranı ve vade süresiyle aylık taksitini ve toplam maliyetini anında hesapla.",
      metaTitle: "Kredi Hesaplayıcı — Aylık Taksit Hesapla | Toolyflow",
      metaDescription: "Kredi tutarı, faiz oranı ve vadeye göre aylık taksit, toplam geri ödeme ve faiz maliyetini ücretsiz hesapla.",
      keywords: ["kredi hesaplayıcı", "aylık taksit hesaplama", "faiz hesaplama", "kredi ödeme planı"],
      eyebrow: "Finans hesap aracı",
      accentLabel: "Kredi",
      highlights: ["Aylık taksiti ve toplam maliyeti aynı ekranda gösterir.", "Ödeme planını tablo halinde açar."],
      structuredDescription: "Kredi tutarı, faiz oranı ve vadeye göre aylık taksit ve ödeme planı çıkaran ücretsiz kredi hesaplayıcı.",
      content: creditContent("tr"),
      related: ["kira-artis-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
    },
    "bmi-hesaplayici": {
      slug: "bmi-hesaplayici",
      icon: "⚖️",
      name: "BMI Hesaplayıcı",
      shortDescription: "Boy ve kilona göre vücut kitle indeksini ve kısa yorumunu hemen gör.",
      description: "Boy ve kilo bilgilerini girerek BMI değerini, kategori yorumunu ve renkli göstergesini anında öğren.",
      metaTitle: "BMI Hesaplayıcı — Vücut Kitle İndeksi Hesapla | Toolyflow",
      metaDescription: "Boy ve kilona göre BMI değerini, kilo kategorini ve kısa yorumunu anında gör. Ücretsiz BMI hesaplayıcı.",
      keywords: ["bmi hesaplayıcı", "vücut kitle indeksi", "boy kilo endeksi", "bmi hesaplama"],
      eyebrow: "Sağlık hesap aracı",
      accentLabel: "BMI",
      highlights: ["BMI değerini renkli kategori etiketiyle verir.", "Sonucu kısa ve anlaşılır yorumla destekler."],
      structuredDescription: "Boy ve kilo bilgisine göre vücut kitle indeksi hesaplayan ücretsiz BMI hesaplayıcı.",
      content: bmiContent("tr"),
      related: ["yas-hesaplayici", "yuzde-hesaplayici", "kredi-hesaplayici"],
    },
    "yas-hesaplayici": {
      slug: "yas-hesaplayici",
      icon: "🎂",
      name: "Yaş Hesaplayıcı",
      shortDescription: "Tam yaşını yıl, ay ve gün olarak öğren; toplam gün bilgisini de gör.",
      description: "Doğum tarihine göre tam yaşını, yaşadığın gün sayısını ve sonraki doğum gününe kalan süreyi hesapla.",
      metaTitle: "Yaş Hesaplayıcı — Tam Yaşını Hesapla | Toolyflow",
      metaDescription: "Doğum tarihine göre tam yaşını yıl, ay ve gün olarak hesapla. Yaşadığın gün sayısını da anında gör.",
      keywords: ["yaş hesaplayıcı", "tam yaş hesaplama", "doğum tarihi hesaplama", "yaş günü hesaplama"],
      eyebrow: "Zaman hesap aracı",
      accentLabel: "Yaş",
      highlights: ["Tam yaşı yıl, ay ve gün olarak verir.", "Yaşanan gün sayısı ve sonraki doğum gününü ekler."],
      structuredDescription: "Doğum tarihine göre tam yaş ve yaşanan gün sayısını hesaplayan ücretsiz yaş hesaplayıcı.",
      content: ageContent("tr"),
      related: ["bmi-hesaplayici", "yuzde-hesaplayici", "kira-artis-hesaplayici"],
    },
    "yuzde-hesaplayici": {
      slug: "yuzde-hesaplayici",
      icon: "📐",
      name: "Yüzde Hesaplayıcı",
      shortDescription: "Bir sayının yüzdesini bul, oran hesapla veya yüzde ekleyip çıkar.",
      description: "Üç farklı modla yüzde alma, oran bulma ve yüzde ekleme-çıkarma işlemlerini tek ekranda yap.",
      metaTitle: "Yüzde Hesaplayıcı — Online Yüzde Hesapla | Toolyflow",
      metaDescription: "Bir sayının yüzdesini bul, oran hesapla veya yüzde ekleyip çıkar. 3 modlu ücretsiz online yüzde hesaplayıcı.",
      keywords: ["yüzde hesaplayıcı", "online yüzde hesaplama", "oran hesaplama", "yüzde artış hesaplama"],
      eyebrow: "Matematik hesap aracı",
      accentLabel: "Yüzde",
      highlights: ["Tek araç içinde üç farklı yüzde modu sunar.", "Sonucu kısa açıklamayla birlikte verir."],
      structuredDescription: "Bir sayının yüzdesini, oranını veya yüzdelik artış ve azalışını hesaplayan ücretsiz araç.",
      content: percentageContent("tr"),
      related: ["kredi-hesaplayici", "kira-artis-hesaplayici", "yas-hesaplayici"],
    },
    "kira-artis-hesaplayici": {
      slug: "kira-artis-hesaplayici",
      icon: "🏠",
      name: "Kira Artış Hesaplayıcı",
      shortDescription: "Kira artışı sonrası yeni tutarı ve dönem bazlı artış tablosunu hemen gör.",
      description: "Mevcut kira, artış oranı ve artış sayısına göre yeni kira tutarını ve artış tablosunu hesapla.",
      metaTitle: "Kira Artış Hesaplayıcı — Yeni Kira Tutarı | Toolyflow",
      metaDescription: "Mevcut kira ve artış oranına göre yeni kira tutarını, toplam artışı ve dönem tablosunu ücretsiz hesapla.",
      keywords: ["kira artış hesaplayıcı", "yeni kira hesaplama", "kira zam hesaplama", "kira artış oranı"],
      eyebrow: "Konut hesap aracı",
      accentLabel: "Kira",
      highlights: ["Yeni kira tutarını net şekilde verir.", "Birden fazla dönem için artış tablosu oluşturur."],
      structuredDescription: "Kira artış oranına göre yeni kira tutarı ve artış tablosu hesaplayan ücretsiz araç.",
      content: rentContent("tr"),
      related: ["yuzde-hesaplayici", "kredi-hesaplayici", "yas-hesaplayici"],
    },
  },
  en: {
    "kredi-hesaplayici": {
      slug: "kredi-hesaplayici",
      icon: "🏦",
      name: "Credit Calculator",
      shortDescription: "Check monthly payments, total repayment, and interest cost in seconds.",
      description: "Enter the loan amount, rate, and term to estimate monthly payments and the full repayment plan.",
      metaTitle: "Credit Calculator — Monthly Payment Estimator | Toolyflow",
      metaDescription: "Calculate monthly loan payments, total repayment, and interest cost with a free online credit calculator.",
      keywords: ["credit calculator", "loan payment calculator", "monthly payment estimator", "interest calculator"],
      eyebrow: "Finance calculator",
      accentLabel: "Credit",
      highlights: ["Shows the monthly payment and total cost together.", "Breaks the plan into a readable payment schedule."],
      structuredDescription: "Free online credit calculator for estimating monthly payments and total repayment.",
      content: creditContent("en"),
      related: ["kira-artis-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
    },
    "bmi-hesaplayici": {
      slug: "bmi-hesaplayici",
      icon: "⚖️",
      name: "BMI Calculator",
      shortDescription: "See your body mass index and a quick reading based on height and weight.",
      description: "Enter your height and weight to calculate BMI, view the range, and get a short interpretation.",
      metaTitle: "BMI Calculator — Free Online | Toolyflow",
      metaDescription: "Calculate BMI from height and weight, then view your range and a quick interpretation for free.",
      keywords: ["BMI calculator", "body mass index calculator", "height weight calculator"],
      eyebrow: "Health calculator",
      accentLabel: "BMI",
      highlights: ["Pairs the BMI number with a clear range label.", "Adds a short comment instead of only showing the raw score."],
      structuredDescription: "Free online BMI calculator based on height and weight.",
      content: bmiContent("en"),
      related: ["yas-hesaplayici", "yuzde-hesaplayici", "kredi-hesaplayici"],
    },
    "yas-hesaplayici": {
      slug: "yas-hesaplayici",
      icon: "🎂",
      name: "Age Calculator",
      shortDescription: "Find your exact age in years, months, and days with extra birthday details.",
      description: "Use your birth date to calculate exact age, total days lived, and time until the next birthday.",
      metaTitle: "Age Calculator — Exact Age Online | Toolyflow",
      metaDescription: "Calculate exact age in years, months, and days from a birth date. Free online age calculator.",
      keywords: ["age calculator", "exact age calculator", "birth date calculator"],
      eyebrow: "Time calculator",
      accentLabel: "Age",
      highlights: ["Shows the exact age, not just the year gap.", "Adds days lived and next birthday details."],
      structuredDescription: "Free online age calculator for exact age, lived days, and next birthday timing.",
      content: ageContent("en"),
      related: ["bmi-hesaplayici", "yuzde-hesaplayici", "kira-artis-hesaplayici"],
    },
    "yuzde-hesaplayici": {
      slug: "yuzde-hesaplayici",
      icon: "📐",
      name: "Percentage Calculator",
      shortDescription: "Find a percentage, calculate a ratio, or add and subtract percentages fast.",
      description: "Switch between percentage-of, ratio, and percentage adjustment modes in one page.",
      metaTitle: "Percentage Calculator — Free Online | Toolyflow",
      metaDescription: "Find percentages, percentage ratios, and percentage increases or decreases with a free online tool.",
      keywords: ["percentage calculator", "percent of calculator", "percentage increase calculator"],
      eyebrow: "Math calculator",
      accentLabel: "Percentage",
      highlights: ["Covers three common percentage tasks in one place.", "Explains the result in plain language."],
      structuredDescription: "Free online percentage calculator for common ratio and percentage adjustments.",
      content: percentageContent("en"),
      related: ["kredi-hesaplayici", "kira-artis-hesaplayici", "yas-hesaplayici"],
    },
    "kira-artis-hesaplayici": {
      slug: "kira-artis-hesaplayici",
      icon: "🏠",
      name: "Rent Increase Calculator",
      shortDescription: "See the updated rent amount and the increase table across multiple periods.",
      description: "Enter the current rent, increase rate, and increase count to calculate the updated rent amount.",
      metaTitle: "Rent Increase Calculator — Free Online | Toolyflow",
      metaDescription: "Calculate rent increases, updated rent amounts, and repeated increase scenarios with a free tool.",
      keywords: ["rent increase calculator", "rent raise calculator", "new rent calculator"],
      eyebrow: "Housing calculator",
      accentLabel: "Rent",
      highlights: ["Gives the updated rent clearly at the top.", "Shows repeated increases in a readable table."],
      structuredDescription: "Free rent increase calculator for updated rent amounts and repeated increase scenarios.",
      content: rentContent("en"),
      related: ["yuzde-hesaplayici", "kredi-hesaplayici", "yas-hesaplayici"],
    },
  },
  es: {
    "kredi-hesaplayici": {
      slug: "kredi-hesaplayici", icon: "🏦", name: "Calculadora de Crédito", shortDescription: "Consulta cuota mensual, pago total e intereses en segundos.", description: "Introduce monto, tasa y plazo para estimar cuota mensual y plan de pago.", metaTitle: "Calculadora de Crédito — Gratis Online | Toolyflow", metaDescription: "Calcula cuota mensual, pago total e intereses con una calculadora de crédito gratis.", keywords: ["calculadora de crédito", "cuota mensual", "préstamo"], eyebrow: "Calculadora financiera", accentLabel: "Crédito", highlights: ["Muestra cuota y coste total en la misma vista.", "Desglosa el plan en una tabla clara."], structuredDescription: "Calculadora de crédito gratis para cuota mensual y pago total.", content: creditContent("es"), related: ["kira-artis-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
    },
    "bmi-hesaplayici": {
      slug: "bmi-hesaplayici", icon: "⚖️", name: "Calculadora IMC", shortDescription: "Mira el IMC y una lectura rápida según altura y peso.", description: "Introduce altura y peso para calcular el IMC y ver una interpretación rápida.", metaTitle: "Calculadora IMC — Gratis Online | Toolyflow", metaDescription: "Calcula el IMC con altura y peso y revisa tu rango al instante.", keywords: ["calculadora imc", "imc", "indice de masa corporal"], eyebrow: "Calculadora de salud", accentLabel: "IMC", highlights: ["Combina el valor con una categoría clara.", "Añade un comentario corto y útil."], structuredDescription: "Calculadora IMC gratis basada en altura y peso.", content: bmiContent("es"), related: ["yas-hesaplayici", "yuzde-hesaplayici", "kredi-hesaplayici"],
    },
    "yas-hesaplayici": {
      slug: "yas-hesaplayici", icon: "🎂", name: "Calculadora de Edad", shortDescription: "Obtén la edad exacta en años, meses y días con más detalles.", description: "Calcula edad exacta, días vividos y tiempo hasta el próximo cumpleaños.", metaTitle: "Calculadora de Edad — Gratis Online | Toolyflow", metaDescription: "Calcula la edad exacta a partir de la fecha de nacimiento con una calculadora online gratis.", keywords: ["calculadora de edad", "edad exacta", "fecha de nacimiento"], eyebrow: "Calculadora de tiempo", accentLabel: "Edad", highlights: ["Muestra la edad exacta, no solo el año.", "Añade días vividos y próximo cumpleaños."], structuredDescription: "Calculadora de edad gratis para edad exacta y días vividos.", content: ageContent("es"), related: ["bmi-hesaplayici", "yuzde-hesaplayici", "kira-artis-hesaplayici"],
    },
    "yuzde-hesaplayici": {
      slug: "yuzde-hesaplayici", icon: "📐", name: "Calculadora de Porcentaje", shortDescription: "Calcula porcentajes, relaciones y ajustes porcentuales rápido.", description: "Reúne porcentaje de un valor, relación y suma o resta de porcentaje en una sola página.", metaTitle: "Calculadora de Porcentaje — Gratis Online | Toolyflow", metaDescription: "Calcula porcentajes, relaciones y cambios porcentuales con una herramienta gratis.", keywords: ["calculadora de porcentaje", "porcentaje", "regla porcentual"], eyebrow: "Calculadora matemática", accentLabel: "Porcentaje", highlights: ["Resuelve tres tareas porcentuales comunes.", "Explica el resultado con lenguaje claro."], structuredDescription: "Calculadora de porcentaje gratis para relaciones y ajustes porcentuales.", content: percentageContent("es"), related: ["kredi-hesaplayici", "kira-artis-hesaplayici", "yas-hesaplayici"],
    },
    "kira-artis-hesaplayici": {
      slug: "kira-artis-hesaplayici", icon: "🏠", name: "Calculadora de Aumento de Alquiler", shortDescription: "Mira el nuevo alquiler y la tabla de aumento por periodos.", description: "Calcula el nuevo alquiler a partir del importe actual, la tasa y la cantidad de aumentos.", metaTitle: "Calculadora de Aumento de Alquiler — Gratis | Toolyflow", metaDescription: "Calcula el nuevo alquiler y distintos escenarios de aumento con una herramienta gratis.", keywords: ["aumento de alquiler", "calculadora de alquiler", "nuevo alquiler"], eyebrow: "Calculadora de vivienda", accentLabel: "Alquiler", highlights: ["Deja claro el nuevo importe al instante.", "Abre el impacto por periodos en una tabla."], structuredDescription: "Calculadora gratis para aumentos de alquiler y escenarios repetidos.", content: rentContent("es"), related: ["yuzde-hesaplayici", "kredi-hesaplayici", "yas-hesaplayici"],
    },
  },
  de: {
    "kredi-hesaplayici": {
      slug: "kredi-hesaplayici", icon: "🏦", name: "Kreditrechner", shortDescription: "Monatsrate, Gesamtrückzahlung und Zinskosten schnell prüfen.", description: "Betrag, Zins und Laufzeit eingeben und die Rückzahlung direkt sehen.", metaTitle: "Kreditrechner — Kostenlos Online | Toolyflow", metaDescription: "Monatsrate, Gesamtrückzahlung und Zinskosten mit einem kostenlosen Kreditrechner berechnen.", keywords: ["kreditrechner", "monatsrate", "darlehen"], eyebrow: "Finanzrechner", accentLabel: "Kredit", highlights: ["Zeigt Monatsrate und Gesamtkosten gemeinsam.", "Öffnet den Plan in einer klaren Tabelle."], structuredDescription: "Kostenloser Kreditrechner für Monatsrate und Gesamtrückzahlung.", content: creditContent("de"), related: ["kira-artis-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
    },
    "bmi-hesaplayici": {
      slug: "bmi-hesaplayici", icon: "⚖️", name: "BMI-Rechner", shortDescription: "BMI-Wert und kurze Einordnung auf Basis von Größe und Gewicht.", description: "Größe und Gewicht eingeben und BMI mit kurzer Einordnung sofort sehen.", metaTitle: "BMI-Rechner — Kostenlos Online | Toolyflow", metaDescription: "BMI mit Größe und Gewicht kostenlos online berechnen und direkt einordnen.", keywords: ["BMI-Rechner", "BMI", "Körpermasseindex"], eyebrow: "Gesundheitsrechner", accentLabel: "BMI", highlights: ["Kombiniert den Wert mit einer klaren Kategorie.", "Liefert eine kurze verständliche Einordnung."], structuredDescription: "Kostenloser BMI-Rechner auf Basis von Größe und Gewicht.", content: bmiContent("de"), related: ["yas-hesaplayici", "yuzde-hesaplayici", "kredi-hesaplayici"],
    },
    "yas-hesaplayici": {
      slug: "yas-hesaplayici", icon: "🎂", name: "Altersrechner", shortDescription: "Exaktes Alter in Jahren, Monaten und Tagen mit Zusatzdetails.", description: "Geburtsdatum eingeben und exaktes Alter, gelebte Tage und nächsten Geburtstag berechnen.", metaTitle: "Altersrechner — Kostenlos Online | Toolyflow", metaDescription: "Exaktes Alter aus dem Geburtsdatum kostenlos online berechnen.", keywords: ["altersrechner", "genaues alter", "geburtsdatum"], eyebrow: "Zeitrechner", accentLabel: "Alter", highlights: ["Zeigt das genaue Alter statt nur den Jahresabstand.", "Ergänzt gelebte Tage und den nächsten Geburtstag."], structuredDescription: "Kostenloser Altersrechner für genaues Alter und gelebte Tage.", content: ageContent("de"), related: ["bmi-hesaplayici", "yuzde-hesaplayici", "kira-artis-hesaplayici"],
    },
    "yuzde-hesaplayici": {
      slug: "yuzde-hesaplayici", icon: "📐", name: "Prozentrechner", shortDescription: "Prozentwerte, Anteile und Prozentanpassungen schnell berechnen.", description: "Drei Modi für Prozentwert, Anteil und Prozent addieren oder abziehen.", metaTitle: "Prozentrechner — Kostenlos Online | Toolyflow", metaDescription: "Prozentwerte, Anteile und prozentuale Änderungen kostenlos online berechnen.", keywords: ["prozentrechner", "prozentwert", "anteil"], eyebrow: "Mathe-Rechner", accentLabel: "Prozent", highlights: ["Deckt drei häufige Prozentfälle in einem Tool ab.", "Erklärt das Ergebnis zusätzlich in Klartext."], structuredDescription: "Kostenloser Prozentrechner für Anteile und Prozentänderungen.", content: percentageContent("de"), related: ["kredi-hesaplayici", "kira-artis-hesaplayici", "yas-hesaplayici"],
    },
    "kira-artis-hesaplayici": {
      slug: "kira-artis-hesaplayici", icon: "🏠", name: "Mieterhöhungsrechner", shortDescription: "Neue Miete und periodische Erhöhung schnell sichtbar machen.", description: "Aktuelle Miete, Rate und Anzahl der Erhöhungen eingeben und die neue Miete berechnen.", metaTitle: "Mieterhöhungsrechner — Kostenlos Online | Toolyflow", metaDescription: "Neue Miete und Erhöhungsszenarien mit einem kostenlosen Rechner berechnen.", keywords: ["mieterhöhungsrechner", "neue miete", "mietanpassung"], eyebrow: "Wohnungsrechner", accentLabel: "Miete", highlights: ["Setzt die neue Miete sofort in den Fokus.", "Zeigt mehrere Erhöhungen tabellarisch."], structuredDescription: "Kostenloser Rechner für Mieterhöhungen und neue Mietwerte.", content: rentContent("de"), related: ["yuzde-hesaplayici", "kredi-hesaplayici", "yas-hesaplayici"],
    },
  },
  fr: {
    "kredi-hesaplayici": {
      slug: "kredi-hesaplayici", icon: "🏦", name: "Calculateur de Crédit", shortDescription: "Mensualité, remboursement total et coût des intérêts en quelques secondes.", description: "Entre montant, taux et durée pour estimer la mensualité et le coût total du crédit.", metaTitle: "Calculateur de Crédit — Gratuit en Ligne | Toolyflow", metaDescription: "Calcule mensualité, remboursement total et intérêts avec un calculateur de crédit gratuit.", keywords: ["calculateur de crédit", "mensualité", "prêt"], eyebrow: "Calculateur finance", accentLabel: "Crédit", highlights: ["Affiche mensualité et coût total ensemble.", "Ouvre le détail dans un tableau clair."], structuredDescription: "Calculateur de crédit gratuit pour mensualité et remboursement total.", content: creditContent("fr"), related: ["kira-artis-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
    },
    "bmi-hesaplayici": {
      slug: "bmi-hesaplayici", icon: "⚖️", name: "Calculateur IMC", shortDescription: "Vois la valeur IMC et une lecture rapide à partir de la taille et du poids.", description: "Entre taille et poids pour calculer l’IMC et voir une interprétation immédiate.", metaTitle: "Calculateur IMC — Gratuit en Ligne | Toolyflow", metaDescription: "Calcule l’IMC avec taille et poids et vois ta catégorie gratuitement.", keywords: ["calculateur IMC", "IMC", "indice masse corporelle"], eyebrow: "Calculateur santé", accentLabel: "IMC", highlights: ["Associe la valeur à une catégorie claire.", "Ajoute un commentaire court et utile."], structuredDescription: "Calculateur IMC gratuit basé sur la taille et le poids.", content: bmiContent("fr"), related: ["yas-hesaplayici", "yuzde-hesaplayici", "kredi-hesaplayici"],
    },
    "yas-hesaplayici": {
      slug: "yas-hesaplayici", icon: "🎂", name: "Calculateur d’Âge", shortDescription: "Obtiens l’âge exact en années, mois et jours avec plus de détails.", description: "Calcule l’âge exact, les jours vécus et le temps avant le prochain anniversaire.", metaTitle: "Calculateur d’Âge — Gratuit en Ligne | Toolyflow", metaDescription: "Calcule l’âge exact à partir d’une date de naissance avec un outil gratuit.", keywords: ["calculateur d’âge", "âge exact", "date de naissance"], eyebrow: "Calculateur temps", accentLabel: "Âge", highlights: ["Montre l’âge exact et pas seulement l’année.", "Ajoute jours vécus et prochain anniversaire."], structuredDescription: "Calculateur d’âge gratuit pour l’âge exact et les jours vécus.", content: ageContent("fr"), related: ["bmi-hesaplayici", "yuzde-hesaplayici", "kira-artis-hesaplayici"],
    },
    "yuzde-hesaplayici": {
      slug: "yuzde-hesaplayici", icon: "📐", name: "Calculateur de Pourcentage", shortDescription: "Calcule pourcentages, parts et variations en quelques secondes.", description: "Réunit le calcul de pourcentage, de part et d’ajustement en une seule page.", metaTitle: "Calculateur de Pourcentage — Gratuit en Ligne | Toolyflow", metaDescription: "Calcule pourcentages, parts et variations pourcentuelles avec un outil gratuit.", keywords: ["calculateur de pourcentage", "pourcentage", "variation pourcentage"], eyebrow: "Calculateur maths", accentLabel: "Pourcentage", highlights: ["Couvre trois besoins fréquents sur une seule page.", "Explique le résultat avec une phrase claire."], structuredDescription: "Calculateur de pourcentage gratuit pour parts et variations.", content: percentageContent("fr"), related: ["kredi-hesaplayici", "kira-artis-hesaplayici", "yas-hesaplayici"],
    },
    "kira-artis-hesaplayici": {
      slug: "kira-artis-hesaplayici", icon: "🏠", name: "Calculateur d’Augmentation de Loyer", shortDescription: "Vois le nouveau loyer et le détail des hausses par période.", description: "Calcule le nouveau loyer à partir du loyer actuel, du taux et du nombre d’augmentations.", metaTitle: "Calculateur d’Augmentation de Loyer — Gratuit | Toolyflow", metaDescription: "Calcule le nouveau loyer et différents scénarios de hausse avec un outil gratuit.", keywords: ["augmentation de loyer", "calculateur loyer", "nouveau loyer"], eyebrow: "Calculateur logement", accentLabel: "Loyer", highlights: ["Met le nouveau loyer en avant immédiatement.", "Affiche l’effet de plusieurs hausses dans un tableau."], structuredDescription: "Calculateur gratuit pour hausses de loyer et nouveaux montants.", content: rentContent("fr"), related: ["yuzde-hesaplayici", "kredi-hesaplayici", "yas-hesaplayici"],
    },
  },
  pt: {
    "kredi-hesaplayici": {
      slug: "kredi-hesaplayici", icon: "🏦", name: "Calculadora de Crédito", shortDescription: "Veja parcela, total pago e juros em segundos.", description: "Digite valor, taxa e prazo para estimar a parcela mensal e o custo total.", metaTitle: "Calculadora de Crédito — Grátis Online | Toolyflow", metaDescription: "Calcule parcela mensal, total pago e juros com uma calculadora de crédito grátis.", keywords: ["calculadora de crédito", "parcela mensal", "empréstimo"], eyebrow: "Calculadora financeira", accentLabel: "Crédito", highlights: ["Mostra parcela e custo total juntos.", "Abre o plano em uma tabela clara."], structuredDescription: "Calculadora de crédito grátis para parcela mensal e total pago.", content: creditContent("pt"), related: ["kira-artis-hesaplayici", "yuzde-hesaplayici", "yas-hesaplayici"],
    },
    "bmi-hesaplayici": {
      slug: "bmi-hesaplayici", icon: "⚖️", name: "Calculadora de IMC", shortDescription: "Veja o IMC e uma leitura rápida com base em altura e peso.", description: "Digite altura e peso para calcular o IMC e ver a faixa em segundos.", metaTitle: "Calculadora de IMC — Grátis Online | Toolyflow", metaDescription: "Calcule o IMC com altura e peso e veja sua faixa com uma ferramenta grátis.", keywords: ["calculadora de IMC", "IMC", "índice de massa corporal"], eyebrow: "Calculadora de saúde", accentLabel: "IMC", highlights: ["Combina o número com uma faixa clara.", "Adiciona um comentário curto e útil."], structuredDescription: "Calculadora de IMC grátis com base em altura e peso.", content: bmiContent("pt"), related: ["yas-hesaplayici", "yuzde-hesaplayici", "kredi-hesaplayici"],
    },
    "yas-hesaplayici": {
      slug: "yas-hesaplayici", icon: "🎂", name: "Calculadora de Idade", shortDescription: "Descubra a idade exata em anos, meses e dias com detalhes extras.", description: "Calcule a idade exata, dias vividos e o tempo até o próximo aniversário.", metaTitle: "Calculadora de Idade — Grátis Online | Toolyflow", metaDescription: "Calcule a idade exata a partir da data de nascimento com uma ferramenta grátis.", keywords: ["calculadora de idade", "idade exata", "data de nascimento"], eyebrow: "Calculadora de tempo", accentLabel: "Idade", highlights: ["Mostra a idade exata em vez de uma conta aproximada.", "Inclui dias vividos e próximo aniversário."], structuredDescription: "Calculadora de idade grátis para idade exata e dias vividos.", content: ageContent("pt"), related: ["bmi-hesaplayici", "yuzde-hesaplayici", "kira-artis-hesaplayici"],
    },
    "yuzde-hesaplayici": {
      slug: "yuzde-hesaplayici", icon: "📐", name: "Calculadora de Percentagem", shortDescription: "Calcule percentuais, proporções e ajustes percentuais sem esforço.", description: "Reúne percentual de um valor, proporção e soma ou subtração de percentagem.", metaTitle: "Calculadora de Percentagem — Grátis Online | Toolyflow", metaDescription: "Calcule percentuais, proporções e mudanças percentuais com uma ferramenta grátis.", keywords: ["calculadora de percentagem", "percentual", "proporção"], eyebrow: "Calculadora matemática", accentLabel: "Percentagem", highlights: ["Resolve três tarefas percentuais comuns em uma página.", "Explica o resultado em linguagem simples."], structuredDescription: "Calculadora de percentagem grátis para proporções e ajustes percentuais.", content: percentageContent("pt"), related: ["kredi-hesaplayici", "kira-artis-hesaplayici", "yas-hesaplayici"],
    },
    "kira-artis-hesaplayici": {
      slug: "kira-artis-hesaplayici", icon: "🏠", name: "Calculadora de Aumento de Aluguel", shortDescription: "Veja o novo aluguel e a tabela de aumento por período.", description: "Calcule o novo aluguel com base no valor atual, na taxa e na quantidade de aumentos.", metaTitle: "Calculadora de Aumento de Aluguel — Grátis | Toolyflow", metaDescription: "Calcule novos valores de aluguel e cenários de aumento com uma ferramenta grátis.", keywords: ["aumento de aluguel", "calculadora de aluguel", "novo aluguel"], eyebrow: "Calculadora de moradia", accentLabel: "Aluguel", highlights: ["Destaca o novo valor logo no topo.", "Mostra vários aumentos em uma tabela clara."], structuredDescription: "Calculadora grátis para aumentos de aluguel e novos valores.", content: rentContent("pt"), related: ["yuzde-hesaplayici", "kredi-hesaplayici", "yas-hesaplayici"],
    },
  },
};

export function getCalculatorCategory(locale: Locale): CalculatorCategory {
  return localeRouteStrings[locale].category;
}

export function getCalculatorCategoryPathSegment(locale: Locale) {
  return localeRouteStrings[locale].categoryPath;
}

export function getCalculatorPrefix(locale: Locale) {
  return localeRouteStrings[locale].prefix;
}

export function getCalculatorRouteSlug(locale: Locale, slug: CalculatorSlug) {
  return localeRouteStrings[locale].routeSlugs[slug];
}

export function getCalculatorPath(locale: Locale, slug: CalculatorSlug) {
  return `/${locale}/${getCalculatorPrefix(locale)}/${getCalculatorRouteSlug(locale, slug)}`;
}

export function getCalculatorCategoryPath(locale: Locale) {
  return `/${locale}/${getCalculatorCategoryPathSegment(locale)}`;
}

export function getCalculatorStaticParams() {
  return (Object.keys(localeRouteStrings) as Locale[]).flatMap((locale) => [
    { locale, slug: [getCalculatorCategoryPathSegment(locale)] },
    ...calculatorSlugs.map((calculatorSlug) => ({
      locale,
      slug: [getCalculatorPrefix(locale), getCalculatorRouteSlug(locale, calculatorSlug)],
    })),
  ]);
}

export function getCalculatorSlugFromRoute(locale: Locale, routeSlug: string) {
  return (
    calculatorSlugs.find((slug) => getCalculatorRouteSlug(locale, slug) === routeSlug) ?? null
  );
}

export function resolveCalculatorRoute(locale: Locale, segments?: string[]) {
  const pathSegments = segments?.filter(Boolean) ?? [];

  if (pathSegments.length === 1 && pathSegments[0] === getCalculatorCategoryPathSegment(locale)) {
    return { kind: "calculator-category" as const };
  }

  if (
    pathSegments.length === 2 &&
    pathSegments[0] === getCalculatorPrefix(locale)
  ) {
    const slug = getCalculatorSlugFromRoute(locale, pathSegments[1]);

    if (slug) {
      return { kind: "calculator" as const, slug };
    }
  }

  return null;
}

export function getCalculatorEntries(locale: Locale): CalculatorEntry[] {
  return calculatorSlugs.map((slug) => getCalculatorEntry(locale, slug)!);
}

export function getCalculatorEntry(locale: Locale, slug: string) {
  if (!calculatorSlugs.includes(slug as CalculatorSlug)) {
    return null;
  }

  const typedSlug = slug as CalculatorSlug;
  const entry = localizedCalculatorData[locale][typedSlug];

  return {
    ...entry,
    routeSlug: getCalculatorRouteSlug(locale, typedSlug),
  };
}

export function getCalculatorRelatedEntries(locale: Locale, slugs: CalculatorSlug[]) {
  return slugs
    .map((slug) => getCalculatorEntry(locale, slug))
    .filter((item): item is CalculatorEntry => Boolean(item));
}

export function getAgeCalculatorLabels(locale: Locale) {
  return ageLabels[locale];
}

export function getBmiCalculatorLabels(locale: Locale) {
  return bmiLabels[locale];
}

export function getCreditCalculatorLabels(locale: Locale) {
  return creditLabels[locale];
}

export function getPercentageCalcLabels(locale: Locale) {
  return percentageLabels[locale];
}

export function getRentIncreaseCalculatorLabels(locale: Locale) {
  return rentLabels[locale];
}

export function getCalculatorAllLocalizedPaths(slug: CalculatorSlug) {
  return Object.fromEntries(
    (Object.keys(localeRouteStrings) as Locale[]).map((locale) => [locale, getCalculatorPath(locale, slug)])
  );
}

export function getCalculatorCategoryAllLocalizedPaths() {
  return Object.fromEntries(
    (Object.keys(localeRouteStrings) as Locale[]).map((locale) => [locale, getCalculatorCategoryPath(locale)])
  );
}

export const trCalculatorPrefix = getCalculatorPrefix("tr");
export const trCalculatorCategorySegment = getCalculatorCategoryPathSegment("tr");
export const trCalculatorSlugs = calculatorSlugs;
export const trCalculatorCategory = getCalculatorCategory("tr");
export function getTrCalculatorCategoryPath() {
  return getCalculatorCategoryPath("tr");
}
export function getTrCalculatorPath(slug: TrCalculatorSlug) {
  return getCalculatorPath("tr", slug);
}
export function getTrCalculatorEntries() {
  return getCalculatorEntries("tr");
}
export function getTrCalculatorEntry(slug: string) {
  return getCalculatorEntry("tr", slug);
}
