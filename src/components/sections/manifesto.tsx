"use client";

import { manifestoCopy } from "@/translations/manifesto";
import { useLanguage } from "@/lib/language-context";

export function Manifesto() {
  const { locale } = useLanguage();
  const copy = manifestoCopy[locale];

  return (
    <section className="manifesto wrap">
      <span className="eyebrow c" data-rv="true">
        {copy.label}
      </span>
      <p className="big serif" data-rv="true">
        {copy.headingLine1}
        <br />
        {copy.headingLine2} <em>{copy.headingEm}</em>
      </p>
      <p className="lead" data-rv="true">
        {copy.body}
      </p>
    </section>
  );
}
