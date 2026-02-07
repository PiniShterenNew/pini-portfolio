import React from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiShoppingCart, FiLayout } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const Services: React.FC = () => {
  const services = [
    {
      icon: FiLayout,
      title: 'דפי נחיתה',
      description: 'דפי נחיתה ממוקדי המרה שהופכים מבקרים ללקוחות משלמים. עיצוב מותאם, טעינה מהירה וקריאות לפעולה חכמות.',
      features: ['עיצוב ממיר', 'מותאם לנייד', 'SEO מובנה'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: FiShoppingCart,
      title: 'חנויות אונליין',
      description: 'חנויות דיגיטליות מהירות ומאובטחות שמספקות חוויית קנייה חלקה. מערכת ניהול מוצרים, תשלומים ומשלוחים.',
      features: ['תשלומים מאובטחים', 'ניהול מוצרים', 'דוחות מכירות'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiMonitor,
      title: 'אתרי תדמית',
      description: 'אתרים עסקיים מרשימים שמייצגים את המותג שלך בצורה הטובה ביותר. נוכחות דיגיטלית חזקה ומקצועית.',
      features: ['זהות מותגית', 'ביצועים גבוהים', 'נגישות מלאה'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section id="services" className="py-section bg-surface-base relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heebo text-sm font-semibold text-brand-primary tracking-wide mb-3">השירותים שלי</span>
            <h2 className="section-heading mb-4">
              מה אני בונה
            </h2>
            <p className="section-subtitle">
              פתרונות דיגיטליים מותאמים אישית שמניבים תוצאות אמיתיות לעסק שלך.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative p-8 bg-surface-base rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100/80 h-full flex flex-col group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg shadow-brand-primary/10 w-fit`}>
                  <service.icon className="text-2xl text-white" />
                </div>

                <h3 className="font-heebo text-xl font-bold text-brand-text mb-3">
                  {service.title}
                </h3>

                <p className="font-heebo text-brand-muted leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 font-heebo text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
