import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import emailjs from 'emailjs-com'
import { useLanguage } from '../contexts/LanguageContext'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const FinalCTA: React.FC = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = t('שם הוא שדה חובה', 'Name is required')
    } else if (formData.name.trim().length < 2) {
      errors.name = t('שם חייב להכיל לפחות 2 תווים', 'Name must be at least 2 characters')
    }

    if (!formData.email.trim()) {
      errors.email = t('אימייל הוא שדה חובה', 'Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t('כתובת אימייל לא תקינה', 'Invalid email address')
    }

    if (formData.message.trim().length > 0 && formData.message.trim().length < 10) {
      errors.message = t('הודעה חייבת להכיל לפחות 10 תווים', 'Message must be at least 10 characters')
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

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
      setFormData({ name: '', email: '', message: '' })
      setFormErrors({})
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
    if (formErrors[e.target.id as keyof FormErrors]) {
      setFormErrors({ ...formErrors, [e.target.id]: undefined })
    }
  }

  const inputClasses = (field: keyof FormErrors) =>
    `w-full rounded-lg border px-4 py-3 font-body text-body text-tx-primary bg-midnight-surface placeholder:text-tx-muted outline-none transition-all duration-200 ${
      formErrors[field]
        ? 'border-red-500/50 focus:border-red-500'
        : 'border-midnight-border focus:border-accent/50 focus:ring-1 focus:ring-accent/20'
    }`

  return (
    <section id="contact" className="py-section">
      <div className="section-wrap">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block font-body text-sm font-medium text-accent tracking-wide mb-4">
                {t('בואו נדבר', "Let's Connect")}
              </span>
              <h2 className="font-head text-h1 text-tx-primary mb-4">
                {t('יש לך פרויקט בראש?', 'Have a project in mind?')}
              </h2>
              <p className="font-body text-body-lg text-tx-secondary">
                {t(
                  'השאירו פרטים ואחזור אליכם תוך יום עבודה אחד.',
                  "Drop me a message and I'll get back to you within one business day."
                )}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-tx-primary mb-2">
                    {t('שם', 'Name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('השם שלך', 'Your name')}
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses('name')}
                  />
                  {formErrors.name && (
                    <p className="mt-1.5 text-xs text-red-400 font-body">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-tx-primary mb-2">
                    {t('אימייל', 'Email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('your@email.com', 'your@email.com')}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses('email')}
                  />
                  {formErrors.email && (
                    <p className="mt-1.5 text-xs text-red-400 font-body">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-sm font-medium text-tx-primary mb-2">
                  {t('ספרו על הפרויקט', 'Tell me about the project')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t('על מה הפרויקט? מה המטרות? (לא חובה)', 'What is the project about? What are the goals? (optional)')}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses('message')} resize-none`}
                />
                {formErrors.message && (
                  <p className="mt-1.5 text-xs text-red-400 font-body">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-midnight-base border-t-transparent rounded-full animate-spin" />
                    {t('שולח...', 'Sending...')}
                  </span>
                ) : (
                  t('שלחו הודעה', 'Send Message')
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <p className="text-emerald-400 font-body text-center text-sm">
                    {t('ההודעה נשלחה בהצלחה! אחזור אליכם בקרוב.', 'Message sent successfully! I\'ll get back to you soon.')}
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 font-body text-center text-sm">
                    {t('שגיאה בשליחה. נסו שוב או צרו קשר ישירות.', 'Failed to send. Please try again or contact directly.')}
                  </p>
                </div>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-8 border-t border-midnight-border">
              <a
                href="tel:+972548345192"
                className="flex items-center gap-2 text-sm font-body text-tx-secondary hover:text-accent transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                054-834-5192
              </a>
              <a
                href="https://wa.me/972548345192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body text-tx-secondary hover:text-accent transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:pini5192@gmail.com"
                className="flex items-center gap-2 text-sm font-body text-tx-secondary hover:text-accent transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                pini5192@gmail.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
