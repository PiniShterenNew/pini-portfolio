// Description: Cash Plus phone mockup with real app screenshot
// Author: Pinchas
// Created with claude.md rules

'use client'

import Image from 'next/image'

export default function CashPlusPhone() {
  return (
    <div className='phone'>
      <div className='phone__screen'>
        <Image
          src='/cashplus-screenshot.png'
          alt='Cash Plus app screenshot'
          fill
          className='phone__screenshot'
          sizes='320px'
        />
      </div>
    </div>
  )
}
