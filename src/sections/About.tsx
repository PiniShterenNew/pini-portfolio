import React from 'react'
import ScrollReveal from '../components/ScrollReveal'

const About: React.FC = () => {
  const technologies = ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node.js']

  return (
    <section id="about" className="py-section bg-surface-warm">
      <div className="max-w-tight mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          {/* Profile image */}
          <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 bg-surface-base">
            <img
              src="/assets/profile.png"
              alt="פיני שטרן"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-rubik text-section text-brand-text mb-1">פיני שטרן</h2>
          <p className="font-heebo text-body text-brand-gold mb-6">מפתח ומעצב אתרים</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="gold-line mx-auto mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-4 text-right max-w-lg mx-auto">
            <p className="font-heebo text-body-lg text-brand-muted leading-relaxed">
              אני מאמין שאתר טוב הוא כלי עסקי — לא יצירת אמנות.
            </p>
            <p className="font-heebo text-body text-brand-muted leading-relaxed">
              ב-5 השנים האחרונות בניתי אתרים לעסקים קטנים ובינוניים.
              מה שמבדיל אותי: אני חושב קודם על העסק שלך, ורק אחר כך על הקוד.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="font-dm text-caption text-brand-muted px-3 py-1.5 border border-surface-border rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
