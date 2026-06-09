// Description: hero section - V2.1 layout with inline byline portrait, serif statement
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useRef } from 'react'
import { useApp } from '@/contexts/AppContext'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Segments from '@/components/Segments'
import PortraitPicture from '@/components/PortraitPicture'

export default function Hero() {
  const { t, lang } = useApp()
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero__byline', {
        opacity: 0,
        y: 12,
        duration: 0.5,
      })
        .from(
          '.hero__display',
          {
            opacity: 0,
            y: 36,
            duration: 0.7,
          },
          '-=0.2'
        )
        .from(
          ['.hero__stackline', '.hero__chips'],
          {
            opacity: 0,
            y: 14,
            duration: 0.45,
            stagger: 0.08,
          },
          '-=0.3'
        )
        .from(
          '.hero__sub',
          {
            opacity: 0,
            y: 18,
            duration: 0.55,
          },
          '-=0.25'
        )
        .from(
          '.hero__meta',
          {
            opacity: 0,
            y: 10,
            duration: 0.45,
          },
          '-=0.25'
        )
    },
    { scope: containerRef }
  )

  return (
    <section className='hero shell' id='top' ref={containerRef}>
      <div className='wrap hero__inner'>
        <div className='hero__byline'>
          <div className='hero__portrait'>
            <div className='hero__portrait__frame'>
              <PortraitPicture
                alt={lang === 'he' ? 'פיני שטרן' : 'Pini Shteren'}
                priority
                sizes='100px'
              />
            </div>
          </div>
          <div className='hero__byline__text'>
            <span className='hero__name'>{lang === 'he' ? 'פיני שטרן' : 'Pini Shteren'}</span>
            <span className='hero__avail'>
              <span className='hero__avail-dot' aria-hidden='true' />
              {t.hero.metaStatusV}
            </span>
          </div>
        </div>

        <h1 className='hero__display'>
          <span className='stack'><Segments parts={t.hero.l1} /></span>
          <span className='stack'><Segments parts={t.hero.l2} /></span>
          <span className='stack'><Segments parts={t.hero.l3} /></span>
          <span className='stack'><Segments parts={t.hero.l4} /></span>
        </h1>

        <p className='hero__stackline'>{t.hero.stackLine}</p>

        <ul className='hero__chips' aria-label='Core stack'>
          {t.hero.stackChips.map((c, i) => (
            <li key={i} className='hero__chip'>{c}</li>
          ))}
        </ul>

        <div className='hero__sub'>
          <p className='hero__tag'>{t.hero.tag}</p>
          <div className='hero__cta'>
            <a href='#work' className='btn btn--solid'>
              {t.hero.cta1}
              <span className='arrow'>{t.hero.ctaArrow}</span>
            </a>
            <a href={t.hero.ctaResumeHref} className='btn' download>
              {t.hero.ctaResume}
            </a>
            <a href={t.hero.ctaEmail} className='btn btn--ghost'>
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className='hero__meta'>
          <span className='hero__meta-item'>
            {lang === 'he' ? 'תל אביב' : 'Tel Aviv'}
          </span>
          <span className='hero__meta-sep' aria-hidden='true'>·</span>
          <span className='hero__meta-item'>
            {lang === 'he' ? '5+ שנות ניסיון' : '5+ years'}
          </span>
          <span className='hero__meta-sep' aria-hidden='true'>·</span>
          <a
            href='https://github.com/PiniShterenNew'
            target='_blank'
            rel='noopener noreferrer'
            className='hero__meta-item hero__meta-link'
          >
            github.com/PiniShterenNew
          </a>
        </div>
      </div>
    </section>
  )
}
