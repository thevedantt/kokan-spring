"use client";

import * as React from "react";

export type Locale = "mr" | "en";

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>("mr");

  const toggleLocale = React.useCallback(() => {
    setLocale((prev) => (prev === "mr" ? "en" : "mr"));
  }, []);

  const value = React.useMemo(() => ({ locale, toggleLocale }), [locale, toggleLocale]);

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
