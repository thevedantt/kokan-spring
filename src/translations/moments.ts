export interface MomentsCard {
  image: string;
  title: string;
  desc: string[];
}

export interface MomentsCopy {
  label: string;
  heading: string[];
  intro: string[];
  body: string[];
  italic: string;
  toggleLabel: string;
  cards: MomentsCard[];
}

export type MomentsLocale = "mr" | "en";

export const momentsCopy: Record<MomentsLocale, MomentsCopy> = {
  mr: {
    label: "०४ • प्रत्येक क्षणासाठी",
    heading: ["निर्मळ पाणी, जीवनाच्या", "प्रत्येक क्षणासाठी."],
    intro: ["पहाटेच्या पहिल्या घोटापासून आयुष्यातील", "सर्वात खास क्षणांपर्यंत."],
    body: [
      "कोकण स्प्रिंग प्रत्येक प्रवासाचा, प्रत्येक आनंदाचा",
      "आणि प्रत्येक यशाचा नैसर्गिक साथीदार.",
    ],
    italic: "निसर्गातून... प्रत्येक क्षणासाठी.",
    toggleLabel: "EN",
    cards: [
      {
        image: "/images/workspace.png",
        title: "कामासाठी ताजेतवाने",
        desc: ["दिवसभरातील प्रत्येक कल्पना,", "बैठक आणि यशस्वी निर्णयांसाठी", "निर्मळ नैसर्गिक पाणी."],
      },
      {
        image: "/images/gym.png",
        title: "ऊर्जेला नवी ताकद",
        desc: ["व्यायामापूर्वी,", "व्यायामादरम्यान", "आणि त्यानंतरही", "नैसर्गिक हायड्रेशन."],
      },
      {
        image: "/images/wedding.png",
        title: "प्रत्येक आनंदसोहळ्यात",
        desc: ["लग्नसमारंभ,", "कौटुंबिक कार्यक्रम", "आणि प्रत्येक खास", "क्षणासाठी विश्वासाची साथ."],
      },
      {
        image: "/images/restaurant.png",
        title: "आदरातिथ्याची शान",
        desc: ["हॉटेल्स,", "रेस्टॉरंट्स", "आणि प्रीमियम भोजन अनुभवासाठी", "विश्वासार्ह निवड."],
      },
    ],
  },
  en: {
    label: "04 • EVERYDAY MOMENTS",
    heading: ["Pure water,", "where life happens."],
    intro: ["From early mornings", "to life's biggest celebrations,"],
    body: [
      "Kokan Spring is made to be part",
      "of every journey,",
      "every achievement,",
      "and every celebration.",
    ],
    italic: "Naturally. Everyday.",
    toggleLabel: "मराठी",
    cards: [
      {
        image: "/images/workspace.png",
        title: "Work Smarter",
        desc: [
          "Stay refreshed through every meeting,",
          "deadline and idea with naturally",
          "refreshing drinking water.",
        ],
      },
      {
        image: "/images/gym.png",
        title: "Train Better",
        desc: [
          "Hydration that supports your active",
          "lifestyle before, during and after",
          "every workout.",
        ],
      },
      {
        image: "/images/wedding.png",
        title: "Celebrate Together",
        desc: ["From weddings to family celebrations,", "every table deserves pure refreshment."],
      },
      {
        image: "/images/restaurant.png",
        title: "Serve with Confidence",
        desc: ["Perfect for restaurants, hotels", "and premium dining experiences."],
      },
    ],
  },
};
