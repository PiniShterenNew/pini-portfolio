// Description: Footer with dark background and gradient top line
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white relative">
      {/* Gradient top line */}
      <div className="h-1 bg-grad-brand"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="פיני לוגו" className="w-10 h-10" />
              <h4 className="font-jakarta font-bold text-xl">פיני</h4>
            </div>
            <p className="font-heebo text-gray-300 leading-relaxed">
              בונה אתרים ממוקדי המרה שמספקים תוצאות אמיתיות לעסקים.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-heebo font-bold mb-4">ניווט מהיר</h4>
            <ul className="flex flex-col gap-2 font-heebo text-gray-300">
              <li><a href="#services" className="hover:text-brand-primary transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="השירותים שלנו">שירותים</a></li>
              <li><a href="#portfolio" className="hover:text-brand-primary transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="עבודות קודמות">פרויקטים</a></li>
              <li><a href="#process" className="hover:text-brand-primary transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="תהליך העבודה">תהליך</a></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="שאלות ותשובות">שאלות נפוצות</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="דברו איתנו">צור קשר</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-heebo font-bold mb-4">יצירת קשר</h4>
            <ul className="flex flex-col gap-3 font-heebo text-gray-300">
              <li className="flex items-center gap-3">
                <FiPhone className="text-brand-primary" />
                <a href="tel:+972548345192" className="hover:text-brand-primary transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="התקשרו עכשיו">054-834-5192</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-brand-primary" />
                <a href="mailto:pini5192@gmail.com" className="hover:text-brand-primary transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="שלחו מייל">pini5192@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMessageCircle className="text-green-500" />
                <a href="https://wa.me/972548345192" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="צ'אט ישיר ב-WhatsApp">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p className="font-heebo">
            © {currentYear} פיני - בניית אתרים ממוקדי המרה. כל הזכויות שמורות.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 font-heebo">
            <Link to="/terms" className="hover:text-white transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="תנאי שימוש באתר">תנאי שימוש</Link>
            <Link to="/privacy" className="hover:text-white transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="מדיניות פרטיות">מדיניות פרטיות</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors" data-tooltip-id="app-tooltip" data-tooltip-content="הצהרת נגישות">הצהרת נגישות</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
