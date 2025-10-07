// Description: Portfolio section with new projects and hover effects
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const Portfolio: React.FC = () => {

  const projects = [
    {
      title: 'מותג אופנה',
      description: 'אתר תדמית וקטלוג',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg9owuH2PbdPL5JOLXRY69aUxY4z2X5_rUNNFFRgWfVNNY9Ha_3kYSXenWGuklTlyjtT3u49KGrS-CIolcSk9BH3j98RCvdDIBnWcf2cesBURLyT238e31-VerLayJOrSKmgzEKY3Rfv76LtsvZQYxrl9kX2_yLtQpvyTiOhvGFPO3g6wUYTlKGq8UbyCKkh8WVN2CRpbdyRJzMbK50QUx6yhVXtkJ6HpqoTrWLBAMYsUt8O1imBNhoqUbahkYHp1UQTyHXr1uAGxf'
    },
    {
      title: 'סטארט-אפ טכנולוגי',
      description: 'אתר חברה ובלוג',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG5M8SA-BwX-I3-uJKiWSvRJ_AIiQJE8yvSAfvHjaQut45WFqv8gnTier9-G6JbvY7Qjwzz6hKVb53kjE2onNxuqmcBVVzjJXIk0XXxHJMwGbxyjpJca5V7RNVZjx_9czRySanG_NdaEMVSdSf6r7oKlADRoOEN0zlV9I2jOyFRVMKDST1cOVjhR4dLcPb7Jl-D9ah5WjWGRAd5solxGjb9OkCrKQn5rkOoraU5C6RIrxJbFUPSqAuNTY8dQvmpdfq3NeFLwg8KDfe'
    },
    {
      title: 'מסעדת שף',
      description: 'אתר עם מערכת הזמנות',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj_x-8AxOdbXfB-q_U5OdYrGaoXJhYMr3mOecVZjyDFoClhYxdrzKZd2Mf-_kJYyPklWXi3Oc-GwfvysAl8IXvZjWeR9Ij1G4T8OBEzjB2t4FGtCWZWQFSc_xQ3zmEz8JpcIh_Zyf_KoQN4z-lGFai7gRqT73R2TREj2sMD8iBY9aj3rx86QIoFIfdbdNcrck1eMuSDSSxJ1R4umH-vKljnuVNnKXpnR6hAJF11gwe6bVjWvOvCmK0OQ0D6pWmqFgWCPYfnYp9yPel'
    }
  ]

  return (
    <section className="py-20 sm:py-28" id="portfolio">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-16 text-[hsl(var(--text-primary))]">
            פרויקטים נבחרים
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-xl card-enhanced shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={project.image} 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
