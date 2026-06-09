// Description: floating resume + contact CTA, fixed bottom corner, always visible
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useApp } from '@/contexts/AppContext'

export default function FloatingCTA() {
  const { t } = useApp()
  const f = t.floatcta

  return (
    <div className='floatcta' role='complementary' aria-label={f.aria}>
      <a href={t.hero.ctaResumeHref} className='floatcta__btn floatcta__btn--solid' download>
        <span className='floatcta__icon' aria-hidden='true'>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
            <path d='M7 10l5 5 5-5M12 15V3' />
          </svg>
        </span>
        <span className='floatcta__label'>{f.resume}</span>
      </a>
      <a href={t.hero.ctaEmail} className='floatcta__btn floatcta__btn--ghost'>
        <span className='floatcta__icon' aria-hidden='true'>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
            <rect x='2' y='4' width='20' height='16' rx='2' />
            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
          </svg>
        </span>
        <span className='floatcta__label'>{f.contact}</span>
      </a>
    </div>
  )
}
