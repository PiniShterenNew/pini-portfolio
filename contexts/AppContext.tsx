"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import translations from "@/lib/i18n";

type Theme = "dark" | "light";

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (typeof translations)["en"];
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = (localStorage.getItem("pini.lang") as Lang) || "en";
      setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const saved = (localStorage.getItem("pini.theme") as Theme) || "dark";
      setThemeState(saved);
      document.documentElement.classList.toggle("light", saved === "light");
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("dir", translations[l].dir);
    try {
      localStorage.setItem("pini.lang", l);
    } catch {}
  };

  const toggleLang = () => setLang(lang === "en" ? "he" : "en");

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("pini.theme", next);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", translations[lang].dir);
  }, [lang]);

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang], theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
