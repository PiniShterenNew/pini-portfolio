// Description: Contact section with modern glass effect design
// Author: Pinchas
// Created with claude.md rules

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import emailjs from 'emailjs-com'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const whatsappNumber = '972548345192'
  const whatsappMessage = 'היי! אשמח לקבל פרטים נוספים על השירותים שלך'
  const emailAddress = 'pini5192@gmail.com'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // שליחה באמצעות EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_key'
      )
      
      alert('ההודעה נשלחה בהצלחה! אחזור אליך בקרוב 😊')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('שגיאה בשליחת ההודעה:', error)
      alert('שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר דרך WhatsApp.')
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
      className="relative py-28 px-6 bg-gradient-to-b from-[#FDFDFF] via-[#F9F5FF] to-[#EEF2FF]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="font-display text-4xl font-extrabold bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          בוא נדבר
        </motion.h2>
        
        <motion.p 
          className="font-sans text-zinc-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          רוצה לקחת את הפרויקט שלך לשלב הבא?  
          <br />
          מלא את הטופס הקצר הזה — ואני אחזור אליך בהקדם.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg rounded-[24px] p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] flex flex-col gap-6 text-right max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2 text-right">
              שם מלא
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="הקלד את שמך..."
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-[12px] border border-zinc-200 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-right"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2 text-right">
              אימייל
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-[12px] border border-zinc-200 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              required
              dir="ltr"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2 text-right">
              הודעה
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="ספר לי קצת על הפרויקט שלך..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-[12px] border border-zinc-200 px-4 py-3 resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-right"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white font-semibold py-3 rounded-[12px] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                שולח...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                שלח הודעה
              </>
            )}
          </button>
        </motion.form>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-600 transition-all"
          >
            <Mail className="w-4 h-4" />
            {emailAddress}
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-green-600 font-medium hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            שלחו לי הודעה בוואטסאפ
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
