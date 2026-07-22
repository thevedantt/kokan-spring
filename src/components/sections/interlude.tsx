"use client";

import { useLanguage, type Locale } from "@/lib/language-context";

const interludeCopy: Record<Locale, { label: string; heading: string }> = {
  mr: {
    label: "कोकण स्प्रिंग",
    heading: "जिथे शुद्धतेची सुरुवात होते.",
  },
  en: {
    label: "KOKAN SPRING",
    heading: "Where purity begins.",
  },
};

export function Interlude() {
  const { locale } = useLanguage();
  const copy = interludeCopy[locale];

  return (
    <section className="interlude">
      <div className="bg">
        <picture>
          <source media="(max-width: 820px)" srcSet="/images/stream_responsive.png" />
          <img src="/images/stream.png" alt="Flowing natural spring water" data-par="true" />
        </picture>
      </div>
      <div className="q">
        <span className="jp">{copy.label}</span>
        <blockquote className="serif">{copy.heading}</blockquote>
      </div>
    </section>
  );
}
