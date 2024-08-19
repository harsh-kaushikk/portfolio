import React from 'react'
import styles from './Contact.module.css'
import { LuMail } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr"
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='Contact'>
      <div className={styles.contact}>
        <hr className={styles.hr1}/>
        <hr className={styles.hr2}/>
        <h1>Cont<span>act</span> Me</h1>
        <div className={`${styles.mail_no}`}>
            <div className={styles.box}><LuMail className={styles.logo} /><h5>sanjit11237@gmail.com</h5></div>
            <div className={styles.box}><IoMdCall className={styles.logo}/><h5>(+91) 91778 50564</h5></div>
        </div>
        <div className={styles.box}><MdLocationPin className={styles.logo}/><h5>Maniyara, Bihar, India</h5></div>
        
        <hr className={styles.hr3}/>
        <hr className={styles.hr4}/>
        <div className={styles.social}>
            <a href="https://github.com/SAM-SAMURAI" target='_blank'><GrGithub /></a>
            <a href="https://x.com/ShIfU_sAm_" target='_blank'><GrTwitter /></a>
            <a href="https://www.linkedin.com/in/sanjit~kumar/" target='_blank'><FaLinkedinIn /></a>
            <a href="https://web.whatsapp.com/" target='_blank'><FaWhatsapp /></a>
        </div>
      </div>
      <div className={styles.end}>
        <a href="#Navbar"><div className={styles.arrow}><FaArrowUp className={styles.arr}/></div></a>
        <h1>~ Thanks For Scrolling ~</h1>
      </div>
    </div>
  )
}

export default Contact
