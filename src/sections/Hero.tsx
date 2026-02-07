import React from 'react'
import { motion } from 'framer-motion'
import RippleButton from '../components/RippleButton'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[15%] w-[28rem] h-[28rem] bg-blob-pink rounded-full blur-3xl animate-blob opacity-60" />
        <div className="absolute bottom-32 left-[10%] w-[24rem] h-[24rem] bg-blob-blue rounded-full blur-3xl animate-blob animation-delay-2000 opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blob-purple rounded-full blur-3xl animate-pulse-soft opacity-30" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full border border-brand-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="font-heebo text-sm font-medium text-brand-primary">זמין לפרויקטים חדשים</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="font-jakarta text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-balance">
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              אתרים שמוכרים בשבילך
            </motion.span>
            <br />
            <motion.span
              className="text-brand-text inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              לא רק נראים טוב.
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="font-heebo text-xl sm:text-2xl text-brand-muted font-normal leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
          >
            בונה עבורך אתר מהיר, ממיר, ומוכן ל-SEO מלא — כדי שתקבל יותר לקוחות מהאינטרנט.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <RippleButton
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 text-lg font-semibold font-heebo rounded-2xl text-white bg-grad-brand shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300"
            >
              בוא נתחיל את הפרויקט שלך
            </RippleButton>
            <a
              href="#portfolio"
              className="px-8 py-4 text-lg font-semibold font-heebo rounded-2xl text-brand-primary border-2 border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300"
            >
              צפה בעבודות
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16 pt-8 border-t border-gray-200/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="font-jakarta text-2xl font-bold text-brand-text">40+</div>
              <div className="font-heebo text-sm text-brand-muted">פרויקטים שהושלמו</div>
            </div>
            <div className="text-center">
              <div className="font-jakarta text-2xl font-bold text-brand-text">97%</div>
              <div className="font-heebo text-sm text-brand-muted">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="font-jakarta text-2xl font-bold text-brand-text">&lt;1.2s</div>
              <div className="font-heebo text-sm text-brand-muted">זמן טעינה ממוצע</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent" />
    </section>
  )
}

export default Hero
