import { createContext, useContext, useState, useEffect, useCallback } from "react";
import translations from "./translations";

const I18nContext = createContext();

function detectLang() {
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "pt" || stored === "fr" || stored === "it") return stored;
  const browser = navigator.language || navigator.userLanguage || "";
  if (browser.startsWith("pt")) return "pt";
  if (browser.startsWith("fr")) return "fr";
  if (browser.startsWith("it")) return "it";
  return "en";
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  const setLang = useCallback((l) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    const htmlLang = { en: "en", pt: "pt-BR", fr: "fr-CA", it: "it-IT" };
    document.documentElement.lang = htmlLang[l] || "en";
  }, []);

  useEffect(() => {
    const htmlLang = { en: "en", pt: "pt-BR", fr: "fr-CA", it: "it-IT" };
    document.documentElement.lang = htmlLang[lang] || "en";
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
