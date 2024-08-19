import React from 'react'
import styles from './About.module.css'
import Skills from '../My Skills/Skills'
import Projects from '../Projects/Projects'

const About = () => {
  return (
    <div id='About'>
      <div className={styles.about}>
        <h1>Ab<span>o</span>ut</h1>
        <div className={styles.content}>
            <hr />
            <p>I am a passionate <span>full-stack web developer</span> with a knack for building dynamic and efficient web applications. With a strong foundation in both <span>front-end</span> and <span>back-end</span> technologies, I excel at creating seamless user experiences and robust server-side functionality. My expertise includes <span>HTML, CSS, Tailwind CSS, CSS Modules, Bootstrap, JavaScript, React, Node.js</span> and databases like <span>MongoDB</span> and <span>SQL</span>. I thrive in collaborative environments and am always eager to tackle new challenges and learn emerging technologies. Let's work together to turn innovative ideas into impactful digital solutions, ensuring a user-friendly and performance-oriented web presence.</p>
        </div>
        <Skills/>
        <Projects/>
      </div>
    </div>
  )
}

export default About
