import React from 'react'
import styles from './Projects.module.css'
import Button from '../Button/Button'

const Projects = () => {
  return (
    <div id='Projects'>
      <div className={styles.project}>
        <h1>Pro<span>je</span>cts</h1>
        <div className={styles.row}>
            <div className={styles.p}>
              <div>
                 <img src="./Images/p1.png" alt="" /> 
              </div>
              <div className={styles.desc}>
                    <h3>Golf <span>Co</span>urse</h3>
                    <p>This project showcases a fully responsive website built using HTML, CSS, and JavaScript with animations powered by GSAP. The website features smooth, engaging animations and a modern design.</p>
                    <a href="https://sam-samurai.github.io/GOLF-Course/" target="_blank"><Button lable='Github'/></a>
              </div>
            </div>

            <div className={styles.p}>
              <div>
                 <img src="./Images/p2.png" alt="" /> 
              </div>
              <div className={styles.desc}>
                    <h3>Tindog</h3>
                    <p>Tindog is a fun and engaging web application inspired by Tinder, but designed for dogs and their owners. Built using HTML, CSS, and JavaScript, Tindog allows users to create profiles for their dogs, browse other dog profiles, and find potential playdates or matches for their furry friends.</p>
                    <a href="https://sam-samurai.github.io/Tindog/" target="_blank"><Button lable='Github'/></a>
              </div>
            </div>

            <div className={styles.p}>
              <div>
                 <img src="./Images/p3.png" alt="" /> 
              </div>
              <div className={styles.desc}>
                    <h3>Expense Tracker</h3>
                    <p>The Expense Tracker is a robust web application built using React, HTML, CSS, and JavaScript, designed to help users manage their finances efficiently. This application allows users to track their income and expenses, categorize their transactions, and gain insights into their spending habits through intuitive visualizations.</p>
                    <a href="https://track-my-money-v1.netlify.app" target="_blank"><Button lable='Github'/></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
