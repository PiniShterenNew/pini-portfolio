import React from 'react'
import { motion } from 'framer-motion'
import CountUp from '../components/CountUp'
import ScrollReveal from '../components/ScrollReveal'

const Stats: React.FC = () => {
  const stats = [
    { value: 40, suffix: '+', label: 'פרויקטים שהושלמו' },
    { value: 97, suffix: '%', label: 'לקוחות חוזרים' },
    { value: 1.2, suffix: 's', label: 'זמן טעינה ממוצע', decimals: 1, prefix: '<' },
    { value: 5, suffix: '+', label: 'שנות ניסיון' },
  ]

  return (
    <section className="py-section bg-grad-dark text-white relative overflow-hidden">
      {/* Gradient side glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="font-jakarta text-5xl sm:text-6xl font-extrabold mb-3 gradient-text">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <p className="font-heebo text-base text-gray-300">
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

export default Stats
