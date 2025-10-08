// Description: Portfolio section with premium glass effect cards
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'אתר תדמית לעסק קטן',
      image: '/assets/project1.webp',
      description: 'אתר מרהיב עם חוויית משתמש רכה, תואם לכל מכשיר, עם עיצוב נקי ואלגנטי.'
    },
    {
      title: 'חנות אונליין למותג אופנה',
      image: '/assets/project2.webp',
      description: 'מערכת מסחר אלקטרוני מהירה ומאובטחת עם ממשק ניהול חכם ומודרני.'
    },
    {
      title: 'דף נחיתה לקמפיין שיווקי',
      image: '/assets/project3.webp',
      description: 'דף נחיתה ממוקד המרה עם עיצוב גרפי מרהיב ואופטימיזציה מלאה למובייל.'
    }
  ]

  return (
    <section id="projects" className="relative py-24 px-6 bg-gradient-to-b from-[#FDFDFF] via-[#F9F5FF] to-[#EEF2FF]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="font-display text-4xl font-extrabold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          פרויקטים נבחרים
        </motion.h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group bg-white/80 backdrop-blur-lg rounded-[20px] overflow-hidden shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.2)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-[#E0E7FF]', 'via-[#F5F3FF]', 'to-[#FFF0F6]', 'flex', 'items-center', 'justify-center')
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-6xl">🎨</span>'
                  }}
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="font-display text-xl font-semibold text-zinc-800 mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-zinc-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button 
                  className="px-5 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-[12px] hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  onClick={() => window.location.href = '#contact'}
                  aria-label={`צפייה בפרויקט ${project.title}`}
                >
                  צפייה בפרויקט
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
