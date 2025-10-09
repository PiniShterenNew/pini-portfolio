// Description: Premium navbar with sticky behavior and gradient branding
// Author: Pinchas
// Created with claude.md rules

import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import RippleButton from './RippleButton'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { name: 'שירותים', href: '#services' },
    { name: 'פרויקטים', href: '#portfolio' },
    { name: 'תהליך', href: '#process' },
    { name: 'לקוחות', href: '#testimonials' },
    { name: 'שאלות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface-base/95 backdrop-blur-md shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
        {/* לוגו */}
        <div className="flex items-center gap-3">
          <Link to="/" aria-label="חזרה לדף הבית" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="פיני לוגו"
              className="w-10 h-10"
            />
            <span className="font-jakarta font-bold text-xl bg-grad-brand bg-clip-text text-transparent">
              פיני – בניית אתרים ממוקדי המרה
            </span>
          </Link>
        </div>

        {/* כפתור תפריט נייד */}
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-grad-brand text-white shadow-md hover:shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isMenuOpen}
          data-tooltip-id="app-tooltip"
          data-tooltip-content={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>

        {/* ניווט שולחני */}
        <nav className="hidden lg:flex items-center gap-6 text-base font-heebo font-medium">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-text hover:text-brand-primary transition-colors duration-200"
              data-tooltip-id="app-tooltip"
              data-tooltip-content={`עבור ל${link.name}`}
            >
              {link.name}
            </a>
          ))}
          <RippleButton
            onClick={() => window.location.href = '#contact'}
            className="px-6 py-2.5 rounded-xl bg-grad-brand text-white shadow-md hover:shadow-glow hover:scale-105 transition-all duration-300"
            data-tooltip-id="app-tooltip"
            data-tooltip-content="קבלו שיחת אפיון חינמית"
          >
            שיחת אפיון חינם
          </RippleButton>
        </nav>
      </div>

      {/* תפריט נייד */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden absolute top-20 right-1/2 translate-x-1/2 bg-surface-base/95 backdrop-blur-xl shadow-card rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[280px] border border-gray-100"
            role="navigation"
            aria-label="תפריט ניווט נפתח"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-heebo font-medium text-brand-text hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <RippleButton
              onClick={() => {
                setIsMenuOpen(false)
                window.location.href = '#contact'
              }}
              className="mt-3 px-6 py-2.5 rounded-xl bg-grad-brand text-white shadow-md hover:shadow-glow transition-all"
              data-tooltip-id="app-tooltip"
              data-tooltip-content="קבלו שיחת אפיון חינמית"
            >
              שיחת אפיון חינם
            </RippleButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
