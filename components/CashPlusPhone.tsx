// Description: mock phone UI for Cash Plus project, all text from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'
import Segments from '@/components/Segments'

export default function CashPlusPhone() {
  const { t } = useApp()
  const ui = t.proj.ui

  const bars = [30, 55, 42, 70, 48, 88, 65, 52, 38, 62, 70, 45]
  const subs = [ui.sub1, ui.sub2, ui.sub3, ui.sub4]

  return (
    <div className='phone'>
      <div className='phone__screen'>
        <div className='phone__inner'>
          <div className='pui-top'>
            <span>9:41</span>
            <span>{ui.greet}</span>
          </div>

          <div className='pui-balance'>
            <div className='l'>{ui.balL}</div>
            <div className='v'>
              <Segments parts={ui.balV} />
            </div>
            <div className='delta'>{ui.balD}</div>
            <div className='pui-spark'>
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className='pui-sec-h'>
            <span>{ui.upcoming}</span>
            <span className='ct'>{ui.subCount}</span>
          </div>

          <div className='pui-list'>
            {ui.subNames.map((name, i) => (
              <div key={i} className={`pui-sub${i === 0 ? ' flag' : ''}`}>
                <div className='ic' style={{ background: ui.subColors[i] }}>
                  {ui.subIcons[i]}
                </div>
                <div>
                  <div className='n'>{name}</div>
                  <div className='s'>{subs[i]}</div>
                </div>
                <div className='p'>{ui.subPrices[i]}</div>
              </div>
            ))}
          </div>

          <div className='pui-cta'>{ui.cta}</div>
        </div>
      </div>
    </div>
  )
}
