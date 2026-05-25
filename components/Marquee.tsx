// Description: scrolling tech-stack marquee, text driven from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'

export default function Marquee() {
  const { t } = useApp()
  const items = t.marquee.items

  const Block = () => (
    <>
      {items.map((p, i) => (
        <span key={i} className='marquee__item'>
          <span className={p.acc ? 'acc' : undefined}>{p.text}</span>
          <span className='star'>✦</span>
        </span>
      ))}
    </>
  )

  return (
    <div className='marquee' aria-hidden>
      <div className='marquee__track'>
        <Block />
        <Block />
      </div>
    </div>
  )
}
