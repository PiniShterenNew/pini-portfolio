// Description: site navigation with language toggle, all text from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import Image from 'next/image'
import { useApp } from '@/contexts/AppContext'

export default function Navbar() {
  const { lang, toggleLang, t } = useApp()

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
        <button className='langtoggle' onClick={toggleLang} aria-label={t.nav.langToggleAria}>
          <span className={lang === 'en' ? 'on' : undefined}>{t.nav.langEn}</span>
          <span style={{ opacity: 0.3 }}>/</span>
          <span className={lang === 'he' ? 'on' : undefined}>{t.nav.langHe}</span>
        </button>
      </div>
    </nav>
  )
}
