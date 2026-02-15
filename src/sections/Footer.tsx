import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-midnight-border">
      <div className="section-wrap py-10">
        <div className="flex flex-col items-center gap-5 text-center">
          {/* Logo */}
          <span className="font-head font-bold text-lg text-tx-primary tracking-tight">
            PS<span className="text-accent">.</span>
          </span>

          {/* Contact links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-body text-sm text-tx-secondary">
            <a href="tel:+972548345192" className="hover:text-accent transition-colors duration-200">
              054-834-5192
            </a>
            <a href="mailto:pini5192@gmail.com" className="hover:text-accent transition-colors duration-200">
              pini5192@gmail.com
            </a>
            <a
              href="https://wa.me/972548345192"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>

          {/* Legal links */}
          <div className="flex gap-5 font-body text-xs text-tx-muted">
            <Link to="/terms" className="hover:text-tx-secondary transition-colors duration-200">
              {t('תנאי שימוש', 'Terms')}
            </Link>
            <Link to="/privacy" className="hover:text-tx-secondary transition-colors duration-200">
              {t('פרטיות', 'Privacy')}
            </Link>
            <Link to="/disclaimer" className="hover:text-tx-secondary transition-colors duration-200">
              {t('נגישות', 'Accessibility')}
            </Link>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-tx-muted/50">
            &copy; {currentYear} Pini Stern
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
