import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMessageCircle, FiPhone, FiMail } from 'react-icons/fi'
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
      console.error('Error sending message:', error)
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
      className="relative py-section bg-grad-dark text-white overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heebo text-sm font-semibold text-brand-primary tracking-wide mb-3">בואו נדבר</span>
            <h2 className="font-jakarta text-4xl sm:text-5xl font-bold mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="font-heebo text-lg text-white/70 max-w-2xl mx-auto">
              מלאו את הטופס או צרו קשר ישיר — אחזור אליכם תוך שעות.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <a
                  href="tel:+972548345192"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-primary/20 group-hover:bg-brand-primary/30 transition-colors">
                    <FiPhone className="text-xl text-brand-primary" />
                  </div>
                  <div>
                    <div className="font-heebo text-sm text-white/60">טלפון</div>
                    <div className="font-heebo font-semibold text-white" dir="ltr">054-834-5192</div>
                  </div>
                </a>

                <a
                  href="mailto:pini5192@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-primary/20 group-hover:bg-brand-primary/30 transition-colors">
                    <FiMail className="text-xl text-brand-primary" />
                  </div>
                  <div>
                    <div className="font-heebo text-sm text-white/60">אימייל</div>
                    <div className="font-heebo font-semibold text-white" dir="ltr">pini5192@gmail.com</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                    <FiMessageCircle className="text-xl text-green-400" />
                  </div>
                  <div>
                    <div className="font-heebo text-sm text-white/60">וואטסאפ</div>
                    <div className="font-heebo font-semibold text-green-400">שלח הודעה</div>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <form
                onSubmit={handleSubmit}
                className="bg-surface-base rounded-2xl p-6 sm:p-8 shadow-card"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
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

                <div className="mb-5">
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
                    rows={4}
                    placeholder="ספר לנו על הפרויקט שלך..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 font-heebo text-brand-text resize-none focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all ${
                      formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-primary'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600 font-heebo">{formErrors.message}</p>
                  )}
                </div>

                <RippleButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-grad-brand text-white font-heebo font-semibold py-4 rounded-xl shadow-glow hover:shadow-glow-lg hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>שולח...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      <span>שלח הודעה</span>
                    </>
                  )}
                </RippleButton>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <p className="text-green-800 font-heebo text-center text-sm">
                      ההודעה נשלחה בהצלחה! אחזור אליך בקרוב.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <p className="text-red-800 font-heebo text-center text-sm">
                      שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר דרך WhatsApp.
                    </p>
                  </motion.div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
