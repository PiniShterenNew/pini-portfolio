import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  outcome: string
  image: string
}

const SelectedWork: React.FC = () => {
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      title: t('פלטפורמת SaaS לניהול משימות', 'SaaS Task Management Platform'),
      category: t('מוצר SaaS', 'SaaS Product'),
      description: t(
        'פלטפורמה מלאה לניהול משימות ופרויקטים עם דאשבורד אנליטיקס, מערכת הרשאות מתקדמת ואינטגרציות.',
        'Full-featured task & project management platform with analytics dashboard, advanced permissions, and integrations.'
      ),
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      outcome: t('3,000+ משתמשים פעילים', '3,000+ active users'),
      image: '/assets/project1.webp',
    },
    {
      title: t('חנות אונליין למותג אופנה', 'E-Commerce Fashion Brand'),
      category: t('חנות אונליין', 'E-Commerce'),
      description: t(
        'חנות דיגיטלית מלאה עם חוויית קנייה חלקה, מערכת תשלומים מאובטחת וניהול מלאי אוטומטי.',
        'Complete digital store with seamless shopping experience, secure payments, and automated inventory management.'
      ),
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      outcome: t('+60% עלייה במכירות', '+60% increase in sales'),
      image: '/assets/project2.webp',
    },
    {
      title: t('דף נחיתה לסטארטאפ טכנולוגי', 'Tech Startup Landing Page'),
      category: t('דף נחיתה', 'Landing Page'),
      description: t(
        'דף נחיתה ממיר עם אנימציות חלקות, פרפורמנס מעולה ו-SEO מותאם לגיוס לידים.',
        'High-converting landing page with smooth animations, excellent performance, and SEO optimized for lead generation.'
      ),
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      outcome: t('+80% שיפור בהמרות', '+80% conversion improvement'),
      image: '/assets/project3.webp',
    },
  ]

  return (
    <section id="work" className="py-section">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent tracking-wide mb-4">
              {t('פרויקטים נבחרים', 'Selected Projects')}
            </span>
            <h2 className="font-head text-h1 text-tx-primary mb-4">
              {t('עבודות נבחרות', 'Selected Work')}
            </h2>
            <p className="font-body text-body-lg text-tx-secondary max-w-xl mx-auto">
              {t(
                'כל פרויקט = בעיה אמיתית שנפתרה עם קוד נקי ותוצאות מדידות.',
                'Every project = a real problem solved with clean code and measurable results.'
              )}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <article className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-2 relative aspect-video lg:aspect-auto bg-midnight-elevated overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                      }}
                    />
                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-midnight-elevated" />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
                    <span className="inline-block self-start font-body text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                      {project.category}
                    </span>

                    <h3 className="font-head text-h2 text-tx-primary mb-3">
                      {project.title}
                    </h3>

                    <p className="font-body text-body text-tx-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-body font-medium text-tx-muted bg-midnight-elevated border border-midnight-border rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className="flex items-center gap-2 text-sm font-body font-medium text-accent">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                      {project.outcome}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
