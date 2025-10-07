// Description: Reusable input component with focus states
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import clsx from 'clsx'

interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  className?: string
  required?: boolean
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  className,
  required = false
}) => {
  const baseClasses = 'w-full px-4 py-3 border border-border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
  const errorClasses = error ? 'border-tertiary focus:ring-tertiary' : ''

  return (
    <div className={clsx('space-y-2', className)}>
      {label && (
        <label className="block text-sm font-body font-medium text-primary">
          {label}
          {required && <span className="text-tertiary ml-1">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(baseClasses, errorClasses, 'min-h-[120px] resize-none')}
          required={required}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(baseClasses, errorClasses)}
          required={required}
        />
      )}
      {error && (
        <p className="text-sm text-tertiary font-body">{error}</p>
      )}
    </div>
  )
}

export default Input
