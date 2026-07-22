export interface ManifestoCopy {
  label: string;
  headingLine1: string;
  headingLine2: string;
  headingEm: string;
  body: string;
  toggleLabel: string;
}

export type ManifestoLocale = "mr" | "en";

export const manifestoCopy: Record<ManifestoLocale, ManifestoCopy> = {
  mr: {
    label: "कोकण स्प्रिंग • सह्याद्री",
    headingLine1: "आम्ही फक्त पाणी बाटलीत भरत नाही.",
    headingLine2: "आम्ही भरतो",
    headingEm: "निसर्गाची शुद्धता.",
    body: "सह्याद्रीच्या नैसर्गिक झऱ्यांतून सुरू झालेला प्रत्येक थेंब काळजीपूर्वक शुद्ध करून, सुरक्षितपणे पॅक करून तुमच्यापर्यंत पोहोचवला जातो. प्रत्येक बाटलीत निसर्गाची शुद्धता आणि विश्वास.",
    toggleLabel: "EN",
  },
  en: {
    label: "KOKAN SPRING • SAHYADRI RANGES",
    headingLine1: "We don't bottle water.",
    headingLine2: "We bottle",
    headingEm: "nature's purity.",
    body: "Every bottle of KOKAN SPRING begins in the pristine Sahyadri ranges, where nature filters every drop over time. Carefully purified, hygienically packed and delivered fresh, it's water you can trust every day.",
    toggleLabel: "मराठी",
  },
};
