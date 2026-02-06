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
    { name: 'אודות', href: '#about' },
    { name: 'לקוחות', href: '#testimonials' },
    { name: 'שאלות', href: '#faq' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
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
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-surface-base/95 backdrop-blur-md shadow-card'
        : 'bg-transparent'
    }`}>
      <div className="max-w-content mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link to="/" aria-label="חזרה לדף הבית" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo.svg"
            alt="פיני לוגו"
            className="w-9 h-9"
            width={36}
            height={36}
          />
          <span className="font-jakarta font-bold text-lg gradient-text hidden sm:inline">
            פיני
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-grad-brand text-white shadow-md hover:shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-heebo font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-lg text-brand-text hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <RippleButton
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mr-2 px-5 py-2.5 rounded-xl bg-grad-brand text-white text-sm shadow-md hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
          >
            שיחת אפיון חינם
          </RippleButton>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-surface-base/98 backdrop-blur-xl shadow-card-hover rounded-2xl p-5 flex flex-col items-center gap-1 border border-gray-100 z-50"
              role="navigation"
              aria-label="תפריט ניווט"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-full text-center py-3 px-4 font-heebo font-medium text-brand-text hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full pt-2 mt-2 border-t border-gray-100">
                <RippleButton
                  onClick={() => {
                    setIsMenuOpen(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full py-3 rounded-xl bg-grad-brand text-white font-heebo font-semibold shadow-md"
                >
                  שיחת אפיון חינם
                </RippleButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
