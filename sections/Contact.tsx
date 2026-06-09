// Description: contact section - channels with minimal SVG icons, RTL-aware alignment
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'
import Reveal from '@/components/Reveal'
import Segments from '@/components/Segments'

const icons: Record<string, React.ReactNode> = {
  email: (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <rect x='2' y='4' width='20' height='16' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  ),
  phone: (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
    </svg>
  ),
  linkedin: (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect x='2' y='9' width='4' height='12' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  ),
  github: (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  ),
  arrowup: (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M12 19V5M5 12l7-7 7 7' />
    </svg>
  ),
}

export default function Contact() {
  const { t, lang } = useApp()
  const c = t.contact
  const isRtl = lang === 'he'

  return (
    <section className='contact shell' id='contact'>
      <div className='wrap'>
        <div className='contact__pre'>{c.pre}</div>
        <Reveal as='h2' className='contact__big'>
          <span>{c.l1}</span>
          <br />
          <span>
            <Segments parts={c.l2} />
          </span>
          <br />
          <a href={`mailto:${c.email}`} className='contact__email-link'>
            {c.email}
            <em>.</em>
          </a>
        </Reveal>

        <Reveal className='contact__resume'>
          <a href={c.resumeHref} className='btn btn--solid contact__resume-btn' download>
            <span className='contact__resume-icon' aria-hidden='true'>
              <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                <path d='M7 10l5 5 5-5M12 15V3' />
              </svg>
            </span>
            {c.resumeLabel}
          </a>
        </Reveal>

        <Reveal className='contact__channels'>
          <div className='contact__channels-primary'>
            <a href={c.channels[0].href} className='contact__channel--primary'>
              <span className={`contact__ch-icon${isRtl ? ' contact__ch-icon--end' : ''}`}>
                {icons[c.channels[0].icon]}
              </span>
              {c.channels[0].label}
            </a>
          </div>
          <div className='contact__channels-secondary'>
            {c.channels.slice(1, 4).map((ch, i) => {
              const isPhone = ch.icon === 'phone'
              const iconAtEnd = isRtl && !isPhone
              return (
                <a key={i} href={ch.href} className='contact__channel--secondary' target={ch.href.startsWith('http') ? '_blank' : undefined} rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <span className={`contact__ch-icon${iconAtEnd ? ' contact__ch-icon--end' : ''}`}>
                    {icons[ch.icon]}
                  </span>
                  {ch.label}
                </a>
              )
            })}
          </div>
          <div className='contact__channels-utility'>
            <a href={c.channels[4].href} className='contact__channel--utility'>
              <span className={`contact__ch-icon${isRtl ? ' contact__ch-icon--end' : ''}`}>
                {icons[c.channels[4].icon]}
              </span>
              {c.channels[4].label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
