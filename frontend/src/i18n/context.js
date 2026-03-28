import { createContext, useContext, useState, useEffect, useCallback } from "react";
import translations from "./translations";

const I18nContext = createContext();

function detectLang() {
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "pt") return stored;
  const browser = navigator.language || navigator.userLanguage || "";
  return browser.startsWith("pt") ? "pt" : "en";
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  const setLang = useCallback((l) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
