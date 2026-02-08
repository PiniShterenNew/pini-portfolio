import React from 'react'
import ScrollReveal from '../components/ScrollReveal'

interface Project {
  id: string
  title: string
  category: string
  story: string
  image: string
  metrics: { label: string; value: string }[]
  link?: string
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'אתר תדמית לעסק קטן',
      category: 'אתר תדמית',
      image: '/assets/project1.webp',
      story: 'הלקוח הגיע עם אתר ישן שלא מייצר פניות. בניתי לו אתר חדש עם פוקוס על SEO מקומי וטופס יצירת קשר ברור. תוך חודש — עלייה של 45% בפניות מהאתר.',
      metrics: [
        { label: 'זמן טעינה', value: '0.8s' },
        { label: 'עלייה בפניות', value: '+45%' },
      ],
    },
    {
      id: '2',
      title: 'חנות אונליין למותג אופנה',
      category: 'חנות אונליין',
      image: '/assets/project2.webp',
      story: 'מותג אופנה צעיר שרצה למכור ישירות ללקוחות. בניתי חנות מהירה עם חוויית קנייה חלקה, תשלומים מאובטחים וניהול מוצרים פשוט. התוצאה: עלייה של 60% במכירות.',
      metrics: [
        { label: 'זמן טעינה', value: '1.1s' },
        { label: 'עלייה במכירות', value: '+60%' },
      ],
    },
    {
      id: '3',
      title: 'דף נחיתה לקמפיין שיווקי',
      category: 'דף נחיתה',
      image: '/assets/project3.webp',
      story: 'קמפיין שיווקי שהיה צריך דף נחיתה ממוקד עם מסר ברור וקריאה לפעולה אחת. עיצוב נקי, מהירות טעינה שיא, ותוצאות שמדברות בעד עצמן.',
      metrics: [
        { label: 'עלייה בהמרות', value: '+80%' },
        { label: 'ירידה ב-Bounce', value: '-35%' },
      ],
    },
  ]

  return (
    <section id="portfolio" className="py-section bg-surface-warm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">עבודות נבחרות</h2>
            <p className="section-subtitle">
              כל פרויקט = בעיה עסקית שנפתרה.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.05}>
              <article className="bg-surface-card rounded-xl overflow-hidden border border-surface-border">
                {/* Project image */}
                <div className="relative aspect-video bg-surface-warm overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                {/* Project content */}
                <div className="p-6 sm:p-8">
                  <span className="inline-block font-heebo text-caption font-medium text-brand-gold mb-3">
                    {project.category}
                  </span>

                  <h3 className="font-rubik text-card-title text-brand-text mb-4">
                    {project.title}
                  </h3>

                  <p className="font-heebo text-body text-brand-muted leading-relaxed mb-6 max-w-2xl">
                    {project.story}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="font-dm text-xl font-bold text-brand-dark">
                          {metric.value}
                        </div>
                        <div className="font-heebo text-caption text-brand-muted">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost mt-6 text-small"
                    >
                      צפו באתר החי
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
