// Description: First statistics section with animated counters
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from '../components/CountUp'
import ScrollReveal from '../components/ScrollReveal'

const Stats1: React.FC = () => {
  const stats = [
    { value: 40, suffix: '+', label: 'פרויקטים שהושלמו' },
    { value: 97, suffix: '%', label: 'לקוחות חוזרים' },
    { value: 1.2, suffix: 's', label: 'זמן טעינה ממוצע', decimals: 1, prefix: '<' },
  ]

  return (
    <section className="py-20 bg-grad-dark text-white relative overflow-hidden">
      {/* Gradient Side Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute -right-20 top-1/2 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="font-jakarta text-4xl sm:text-5xl font-bold text-center mb-16">
            האמינות שלנו במספרים
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="font-jakarta text-6xl sm:text-7xl font-extrabold mb-4 bg-grad-brand bg-clip-text text-transparent">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                  />
                </div>
                <p className="font-heebo text-lg text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats1

