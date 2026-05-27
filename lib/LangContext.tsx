"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "./translations";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["uz"];
}

const LangContext = createContext<LangContextType>({
  lang: "uz",
  setLang: () => {},
  t: translations.uz,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("uz");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
