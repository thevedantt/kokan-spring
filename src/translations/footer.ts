export interface FooterCopy {
  brandDescription: string[];
  tagline: string[];
  bottomLinks: string;
}

export type FooterLocale = "mr" | "en";

export const footerCopy: Record<FooterLocale, FooterCopy> = {
  mr: {
    brandDescription: [
      "प्रत्येक बाटलीची सुरुवात सह्याद्रीतून.",
      "निर्मळ झऱ्याचे पाणी,",
      "प्रत्येक घरासाठी आणि प्रत्येक प्रवासासाठी.",
    ],
    tagline: ["सह्याद्रीतून...", "प्रत्येक घोटापर्यंत."],
    bottomLinks: "गोपनीयता · अटी व शर्ती · सह्याद्रीतून निर्मळतेचा प्रवास",
  },
  en: {
    brandDescription: [
      "Every bottle begins in the Sahyadri.",
      "Pure spring water, thoughtfully packaged",
      "for homes, businesses and every journey.",
    ],
    tagline: ["From the Sahyadri.", "To Every Sip."],
    bottomLinks: "Privacy Policy · Terms & Conditions · Crafted in the Sahyadri",
  },
};
