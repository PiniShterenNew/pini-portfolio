// Description: Reusable card component with motion effects
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className,
  hover = true 
}) => {
  return (
    <motion.div
      className={clsx(
        'bg-white rounded-3xl shadow-lg p-6',
        hover && 'hover:shadow-xl',
        className
      )}
      whileHover={hover ? { 
        scale: 1.03, 
        y: -8,
        boxShadow: '0 20px 40px rgba(79,70,229,0.15)' 
      } : undefined}
      transition={{ 
        type: 'spring', 
        stiffness: 200, 
        damping: 15 
      }}
    >
      {children}
    </motion.div>
  )
}

export default Card
