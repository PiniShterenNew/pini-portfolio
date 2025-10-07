// Description: Testimonials section with single centered testimonial
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Testimonials: React.FC = () => {
  const { ref, inView } = useScrollAnimation()

  const testimonial = {
    name: 'שרה כהן',
    company: 'בעלת מותג אופנה',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaMuy709V7e40MH2jhmDvri9HbmSBYJoDRS_PdQVzJm8Rr_5nUpbnnX1UfRVoTRqt5thR4OguPFVYLtIAb3ZTD_B-qi6srZZ3-lZqUqWT9yHRagxfPKgdo3BvhnMsgJT48M6ulJQKTJXMpe37SseAyjLRnQ7eUkuU4wTx566Zs0ceA8HQQuSQ5X3KBHMRuljIkmwsqF9glc6KdwCVqhtP47bb8y3rwgUUZ90AlIrrsatvTntjZJmABtMKS6j4VBkyb0HHiYElmmxDk',
    text: 'פנחס הפך את הנוכחות המקוונת שלנו עם אתר מדהים ופונקציונלי. הוא היה קשוב, מקצועי, והתוצאה הסופית עלתה על כל הציפיות. מומלץ בחום!'
  }

  return (
    <section className="py-20 sm:py-28" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={ref}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-16 text-[hsl(var(--text-primary))]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          מה לקוחות אומרים
        </motion.h2>
        
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 sm:p-12 card-enhanced text-center card-border shadow-unified">
          <img 
            className="w-24 h-24 rounded-full mx-auto -mt-24 mb-6 border-4 border-card shadow-md" 
            src={testimonial.image} 
            alt={testimonial.name}
          />
          <motion.p 
            className="text-lg sm:text-xl font-medium text-[hsl(var(--text-primary))]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            "{testimonial.text}"
          </motion.p>
          <motion.p 
            className="mt-6 font-bold text-[hsl(var(--text-primary))]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {testimonial.name}
          </motion.p>
          <motion.p 
            className="text-sm text-[hsl(var(--text-secondary))]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {testimonial.company}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
