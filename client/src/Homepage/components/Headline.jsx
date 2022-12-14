import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Headline.module.css'

function Headline(props) {
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

export default Headline