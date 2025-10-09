// Description: Typewriter effect component for text animation
// Author: Pinchas
// Created with claude.md rules

import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  className = '',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })
  const hasAnimated = useRef(false)

  // Reset and start animation when coming into view
  useEffect(() => {
    if (inView) {
      setDisplayText('')
      setCurrentIndex(0)
      hasAnimated.current = false
    }
  }, [inView])

  useEffect(() => {
    if (inView && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (inView && currentIndex >= text.length && onComplete && !hasAnimated.current) {
      hasAnimated.current = true
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete, inView])

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  )
}

export default TypewriterText
