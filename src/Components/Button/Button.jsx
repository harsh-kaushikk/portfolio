import React from 'react'
import styles from './Button.module.css'

const Button = ({lable}) => {
  return (
    <div>
      <button  className={styles.btn}>
        {lable}
      </button>
    </div>
  )
}

export default Button
