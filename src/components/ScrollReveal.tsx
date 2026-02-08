import React from 'react'
import { useInView } from 'react-intersection-observer'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
