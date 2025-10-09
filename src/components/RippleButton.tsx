// Description: Button component with ripple effect and accessibility
// Author: Pinchas
// Created with claude.md rules

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { rippleEffect, buttonHover } from '../lib/motionPresets'

interface RippleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  tooltip?: string
  'data-tooltip-id'?: string
  'data-tooltip-content'?: string
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  tooltip,
  ...rest
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y
    }

    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)

    if (onClick) {
      onClick()
    }
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={createRipple}
      disabled={disabled}
      className={`relative overflow-hidden group ${className}`}
      aria-label={ariaLabel}
      whileHover={buttonHover.whileHover}
      whileTap={rippleEffect.whileTap}
      transition={rippleEffect.whileTap.transition}
      data-tooltip-id={rest['data-tooltip-id'] || (tooltip ? 'app-tooltip' : undefined)}
      data-tooltip-content={rest['data-tooltip-content'] || tooltip}
      {...rest}
    >
      {children}
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute pointer-events-none bg-white/30 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: 4, 
            opacity: 0,
            width: 20,
            height: 20,
            x: -10,
            y: -10
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </motion.button>
  )
}

export default RippleButton
