// Description: Accessibility hook with reduced motion and focus management
// Author: Pinchas
// Created with claude.md rules

import { useEffect, useState } from 'react'

export const useAccessibility = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Detect keyboard usage
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true)
        document.body.classList.add('keyboard-user')
      }
    }

    const handleMouseDown = () => {
      setIsKeyboardUser(false)
      document.body.classList.remove('keyboard-user')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return {
    prefersReducedMotion,
    isKeyboardUser,
    shouldAnimate: !prefersReducedMotion
  }
}
