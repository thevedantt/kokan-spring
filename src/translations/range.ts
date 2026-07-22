export interface RangeProduct {
  image: string;
  badge: string;
  price: string;
  title: string;
  description: string;
}

export interface RangeCopy {
  label: string;
  heading: string;
  toggleLabel: string;
  mrpLabel: string;
  products: RangeProduct[];
}

export type RangeLocale = "mr" | "en";

export const rangeCopy: Record<RangeLocale, RangeCopy> = {
  mr: {
    label: "उत्पादन श्रेणी",
    heading: "एकच झरा. पाच आकार.",
    toggleLabel: "EN",
    mrpLabel: "एमआरपी",
    products: [
      {
        image: "/products/200ml.png",
        badge: "200 ML",
        price: "₹10",
        title: "",
        description: "प्रवास आणि दैनंदिन वापरासाठी योग्य, हलकी आणि सोयीस्कर.",
      },
      {
        image: "/products/500ml.png",
        badge: "500 ML",
        price: "₹20",
        title: "",
        description: "काम, अभ्यास आणि रोजच्या वापरासाठी आदर्श साथीदार.",
      },
      {
        image: "/products/1l.png",
        badge: "1 L",
        price: "₹30",
        title: "",
        description: "दिवसभर नैसर्गिक हायड्रेशनसाठी परिपूर्ण संतुलन.",
      },
      {
        image: "/products/2l.png",
        badge: "2 L",
        price: "₹50",
        title: "",
        description: "संपूर्ण कुटुंबासाठी पुरेसा नैसर्गिक ताजेपणा.",
      },
      {
        image: "/products/5l.png",
        badge: "5 L",
        price: "₹100",
        title: "",
        description: "घर, कार्यालय आणि समारंभांसाठी योग्य निवड.",
      },
    ],
  },
  en: {
    label: "THE RANGE",
    heading: "One Spring. Five Sizes.",
    toggleLabel: "मराठी",
    mrpLabel: "MRP",
    products: [
      {
        image: "/products/200ml.png",
        badge: "200 ML",
        price: "₹10",
        title: "Pocket Refresh",
        description: "Compact hydration for travel, work and everyday refreshment.",
      },
      {
        image: "/products/500ml.png",
        badge: "500 ML",
        price: "₹20",
        title: "Daily Essential",
        description: "Your everyday companion for work, study and hydration.",
      },
      {
        image: "/products/1l.png",
        badge: "1 L",
        price: "₹30",
        title: "Everyday Balance",
        description: "Designed to keep you refreshed throughout the day.",
      },
      {
        image: "/products/2l.png",
        badge: "2 L",
        price: "₹50",
        title: "Family Choice",
        description: "Ideal for sharing fresh natural water with everyone at home.",
      },
      {
        image: "/products/5l.png",
        badge: "5 L",
        price: "₹100",
        title: "Pure for Everyone",
        description: "Perfect for homes, offices and every gathering in between.",
      },
    ],
  },
};
