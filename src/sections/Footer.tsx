// Description: Beautiful footer with Hero-style design and animations
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with Hero-style gradient and blobs */}
      <div className="absolute inset-0 gradient-footer -z-10"></div>
      <div className="absolute inset-0 bg-overlay dark:block hidden -z-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--blob-pink)/0.25)] rounded-full filter blur-3xl opacity-70 animate-blob -z-5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--blob-blue)/0.25)] rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[hsl(var(--blob-purple)/0.25)] rounded-full filter blur-3xl opacity-60 animate-blob -z-5"></div>
      
      <div className="relative z-10 pt-10 pb-6">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          {/* Logo */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <a className="inline-block" href="#">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img 
                  src="/logo.svg" 
                  alt="Pinhas Studio" 
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
                <span className="text-2xl sm:text-3xl font-semibold text-[hsl(var(--primary))]">
                  פנחס סטודיו
                </span>
              </div>
            </a>
            <p className="text-lg text-foreground font-light max-w-md mx-auto">
              אני פנחס, מפתח ויוצר חוויות דיגיטליות ייחודיות. אני מתמחה בבניית אתרים מודרניים וממירים שמספרים את הסיפור שלכם ומחברים אתכם לקהל היעד.
            </p>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <a className="text-[hsl(260_70%_70%)] hover:text-[hsl(260_80%_80%)] text-sm font-medium transition-colors duration-200 ease-in-out" href="#services">שירותים</a>
            <a className="text-[hsl(260_70%_70%)] hover:text-[hsl(260_80%_80%)] text-sm font-medium transition-colors duration-200 ease-in-out" href="#process">תהליך</a>
            <a className="text-[hsl(260_70%_70%)] hover:text-[hsl(260_80%_80%)] text-sm font-medium transition-colors duration-200 ease-in-out" href="#portfolio">תיק עבודות</a>
            <a className="text-[hsl(260_70%_70%)] hover:text-[hsl(260_80%_80%)] text-sm font-medium transition-colors duration-200 ease-in-out" href="#testimonials">המלצות</a>
            <a className="text-[hsl(260_70%_70%)] hover:text-[hsl(260_80%_80%)] text-sm font-medium transition-colors duration-200 ease-in-out" href="#contact">צור קשר</a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <a className="social-icon p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-white/80 hover:text-white opacity-80 hover:opacity-100" href="#">
              <svg className="size-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
              </svg>
            </a>
            <a className="social-icon p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-white/80 hover:text-white opacity-80 hover:opacity-100" href="#">
              <svg className="size-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>
            <a className="social-icon p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-white/80 hover:text-white opacity-80 hover:opacity-100" href="#">
              <svg className="size-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </a>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-muted text-sm font-light">© 2024 פנחס. כל הזכויות שמורות.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
