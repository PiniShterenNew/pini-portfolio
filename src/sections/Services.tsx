import React from 'react'
import ScrollReveal from '../components/ScrollReveal'

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      title: 'דפי נחיתה',
      description: 'דף שמספר סיפור אחד ברור ומוביל לפעולה אחת. מהיר, ממוקד, ממיר.',
      tags: ['מהירות', 'המרה', 'SEO'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
      title: 'חנויות אונליין',
      description: 'חנות דיגיטלית שנעים לקנות בה. מאובטחת, מהירה, ופשוטה לניהול.',
      tags: ['תשלומים', 'ניהול מוצרים', 'מכירות'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: 'אתרי תדמית',
      description: 'הפנים הדיגיטליות של העסק שלך. אתר שמשדר אמינות ומייצר פניות.',
      tags: ['זהות מותגית', 'ביצועים', 'נגישות'],
    },
  ]

  return (
    <section id="services" className="py-section">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">מה אני בונה</h2>
            <p className="section-subtitle">
              כל פרויקט מתחיל מהבנת העסק ונגמר באתר שמביא תוצאות.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="card-base h-full flex flex-col">
                <div className="text-brand-gold mb-5">
                  {service.icon}
                </div>

                <h3 className="font-rubik text-card-title text-brand-text mb-3">
                  {service.title}
                </h3>

                <p className="font-heebo text-body text-brand-muted leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="border-t border-surface-border pt-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-heebo text-caption text-brand-muted"
                      >
                        {tag}{i < service.tags.length - 1 && ' ·'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
