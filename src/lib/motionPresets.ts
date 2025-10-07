// Description: Global motion presets for consistent animations across the site
// Author: Pinchas
// Created with claude.md rules

import { Variants } from 'framer-motion'

// Base animation presets
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
}

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 }
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 }
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}

// Transition presets
export const smoothTransition = {
  duration: 0.6,
  ease: 'easeOut' as const
}

export const quickTransition = {
  duration: 0.3,
  ease: 'easeOut' as const
}

export const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20
}

export const staggerTransition = {
  duration: 0.6,
  ease: 'easeOut' as const,
  staggerChildren: 0.1
}

// Hover presets
export const hoverScale = {
  scale: 1.05,
  transition: quickTransition
}

export const hoverLift = {
  y: -5,
  transition: springTransition
}

export const hoverGlow = {
  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
  transition: quickTransition
}

// Focus presets for accessibility
export const focusRing = {
  outline: 'none',
  ring: '2px',
  ringColor: 'hsl(var(--primary))',
  ringOffset: '2px'
}

// Reduced motion variants
export const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

// Utility function to get appropriate variants based on accessibility
export const getAccessibleVariants = (prefersReducedMotion: boolean, variants: Variants): Variants => {
  return prefersReducedMotion ? reducedMotionVariants : variants
}

// Common animation combinations
export const cardReveal = {
  variants: fadeInUp,
  transition: smoothTransition
}

export const buttonHover = {
  whileHover: hoverScale,
  whileTap: { scale: 0.95 }
}

export const iconBounce = {
  whileHover: { 
    scale: 1.1,
    rotate: 5,
    transition: springTransition
  }
}

export const rippleEffect = {
  whileTap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}
