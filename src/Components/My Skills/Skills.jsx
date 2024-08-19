import React from 'react'
import styles from './Skills.module.css'

const Skills = () => {
  return (
    <div id='Skills'>
      <div className={styles.grid}>
        <h1>My Skills</h1>
        <div className={styles.row}>
            <div className={styles.grid_items}>
                <img  src="./Images/r.png" alt="" />
                <h5>React</h5>
            </div>
            <div className={styles.grid_items}>
                <img  src="./Images/node copy.png" alt="" />
                <h5>Node Js</h5>
            </div>
            <div className={styles.grid_items}>
                <img  src="./Images/js.png" alt="" />
                <h5>JavaScript</h5>
            </div>
            <div className={styles.grid_items}>
                <div>
                    <img  src="./Images/html 5.png" alt="" />
                    <img src="./Images/css-3.png" alt="" />
                </div>
                <h5>Html & CSS</h5>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.grid_items}>
                <img  src="./Images/Tailwind CSS.png" alt="" />
                <h5>Tailwind</h5>
            </div>
            <div className={styles.grid_items}>
                <img  src="./Images/xml.png" alt="" />
                <h5>XML</h5>
            </div>
            <div className={styles.grid_items}>
                <img  src="./Images/c-logo.png" alt="" />
                <h5>C++</h5>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.grid_items}>
                <img  src="./Images/icons8-mysql-logo-240.png" alt="" />
                <h5>MySql</h5>
            </div>
            <div className={styles.grid_items}>
                <img  src="./Images/mongo.png" alt="" />
                <h5>Mongodb</h5>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.grid_items}>
                <img  src="./Images/python logo.png" alt="" />
                <h5>Python</h5>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
