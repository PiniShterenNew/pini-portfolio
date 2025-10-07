// Description: Custom hook for scroll-triggered animations
// Author: Pinchas
// Created with claude.md rules

import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  })
  return { ref, inView }
}
