import React from 'react'
import ScrollReveal from '../components/ScrollReveal'

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'שיחת היכרות',
      description: 'נדבר 30 דקות. אני שומע על העסק שלך, מה המטרות, ומה התקציב. בסוף השיחה תדע בדיוק מה מקבלים ובכמה.',
    },
    {
      number: '02',
      title: 'עיצוב ואישור',
      description: 'אני מעצב דף ראשוני ושולח לך תוך 5 ימי עבודה. ממשיכים לעדכן עד שאתה מרוצה לגמרי.',
    },
    {
      number: '03',
      title: 'פיתוח ובדיקות',
      description: 'בונה את האתר, בודק על כל מכשיר, מוודא מהירות ונגישות.',
    },
    {
      number: '04',
      title: 'השקה וליווי',
      description: 'מעלה לאוויר ומלווה 30 יום. אחרי זה — תמיכה לפי הצורך.',
    },
  ]

  return (
    <section id="process" className="py-section">
      <div className="max-w-narrow mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">איך עובדים יחד</h2>
            <p className="section-subtitle">
              תהליך פשוט וברור, בלי הפתעות.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical timeline */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="relative pr-10">
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-[0.9375rem] top-10 bottom-0 w-px bg-surface-border" />
                )}

                {/* Timeline dot */}
                <div className="absolute right-0 top-1 w-8 h-8 rounded-full bg-surface-card border-2 border-surface-border flex items-center justify-center">
                  <span className="font-dm text-xs font-medium text-brand-muted">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-rubik text-body font-semibold text-brand-text mb-2">
                    {step.title}
                  </h3>
                  <p className="font-heebo text-body text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
