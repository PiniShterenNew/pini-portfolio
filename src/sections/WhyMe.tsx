// Description: Why Me section with 4 benefit cards
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiTarget, FiHeart, FiEye } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const WhyMe: React.FC = () => {
  const benefits = [
    {
      icon: FiZap,
      title: 'מהירות טעינה שיא',
      description: 'אתרים מהירים שמדורגים גבוה ב-SEO ומספקים חוויה משתמש מושלמת.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiTarget,
      title: 'UX ממוקד המרה',
      description: 'עיצוב ממוקד שמוביל את המשתמש למטרה – יותר לידים, יותר מכירות.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiHeart,
      title: 'ליווי אישי',
      description: 'תמיכה מלאה לאורך כל הדרך, מהרעיון ועד ההשקה ומעבר לה.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: FiEye,
      title: 'עיצוב מודרני ונגיש',
      description: 'אתרים יפים שעומדים בתקני נגישות ומספקים חוויה לכל משתמש.',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="why-me" className="py-20 bg-surface-soft">
      <div className="max-w-screen-xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-4xl sm:text-5xl font-bold text-brand-text mb-4">
              הבידול המנצח:
            </h2>
            <p className="font-heebo text-xl text-gray-600 max-w-3xl mx-auto">
              למה לבחור בבונה אתרים שמבין מכירות?
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative p-6 bg-surface-base rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 group h-full flex flex-col"
              >
                <div className="flex-shrink-0">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4`}>
                    <benefit.icon className="text-3xl text-white" />
                  </div>
                </div>
                <h3 className="font-heebo text-xl font-bold text-brand-text mb-3">
                  {benefit.title}
                </h3>
                <p className="font-heebo text-gray-600 leading-relaxed flex-grow">
                  {benefit.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMe

