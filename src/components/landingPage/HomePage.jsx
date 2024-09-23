import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Investors from './Investors'
import Footer from './Footer'

import './HomePage.css'
import HeroLast from './HeroLast'
import Projects from './NewProjects'

const HomePage = () => {
  return (
    <div className='main_container'>
      <Header />
      <Hero />
      <Projects />
      {/* <Investors /> */}
      <Features />
      <HeroLast />
      <Footer />
    </div>
  )
}

export default HomePage
