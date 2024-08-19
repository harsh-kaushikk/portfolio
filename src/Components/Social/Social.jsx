import React from 'react'
import styles from './Social.module.css'
import { GrGithub } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr"
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Social = () => {
  return (
    <div>
        <div className={styles.social}>
            <hr />
            <a href="https://github.com/SAM-SAMURAI" target='_blank'><GrGithub /></a>
            <a href="https://x.com/ShIfU_sAm_" target='_blank'><GrTwitter /></a>
            <a href="https://www.linkedin.com/in/sanjit~kumar/" target='_blank'><FaLinkedinIn /></a>
            <a href="https://web.whatsapp.com/" target='_blank'><FaWhatsapp /></a>
        </div>
    </div>
  )
}

export default Social
