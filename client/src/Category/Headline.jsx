import React from 'react'
import styles from './Headline.module.css'

function Headline(props) {
  return (
    <div className={styles.headline}>
        <img src={props.img} className={styles.headlineImage} alt="" />
        <div className={styles.headlineTextArea}>
            <p className={styles.headlineTitle}>{props.title}</p>
            <p className={styles.headlineTexts}>{props.text}</p>
        </div>
        <div className={styles.date}>{props.date}</div>
    </div>
  )
}

export default Headline