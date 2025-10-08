// Description: Testimonials section with premium glass effect cards
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'שירה כהן',
      role: 'מנהלת שיווק, סטודיו קריאייטיב',
      text: 'פנחס בנה לנו אתר מושלם! שילוב של עיצוב, דיוק וחוויית משתמש מדהימה. הוא היה מקצועי וסבלני לאורך כל הדרך.',
      avatar: '/assets/avatars/avatar1.webp'
    },
    {
      name: 'דניאל לוי',
      role: 'בעלים, מותג אופנה אונליין',
      text: 'שדרוג רציני לעסק שלי. האתר החדש העלה את אחוזי ההמרה והלקוחות פשוט מתאהבים בו. תודה!',
      avatar: '/assets/avatars/avatar2.webp'
    },
    {
      name: 'יעל רוזן',
      role: 'עצמאית בתחום הטיפול',
      text: 'מעבר לעיצוב היפהפה, פנחס הקשיב באמת לצרכים שלי ותרגם את זה לחוויה דיגיטלית מדויקת.',
      avatar: '/assets/avatars/avatar3.webp'
    }
  ]

  return (
    <section id="testimonials" className="relative py-24 px-6 bg-gradient-to-b from-[#EEF2FF] via-white to-[#FDFDFF]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="font-display text-4xl font-extrabold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          מה לקוחות אומרים
        </motion.h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/80 backdrop-blur-lg rounded-[20px] p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.15)] transition-all duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* תמונה עם fallback */}
                <div className="relative w-[80px] h-[80px] rounded-full mb-4 overflow-hidden border-4 border-indigo-100 bg-gradient-to-br from-[#E0E7FF] to-[#F5F3FF] flex items-center justify-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <User className="w-10 h-10 text-indigo-400" />
                </div>

                {/* ציטוט */}
                <p className="font-sans text-zinc-700 text-sm leading-relaxed italic mb-4">
                  "{t.text}"
                </p>

                {/* שם ותפקיד */}
                <h4 className="font-display text-lg font-semibold text-zinc-900">{t.name}</h4>
                <p className="font-sans text-zinc-500 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
