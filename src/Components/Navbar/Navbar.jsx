import styles from './Navbar.module.css'
import React from 'react'

const Navbar = () => {
  return (
    <div id='Navbar'>
      <nav className={styles.container}>
        <div className={styles.logo}>
            <a href="#Navbar"><img src="./Images/logo.png" alt="" /></a>
        </div>
        <div className={styles.tags}>
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
