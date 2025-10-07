// Description: Reusable button component with animations
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'font-medium rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-glow-primary focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 hover:shadow-glow-secondary focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

export default Button
