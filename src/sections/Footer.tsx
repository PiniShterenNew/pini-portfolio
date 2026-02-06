import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white relative">
      {/* Gradient top line */}
      <div className="h-px bg-grad-brand" />

      <div className="max-w-content mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="פיני לוגו" className="w-9 h-9" width={36} height={36} />
              <h4 className="font-jakarta font-bold text-lg">פיני</h4>
            </div>
            <p className="font-heebo text-gray-400 leading-relaxed text-sm">
              בונה אתרים ממוקדי המרה שמספקים תוצאות אמיתיות לעסקים.
              מהירים, יפים ומותאמים להמרה מקסימלית.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-heebo font-bold text-sm text-white/90 uppercase tracking-wide mb-4">ניווט מהיר</h4>
            <ul className="flex flex-col gap-2.5 font-heebo text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors duration-200">שירותים</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-200">פרויקטים</a></li>
              <li><a href="#process" className="hover:text-white transition-colors duration-200">תהליך</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">אודות</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">שאלות נפוצות</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">צור קשר</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-heebo font-bold text-sm text-white/90 uppercase tracking-wide mb-4">יצירת קשר</h4>
            <ul className="flex flex-col gap-3 font-heebo text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <FiPhone className="text-brand-primary flex-shrink-0" />
                <a href="tel:+972548345192" className="hover:text-white transition-colors duration-200">054-834-5192</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-brand-primary flex-shrink-0" />
                <a href="mailto:pini5192@gmail.com" className="hover:text-white transition-colors duration-200">pini5192@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMessageCircle className="text-green-400 flex-shrink-0" />
                <a href="https://wa.me/972548345192" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-200">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="font-heebo">
            &copy; {currentYear} פיני — בניית אתרים ממוקדי המרה. כל הזכויות שמורות.
          </p>
          <div className="flex gap-5 font-heebo">
            <Link to="/terms" className="hover:text-white transition-colors duration-200">תנאי שימוש</Link>
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">מדיניות פרטיות</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors duration-200">הצהרת נגישות</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
