// Description: Contact section with dark gradient and form
// Author: Pinchas
// Created with claude.md rules

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMessageCircle } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import RippleButton from '../components/RippleButton'
import emailjs from 'emailjs-com'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const whatsappNumber = '972548345192'
  const whatsappMessage = 'היי! אשמח לקבל פרטים נוספים על בניית אתרים'

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = 'שם הוא שדה חובה'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'שם חייב להכיל לפחות 2 תווים'
    }

    if (!formData.email.trim()) {
      errors.email = 'אימייל הוא שדה חובה'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'כתובת אימייל לא תקינה'
    }

    if (!formData.phone.trim()) {
      errors.phone = 'טלפון הוא שדה חובה'
    } else if (!/^[\d\-+() \s]+$/.test(formData.phone)) {
      errors.phone = 'מספר טלפון לא תקין'
    }

    if (!formData.message.trim()) {
      errors.message = 'הודעה היא שדה חובה'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'הודעה חייבת להכיל לפחות 10 תווים'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // שליחה באמצעות EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_key'
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setFormErrors({})
    } catch (error) {
      console.error('שגיאה בשליחת ההודעה:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <section
      id="contact"
      className="relative py-20 bg-grad-dark text-white overflow-hidden"
    >
      {/* Pink blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blob-pink rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-4xl sm:text-5xl font-bold mb-6">
              מוכנים להפוך את האתר שלכם למכונת לידים?
            </h2>
            <p className="font-heebo text-xl text-white/80 max-w-2xl mx-auto">
              מלאו את הטופס ונתחיל לעבוד על הפרויקט שלכם
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <form
          onSubmit={handleSubmit}
              className="bg-surface-base/95 backdrop-blur-lg rounded-2xl p-8 shadow-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
                          <label htmlFor="name" className="block text-sm font-heebo font-medium text-brand-text mb-2">
              שם מלא
            </label>
            <input
              id="name"
              name="name"
              type="text"
                            placeholder="הקלד את שמך"
              value={formData.name}
              onChange={handleChange}
                            className={`w-full rounded-xl border px-4 py-3 font-heebo text-brand-text focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all ${
                              formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-primary'
                            }`}
            />
                          {formErrors.name && (
                            <p className="mt-1 text-sm text-red-600 font-heebo">{formErrors.name}</p>
                          )}
          </div>

          <div>
                          <label htmlFor="phone" className="block text-sm font-heebo font-medium text-brand-text mb-2">
                            טלפון
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="050-1234567"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full rounded-xl border px-4 py-3 font-heebo text-brand-text focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all ${
                              formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-primary'
                            }`}
                          />
                          {formErrors.phone && (
                            <p className="mt-1 text-sm text-red-600 font-heebo">{formErrors.phone}</p>
                          )}
                        </div>
              </div>

                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-heebo font-medium text-brand-text mb-2">
              אימייל
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
                          className={`w-full rounded-xl border px-4 py-3 font-heebo text-brand-text focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all ${
                            formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-primary'
                          }`}
              dir="ltr"
            />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-600 font-heebo">{formErrors.email}</p>
                        )}
          </div>

                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-heebo font-medium text-brand-text mb-2">
              הודעה
            </label>
            <textarea
              id="message"
              name="message"
                          rows={5}
                          placeholder="ספר לנו על הפרויקט שלך..."
              value={formData.message}
              onChange={handleChange}
                          className={`w-full rounded-xl border px-4 py-3 font-heebo text-brand-text resize-none focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all ${
                            formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-primary'
                          }`}
            ></textarea>
                        {formErrors.message && (
                          <p className="mt-1 text-sm text-red-600 font-heebo">{formErrors.message}</p>
                        )}
          </div>

              <RippleButton
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-grad-brand text-white font-heebo font-semibold py-4 rounded-xl shadow-glow hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                data-tooltip-id="app-tooltip"
                data-tooltip-content="שלח את הטופס"
              >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>שולח...</span>
              </>
            ) : (
              <>
                    <FiSend className="text-xl" />
                    <span>שלח הודעה</span>
              </>
            )}
              </RippleButton>

              {/* Status Messages */}
              {submitStatus === 'success' && (
        <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <p className="text-green-800 font-heebo text-center">
                    ✅ ההודעה נשלחה בהצלחה! אחזור אליך בקרוב 😊
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <p className="text-red-800 font-heebo text-center">
                    ❌ שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר דרך WhatsApp.
                  </p>
                </motion.div>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-8">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-heebo font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                data-tooltip-id="app-tooltip"
                data-tooltip-content="קבלו מענה מהיר ואישי"
              >
                <FiMessageCircle className="text-2xl" />
                <span>שלחו לי הודעה בוואטסאפ</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
