import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const About: React.FC = () => {
  const highlights = [
    'ניסיון של 5+ שנים בפיתוח אתרים',
    'מומחיות ב-React, TypeScript ו-Tailwind',
    'התמחות בביצועים, SEO ו-UX',
    'ליווי אישי לאורך כל הפרויקט',
  ]

  return (
    <section id="about" className="py-section bg-surface-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-grad-glow pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-accent/10 to-brand-secondary/20 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center">
                  <img
                    src="/assets/profile.png"
                    alt="פיני שטרן - בניית אתרים"
                    className="w-full h-full object-cover relative z-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-accent/10 rounded-full -z-10" />
            </div>
          </ScrollReveal>

          {/* Content side */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <span className="inline-block font-heebo text-sm font-semibold text-brand-primary tracking-wide">קצת עליי</span>
              <h2 className="section-heading">
                פיני שטרן
              </h2>
              <p className="font-heebo text-brand-muted leading-relaxed text-lg">
                מפתח אתרים שמבין את העולם העסקי. אני לא רק כותב קוד — אני בונה כלים דיגיטליים
                שעוזרים לעסקים לגדול. כל אתר שאני בונה מתוכנן מראש להיות מהיר, ממיר ונגיש.
              </p>
              <p className="font-heebo text-brand-muted leading-relaxed">
                עם ניסיון של שנים בפיתוח אתרים ודפי נחיתה, אני מביא שילוב של ידע טכני
                והבנה שיווקית שמניב תוצאות אמיתיות ללקוחות שלי.
              </p>

              <ul className="space-y-3 pt-2">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 font-heebo text-brand-text"
                  >
                    <FiCheckCircle className="text-brand-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heebo font-semibold text-white bg-grad-brand rounded-2xl shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  בוא נדבר על הפרויקט שלך
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
