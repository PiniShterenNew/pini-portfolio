// Description: Universal scroll reveal component with consistent animations
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useAccessibility } from '../hooks/useAccessibility'
import { getAccessibleVariants, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, smoothTransition } from '../lib/motionPresets'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  className?: string
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = ''
}) => {
  const { ref, inView } = useScrollAnimation()
  const { shouldAnimate, prefersReducedMotion } = useAccessibility()

  const getVariants = () => {
    switch (direction) {
      case 'up':
        return fadeInUp
      case 'down':
        return fadeInDown
      case 'left':
        return fadeInLeft
      case 'right':
        return fadeInRight
      default:
        return fadeInUp
    }
  }

  const variants = getAccessibleVariants(prefersReducedMotion, getVariants())

  // If reduced motion is preferred, show content immediately
  if (!shouldAnimate) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      transition={{ 
        ...smoothTransition,
        duration,
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
