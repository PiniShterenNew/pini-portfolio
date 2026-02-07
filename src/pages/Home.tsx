import React from 'react'
import Hero from '../sections/Hero'
import WhyMe from '../sections/WhyMe'
import Services from '../sections/Services'
import Stats from '../sections/Stats'
import Process from '../sections/Process'
import Portfolio from '../sections/Portfolio'
import Testimonials from '../sections/Testimonials'
import About from '../sections/About'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyMe />
      <Services />
      <Stats />
      <Process />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
