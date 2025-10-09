// Description: Home page component with all landing page sections
// Author: Pinchas
// Created with claude.md rules

import React from 'react'
import Hero from '../sections/Hero'
import WhyMe from '../sections/WhyMe'
import Stats1 from '../sections/Stats1'
import Process from '../sections/Process'
import Portfolio from '../sections/Portfolio'
import Testimonials from '../sections/Testimonials'
import Stats2 from '../sections/Stats2'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyMe />
      <Stats1 />
      <Process />
      <Portfolio />
      <Testimonials />
      <Stats2 />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home


