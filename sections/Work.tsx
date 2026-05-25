// Description: selected work section — Cash Plus project, all text from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'
import Reveal from '@/components/Reveal'
import Segments from '@/components/Segments'
import CashPlusPhone from '@/components/CashPlusPhone'

export default function Work() {
  const { t } = useApp()
  const p = t.proj

  return (
    <section className='project shell' id='work'>
      <div className='wrap'>
        <Reveal as='header' className='section__head'>
          <span className='section__num'>{p.num}</span>
          <h2 className='section__title'>
            <Segments parts={p.head} />
          </h2>
        </Reveal>

        <Reveal className='project__head'>
          <div>
            <div className='project__brandline'>
              <span>{p.brandline}</span>
            </div>
            <h3 className='project__name'>
              <Segments parts={p.name} />
            </h3>
          </div>
          <p className='project__pitch'>{p.pitch}</p>
        </Reveal>

        <Reveal>
          <div className='stage'>
            <div className='stage__left'>
              <div className='phone-wrap'>
                <CashPlusPhone />
              </div>
            </div>

            <div className='stage__right'>
              {p.metrics.map((m, i) => (
                <div className='metric' key={i}>
                  <div className='k'>{m.k}</div>
                  <div className='v'>
                    <Segments parts={m.v} />
                  </div>
                  <div className='desc'>{m.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className='pillars'>
          {p.pillars.map((pl, i) => (
            <Reveal key={i} className='pillar' delay={i * 80}>
              <div className='ix'>{pl.ix}</div>
              <div className='t'>
                <Segments parts={pl.t} />
              </div>
              <div className='d'>{pl.d}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className='techstrip'>
          <div className='lbl'>{p.techlbl}</div>
          <div className='techstrip__right'>
            <div className='stack'>
              {p.techChips.map((c, i) => (
                <span key={i} className={`chip${c.acc ? ' acc' : ''}`}>
                  {c.label}
                </span>
              ))}
            </div>
            <a
              href={p.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn--solid project__live'
            >
              {p.liveLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
