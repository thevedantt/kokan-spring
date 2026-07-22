export interface OriginStat {
  k: string;
  l: string;
}

export interface OriginCopy {
  label: string;
  heading: string[];
  description: string[];
  stats: OriginStat[];
  toggleLabel: string;
}

export type OriginLocale = "mr" | "en";

export const originCopy: Record<OriginLocale, OriginCopy> = {
  mr: {
    label: "०१ • उगम",
    heading: ["सह्याद्रीच्या कुशीत जन्मलेले,", "निसर्गाने शुद्ध केलेले."],
    description: [
      "सह्याद्रीच्या हिरव्यागार पर्वतरांगांमध्ये, दगडांच्या नैसर्गिक थरांतून प्रवास करत प्रत्येक थेंब शुद्धतेचा वारसा घेतो.",
      "निसर्गाने वर्षानुवर्षे शुद्ध केलेले हे पाणी, कोणतीही नैसर्गिक गुणवत्ता न बदलता काळजीपूर्वक बाटलीबंद केले जाते.",
    ],
    stats: [
      { k: "सह्याद्री", l: "नैसर्गिक उगम" },
      { k: "१००%", l: "नैसर्गिक शुद्धीकरण" },
      { k: "शुद्ध", l: "खनिजयुक्त" },
    ],
    toggleLabel: "EN",
  },
  en: {
    label: "01 • ORIGIN",
    heading: ["Every drop begins where the mountains breathe."],
    description: [
      "Deep within the Sahyadri ranges, our water begins its journey through layers of ancient rock and mineral-rich earth.",
      "Protected by untouched forests and naturally filtered over time, every drop reaches our source with the purity nature intended—before it is carefully bottled without compromising its freshness.",
    ],
    stats: [
      { k: "Western Ghats", l: "Natural Source" },
      { k: "100%", l: "Natural Filtration" },
      { k: "Pure", l: "Mineral Rich" },
    ],
    toggleLabel: "मराठी",
  },
};
