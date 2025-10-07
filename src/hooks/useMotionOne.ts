// Description: Premium Motion One animations with advanced micro-interactions
// Author: Pinchas
// Created with claude.md rules

import { useEffect } from 'react'
import { animate, stagger, inView } from 'motion'

export const useMotionOne = () => {
  useEffect(() => {
    const initAnimations = () => {
      // Premium Header entrance with glassmorphism
      const nav = document.querySelector('nav')
      if (nav) {
        animate(nav, 
          { 
            opacity: [0, 1], 
            y: [-20, 0],
            backdropFilter: ['blur(0px)', 'blur(20px)']
          }, 
          { 
            duration: 1, 
            easing: 'easeOut' 
          }
        )
      }

      // Staggered navigation links with premium timing
      const navLinks = document.querySelectorAll('nav a')
      if (navLinks.length > 0) {
        animate(navLinks, 
          { 
            opacity: [0, 1], 
            y: [15, 0],
            scale: [0.95, 1]
          }, 
          { 
            delay: stagger(0.15), 
            duration: 0.8,
            easing: 'easeOut'
          }
        )
      }

      // Premium CTA button with breathing effect
      const ctaButton = document.querySelector('nav button')
      if (ctaButton) {
        // Initial entrance
        animate(ctaButton, 
          { 
            opacity: [0, 1], 
            scale: [0.8, 1],
            boxShadow: ['0 0 0px rgba(79,70,229,0)', '0 4px 15px rgba(79,70,229,0.3)']
          }, 
          { 
            duration: 0.8, 
            delay: 0.5,
            easing: 'easeOut' 
          }
        )

        // Continuous breathing animation
        animate(ctaButton, 
          { 
            scale: [1, 1.02, 1],
            boxShadow: [
              '0 4px 15px rgba(79,70,229,0.3)',
              '0 8px 25px rgba(79,70,229,0.4)',
              '0 4px 15px rgba(79,70,229,0.3)'
            ]
          }, 
          { 
            duration: 4, 
            repeat: Infinity, 
            easing: 'easeInOut' 
          }
        )
      }

      // Enhanced navigation links hover effects
      navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          animate(link, 
            { 
              scale: 1.05,
              y: -2,
              color: '#4F46E5'
            }, 
            { 
              duration: 0.3, 
              easing: 'easeOut' 
            }
          )
        })
        link.addEventListener('mouseleave', () => {
          animate(link, 
            { 
              scale: 1,
              y: 0,
              color: '#6B7280'
            }, 
            { 
              duration: 0.3, 
              easing: 'easeOut' 
            }
          )
        })
      })

      // Premium Hero section animations with timeline
      const heroSection = document.querySelector('.hero')
      if (heroSection) {
        const heroH1 = heroSection.querySelector('h1')
        const heroP = heroSection.querySelector('p')
        const heroButtons = heroSection.querySelectorAll('button')
        const orbs = heroSection.querySelectorAll('.floating-orb')
        
        // Coordinated entrance animations
        if (orbs.length > 0) {
          animate(orbs, { opacity: [0, 0.4], scale: [0.8, 1] }, { duration: 1, easing: 'ease-out' })
        }
        
        if (heroH1) {
          animate(heroH1, { opacity: [0, 1], y: [40, 0], scale: [0.95, 1] }, { duration: 0.8, delay: 0.2, easing: 'ease-out' })
        }
        
        if (heroP) {
          animate(heroP, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: 0.4, easing: 'ease-out' })
        }
        
        if (heroButtons.length > 0) {
          animate(heroButtons, { opacity: [0, 1], y: [20, 0], scale: [0.9, 1] }, { duration: 0.6, delay: 0.6, easing: 'ease-out' })
        }

        // Continuous floating animation for orbs
        orbs.forEach((orb, index) => {
          animate(orb, 
            { 
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.6, 0.4]
            }, 
            { 
              duration: 8 + index * 2, 
              repeat: Infinity, 
              easing: 'easeInOut' 
            }
          )
        })
      }

      // Enhanced button hover effects
      const allButtons = document.querySelectorAll('button')
      allButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          animate(btn, 
            { 
              scale: 1.05,
              y: -2,
              boxShadow: [
                '0 4px 15px rgba(79,70,229,0.3)',
                '0 8px 25px rgba(79,70,229,0.4)'
              ]
            }, 
            { 
              duration: 0.3, 
              easing: 'easeOut' 
            }
          )
        })
        btn.addEventListener('mouseleave', () => {
          animate(btn, 
            { 
              scale: 1,
              y: 0,
              boxShadow: '0 4px 15px rgba(79,70,229,0.3)'
            }, 
            { 
              duration: 0.3, 
              easing: 'easeOut' 
            }
          )
        })
        btn.addEventListener('mousedown', () => {
          animate(btn, 
            { 
              scale: 0.95,
              y: 0
            }, 
            { 
              duration: 0.1, 
              easing: 'easeOut' 
            }
          )
        })
      })

      // Scroll-triggered animations for sections
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        inView(section, () => {
          const cards = section.querySelectorAll('.premium-card, .testimonial-card')
          const headings = section.querySelectorAll('h2, h3')
          const icons = section.querySelectorAll('.icon, svg')
          
          // Staggered card animations
          if (cards.length > 0) {
            animate(cards, 
              { 
                opacity: [0, 1], 
                y: [30, 0],
                scale: [0.95, 1]
              }, 
              { 
                delay: stagger(0.2), 
                duration: 0.8,
                easing: 'easeOut'
              }
            )
          }

          // Heading animations
          if (headings.length > 0) {
            animate(headings, 
              { 
                opacity: [0, 1], 
                y: [20, 0]
              }, 
              { 
                delay: stagger(0.1), 
                duration: 0.6,
                easing: 'easeOut'
              }
            )
          }

          // Icon animations
          if (icons.length > 0) {
            animate(icons, 
              { 
                opacity: [0, 1], 
                scale: [0.8, 1],
                rotate: [0, 360]
              }, 
              { 
                delay: stagger(0.1), 
                duration: 0.8,
                easing: 'easeOut'
              }
            )
          }
        }, { margin: '-100px' })
      })

      // Premium card hover effects
      const premiumCards = document.querySelectorAll('.premium-card, .testimonial-card')
      premiumCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          animate(card, 
            { 
              y: -8,
              scale: 1.02,
              boxShadow: [
                '0 8px 32px rgba(0,0,0,0.1)',
                '0 20px 40px rgba(0,0,0,0.15)'
              ]
            }, 
            { 
              duration: 0.3, 
              easing: 'easeOut' 
            }
          )
        })
        card.addEventListener('mouseleave', () => {
          animate(card, 
            { 
              y: 0,
              scale: 1,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }, 
            { 
              duration: 0.3, 
              easing: 'easeOut' 
            }
          )
        })
      })
    }

    // Initialize animations after DOM is ready
    const timeoutId = setTimeout(initAnimations, 200)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return {}
}
