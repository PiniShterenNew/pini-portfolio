"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import translations from "@/lib/i18n";

interface AppContextType {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)["en"];
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<"dark" | "light">("dark");
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const savedTheme = (localStorage.getItem("pini-theme") as "dark" | "light") || "dark";
      const savedLang = (localStorage.getItem("pini-lang") as Lang) || "en";
      setThemeState(savedTheme);
      setLangState(savedLang);
    } catch {}
  }, []);

  const setTheme = (t: "dark" | "light") => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("pini-theme", t); } catch {}
  };

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("dir", translations[l].dir);
    try { localStorage.setItem("pini-lang", l); } catch {}
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", translations[lang].dir);
  }, [lang]);

  return (
    <AppContext.Provider value={{ theme, setTheme, lang, setLang, t: translations[lang] }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
