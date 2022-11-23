import React from 'react'
import styles from './Headline2.module.css'

function Headline2(props) {
  return (
    <div className={styles.headline}>
        <img src={props.img} className={styles.headlineImage} alt="" />
        <div className={styles.headlineTextArea}>
            <p className={styles.headlineTitle}>{props.title}</p>
            <p className={styles.headlineTexts}>{props.text}</p>
        </div>
        
    </div>
  )
}

export default Headline2