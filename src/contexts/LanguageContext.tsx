import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Lang = 'he' | 'en'

interface LanguageContextType {
  lang: Lang
  dir: 'rtl' | 'ltr'
  toggleLang: () => void
  t: <T extends React.ReactNode>(he: T, en: T) => T
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'he',
  dir: 'rtl',
  toggleLang: () => {},
  t: <T extends React.ReactNode>(he: T) => he,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('he')

  const dir = lang === 'he' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    document.documentElement.classList.toggle('lang-en', lang === 'en')
    document.documentElement.classList.toggle('lang-he', lang === 'he')
  }, [lang, dir])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'))
  }, [])

  const t = useCallback(<T extends React.ReactNode>(he: T, en: T): T => (lang === 'he' ? he : en), [lang])

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
