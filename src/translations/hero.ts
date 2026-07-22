export interface HeroCopy {
  headingLine1: string;
  headingEm: string;
  description: string[];
  signatureLine1: string;
  signatureLine2: string;
  scroll: string;
}

export type HeroLocale = "mr" | "en";

export const heroCopy: Record<HeroLocale, HeroCopy> = {
  mr: {
    headingLine1: "निर्मळ",
    headingEm: "ताजेपणा.",
    description: [
      "सह्याद्रीच्या नैसर्गिक झऱ्यातून",
      "निर्मळ, ताजे आणि विश्वासार्ह पाणी.",
      "प्रत्येक प्रवासासाठी, प्रत्येक घरासाठी,",
      "प्रत्येक क्षणासाठी.",
    ],
    signatureLine1: "कोकण स्प्रिंग",
    signatureLine2: "सह्याद्री • महाराष्ट्र",
    scroll: "खाली स्क्रोल करा",
  },
  en: {
    headingLine1: "Pure",
    headingEm: "refreshment.",
    description: [
      "Pure natural spring water sourced from the Sahyadri ranges.",
      "Clean, refreshing hydration for every journey, every home,",
      "and every moment that matters.",
    ],
    signatureLine1: "KOKAN SPRING",
    signatureLine2: "SAHYADRI • MAHARASHTRA",
    scroll: "SCROLL TO EXPLORE",
  },
};
