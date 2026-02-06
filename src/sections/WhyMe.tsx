import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiTarget, FiHeart, FiEye } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const WhyMe: React.FC = () => {
  const benefits = [
    {
      icon: FiZap,
      title: 'מהירות טעינה שיא',
      description: 'אתרים מהירים שמדורגים גבוה ב-SEO ומספקים חוויית משתמש מושלמת.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiTarget,
      title: 'UX ממוקד המרה',
      description: 'עיצוב ממוקד שמוביל את המשתמש למטרה — יותר לידים, יותר מכירות.',
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
    <section id="why-me" className="py-section bg-surface-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-grad-glow pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heebo text-sm font-semibold text-brand-primary tracking-wide mb-3">למה לבחור בי</span>
            <h2 className="section-heading mb-4">
              הבידול המנצח
            </h2>
            <p className="section-subtitle">
              בונה אתרים שמבין מכירות — לא רק מי שיודע לכתוב קוד.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative p-6 bg-surface-base rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 group h-full flex flex-col border border-gray-100/80"
              >
                <div className="flex-shrink-0">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4 shadow-lg shadow-brand-primary/10`}>
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="font-heebo text-lg font-bold text-brand-text mb-2">
                  {benefit.title}
                </h3>
                <p className="font-heebo text-brand-muted leading-relaxed flex-grow text-[0.95rem]">
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
