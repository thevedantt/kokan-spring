"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      className="nav-lang-toggle"
      onClick={toggleLocale}
      aria-label="Toggle language"
    >
      {locale === "mr" ? "EN" : "मराठी"}
    </button>
  );
}
