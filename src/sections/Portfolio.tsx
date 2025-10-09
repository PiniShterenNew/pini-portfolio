// Description: Portfolio section with modal and blob background
// Author: Pinchas
// Created with claude.md rules

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
  metrics?: { label: string; value: string }[]
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: '1',
      title: 'אתר תדמית לעסק קטן',
      image: '/assets/project1.webp',
      excerpt: 'אתר מרהיב עם חוויית משתמש רכה, תואם לכל מכשיר.',
      metrics: [
        { label: 'זמן טעינה', value: '0.8s' },
        { label: 'המרות', value: '+45%' },
      ],
    },
    {
      id: '2',
      title: 'חנות אונליין למותג אופנה',
      image: '/assets/project2.webp',
      excerpt: 'מערכת מסחר אלקטרוני מהירה ומאובטחת.',
      metrics: [
        { label: 'זמן טעינה', value: '1.1s' },
        { label: 'מכירות', value: '+60%' },
      ],
    },
    {
      id: '3',
      title: 'דף נחיתה לקמפיין שיווקי',
      image: '/assets/project3.webp',
      excerpt: 'דף נחיתה ממוקד המרה עם עיצוב גרפי מרהיב.',
      metrics: [
        { label: 'המרות', value: '+80%' },
        { label: 'Bounce Rate', value: '-35%' },
      ],
    },
  ]

  return (
    <section id="portfolio" className="relative py-20 bg-grad-soft overflow-hidden">
      {/* Soft blob in corner */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blob-purple rounded-full blur-3xl opacity-40" />

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-4xl sm:text-5xl font-bold text-brand-text mb-4">
              פרויקטים נבחרים
            </h2>
          </div>
        </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {projects.map((project, index) => (
                    <ScrollReveal key={project.id} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="group bg-surface-base rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer h-full flex flex-col"
                        onClick={() => setSelectedProject(project)}
                        data-tooltip-id="app-tooltip"
                        data-tooltip-content="לחץ לצפייה בפרטים המלאים"
                      >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-100 to-pink-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <FiExternalLink className="text-white text-2xl" />
                  </div>
                </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-heebo text-xl font-bold text-brand-text mb-2">
                            {project.title}
                          </h3>
                          <p className="font-heebo text-gray-600 mb-4 flex-grow">
                            {project.excerpt}
                          </p>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-heebo font-semibold text-brand-primary border-2 border-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300"
              data-tooltip-id="app-tooltip"
              data-tooltip-content="צרו קשר לפרטים נוספים"
            >
              לצפייה בגלריה המלאה
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
              className="w-full h-96 object-cover rounded-2xl mb-6"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3C/svg%3E'
              }}
            />
            <h3 className="font-jakarta text-3xl font-bold text-brand-text mb-4">
              {selectedProject.title}
            </h3>
            <p className="font-heebo text-lg text-gray-600 mb-6">
              {selectedProject.excerpt}
            </p>
            {selectedProject.metrics && (
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-surface-soft rounded-xl">
                    <div className="font-jakarta text-2xl font-bold text-brand-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="font-heebo text-sm text-gray-600">
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
