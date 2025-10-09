// Description: FAQ section with accordion component
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import Accordion from '../components/Accordion'
import ScrollReveal from '../components/ScrollReveal'

const FAQ: React.FC = () => {
  const faqItems = [
    {
      q: 'כמה זמן לוקח לבנות אתר?',
      a: 'תלוי בגודל הפרויקט. אתר תדמית בסיסי יכול להיות מוכן תוך 2-3 שבועות, בעוד שפרויקטים מורכבים יותר (כמו חנות אונליין) יכולים לקחת 4-8 שבועות.',
    },
    {
      q: 'האם האתר יהיה מותאם לנייד?',
      a: 'בהחלט! כל אתר שאני בונה הוא רספונסיבי לחלוטין ומותאם לכל סוגי המסכים - מובייל, טאבלט ודסקטופ.',
    },
    {
      q: 'מה כלול במחיר?',
      a: 'המחיר כולל עיצוב מותאם אישית, פיתוח מלא, אופטימיזציה ל-SEO, אינטגרציה עם כלי ניתוח, וליווי טכני למשך 30 יום אחרי ההשקה.',
    },
    {
      q: 'האם אוכל לערוך את האתר בעצמי?',
      a: 'כן! אני יכול לבנות את האתר עם מערכת ניהול תוכן (CMS) שמאפשרת לך לערוך תוכן, להוסיף תמונות ולעדכן את האתר בקלות ללא ידע טכני.',
    },
    {
      q: 'מה קורה אחרי השקת האתר?',
      a: 'אני מספק תמיכה טכנית למשך 30 יום לאחר ההשקה. לאחר מכן, אפשר להמשיך עם חבילת תחזוקה חודשית או לפנות אליי לפי צורך לעדכונים ושיפורים.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-surface-soft">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-4xl sm:text-5xl font-bold text-brand-text mb-4">
              שאלות נפוצות
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FAQ

