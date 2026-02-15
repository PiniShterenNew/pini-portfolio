import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { name: t('יכולות', 'Features'), href: '#features' },
    { name: t('עבודות', 'Work'), href: '#work' },
    { name: t('תהליך', 'Process'), href: '#process' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight-base/80 backdrop-blur-xl border-b border-midnight-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-wrap flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          aria-label={t('חזרה לדף הבית', 'Back to home')}
          className="font-head font-bold text-lg text-tx-primary hover:text-accent transition-colors duration-200 tracking-tight"
        >
          PS<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 font-body text-sm font-medium text-tx-secondary hover:text-tx-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="mx-3 px-3 py-1.5 text-xs font-head font-medium text-tx-secondary border border-midnight-border rounded hover:border-accent/40 hover:text-accent transition-all duration-200"
            aria-label={t('Switch to English', 'עבור לעברית')}
          >
            {lang === 'he' ? 'EN' : 'HE'}
          </button>

          {/* CTA */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm py-2.5 px-5"
          >
            {t('בואו נדבר', "Let's Talk")}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 text-xs font-head font-medium text-tx-secondary border border-midnight-border rounded hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            {lang === 'he' ? 'EN' : 'HE'}
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 text-tx-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t('סגור תפריט', 'Close menu') : t('פתח תפריט', 'Open menu')}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            ref={menuRef}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-midnight-surface border border-midnight-border rounded-lg p-4 flex flex-col items-center gap-1 z-50"
            role="navigation"
            aria-label={t('תפריט ניווט', 'Navigation menu')}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-full text-center py-3 px-4 font-body font-medium text-tx-primary hover:text-accent rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="w-full pt-2 mt-2 border-t border-midnight-border">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary w-full text-sm"
              >
                {t('בואו נדבר', "Let's Talk")}
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar
