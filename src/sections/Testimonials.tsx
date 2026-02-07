import React from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiStar } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

interface Testimonial {
  id: string
  name: string
  role?: string
  avatar?: string
  quote: string
  rating: number
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'שירה כהן',
      role: 'מנהלת שיווק',
      avatar: '/assets/avatars/avatar1.webp',
      quote: 'העבודה עם פיני הייתה חוויה מדהימה. הוא הבין בדיוק מה אנחנו צריכים ובנה לנו אתר שמייצר לידים כל יום.',
      rating: 5,
    },
    {
      id: '2',
      name: 'דניאל לוי',
      role: 'בעל עסק',
      avatar: '/assets/avatars/avatar2.webp',
      quote: 'האתר שבנה פיני העלה את המכירות שלנו ב-60%. מקצועי, מהיר ותמיד זמין לעזרה.',
      rating: 5,
    },
    {
      id: '3',
      name: 'יעל רוזן',
      role: 'יועצת עסקית',
      avatar: '/assets/avatars/avatar3.webp',
      quote: 'שירות ברמה הכי גבוהה! פיני ליווה אותנו מההתחלה ועד ההשקה ומעבר לה. ממליצה בחום!',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-section bg-surface-base relative overflow-hidden">
      <div className="absolute inset-0 bg-grad-glow pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heebo text-sm font-semibold text-brand-primary tracking-wide mb-3">המלצות</span>
            <h2 className="section-heading mb-4">
              מה הלקוחות אומרים
            </h2>
            <p className="section-subtitle">
              לקוחות מרוצים שמספרים על החוויה שלהם.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-8 bg-surface-soft rounded-2xl border border-gray-100 hover:border-brand-primary/15 transition-all duration-300 h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-heebo text-brand-text leading-relaxed mb-6 flex-grow text-[0.95rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <FiUser className="text-xl text-brand-primary" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-heebo text-sm font-bold text-brand-text">
                      {testimonial.name}
                    </h4>
                    {testimonial.role && (
                      <p className="font-heebo text-xs text-brand-muted">
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
