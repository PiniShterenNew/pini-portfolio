import React from 'react'
import Accordion from '../components/Accordion'
import ScrollReveal from '../components/ScrollReveal'

const FAQ: React.FC = () => {
  const faqItems = [
    {
      q: 'כמה עולה אתר?',
      a: 'תלוי בפרויקט. דף נחיתה מתחיל מ-3,000₪, אתר תדמית מ-5,000₪, וחנות אונליין מ-8,000₪. אשמח לתת הצעת מחיר מדויקת אחרי שיחה קצרה.',
    },
    {
      q: 'כמה זמן לוקח?',
      a: 'דף נחיתה: 1-2 שבועות. אתר תדמית: 2-4 שבועות. חנות אונליין: 4-8 שבועות. תלוי בהיקף ובמהירות קבלת חומרים.',
    },
    {
      q: 'מה כלול?',
      a: 'עיצוב מותאם, פיתוח מלא, רספונסיביות, SEO בסיסי, אינטגרציה עם Google Analytics, וליווי של 30 יום אחרי ההשקה.',
    },
  ]

  return (
    <section id="faq" className="py-section">
      <div className="max-w-narrow mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">שאלות נפוצות</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FAQ
