import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'
import Process from '../sections/Process'
import About from '../sections/About'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
