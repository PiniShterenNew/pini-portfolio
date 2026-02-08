import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItem {
  q: string
  a: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-surface-border">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full py-5 flex items-center justify-between text-right group"
          >
            <svg
              className={`w-4 h-4 text-brand-muted transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <h3 className="font-rubik font-medium text-body text-brand-text group-hover:text-brand-gold transition-colors duration-200">
              {item.q}
            </h3>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <div className="pb-5 text-brand-muted font-heebo text-body leading-relaxed">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default Accordion
