// Description: Modern minimalist footer with glass effect
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-[#faf7ff] to-white py-10 border-t border-gray-100" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid עמודות */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-right">
          {/* עמודה 1 - מידע על הסטודיו */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.svg" alt="פנחס סטודיו" className="w-8 h-8" />
              <h4 className="font-display text-zinc-800 font-bold text-lg">פנחס סטודיו</h4>
            </div>
            <p className="font-sans text-zinc-600 text-sm leading-relaxed">
              אני יוצר חוויות דיגיטליות שמשלבות עיצוב מדויק, חדשנות וטכנולוגיה מתקדמת.  
              אם גם אתה רוצה אתר שמשאיר רושם אמיתי — אני כאן בשבילך.
            </p>
          </motion.div>

          {/* עמודה 2 - ניווט מהיר */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-zinc-800 font-bold mb-3 text-base">ניווט מהיר</h4>
            <ul className="flex flex-col gap-2 font-sans text-sm text-zinc-600">
              <li><a href="#hero" className="hover:text-indigo-600 transition-colors">דף הבית</a></li>
              <li><a href="#services" className="hover:text-indigo-600 transition-colors">שירותים</a></li>
              <li><a href="#projects" className="hover:text-indigo-600 transition-colors">פרויקטים</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition-colors">צור קשר</a></li>
            </ul>
          </motion.div>

          {/* עמודה 3 - יצירת קשר */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-zinc-800 font-bold mb-3 text-base">יצירת קשר</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+972548345192" className="hover:text-indigo-600 transition-colors">054-834-5192</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:pini5192@gmail.com" className="hover:text-indigo-600 transition-colors">pini5192@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a href="https://wa.me/972548345192" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">WhatsApp</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* שורה תחתונה - Legal Bar */}
        <motion.div 
          className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-sans">
            © {currentYear} פנחס סטודיו. כל הזכויות שמורות.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0 font-sans">
            <Link to="/terms" className="hover:text-gray-700 transition-colors">תנאי שימוש</Link>
            <Link to="/privacy" className="hover:text-gray-700 transition-colors">מדיניות פרטיות</Link>
            <Link to="/disclaimer" className="hover:text-gray-700 transition-colors">הצהרת נגישות</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
