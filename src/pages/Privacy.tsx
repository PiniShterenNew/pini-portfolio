// Description: Privacy Policy page
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const Privacy: React.FC = () => {
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
            מדיניות פרטיות
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
                מדיניות זו מתארת כיצד אנו אוספים, שומרים ומשתמשים במידע הנמסר לנו באתר pini-portfolio.vercel.app.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">1. איסוף מידע</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                בעת שימוש בטופס יצירת הקשר באתר, ייתכן שנאסוף מידע כגון:
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2 mr-6">
                <li>שם מלא</li>
                <li>כתובת אימייל</li>
                <li>הודעה חופשית</li>
              </ul>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
                בנוסף, האתר עשוי להשתמש ב־Cookies לצורך מדידה, שיפור ביצועים וניתוח תנועת גולשים (Google Analytics, Vercel Analytics, וכדומה).
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">2. שימוש במידע</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                המידע ישמש למטרות:
              </p>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2 mr-6">
                <li>מתן מענה לפניותיך דרך הטופס או הוואצאפ</li>
                <li>שיפור חוויית המשתמש באתר</li>
                <li>שליחת עדכונים או הצעות (רק באישור מפורש שלך)</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">3. שיתוף מידע</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                המידע אינו נמכר ואינו מועבר לצד שלישי למטרות מסחריות.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                ייתכן שייעשה שימוש בשירותים חיצוניים לצורך אחסון, תשלומים (Stripe), או דיוור. שירותים אלה פועלים לפי מדיניות הפרטיות שלהם.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">4. שמירת מידע</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                המידע נשמר באופן מאובטח ונמחק לפי דרישה.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                ניתן לפנות בכל עת לבקשה למחיקת מידע אישי דרך הטופס באתר או בכתובת הדוא״ל:{' '}
                <a href="mailto:pini5192@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  pini5192@gmail.com
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">5. Cookies</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                ניתן לחסום או למחוק קובצי Cookie באמצעות הגדרות הדפדפן.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                המשך השימוש באתר מהווה הסכמה לשימוש בעוגיות לצורכי ניתוח ושיפור חוויית הגלישה.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">6. אבטחת מידע</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                האתר פועל בפרוטוקול מאובטח HTTPS. אין שמירה של פרטי תשלום רגישים, וכל עסקה מתבצעת דרך ספקי תשלום מאובטחים כגון Stripe.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default Privacy


