// Description: site navigation with language toggle, all text from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import Image from 'next/image'
import { useApp } from '@/contexts/AppContext'

export default function Navbar() {
  const { lang, toggleLang, t, theme, toggleTheme } = useApp()

  return (
    <nav className='nav'>
      <div className='nav__mark'>
        <Image
          src='/logo.svg'
          alt={t.nav.logoAlt}
          width={28}
          height={28}
          className='nav__logo'
          priority
        />
        <span>{t.nav.mark}</span>
      </div>
      <div className='nav__links'>
        <a href='#work'>{t.nav.work}</a>
        <a href='#about'>{t.nav.about}</a>
        <a href='#contact'>{t.nav.contact}</a>
        <button
          className='themetoggle'
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? (
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
              <circle cx='12' cy='12' r='4' />
              <path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
            </svg>
          ) : (
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
            </svg>
          )}
        </button>
        <button className='langtoggle' onClick={toggleLang} aria-label={t.nav.langToggleAria}>
          <span className={lang === 'en' ? 'on' : undefined}>{t.nav.langEn}</span>
          <span style={{ opacity: 0.3 }}>/</span>
          <span className={lang === 'he' ? 'on' : undefined}>{t.nav.langHe}</span>
        </button>
      </div>
    </nav>
  )
}
