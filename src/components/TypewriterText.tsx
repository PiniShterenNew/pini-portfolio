// Description: Typewriter effect component for text animation
// Author: Pinchas
// Created with claude.md rules

import React, { useState, useEffect } from 'react'

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

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  // Reset when text changes
  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [text])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypewriterText
