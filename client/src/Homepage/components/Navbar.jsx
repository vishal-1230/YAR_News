import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  function colorize(){
    if (props.highlight!=''){
      const categories=[
        document.getElementById('india'),
        document.getElementById('finance'),
        document.getElementById('world'),
        document.getElementById('politics'),
        document.getElementById('business'),
        document.getElementById('technology'),
        document.getElementById('education'),
        document.getElementById('health'),
        document.getElementById('sports'),
        document.getElementById('entertainment')
      ]
      categories.map((i)=>{
        if (i!=document.getElementById(props.highlight)){
          i.style=''
        }
      })
      document.getElementById(props.highlight).style='color: #1E90FF; background: rgba(196, 196, 196, 0.2)'
    }
  }
  setTimeout(colorize, 300)
  return (
    <div className={styles.navbar}>
        <ul className={styles.navList}>
            <Link style={{textDecoration: 'none', color:'black'}} to='/india'><li className={styles.navItem} id='india'>India</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/finance'><li className={styles.navItem} id='finance'>Finance</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/world'><li className={styles.navItem} id='world'>World</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/politics'><li className={styles.navItem} id='politics'>Politics</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/business'><li className={styles.navItem} id='business'>Business</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/technology'><li className={styles.navItem} id='technology'>Technology</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/education'><li className={styles.navItem} id='education'>Education</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/health'><li className={styles.navItem} id='health'>Health</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/sports'><li className={styles.navItem} id='sports'>Sports</li></Link>
            <Link style={{textDecoration: 'none', color:'black'}} to='/entertainment'><li className={styles.navItem} id='entertainment'>Entertainment</li></Link>
        </ul>
    </div>
  )
}

export default Navbar