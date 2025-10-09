// Description: Process section with 4 steps and pop animations
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { FiFileText, FiPenTool, FiCode, FiZap } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'אפיון',
      description: 'שיחה ראשונית להבנת הצרכים, המטרות והקהל שלך. מפתחים יחד אסטרטגיה דיגיטלית ממוקדת.',
      icon: FiFileText,
    },
    {
      number: '02',
      title: 'עיצוב',
      description: 'בונה עיצוב חכם וממיר שמותאם לזהות המותג שלך ומעוצב להמרה מקסימלית.',
      icon: FiPenTool,
    },
    {
      number: '03',
      title: 'פיתוח',
      description: 'הופך את העיצוב לאתר חי – מהיר, רספונסיבי, ומוכן ל-SEO מלא. בדיקות איכות קפדניות.',
      icon: FiCode,
    },
    {
      number: '04',
      title: 'השקה',
      description: 'מעלים לאוויר, מבצעים אופטימיזציה אחרונה ומלווים אותך גם אחרי ההשקה.',
      icon: FiZap,
    },
  ]

  return (
    <section id="process" className="py-20 bg-surface-base">
      <div className="max-w-screen-xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-4xl sm:text-5xl font-bold text-brand-text mb-4">
              כך נבנה האתר שלך –
            </h2>
            <p className="font-heebo text-xl text-gray-600">
              פשוט ושקוף.
            </p>
          </div>
        </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {steps.map((step, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="relative p-6 bg-surface-soft rounded-2xl border border-gray-100 hover:border-brand-primary/30 transition-all duration-300 h-full flex flex-col"
                      >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-grad-brand rounded-xl">
                    <step.icon className="text-3xl text-white" />
                  </div>
                  <span className="font-jakarta text-4xl font-bold text-gray-200">
                    {step.number}
                  </span>
                </div>
                        <h3 className="font-heebo text-xl font-bold text-brand-text mb-3">
                          {step.title}
                        </h3>
                        <p className="font-heebo text-gray-600 leading-relaxed flex-grow">
                          {step.description}
                        </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
