import React, { useState } from 'react'
import styles from './styles/Header.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ccpLogo } from '../../assets'


const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(prev => !prev);
    }


  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src={ccpLogo}/>
        </div>
        <nav className={`${styles.nav} ${show ? styles.show : ''}`}>
            <a href='/' className={styles.nav_links}>Home</a>
            <a className={styles.nav_links}>About Us</a>
            <a href="/projects/rcorp" className={styles.nav_links}>Projects</a>
            <div className={styles.phone}>
                <i className='fas fa-phone-alt' />
            <a href='tel:16602637173' target='_blank' role='link' rel='noopener' className={styles.nav_links}>(660) 263-7173</a>
            </div>
        </nav>
        <a className={styles.navicon} onClick={handleShow}>
            <i className='fa fa-bars' />
        </a>
    </header>
  )
}

export default Header
