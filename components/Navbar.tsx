// Description: site navigation with language toggle, all text from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useApp } from '@/contexts/AppContext'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function Navbar() {
  const { lang, toggleLang, t, theme, toggleTheme } = useApp()
  const navRef = useRef<HTMLElement>(null)
  const themeBtnRef = useRef<HTMLButtonElement>(null)
  const langBtnRef = useRef<HTMLButtonElement>(null)

  useGSAP(
    () => {
      const nav = navRef.current
      if (!nav) return

      ScrollTrigger.create({
        start: 'top -60',
        onEnter: () => nav.classList.add('scrolled'),
        onLeaveBack: () => nav.classList.remove('scrolled'),
      })
    },
    { scope: navRef }
  )

  const handleThemeToggle = () => {
    const overlay = document.getElementById('gsap-overlay')
    if (!overlay) { toggleTheme(); return }

    // Capture current bg before the theme changes
    const currentBg = getComputedStyle(document.documentElement)
      .getPropertyValue('--bg').trim()
    overlay.style.background = currentBg

    // Spin the icon
    if (themeBtnRef.current) {
      gsap.fromTo(
        themeBtnRef.current,
        { rotate: 0, scale: 1 },
        { rotate: 180, scale: 0.75, duration: 0.15, ease: 'power2.in',
          onComplete: () => gsap.to(themeBtnRef.current, { rotate: 360, scale: 1, duration: 0.25, ease: 'back.out(2)' })
        }
      )
    }

    gsap.timeline()
      .to(overlay, { opacity: 1, duration: 0.14, ease: 'power1.in' })
      .call(toggleTheme)
      .to(overlay, { opacity: 0, duration: 0.38, ease: 'power2.out' }, '+=0.02')
  }

  const handleLangToggle = () => {
    const main = document.querySelector('main')
    if (!main) { toggleLang(); return }

    // EN→HE: exit left, enter from right. HE→EN: exit right, enter from left.
    const isGoingRTL = lang === 'en'
    const exitX = isGoingRTL ? -28 : 28
    const enterX = isGoingRTL ? 28 : -28

    // Flash the lang button
    if (langBtnRef.current) {
      gsap.fromTo(
        langBtnRef.current,
        { scale: 1 },
        { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.inOut' }
      )
    }

    gsap.timeline()
      .to(main, { opacity: 0, x: exitX, duration: 0.2, ease: 'power2.in' })
      .call(toggleLang)
      .set(main, { x: enterX })
      .to(main, { opacity: 1, x: 0, duration: 0.38, ease: 'power3.out' })
  }

  return (
    <nav className='nav' ref={navRef}>
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
          ref={themeBtnRef}
          className='themetoggle'
          onClick={handleThemeToggle}
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
        <button
          ref={langBtnRef}
          className='langtoggle'
          onClick={handleLangToggle}
          aria-label={t.nav.langToggleAria}
        >
          <span className={lang === 'en' ? 'on' : undefined}>{t.nav.langEn}</span>
          <span style={{ opacity: 0.3 }}>/</span>
          <span className={lang === 'he' ? 'on' : undefined}>{t.nav.langHe}</span>
        </button>
      </div>
    </nav>
  )
}
