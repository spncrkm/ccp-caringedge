import React from 'react'
import { heroimg } from '../../assets'
import styles from './styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero_container}>
        <img src={heroimg} />
    </div>
  )
}

export default Hero
