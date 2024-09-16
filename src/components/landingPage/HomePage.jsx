import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Investors from './Investors'
import Footer from './Footer'

import './HomePage.css'

const HomePage = () => {
  return (
    <div className='main_container'>
      <Header />
      <Hero />
      <Features />
      <Investors />
      <Footer />
    </div>
  )
}

export default HomePage
