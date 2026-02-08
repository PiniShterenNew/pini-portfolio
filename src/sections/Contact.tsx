import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import emailjs from 'emailjs-com'

interface FormData {
  name: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  message?: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', message: '' })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = 'שם הוא שדה חובה'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'שם חייב להכיל לפחות 2 תווים'
    }

    if (!formData.phone.trim()) {
      errors.phone = 'טלפון הוא שדה חובה'
    } else if (!/^[\d\-+() \s]+$/.test(formData.phone)) {
      errors.phone = 'מספר טלפון לא תקין'
    }

    if (formData.message.trim().length > 0 && formData.message.trim().length < 5) {
      errors.message = 'הודעה חייבת להכיל לפחות 5 תווים'
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
      setFormData({ name: '', phone: '', message: '' })
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
    <section id="contact" className="py-section bg-surface-warm">
      <div className="max-w-tight mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">בואו נדבר</h2>
            <p className="section-subtitle">
              השאירו פרטים ואחזור אליכם תוך יום עבודה.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-heebo text-small font-medium text-brand-text mb-2">
                  שם
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="השם שלך"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded border px-4 py-3 font-heebo text-body text-brand-text bg-surface-card placeholder:text-brand-muted/50 outline-none transition-colors duration-200 ${
                    formErrors.name
                      ? 'border-state-error focus:border-state-error'
                      : 'border-surface-border focus:border-brand-dark'
                  } focus:ring-2 focus:ring-brand-dark/10`}
                />
                {formErrors.name && (
                  <p className="mt-1 text-small text-state-error font-heebo">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block font-heebo text-small font-medium text-brand-text mb-2">
                  טלפון
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="050-1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded border px-4 py-3 font-heebo text-body text-brand-text bg-surface-card placeholder:text-brand-muted/50 outline-none transition-colors duration-200 ${
                    formErrors.phone
                      ? 'border-state-error focus:border-state-error'
                      : 'border-surface-border focus:border-brand-dark'
                  } focus:ring-2 focus:ring-brand-dark/10`}
                />
                {formErrors.phone && (
                  <p className="mt-1 text-small text-state-error font-heebo">{formErrors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-heebo text-small font-medium text-brand-text mb-2">
                ספרו בקצרה על הפרויקט
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="מה אתם מחפשים? (לא חובה)"
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded border px-4 py-3 font-heebo text-body text-brand-text bg-surface-card placeholder:text-brand-muted/50 resize-none outline-none transition-colors duration-200 ${
                  formErrors.message
                    ? 'border-state-error focus:border-state-error'
                    : 'border-surface-border focus:border-brand-dark'
                } focus:ring-2 focus:ring-brand-dark/10`}
              />
              {formErrors.message && (
                <p className="mt-1 text-small text-state-error font-heebo">{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  שולח...
                </span>
              ) : (
                'שלחו הודעה'
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-state-success/10 border border-state-success/20 rounded">
                <p className="text-state-success font-heebo text-center text-small">
                  ההודעה נשלחה בהצלחה! אחזור אליכם בקרוב.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-state-error/10 border border-state-error/20 rounded">
                <p className="text-state-error font-heebo text-center text-small">
                  שגיאה בשליחה. נסו שוב או צרו קשר ישירות.
                </p>
              </div>
            )}
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-center mt-8 font-heebo text-small text-brand-muted">
            מעדיפים לדבר?{' '}
            <a href="tel:+972548345192" className="text-brand-dark hover:text-brand-gold transition-colors duration-200 font-medium">
              054-834-5192
            </a>
            {' · '}
            <a
              href="https://wa.me/972548345192"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark hover:text-brand-gold transition-colors duration-200 font-medium"
            >
              WhatsApp
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
