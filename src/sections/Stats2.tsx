// Description: Second statistics section with pink-purple gradient
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from '../components/CountUp'
import ScrollReveal from '../components/ScrollReveal'

const Stats2: React.FC = () => {
  const stats = [
    { value: 5, suffix: '+', label: 'שנות ניסיון' },
    { value: 99, suffix: '%', label: 'דיוק וביצוע' },
    { value: 24, suffix: '/7', label: 'תמיכה זמינה' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="font-jakarta text-6xl sm:text-7xl font-extrabold mb-4">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="font-heebo text-lg text-white/90">
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

export default Stats2

