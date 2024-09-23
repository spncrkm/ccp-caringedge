import React from 'react'
import { heroimg } from '../../assets'
import styles from './styles/Hero.module.css'
import TypewriterContent from '../TypewriterContent'

const Hero = () => {
  return (
    <div className={styles.hero_container}>
        {/* <img src={heroimg} /> */}
        <div className={styles.hero_circles}></div>
        <div className={styles.hero_text}>
        <h1>Building A Stronger Community, <span className={styles.span_text}><TypewriterContent /></span></h1>
        </div>
    </div>
  )
}

export default Hero
