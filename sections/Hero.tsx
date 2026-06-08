// Description: hero section, all text from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useRef } from 'react'
import { useApp } from '@/contexts/AppContext'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Segments from '@/components/Segments'
import Ticker from '@/components/Ticker'
import PortraitPicture from '@/components/PortraitPicture'

export default function Hero() {
  const { t, lang } = useApp()
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero__meta .item', {
        opacity: 0,
        y: 14,
        stagger: 0.07,
        duration: 0.55,
      })
        .from(
          '.hero__content .stack',
          {
            opacity: 0,
            y: 44,
            stagger: 0.08,
            duration: 0.75,
          },
          '-=0.25'
        )
        .from(
          '.hero__sub',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          '-=0.35'
        )
        .from(
          '.hero__portrait',
          {
            opacity: 0,
            y: 24,
            duration: 0.85,
            ease: 'power2.out',
          },
          '-=0.7'
        )
    },
    { scope: containerRef }
  )

  return (
    <section className='hero shell' id='top' ref={containerRef}>
      <div className='wrap hero__grid'>
        <div className='hero__content'>
          <h1 className='display'>
            <span className='stack'><Segments parts={t.hero.l1} /></span>
            <span className='stack'><Segments parts={t.hero.l2} /></span>
            <span className='stack'><Segments parts={t.hero.l3} /></span>
            <span className='stack'><Segments parts={t.hero.l4} /></span>
          </h1>

          <div className="hero__sub">
            <p className="hero__tag">{t.hero.tag}</p>
            <div className="hero__cta">
              <a href="#work" className="btn btn--solid">
                {t.hero.cta1}
                <span className='arrow'>{t.hero.ctaArrow}</span>
              </a>
              <a href={t.hero.ctaEmail} className='btn'>
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>

        <aside className="hero__portrait" aria-hidden="false">
          <div className="hero__portrait__frame">
            <PortraitPicture alt="Pini Shteren" priority sizes="(min-width: 1024px) 30vw, 100vw" />
          </div>
          <span className="hero__portrait-badge">{t.hero.portraitBadge}</span>
          <div className="hero__portrait__caption">
            <span>{lang === "he" ? "פיני, בסטודיו" : "Pini, in the studio"}</span>
            <span className="date">{lang === "he" ? "2025" : "'25"}</span>
          </div>
        </aside>
      </div>

      <Ticker />
    </section>
  )
}
