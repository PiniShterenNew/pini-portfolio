// Description: Main App component with all landing page sections and dark mode support
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Process from './sections/Process'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App: React.FC = () => {
  return (
            <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
