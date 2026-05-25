// Description: horizontal ticker strip, text driven from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'

export default function Ticker() {
  const { t } = useApp()
  const items = t.ticker.items

  const block = items.map((p, i) => <span key={i}>{p}</span>)

  return (
    <div className='ticker' aria-hidden>
      <div className='ticker__inner'>
        {block}
        {block}
      </div>
    </div>
  )
}
