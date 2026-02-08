import React from 'react'
import ScrollReveal from '../components/ScrollReveal'

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-20 pb-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content - right side (RTL) */}
          <div className="lg:col-span-3 space-y-6">
            <ScrollReveal>
              <span className="inline-block font-rubik text-small font-medium text-brand-gold tracking-wide">
                מפתח ומעצב אתרים
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1 className="font-rubik text-hero-sm sm:text-hero text-brand-text leading-tight">
                אני בונה אתרים
                <br />
                שעובדים קשה כמוך.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-heebo text-body-lg text-brand-muted max-w-lg leading-relaxed">
                העסק שלך צריך נוכחות דיגיטלית שבאמת מביאה לקוחות.
                לא רק אתר יפה — אתר שעובד.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary text-body px-8 py-3.5"
                >
                  בואו נדבר
                </button>
                <a href="#portfolio" className="btn-ghost group">
                  ראו עבודות
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 rtl:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-heebo text-small text-brand-muted pt-4">
                בניתי 40+ אתרים לעסקים קטנים ובינוניים בישראל.
              </p>
            </ScrollReveal>
          </div>

          {/* Image - left side (RTL) */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-warm">
                  <img
                    src="/assets/profile.png"
                    alt="פיני שטרן — מפתח ומעצב אתרים"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                {/* Gold accent line */}
                <div className="absolute -right-3 top-8 bottom-8 w-0.5 bg-brand-gold hidden lg:block" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
