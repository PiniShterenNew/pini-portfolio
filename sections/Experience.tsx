// Description: experience section - timeline + merged testimonial blockquote
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'
import Reveal from '@/components/Reveal'
import Segments from '@/components/Segments'

export default function Experience() {
  const { t } = useApp()
  const e = t.exp

  return (
    <section className='section shell' id='experience'>
      <div className='wrap'>
        <Reveal as='header' className='section__head'>
          <span className='section__num'>{e.num}</span>
          <h2 className='section__title'>
            <Segments parts={e.title} />
          </h2>
        </Reveal>

        <div className='timeline'>
          <Reveal className='tl-item'>
            <div className='tl-item__date'>
              <span className='now'>{e.now}</span>
              <br />
              {e.range}
            </div>
            <div className='tl-item__body rtl:text-right ltr:text-left'>
              <h3 className='tl-role'>
                <Segments parts={e.role} />
                <span style={{ fontSize: '0.6em', color: 'var(--ink-dim)' }}>{e.sub}</span>
              </h3>
              <div className='tl-meta'>{e.meta}</div>

              <div className='ev-grid'>
                {e.evidence.map((ev, i) => (
                  <div className='ev-card' key={i}>
                    <div className='ev-card__head'>
                      <span className='ev-card__ix'>{ev.ix}</span>
                      <h4 className='ev-card__title'>{ev.title}</h4>
                    </div>
                    <dl className='ev-card__steps'>
                      <div className='ev-step ev-step--problem'>
                        <dt>{e.evLabels.problem}</dt>
                        <dd>{ev.problem}</dd>
                      </div>
                      <div className='ev-step ev-step--decision'>
                        <dt>{e.evLabels.decision}</dt>
                        <dd>{ev.decision}</dd>
                      </div>
                      <div className='ev-step ev-step--outcome'>
                        <dt>{e.evLabels.outcome}</dt>
                        <dd>{ev.outcome}</dd>
                      </div>
                    </dl>
                    <div className='ev-card__tag'>{ev.tag}</div>
                  </div>
                ))}
              </div>

              <p className='ev-pattern'>{e.pattern}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
