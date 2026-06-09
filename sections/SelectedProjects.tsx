// Description: Selected Projects section - lightweight project cards (name, summary, tech, link)
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'
import Reveal from '@/components/Reveal'
import Segments from '@/components/Segments'

export default function SelectedProjects() {
  const { t } = useApp()
  const p = t.projects

  return (
    <section className='section shell' id='projects'>
      <div className='wrap'>
        <Reveal as='header' className='section__head'>
          <span className='section__num'>{p.num}</span>
          <h2 className='section__title'>
            <Segments parts={p.title} />
          </h2>
        </Reveal>

        <div className='projcards'>
          {p.items.map((it, i) => {
            const hasLink = Boolean(it.linkHref)
            return (
              <Reveal key={i} className='projcard' delay={i * 70}>
                <div className='projcard__top'>
                  <h3 className='projcard__name'>{it.name}</h3>
                  {hasLink && (
                    <a
                      href={it.linkHref}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='projcard__link'
                    >
                      {it.linkLabel}
                    </a>
                  )}
                </div>
                <p className='projcard__summary'>{it.summary}</p>
                <ul className='projcard__tech'>
                  {it.tech.map((tch, j) => (
                    <li key={j} className='projcard__tag'>{tch}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
