import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import Modal from '../components/Modal'
import ScrollReveal from '../components/ScrollReveal'

interface Project {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  metrics?: { label: string; value: string }[]
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: '1',
      title: 'אתר תדמית לעסק קטן',
      image: '/assets/project1.webp',
      excerpt: 'אתר מרהיב עם חוויית משתמש רכה, תואם לכל מכשיר ומותאם ל-SEO.',
      category: 'אתר תדמית',
      metrics: [
        { label: 'זמן טעינה', value: '0.8s' },
        { label: 'עלייה בהמרות', value: '+45%' },
      ],
    },
    {
      id: '2',
      title: 'חנות אונליין למותג אופנה',
      image: '/assets/project2.webp',
      excerpt: 'מערכת מסחר אלקטרוני מהירה ומאובטחת עם חוויית קנייה חלקה.',
      category: 'חנות אונליין',
      metrics: [
        { label: 'זמן טעינה', value: '1.1s' },
        { label: 'עלייה במכירות', value: '+60%' },
      ],
    },
    {
      id: '3',
      title: 'דף נחיתה לקמפיין שיווקי',
      image: '/assets/project3.webp',
      excerpt: 'דף נחיתה ממוקד המרה עם עיצוב גרפי מרהיב ותוצאות מוכחות.',
      category: 'דף נחיתה',
      metrics: [
        { label: 'עלייה בהמרות', value: '+80%' },
        { label: 'ירידה ב-Bounce', value: '-35%' },
      ],
    },
  ]

  return (
    <section id="portfolio" className="relative py-section bg-surface-soft overflow-hidden">
      {/* Subtle blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blob-purple rounded-full blur-3xl opacity-30" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heebo text-sm font-semibold text-brand-primary tracking-wide mb-3">פרויקטים נבחרים</span>
            <h2 className="section-heading mb-4">
              עבודות אחרונות
            </h2>
            <p className="section-subtitle">
              כל פרויקט נבנה עם התמקדות בביצועים, המרות ועיצוב מושלם.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group bg-surface-base rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer h-full flex flex-col border border-gray-100/80"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-purple-100 to-pink-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="flex items-center gap-2 text-white font-heebo text-sm font-medium">
                      <FiExternalLink className="text-lg" />
                      צפה בפרטים
                    </span>
                  </div>
                  {/* Category badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-heebo text-xs font-medium text-brand-text">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-heebo text-lg font-bold text-brand-text mb-2">
                    {project.title}
                  </h3>
                  <p className="font-heebo text-brand-muted text-sm mb-4 flex-grow leading-relaxed">
                    {project.excerpt}
                  </p>
                  {project.metrics && (
                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center flex-1">
                          <div className="font-jakarta text-lg font-bold text-brand-primary">{metric.value}</div>
                          <div className="font-heebo text-xs text-brand-muted">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-heebo font-semibold text-brand-primary border-2 border-brand-primary/30 rounded-2xl hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300"
            >
              בוא נבנה את הפרויקט הבא שלך
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="p-8">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-80 object-cover rounded-2xl mb-6"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3C/svg%3E'
              }}
            />
            <span className="inline-block px-3 py-1 mb-4 bg-brand-primary/10 rounded-full font-heebo text-xs font-medium text-brand-primary">
              {selectedProject.category}
            </span>
            <h3 className="font-jakarta text-3xl font-bold text-brand-text mb-4">
              {selectedProject.title}
            </h3>
            <p className="font-heebo text-lg text-brand-muted mb-6 leading-relaxed">
              {selectedProject.excerpt}
            </p>
            {selectedProject.metrics && (
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-surface-soft rounded-xl text-center">
                    <div className="font-jakarta text-2xl font-bold text-brand-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="font-heebo text-sm text-brand-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Portfolio
