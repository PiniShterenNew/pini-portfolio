// Description: Main App component with routing support
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Navbar from './components/Navbar'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Disclaimer from './pages/Disclaimer'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
      <Tooltip 
        id="app-tooltip" 
        style={{ 
          backgroundColor: '#1B1529',
          color: '#fff',
          borderRadius: '8px',
          padding: '8px 12px',
          fontSize: '13px',
          fontWeight: '500',
          zIndex: 9999
        }}
      />
    </Router>
  )
}

export default App
