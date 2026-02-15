import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

const Features: React.FC = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: t('פיתוח Full-Stack', 'Full-Stack Development'),
      description: t(
        'React, Next.js, Node.js, TypeScript — סטאק מודרני שמבטיח ביצועים, סקיילביליות ותחזוקה קלה.',
        'React, Next.js, Node.js, TypeScript — a modern stack ensuring performance, scalability, and easy maintenance.'
      ),
      accent: 'from-accent/20 to-transparent',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
        </svg>
      ),
      title: t('עיצוב UI/UX', 'UI/UX Design'),
      description: t(
        'ממשקים נקיים, אינטואיטיביים ומודרניים. כל פיקסל בעיצוב נעשה בכוונה — לא רק יפה, גם שימושי.',
        'Clean, intuitive, modern interfaces. Every pixel is intentional — not just beautiful, but functional.'
      ),
      accent: 'from-cyan-400/20 to-transparent',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75m16.5 3.75v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
        </svg>
      ),
      title: t('מוצרי SaaS', 'SaaS Products'),
      description: t(
        'בניית מוצרים מאפס — אוטנטיקציה, תשלומים, דאשבורדים, API-ים. הכל under one roof.',
        'Building products from scratch — auth, payments, dashboards, APIs. Everything under one roof.'
      ),
      accent: 'from-emerald-400/20 to-transparent',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: t('ביצועים ו-SEO', 'Performance & SEO'),
      description: t(
        'אתרים שנטענים מהר, מדורגים גבוה וממירים. Lighthouse 90+, Core Web Vitals ירוקים.',
        'Sites that load fast, rank high, and convert. Lighthouse 90+, green Core Web Vitals.'
      ),
      accent: 'from-amber-400/20 to-transparent',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: t('רספונסיבי מושלם', 'Pixel-Perfect Responsive'),
      description: t(
        'כל מסך, כל מכשיר — חוויה מושלמת. מובייל-פירסט עם תשומת לב לכל פרט.',
        'Every screen, every device — perfect experience. Mobile-first with attention to every detail.'
      ),
      accent: 'from-violet-400/20 to-transparent',
    },
  ]

  return (
    <section id="features" className="py-section">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent tracking-wide mb-4">
              {t('מה אני מביא לשולחן', 'What I Bring')}
            </span>
            <h2 className="font-head text-h1 text-tx-primary mb-4">
              {t('יכולות', 'Features')}
            </h2>
            <p className="font-body text-body-lg text-tx-secondary max-w-xl mx-auto">
              {t(
                'שילוב של פיתוח, עיצוב וחשיבה מוצרית — כל מה שצריך כדי לבנות מוצר דיגיטלי מצוין.',
                'A blend of development, design, and product thinking — everything needed to build an excellent digital product.'
              )}
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.07}
              className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="card group h-full p-6 relative overflow-hidden">
                {/* Subtle gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-5">
                    {feature.icon}
                  </div>

                  <h3 className="font-head text-h3 text-tx-primary mb-3">
                    {feature.title}
                  </h3>

                  <p className="font-body text-body text-tx-secondary leading-relaxed">
                    {feature.description}
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

export default Features
