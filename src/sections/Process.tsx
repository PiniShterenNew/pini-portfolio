// Description: Process section with elegant infographic design and modular cards
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { Search, Palette, Code, Rocket } from 'lucide-react'

const Process: React.FC = () => {

  const steps = [
    {
      title: 'גילוי ואסטרטגיה',
      description: 'נבין לעומק את המטרות והחזון שלכם כדי לגבש אסטרטגיה מנצחת.',
      icon: Search,
      number: '01'
    },
    {
      title: 'עיצוב חוויתי',
      description: 'ניצור עיצוב ייחודי ואינטואיטיבי שמספר את הסיפור של המותג.',
      icon: Palette,
      number: '02'
    },
    {
      title: 'פיתוח מתקדם',
      description: 'נכתוב קוד נקי ויעיל עם הטכנולוגיות המתקדמות ביותר.',
      icon: Code,
      number: '03'
    },
    {
      title: 'השקה ותמיכה',
      description: 'נעלה את האתר ונמשיך ללוות אתכם עם תמיכה מתמשכת.',
      icon: Rocket,
      number: '04'
    }
  ]

  return (
    <section className="py-20 sm:py-28 process-infographic-section" id="process">
      {/* Gradient Top */}
      <div className="process-gradient-top"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* כותרת עם gradient */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 process-infographic-title">
            התהליך שלנו
          </h2>
          <p className="text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto leading-relaxed">
            מתהליך גילוי מעמיק ועד השקה מושלמת - כל צעד מתוכנן בקפידה
          </p>
        </ScrollReveal>

        {/* פריסה למחשב - אופקית */}
        <div className="hidden md:flex md:flex-row md:justify-center md:items-start md:gap-8 lg:gap-12 relative">
          {/* קו חיבור אופקי אנימטיבי */}
          <motion.div 
            className="absolute top-16 left-1/2 transform -translate-x-1/2 h-0.5 bg-[hsl(var(--primary))]"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ maxWidth: '4xl' }}
          />
          
          {steps.map((step, index) => {
            return (
              <ScrollReveal key={index} delay={index * 0.15} className="relative flex-1 max-w-xs">
                {/* נקודת חיבור */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[hsl(var(--primary))] rounded-full z-20 process-connector-dot"></div>
                
                <div className="process-infographic-card group">
                  {/* מספר השלב */}
                  <motion.div 
                    className="process-step-number-large"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* תוכן הכרטיס */}
                  <div className="process-card-content">
                    <h3 className="process-card-title">{step.title}</h3>
                    <p className="process-card-description">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* פריסה למובייל - אנכית */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            return (
              <ScrollReveal key={index} delay={index * 0.1} direction="left" className="relative">
                {/* קו חיבור אנכי (לא אחרון) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 process-connector-mobile"></div>
                )}
                
                <div className="process-infographic-card-mobile group">
                  {/* מספר השלב */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className="process-step-number-mobile-large"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  
                  {/* תוכן הכרטיס */}
                  <div className="process-card-content-mobile">
                    <h3 className="process-card-title-mobile">{step.title}</h3>
                    <p className="process-card-description-mobile">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      {/* Gradient Bottom */}
      <div className="process-gradient-bottom"></div>
    </section>
  )
}

export default Process
