import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Hero: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow" />

      <div className="section-wrap relative z-10 w-full">
        <div className="hero-stagger max-w-3xl">
          {/* Tag */}
          <span className="inline-block animate-hero-fade font-body text-sm font-medium text-accent tracking-wide mb-6">
            {t('מפתח Full-Stack · React & Next.js', 'Full-Stack Developer · React & Next.js')}
          </span>

          {/* Headline */}
          <h1 className="animate-hero-d1 font-head text-display text-tx-primary mb-6">
            {t(
              <>אני בונה מוצרים דיגיטליים<br /><span className="text-gradient-accent">שעובדים.</span></>,
              <>I build digital products<br /><span className="text-gradient-accent">that work.</span></>
            )}
          </h1>

          {/* Subheadline */}
          <p className="animate-hero-d2 font-body text-body-lg text-tx-secondary max-w-xl mb-10 leading-relaxed">
            {t(
              'מפתח Full-Stack עם פוקוס על React, Next.js ובניית מוצרי SaaS. מהרעיון ועד הפרודקשן — קוד נקי, ביצועים גבוהים, חוויית משתמש מושלמת.',
              'Full-Stack developer focused on React, Next.js, and building SaaS products. From concept to production — clean code, high performance, perfect UX.'
            )}
          </p>

          {/* CTAs */}
          <div className="animate-hero-d3 flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-body px-8 py-3.5"
            >
              {t('בואו נדבר', "Let's Talk")}
            </button>
            <a href="#work" className="btn-secondary text-body px-8 py-3.5">
              {t('ראו עבודות', 'View Work')}
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Proof row */}
          <div className="animate-hero-d4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-tx-muted font-body">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t('40+ פרויקטים', '40+ Projects')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t('מוצרי SaaS', 'SaaS Products')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              React & Next.js
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
