// Description: Hero section with premium typography and modern gradient design
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-white via-purple-50 to-indigo-100">
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-lg z-[-1]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h1 
          className="font-['Plus_Jakarta_Sans'] text-[48px] sm:text-[72px] lg:text-[96px] font-extrabold leading-[1.05] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 animate-gradient-flow drop-shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            בונה אתרים שמספרים סיפור
          </span>
        </motion.h1>
        
        <motion.p 
          className="font-['Heebo'] text-[22px] sm:text-[24px] text-zinc-700 font-light leading-[1.6] tracking-wide max-w-[680px] mx-auto mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          אני יוצר חוויות דיגיטליות שמשלבות עיצוב מדויק וטכנולוגיה חכמה, כדי לקדם את המטרה שלך.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          <button
            className="px-8 py-4 text-lg font-semibold rounded-[14px] text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-[0_6px_20px_rgba(147,51,234,0.25)] hover:shadow-[0_8px_25px_rgba(147,51,234,0.35)] hover:scale-105 transition-all duration-300 ease-out"
            onClick={() => window.location.href = '#contact'}
            aria-label="ספר לי על הפרויקט שלך"
          >
            ספר לי על הפרויקט שלך
          </button>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-[14px] text-indigo-600 border-2 border-indigo-500 hover:text-purple-600 hover:border-purple-500 bg-transparent hover:bg-purple-50 transition-all duration-300 ease-out"
            onClick={() => window.location.href = '#portfolio'}
            aria-label="צפה בתיק עבודות"
          >
            צפה בתיק עבודות
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

