export interface CtaCopy {
  label: string;
  heading: string[];
  body: string;
  button: string;
  quickConnect: string;
  locationLabel: string;
  viewOnMaps: string;
}

export type CtaLocale = "mr" | "en";

export const ctaCopy: Record<CtaLocale, CtaCopy> = {
  mr: {
    label: "सुरुवात",
    heading: ["शुद्ध पाण्याच्या", "प्रवासाची सुरुवात करा."],
    body: "सह्याद्रीच्या नैसर्गिक झऱ्यातून भरलेले ताजे पाणी आता तुमच्या घरापर्यंत, कार्यालयापर्यंत आणि व्यवसायापर्यंत.",
    button: "आत्ताच ऑर्डर करा",
    quickConnect: "जलद संपर्क",
    locationLabel: "स्थान",
    viewOnMaps: "गुगल नकाशावर पहा",
  },
  en: {
    label: "BEGIN",
    heading: ["Start your hydration journey."],
    body: "Experience natural spring water from the Sahyadri, delivered fresh to your home, office, restaurant, or business.",
    button: "Order Now",
    quickConnect: "Quick Connect",
    locationLabel: "Location",
    viewOnMaps: "View on Google Maps",
  },
};
