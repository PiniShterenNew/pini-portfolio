// Description: Services section with new design and Material Symbols icons
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const Services: React.FC = () => {

  const services = [
    {
      icon: 'view_quilt',
      title: 'פיתוח אתרי תדמית',
      description: 'אתרים מרהיבים שמציגים את העסק שלכם בצורה המקצועית והמרשימה ביותר, עם דגש על חווית משתמש ועיצוב מותאם אישית.',
      bgColor: 'bg-[hsl(var(--primary)/0.15)] dark:bg-[hsl(var(--primary)/0.25)]',
      textColor: 'text-primary'
    },
    {
      icon: 'shopping_cart',
      title: 'חנויות מסחר אלקטרוני',
      description: 'פיתוח חנויות אונליין חכמות, מהירות וממירות שמספקות חווית קנייה נוחה ומגדילות את המכירות שלכם.',
      bgColor: 'bg-[hsl(var(--secondary)/0.15)] dark:bg-[hsl(var(--secondary)/0.25)]',
      textColor: 'text-secondary'
    },
    {
      icon: 'devices',
      title: 'דפי נחיתה ממירים',
      description: 'עיצוב ופיתוח דפי נחיתה ממוקדי מטרה, שמניעים את הגולשים לפעולה ומשיגים אחוזי המרה גבוהים.',
      bgColor: 'bg-[hsl(var(--tertiary)/0.15)] dark:bg-[hsl(var(--tertiary)/0.25)]',
      textColor: 'text-tertiary'
    }
  ]

  return (
    <section className="py-20 sm:py-28" id="services">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-16 text-[hsl(var(--text-primary))] text-shadow-soft">
            איך אני יכול לעזור?
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="card-hover p-8 bg-card rounded-2xl card-enhanced card-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out hover:bg-[hsl(var(--bg-secondary))]"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className={`service-icon inline-flex items-center justify-center size-14 rounded-xl mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--text-primary))]">{service.title}</h3>
                <p className="text-[hsl(var(--text-secondary))]">{service.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
