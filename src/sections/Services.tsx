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
      color: '#6366F1',
      hoverShadow: 'hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.2)]'
    },
    {
      icon: ShoppingCart,
      title: 'חנויות מסחר אלקטרוני',
      description: 'פיתוח חנויות אונליין חכמות, מהירות ומעוצבות — שמגדילות את המכירות ומעצימות את המותג שלכם.',
      color: '#8B5CF6',
      hoverShadow: 'hover:shadow-[0_12px_40px_-8px_rgba(139,92,246,0.2)]'
    },
    {
      icon: Globe,
      title: 'פיתוח אתרי תדמית',
      description: 'אתרים מהירים שמציגים את העסק שלך בצורה מקצועית ומרשימה, עם דגש על חוויית משתמש מדויקת ועיצוב מותאם אישית.',
      color: '#EC4899',
      hoverShadow: 'hover:shadow-[0_12px_40px_-8px_rgba(236,72,153,0.2)]'
    }
  ]

  return (
    <section id="services" className="relative py-24 px-6 bg-gradient-to-b from-white via-[#F9F5FF] to-[#EEF2FF]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="font-display text-4xl font-extrabold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          איך אני יכול לעזור?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className={`group bg-white/70 backdrop-blur-md border border-[#E5E7EB] rounded-[20px] p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] ${service.hoverShadow} transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-[70px] h-[70px] mx-auto mb-6 rounded-[16px] flex items-center justify-center bg-gradient-to-br from-[#E0E7FF] via-[#F5F3FF] to-[#FFF0F6] group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-9 h-9" style={{ color: service.color }} />
                </div>
                <h3 className="font-display text-xl font-bold text-zinc-800 mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-zinc-600 leading-relaxed text-sm">
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
