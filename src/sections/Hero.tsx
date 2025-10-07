// Description: Hero section with new design and client logos
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import TypewriterText from '../components/TypewriterText'
import RippleButton from '../components/RippleButton'

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 text-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero-light dark:gradient-hero-dark -z-10"></div>
      <div className="absolute inset-0 bg-overlay dark:block hidden -z-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--blob-pink)/0.25)] rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--blob-blue)/0.25)] rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[hsl(var(--blob-purple)/0.25)] rounded-full filter blur-3xl opacity-60 animate-blob"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[hsl(var(--text-primary))] dark:text-white text-shadow-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <TypewriterText 
            text="בונה אתרים שיוצרים"
            speed={100}
            className="inline-block"
          />
          <span className="text-gradient ml-2">רגש</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-[hsl(var(--text-primary))] dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          אני פנחס, מפתח ויוצר חוויות דיגיטליות ייחודיות. אני מתמחה בבניית אתרים מודרניים וממירים שמספרים את הסיפור שלכם ומחברים אתכם לקהל היעד.
        </motion.p>
        
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <RippleButton
            className="flex min-w-[180px] items-center justify-center rounded-lg h-14 px-8 bg-gradient-to-r from-[hsl(265_75%_65%)] to-[hsl(250_70%_60%)] text-white text-lg font-bold glow-button dark:bg-[hsl(var(--primary))] dark:hover:bg-[hsl(var(--primary-hover))]"
            onClick={() => window.location.href = '#portfolio'}
            ariaLabel="צפו בתיק העבודות"
          >
            צפו בתיק העבודות
          </RippleButton>
          <RippleButton
            className="flex min-w-[180px] items-center justify-center rounded-lg h-14 px-8 bg-transparent text-[hsl(var(--text-primary))] dark:text-white border border-[hsl(265_25%_45%)] dark:border-white/90 hover:bg-[hsl(265_25%_45%)]/10 hover:border-[hsl(265_25%_45%)]/60 dark:hover:border-white font-bold"
            onClick={() => window.location.href = '#contact'}
            ariaLabel="קבלו הצעת מחיר"
          >
            קבלו הצעת מחיר
          </RippleButton>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Hero
