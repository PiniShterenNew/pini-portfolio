// Description: About section with modern gradient design and professional bio
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* טקסט */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-4xl font-extrabold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent">
            קצת עליי
          </h2>

          <p className="font-sans text-lg leading-relaxed text-zinc-600">
            אני <strong className="text-zinc-800">פנחס מנחם שטרן</strong> — מפתח Front-End ויוצר חוויות דיגיטליות שמחברות בין טכנולוגיה לרגש.  
            אני מתמחה בבניית ממשקים אינטואיטיביים, מהירים ומדויקים עם דגש על פרטים קטנים ואסתטיקה מודרנית.
          </p>

          <p className="font-sans text-lg leading-relaxed text-zinc-600">
            אני מאמין שאתר טוב הוא לא רק קוד יפה — אלא כלי אמיתי שמקדם את העסק שלך.  
            כל פרויקט שאני בונה נועד לשרת מטרה ברורה: ליצור חיבור, תנועה ותוצאה.
          </p>

          <div className="flex gap-4 pt-4">
            <button 
              className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] shadow-soft hover:shadow-hover hover:scale-[1.03] transition-all duration-300"
              onClick={() => window.location.href = '#contact'}
              aria-label="דברו איתי - מעבר לטופס יצירת קשר"
            >
              דברו איתי
            </button>
            <button 
              className="px-6 py-3 border-2 border-[#8B5CF6] text-[#4F46E5] font-semibold rounded-lg hover:bg-[#F9F5FF] transition-all duration-300"
              onClick={() => window.location.href = '#portfolio'}
              aria-label="קראו עוד - מעבר לתיק עבודות"
            >
              קראו עוד
            </button>
          </div>
        </motion.div>

        {/* תמונה */}
        <motion.div 
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] bg-gradient-to-tr from-[#E0E7FF] via-[#F5F3FF] to-[#FFF0F6] flex items-center justify-center">
            <img
              src="/assets/profile.png"
              alt="Pinhas Stern Portrait"
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#EC4899]">
              PS
            </div>
          </div>
          <div className="absolute -z-10 blur-3xl opacity-40 w-[400px] h-[400px] bg-gradient-to-tr from-[#8B5CF6] to-[#EC4899] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
