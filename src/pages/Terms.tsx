// Description: Terms of Service page
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const Terms: React.FC = () => {
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
            תנאי שימוש
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
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                ברוך הבא לאתר פנחס סטרן – פיתוח אתרים וחוויות דיגיטליות ("האתר").
                השימוש באתר ובתכניו כפוף לתנאים המפורטים להלן. השימוש באתר מהווה הסכמה מלאה לתנאים אלה.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">1. כללי</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                האתר נועד להציג מידע, שירותים, ודוגמאות מקצועיות בלבד. אין בשום חלק באתר התחייבות לביצוע עבודה, זמינות או תוצאה מסוימת.
                השימוש בתוכן האתר נעשה באחריות המשתמש בלבד.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">2. זכויות יוצרים</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                כל התוכן באתר – טקסטים, עיצוב, תמונות, קוד, גרפיקה ולוגואים – הינם רכושו של פנחס סטרן או של צדדים שלישיים בעלי זכויות.
                אין להעתיק, לשכפל, להפיץ או להשתמש בתוכן כלשהו מהאתר ללא אישור מראש ובכתב.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">3. אחריות</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                פנחס סטרן לא ישא באחריות לכל נזק ישיר או עקיף שייגרם כתוצאה משימוש באתר, בתוכן שבו, או בקישורים חיצוניים הנמצאים בו.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                האתר עשוי לכלול הפניות לשירותים חיצוניים (למשל WhatsApp, Stripe, GitHub וכו'). שימוש בשירותים אלו כפוף למדיניות ולתנאי השימוש שלהם בלבד.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">4. שינויים באתר</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                פנחס סטרן שומר לעצמו את הזכות לעדכן את תוכן האתר, השירותים או תנאי השימוש בכל עת, ללא הודעה מוקדמת.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">5. דין ושיפוט</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                על תנאים אלו יחולו דיני מדינת ישראל בלבד, וסמכות השיפוט הבלעדית תהיה לבית המשפט באשדוד.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default Terms


