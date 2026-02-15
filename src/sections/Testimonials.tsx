import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

const Testimonials: React.FC = () => {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote: t(
        'פיני הבין בדיוק מה אנחנו צריכים והפך את הרעיון למוצר עובד תוך שבועות. הקוד נקי, האתר מהיר, והתמיכה אחרי ההשקה — ברמה אחרת לגמרי.',
        'Pini understood exactly what we needed and turned our idea into a working product within weeks. Clean code, fast site, and post-launch support on a completely different level.'
      ),
      name: t('דוד כהן', 'David Cohen'),
      role: t('מייסד, TechFlow', 'Founder, TechFlow'),
    },
    {
      quote: t(
        'עבדנו עם כמה מפתחים לפני פיני. ההבדל הוא בתשומת הלב לפרטים ובגישה המוצרית. הוא לא רק כותב קוד — הוא חושב על כל החוויה.',
        "We worked with several developers before Pini. The difference is in the attention to detail and product mindset. He doesn't just write code — he thinks about the entire experience."
      ),
      name: t('שירה לוי', 'Shira Levi'),
      role: t('סמנכ״לית שיווק, Brandly', 'CMO, Brandly'),
    },
  ]

  return (
    <section className="py-section">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent tracking-wide mb-4">
              {t('מה אומרים עליי', 'What They Say')}
            </span>
            <h2 className="font-head text-h1 text-tx-primary">
              {t('המלצות', 'Testimonials')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <blockquote className="card p-6 sm:p-8 h-full flex flex-col">
                {/* Quote icon */}
                <svg className="w-8 h-8 text-accent/30 mb-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>

                <p className="font-body text-body text-tx-secondary leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-midnight-border pt-4">
                  <p className="font-head text-sm font-semibold text-tx-primary">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-tx-muted mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
