import React from 'react'
import styles from './Home.module.css'
import Button from '../Button/Button'
import Social from '../Social/Social'

const Home = () => {
  return (
    <div>
      <div className={styles.container}> 
        <div className={styles.intro}>
            <div className={styles.name}>
                <h2>I'M</h2> 
                <h1>Sanjit Kumar</h1>
            </div>
            <h3>Full-Stack Developer</h3>
            <a href="#Contact"><Button lable='Contact Me' /></a>
        </div>
        <div className={styles.pic}>
          <div className={styles.social}><Social/></div>
        </div>
      </div>
    </div>
  )
}

export default Home
