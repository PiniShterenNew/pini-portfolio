import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

const HowItWorks: React.FC = () => {
  const { t } = useLanguage()

  const steps = [
    {
      number: '01',
      title: t('שיחת היכרות', 'Discovery Call'),
      description: t(
        'שיחה קצרה להבין את הצרכים, המטרות והאתגרים שלך. בסוף השיחה — תמונה ברורה של מה צריך ואיך מגיעים לשם.',
        'A quick call to understand your needs, goals, and challenges. By the end — a clear picture of what\'s needed and how to get there.'
      ),
    },
    {
      number: '02',
      title: t('תכנון ועיצוב', 'Plan & Design'),
      description: t(
        'ארכיטקטורה טכנית, עיצוב UI/UX, ופרוטוטייפ אינטראקטיבי. הכל שקוף — אתה רואה כל שלב.',
        'Technical architecture, UI/UX design, and an interactive prototype. Fully transparent — you see every step.'
      ),
    },
    {
      number: '03',
      title: t('פיתוח והשקה', 'Build & Launch'),
      description: t(
        'פיתוח אג\'ילי עם עדכונים שבועיים, בדיקות QA קפדניות, ודיפלוי חלק. אחרי ההשקה — ליווי ותמיכה.',
        'Agile development with weekly updates, thorough QA testing, and smooth deployment. Post-launch — ongoing support.'
      ),
    },
  ]

  return (
    <section id="process" className="py-section">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent tracking-wide mb-4">
              {t('איך זה עובד', 'How It Works')}
            </span>
            <h2 className="font-head text-h1 text-tx-primary mb-4">
              {t('תהליך עבודה', 'Work Process')}
            </h2>
            <p className="font-body text-body-lg text-tx-secondary max-w-xl mx-auto">
              {t(
                'תהליך פשוט ושקוף — מהרעיון ועד הפרודקשן.',
                'A simple, transparent process — from idea to production.'
              )}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-0 bottom-0 start-[1.4375rem] w-px bg-midnight-border hidden sm:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative flex gap-6 sm:gap-8">
                    {/* Step number */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-midnight-surface border border-midnight-border flex items-center justify-center">
                      <span className="font-head text-sm font-bold text-accent">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5">
                      <h3 className="font-head text-h3 text-tx-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-body text-tx-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
