// Description: Testimonials section with client reviews
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

interface Testimonial {
  id: string
  name: string
  role?: string
  avatar?: string
  quote: string
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'שירה כהן',
      role: 'מנהלת שיווק',
      avatar: '/assets/avatars/avatar1.webp',
      quote: 'העבודה עם פיני הייתה חוויה מדהימה. הוא הבין בדיוק מה אנחנו צריכים ובנה לנו אתר שמייצר לידים כל יום.',
    },
    {
      id: '2',
      name: 'דניאל לוי',
      role: 'בעל עסק',
      avatar: '/assets/avatars/avatar2.webp',
      quote: 'האתר שבנה פיני העלה את המכירות שלנו ב-60%. מקצועי, מהיר ותמיד זמין לעזרה.',
    },
    {
      id: '3',
      name: 'יעל רוזן',
      role: 'יועצת עסקית',
      avatar: '/assets/avatars/avatar3.webp',
      quote: 'שירות ברמה הכי גבוהה! פיני ליווה אותנו מההתחלה ועד ההשקה ומעבר לה. ממליצה בחום!',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-surface-base">
      <div className="max-w-screen-xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-4xl sm:text-5xl font-bold text-brand-text mb-4">
              מה הלקוחות שלנו אומרים
            </h2>
          </div>
        </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <ScrollReveal key={testimonial.id} delay={index * 0.15}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 bg-surface-soft rounded-2xl border border-gray-100 transition-all duration-300 h-full flex flex-col"
                      >
                        <div className="flex flex-col items-center text-center h-full">
                          <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-4 border-brand-primary/20 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                            {testimonial.avatar ? (
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none'
                                }}
                              />
                            ) : (
                              <FiUser className="text-4xl text-brand-primary" />
                            )}
                          </div>

                          <p className="font-heebo text-gray-700 leading-relaxed italic mb-6 flex-grow">
                            "{testimonial.quote}"
                          </p>

                          <div>
                            <h4 className="font-heebo text-lg font-bold text-brand-text">
                              {testimonial.name}
                            </h4>
                            {testimonial.role && (
                              <p className="font-heebo text-sm text-gray-500">
                                {testimonial.role}
                              </p>
                            )}
                          </div>
                        </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
