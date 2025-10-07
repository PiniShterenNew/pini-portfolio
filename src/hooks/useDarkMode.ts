// Description: Dark mode hook with localStorage persistence
// Author: Pinchas
// Created with claude.md rules

import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage for a saved preference, or default to system preference
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      return JSON.parse(savedMode)
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    
    if (isDark) {
      html.classList.add('dark')
      html.classList.remove('light')
      body.classList.add('dark')
      body.classList.remove('light')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
      body.classList.remove('dark')
      body.classList.add('light')
    }
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark((prevMode) => !prevMode)
  }

  return { isDark, toggleDarkMode }
}
