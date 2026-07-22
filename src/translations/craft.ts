export interface CraftStat {
  n: string;
  t: string;
}

export interface CraftCopy {
  label: string;
  heading: string[];
  description: string[];
  stats: CraftStat[];
  toggleLabel: string;
}

export type CraftLocale = "mr" | "en";

export const craftCopy: Record<CraftLocale, CraftCopy> = {
  mr: {
    label: "०२ • प्रक्रिया",
    heading: ["निसर्गाची शुद्धता,", "तितक्याच काळजीने जपलेली."],
    description: [
      "नैसर्गिक उगमापासून प्रत्येक बाटलीपर्यंतचा प्रवास अत्यंत स्वच्छ, नियंत्रित आणि आधुनिक प्रक्रियेतून पूर्ण केला जातो.",
      "स्वयंचलित भरणी, सुरक्षित पॅकेजिंग आणि सातत्यपूर्ण गुणवत्ता तपासणीमुळे प्रत्येक बाटलीत निसर्गाने दिलेली शुद्धता आणि ताजेपणा कायम राहतो.",
    ],
    stats: [
      { n: "स्वयंचलित", t: "भरणी" },
      { n: "गुणवत्ता", t: "तपासणी" },
      { n: "फूड ग्रेड", t: "पॅकेजिंग" },
    ],
    toggleLabel: "EN",
  },
  en: {
    label: "02 • CRAFT",
    heading: ["Purity deserves precision.", "Every single bottle."],
    description: [
      "From our natural source, every bottle passes through a carefully controlled bottling process designed to preserve the water exactly as nature created it.",
      "Automated filling, hygienic packaging, and continuous quality checks ensure that every bottle reaching you carries the same freshness, purity, and mineral balance from the source.",
    ],
    stats: [
      { n: "Automated", t: "Precision Filling" },
      { n: "Quality", t: "Checked" },
      { n: "Food Grade", t: "Packaging" },
    ],
    toggleLabel: "मराठी",
  },
};
