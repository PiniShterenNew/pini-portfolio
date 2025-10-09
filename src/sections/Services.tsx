// Description: Services section with glass effect cards and modern design
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ShoppingCart, Globe } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Rocket,
      title: 'דפי נחיתה ממירים',
      description: 'עיצוב ופיתוח דפי נחיתה ממוקדי מטרה, שמניעים לפעולה ומביאים תוצאות אמיתיות.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: ShoppingCart,
      title: 'חנויות מסחר אלקטרוני',
      description: 'פיתוח חנויות אונליין חכמות, מהירות ומעוצבות — שמגדילות את המכירות ומעצימות את המותג שלכם.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'פיתוח אתרי תדמית',
      description: 'אתרים מהירים שמציגים את העסק שלך בצורה מקצועית ומרשימה, עם דגש על חוויית משתמש מדויקת ועיצוב מותאם אישית.',
      gradient: 'from-pink-500 to-rose-500',
    }
  ]

  return (
    <section id="services" className="relative py-20 bg-surface-soft">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <motion.h2 
          className="font-jakarta text-4xl sm:text-5xl font-bold bg-grad-brand bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          איך אני יכול לעזור?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="group bg-surface-base rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-[70px] h-[70px] mx-auto mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} group-hover:scale-105 transition-transform duration-300`}>
                  <IconComponent className="w-9 h-9 text-white" />
                </div>
                <h3 className="font-heebo text-xl font-bold text-brand-text mb-3">
                  {service.title}
                </h3>
                <p className="font-heebo text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
