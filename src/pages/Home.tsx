// Description: Home page component with all landing page sections
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import Hero from '../sections/Hero'
import AboutMe from '../sections/AboutMe'
import Services from '../sections/Services'
import Process from '../sections/Process'
import Portfolio from '../sections/Portfolio'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home


