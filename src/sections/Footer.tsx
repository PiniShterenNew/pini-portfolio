import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-rubik font-medium text-small text-brand-text">
            פיני שטרן · מפתח ומעצב אתרים
          </p>

          <p className="font-heebo text-caption text-brand-muted">
            <a href="tel:+972548345192" className="hover:text-brand-dark transition-colors duration-200">054-834-5192</a>
            {' · '}
            <a href="mailto:pini5192@gmail.com" className="hover:text-brand-dark transition-colors duration-200">pini5192@gmail.com</a>
            {' · '}
            <a href="https://wa.me/972548345192" target="_blank" rel="noopener noreferrer" className="hover:text-brand-dark transition-colors duration-200">WhatsApp</a>
          </p>

          <div className="flex gap-4 font-heebo text-caption text-brand-muted">
            <Link to="/terms" className="hover:text-brand-dark transition-colors duration-200">תנאי שימוש</Link>
            <Link to="/privacy" className="hover:text-brand-dark transition-colors duration-200">פרטיות</Link>
            <Link to="/disclaimer" className="hover:text-brand-dark transition-colors duration-200">נגישות</Link>
          </div>

          <p className="font-heebo text-caption text-brand-muted/60">
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
