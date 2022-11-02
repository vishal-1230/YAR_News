import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>India</li>
            <li className={styles.navItem}>Finance</li>
            <li className={styles.navItem}>World</li>
            <li className={styles.navItem}>Politics</li>
            <li className={styles.navItem}>Business</li>
            <li className={styles.navItem}>Technology</li>
            <li className={styles.navItem}>Education</li>
            <li className={styles.navItem}>Health</li>
            <li className={styles.navItem}>Sports</li>
            <li className={styles.navItem}>Entertainment</li>
        </ul>
    </div>
  )
}

export default Navbar