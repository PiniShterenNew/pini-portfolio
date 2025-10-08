// Description: Disclaimer page
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            כתב ויתור
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            עודכן לאחרונה: אוקטובר 2025
          </p>
        </ScrollReveal>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ScrollReveal delay={0.2}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                האתר ותכניו ניתנים "כמות שהם" (As-Is) ללא כל אחריות או התחייבות.
                המידע, הדוגמאות והפרויקטים באתר נועדו להמחשה בלבד ואינם מהווים ייעוץ מקצועי, הצעה מחייבת או התחייבות לביצוע.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">1. אי-אחריות מקצועית</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                המידע באתר אינו מהווה ייעוץ טכנולוגי, משפטי, כלכלי או עסקי. כל פעולה המתבצעת בעקבות מידע מהאתר הינה באחריות המשתמש בלבד.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">2. קישורים חיצוניים</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                ייתכנו באתר קישורים לשירותים חיצוניים (כגון WhatsApp, Stripe, LinkedIn, GitHub).
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                פנחס סטרן אינו אחראי לתוכן, לאבטחה או למדיניות הפרטיות של אתרים אלה.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">3. אחריות מוגבלת</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                פנחס סטרן לא יישא באחריות לכל נזק ישיר, עקיף, מקרי, תוצאתי או כלכלי הנגרם משימוש באתר, בתכניו, או באחד השירותים המקושרים אליו.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">4. שינויים במדיניות</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                תוכן כתב הוויתור עשוי להשתנות מעת לעת. כל שינוי ייכנס לתוקף מיידי עם פרסומו באתר.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer


