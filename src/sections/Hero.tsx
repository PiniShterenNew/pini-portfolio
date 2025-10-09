// Description: Hero section with gradient background and tech stack badges
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { SiReact, SiTailwindcss, SiVite } from 'react-icons/si'
import { FiZap } from 'react-icons/fi'
import RippleButton from '../components/RippleButton'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-surface-base via-purple-50 to-indigo-50 pt-20">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blob-pink rounded-full blur-3xl animate-blob opacity-70" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blob-blue rounded-full blur-3xl animate-blob animation-delay-2000 opacity-70" />
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="font-jakarta text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <motion.span 
              className="bg-grad-brand bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              אתרים שמוכרים בשבילך –
            </motion.span>
            <br />
            <motion.span 
              className="text-brand-text inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              לא רק נראים טוב.
            </motion.span>
          </h1>
        
        <motion.p 
            className="font-heebo text-xl sm:text-2xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
            בונה עבורך אתר מהיר, ממיר, ומוכן ל-SEO מלא.
        </motion.p>
        
        <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <RippleButton
              onClick={() => window.location.href = '#contact'}
              className="px-8 py-4 text-lg font-semibold font-heebo rounded-xl text-white bg-grad-brand shadow-glow hover:scale-105 transition-all duration-300"
              data-tooltip-id="app-tooltip"
              data-tooltip-content="התחל את הפרויקט שלך עכשיו"
            >
              בוא נתחיל את הפרויקט שלך
            </RippleButton>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-base/80 backdrop-blur-sm rounded-lg shadow-sm">
              <FiZap className="text-brand-accent text-xl" />
              <span className="font-heebo font-medium text-brand-text">מהיר</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-base/80 backdrop-blur-sm rounded-lg shadow-sm">
              <SiReact className="text-[#61DAFB] text-xl" />
              <span className="font-heebo font-medium text-brand-text">React</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-base/80 backdrop-blur-sm rounded-lg shadow-sm">
              <SiTailwindcss className="text-[#38BDF8] text-xl" />
              <span className="font-heebo font-medium text-brand-text">Tailwind</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-base/80 backdrop-blur-sm rounded-lg shadow-sm">
              <SiVite className="text-[#646CFF] text-xl" />
              <span className="font-heebo font-medium text-brand-text">Vite</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

