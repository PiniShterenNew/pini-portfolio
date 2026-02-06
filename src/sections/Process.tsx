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
      description: 'עיצוב חכם וממיר שמותאם לזהות המותג שלך ומעוצב להמרה מקסימלית.',
      icon: FiPenTool,
    },
    {
      number: '03',
      title: 'פיתוח',
      description: 'הופך את העיצוב לאתר חי — מהיר, רספונסיבי, ומוכן ל-SEO מלא עם בדיקות איכות.',
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
    <section id="process" className="py-section bg-surface-base relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heebo text-sm font-semibold text-brand-primary tracking-wide mb-3">תהליך העבודה</span>
            <h2 className="section-heading mb-4">
              כך נבנה האתר שלך
            </h2>
            <p className="section-subtitle">
              תהליך פשוט ושקוף, מהרעיון ועד ההשקה.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative p-6 bg-surface-soft rounded-2xl border border-gray-100 hover:border-brand-primary/20 transition-all duration-300 h-full flex flex-col group"
              >
                {/* Step number watermark */}
                <span className="absolute top-4 left-4 font-jakarta text-6xl font-extrabold text-gray-100 group-hover:text-brand-primary/10 transition-colors duration-300 select-none leading-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="p-3 bg-grad-brand rounded-xl w-fit mb-4 shadow-md">
                    <step.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="font-heebo text-xl font-bold text-brand-text mb-3">
                    {step.title}
                  </h3>
                  <p className="font-heebo text-brand-muted leading-relaxed flex-grow text-[0.95rem]">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-surface-base border-2 border-brand-primary/30 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-primary rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
