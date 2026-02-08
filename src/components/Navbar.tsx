import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { name: 'שירותים', href: '#services' },
    { name: 'עבודות', href: '#portfolio' },
    { name: 'עליי', href: '#about' },
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-surface-base/95 backdrop-blur-sm shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo - text only */}
        <Link
          to="/"
          aria-label="חזרה לדף הבית"
          className="font-rubik font-bold text-lg text-brand-dark hover:text-brand-gold transition-colors duration-200"
        >
          פיני שטרן
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded text-brand-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 font-heebo text-small font-medium text-brand-muted hover:text-brand-dark transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary mr-4 text-small py-2.5 px-5"
          >
            דברו איתי
          </button>
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
              className="lg:hidden fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-surface-card shadow-lg rounded-lg p-4 flex flex-col items-center gap-1 border border-surface-border z-50"
              role="navigation"
              aria-label="תפריט ניווט"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-full text-center py-3 px-4 font-heebo font-medium text-brand-dark hover:text-brand-gold rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full pt-2 mt-2 border-t border-surface-border">
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary w-full text-small"
                >
                  דברו איתי
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
