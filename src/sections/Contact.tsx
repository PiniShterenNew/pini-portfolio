// Description: Contact section with WhatsApp button
// Author: Pinchas
// Created with claude.md rules

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ScrollReveal from '../components/ScrollReveal'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      console.log('Form submitted:', data)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 sm:py-28" id="contact">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-4 text-[hsl(var(--text-primary))] text-shadow-soft">
            בואו נדבר
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-center text-[hsl(var(--text-secondary))] mb-12">
            מוכנים להתחיל פרויקט חדש? מלאו את הטופס או שלחו לי הודעה בוואטסאפ.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <form 
            className="space-y-6 bg-card p-8 rounded-2xl card-enhanced card-border shadow-unified"
            onSubmit={handleSubmit(onSubmit)}
          >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input 
                className={`w-full bg-input text-primary placeholder-placeholder border rounded-lg px-4 py-3 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-default'
                }`}
                placeholder="שם מלא" 
                type="text"
                {...register('name', { required: 'שם הוא שדה חובה' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input 
                className={`w-full bg-input text-primary placeholder-placeholder border rounded-lg px-4 py-3 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-default'
                }`}
                placeholder="אימייל" 
                type="email"
                {...register('email', { 
                  required: 'אימייל הוא שדה חובה',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'כתובת אימייל לא תקינה'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <textarea 
              className={`w-full bg-input text-primary placeholder-placeholder border rounded-lg px-4 py-3 input-focus transition-colors ${
                errors.message ? 'border-red-500' : 'border-default'
              }`}
              placeholder="איך אני יכול לעזור?" 
              rows={5}
              {...register('message', { required: 'הודעה היא שדה חובה' })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              className={`flex w-full sm:w-auto min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 text-lg font-bold transition-all duration-300 mx-auto sm:mx-0 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : submitStatus === 'success'
                  ? 'bg-green-500'
                  : 'bg-[hsl(var(--primary))] hover:scale-105 glow-button'
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  שולח...
                </div>
              ) : submitStatus === 'success' ? (
                'נשלח בהצלחה!'
              ) : (
                'שליחת פניה'
              )}
            </button>
            <a 
              className="flex w-full sm:w-auto min-w-[180px] items-center justify-center gap-2 rounded-lg h-14 px-8 bg-[#25D366] text-white text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0" 
              href="#"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2.05 22L7.31 20.62C8.75 21.41 10.35 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.28 20.93 6.88 19.16 5.11C17.39 3.34 14.99 2.32 12.36 2.32L12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.91C20.28 16.43 16.56 20.15 12.04 20.15C10.48 20.15 8.99 19.72 7.74 18.96L7.3 18.7L3.91 19.74L4.97 16.45L4.72 16.02C3.91 14.71 3.46 13.18 3.46 11.91C3.46 7.39 7.18 3.67 12.04 3.67M17.36 14.83C17.13 15.34 16.22 15.89 15.86 15.96C15.5 16.03 15.01 16.04 14.6 15.87C14.19 15.71 13.31 15.39 12.28 14.43C11.03 13.28 10.19 11.9 9.96 11.59C9.73 11.28 9.59 11.11 9.42 10.88C9.25 10.65 9.12 10.48 8.99 10.28C8.86 10.08 8.73 9.91 8.61 9.71C8.5 9.53 8.35 9.38 8.19 9.23C7.94 8.99 7.72 8.8 7.42 8.59C7.12 8.38 6.89 8.28 6.64 8.28C6.39 8.28 6.16 8.28 5.92 8.28C5.68 8.28 5.37 8.34 5.13 8.85C4.89 9.36 4.29 9.94 4.29 11.1C4.29 12.26 5.15 13.31 5.28 13.47C5.41 13.63 6.95 16.05 9.36 17.01C11.33 17.81 11.75 17.65 12.21 17.62C12.87 17.56 13.82 17.01 14.1 16.4C14.38 15.78 14.38 15.28 14.31 15.15C14.25 15.02 14.12 14.95 13.89 14.83C13.66 14.71 12.78 14.27 12.55 14.18C12.32 14.09 12.15 14.06 11.99 14.3C11.83 14.54 11.45 15.01 11.33 15.18C11.21 15.35 11.08 15.38 10.85 15.26C10.62 15.14 9.93 14.9 9.07 14.15C8.36 13.54 7.89 12.8 7.72 12.5C7.55 12.2 7.68 12.07 7.81 11.95C7.92 11.85 8.06 11.7 8.22 11.55C8.38 11.41 8.45 11.31 8.58 11.18C8.71 11.05 8.74 10.95 8.84 10.78C8.94 10.61 9.22 11.16 9.22 11.16C9.8 11.85 10.32 12.44 10.82 12.79C10.9 12.85 10.98 12.89 11.06 12.92C11.14 12.95 11.22 12.97 11.3 12.97C11.35 12.97 11.4 12.96 11.45 12.96C11.53 12.95 11.61 12.93 11.69 12.9C11.81 12.84 11.93 12.77 12.05 12.68C12.2 12.57 12.32 12.43 12.41 12.26C12.5 12.09 12.56 11.91 12.6 11.7C12.64 11.49 12.62 11.27 12.56 11.06C12.41 10.48 11.99 10.01 11.99 10.01L11.92 9.87C11.86 9.75 11.83 9.6 11.83 9.45C11.83 9.04 12.17 8.7 12.58 8.7C12.71 8.7 12.83 8.72 12.95 8.76C13.07 8.8 13.18 8.85 13.28 8.9C13.38 8.95 13.47 9 13.55 9.04C13.88 9.18 16.14 10.25 17.13 10.74C17.33 10.84 17.5 10.92 17.59 11.02C17.81 11.22 17.88 11.42 17.91 11.6C17.94 11.78 17.95 12.61 17.79 13.2C17.63 13.79 17.59 14.32 17.36 14.83Z"></path>
              </svg>
              <span>שליחת הודעה</span>
            </a>
          </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
