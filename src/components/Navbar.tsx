// Description: Premium navbar with modern transparent design and centered dropdown menu
// Author: Pinchas
// Created with claude.md rules

import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { name: 'שירותים', href: '#services' },
    { name: 'תהליך', href: '#process' },
    { name: 'תיק עבודות', href: '#portfolio' },
    { name: 'המלצות', href: '#testimonials' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/40 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* לוגו + שם */}
        <div className="flex items-center gap-2">
          <Link to="/" aria-label="חזרה לדף הבית" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[34px] h-[34px] rounded-full shadow-sm"
            />
            <span className="text-[20px] font-['Plus_Jakarta_Sans'] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
              פנחס סטודיו
            </span>
          </Link>
        </div>

        {/* כפתור פתיחה */}
        <button
          className="lg:hidden flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined text-[22px]">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* ניווט רגיל */}
        <nav className="hidden lg:flex items-center gap-8 text-[17px] font-['Heebo'] text-zinc-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-[10px] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-all"
          >
            צור קשר
          </a>
        </nav>
      </div>

      {/* תפריט נפתח */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden absolute top-[68px] right-[50%] translate-x-[50%] bg-white/90 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] rounded-[16px] p-6 flex flex-col items-center gap-4 border border-white/40 min-w-[260px]"
            role="navigation"
            aria-label="תפריט ניווט נפתח"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[18px] font-['Heebo'] font-medium text-zinc-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 px-5 py-2 rounded-[10px] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              צור קשר
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
