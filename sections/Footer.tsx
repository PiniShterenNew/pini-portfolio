// Description: site footer, all text from i18n
// Author: Pinchas
// Created with claude.md rules

'use client'

import Image from 'next/image'
import { useApp } from '@/contexts/AppContext'

export default function Footer() {
  const { t, theme } = useApp()
  const f = t.footer

  return (
    <footer className='footer'>
      <span>{f.left}</span>
      <div className='footer__brand'>
        <Image src={theme === 'light' ? '/logo-light.svg' : '/logo.svg'} alt={f.logoAlt} width={20} height={20} className='footer__logo' />
        <span style={{ color: 'var(--accent)' }}>{f.center}</span>
      </div>
      <span>{f.right}</span>
    </footer>
  )
}
