// Description: Clean process section with infographic design
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code, Rocket } from 'lucide-react'

const Process: React.FC = () => {
  const steps = [
    {
      title: 'גילוי ואסטרטגיה',
      description: 'נתחיל בזיהוי הצרכים, המטרות והחזון שלך — כדי לוודא שהאתר משרת את העסק בצורה מדויקת.',
      icon: Lightbulb,
      color: '#6366F1'
    },
    {
      title: 'עיצוב חוויית משתמש',
      description: 'נבנה חוויה ויזואלית מזמינה, עם דגש על אסתטיקה, קלות שימוש, וזרימה אינטואיטיבית.',
      icon: Palette,
      color: '#8B5CF6'
    },
    {
      title: 'פיתוח והתאמה',
      description: 'פיתוח האתר בפועל — בקוד נקי, ביצועים גבוהים והתאמה מושלמת לכל מסך ודפדפן.',
      icon: Code,
      color: '#A855F7'
    },
    {
      title: 'השקה ותמיכה',
      description: 'העלאת האתר לאוויר, בדיקות אחרונות וליווי צמוד גם לאחר ההשקה.',
      icon: Rocket,
      color: '#EC4899'
    }
  ]

  return (
    <section id="process" className="relative py-24 px-6 bg-[#FDFDFF]" dir="rtl">
      <div className="max-w-2xl mx-auto">
        {/* כותרת */}
        <motion.h2 
          className="font-display text-4xl font-extrabold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          איך אני עובד
        </motion.h2>

        {/* פריסה אנכית */}
        <div className="flex flex-col items-start gap-10">
          {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 w-full"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* נקודה עם מספר */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div 
                    className="w-7 h-7 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold shadow-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* תוכן */}
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-zinc-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-zinc-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
