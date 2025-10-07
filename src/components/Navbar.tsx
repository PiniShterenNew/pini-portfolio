// Description: Premium navbar with dark mode toggle and Material Symbols icons
// Author: Pinchas
// Created with claude.md rules

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDarkMode } from '../hooks/useDarkMode'
import { useAccessibility } from '../hooks/useAccessibility'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleDarkMode } = useDarkMode()
  const { isKeyboardUser } = useAccessibility()

  const navLinks = [
    { name: 'שירותים', href: '#services' },
    { name: 'תהליך', href: '#process' },
    { name: 'תיק עבודות', href: '#portfolio' },
    { name: 'המלצות', href: '#testimonials' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between whitespace-nowrap px-6 sm:px-10 h-16 sm:h-20 bg-[hsl(var(--bg-primary)/0.75)] backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-sm'
    }`} style={{ borderBottom: 'none', boxShadow: '0 1px 0 hsl(var(--border)/0.2)' }}>
      <div className="flex items-center gap-3 text-[hsl(var(--text-primary))]">
        <a className="flex items-center gap-2" href="#">
          <img
            src="/logo.svg"
            alt="Pinhas Studio Logo"
            className="h-8 w-8 logo transition-opacity duration-200"
          />
          <span className="text-xl font-semibold text-[hsl(var(--primary))]">
            פנחס סטודיו
          </span>
        </a>
      </div>

      <nav className="hidden lg:flex items-center gap-8 text-[hsl(var(--text-secondary))]">
        {navLinks.map((link) => (
          <a key={link.name} className="text-sm font-semibold hover:text-[hsl(var(--text-primary))] transition-colors" href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[hsl(var(--primary))] text-[hsl(var(--text-inverse))] text-sm font-bold glow-button hover:scale-105 transition-all duration-300" href="#contact">
          <span>צור קשר</span>
        </a>
        <button 
          onClick={() => {
            console.log('Toggle clicked, current isDark:', isDark) // Debug log
            toggleDarkMode()
          }} 
          className={`p-2 rounded-md text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--bg-secondary))] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2 ${
            isKeyboardUser ? 'focus:ring-2' : ''
          }`}
          aria-label={isDark ? 'החלף למצב בהיר' : 'החלף למצב כהה'}
        >
          <span className="material-symbols-outlined">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <button 
          className={`lg:hidden p-2 rounded-md text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--bg-secondary))] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2 ${
            isKeyboardUser ? 'focus:ring-2' : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div aria-live="polite" aria-label="תפריט ניווט">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[hsl(var(--bg-primary)/0.95)] backdrop-blur-md shadow-lg border-t border-[hsl(var(--border)/0.2)]"
              role="navigation"
              aria-label="תפריט ניווט ראשי"
            >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="px-6 py-4 space-y-4"
            >
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
                  className="block text-sm font-semibold text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors" 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                className="block w-full text-center bg-[hsl(var(--primary))] text-[hsl(var(--text-inverse))] py-2 rounded-full text-sm font-bold glow-button" 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </motion.a>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
