import React from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Services'
import SelectedWork from '../sections/Portfolio'
import HowItWorks from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import FinalCTA from '../sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <SelectedWork />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  )
}

export default Home
