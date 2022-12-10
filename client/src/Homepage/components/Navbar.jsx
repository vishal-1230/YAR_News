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
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/india'><li className={styles.navItem} id='india'>India</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/finance'><li className={styles.navItem} id='finance'>Finance</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/world'><li className={styles.navItem} id='world'>World</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/politics'><li className={styles.navItem} id='politics'>Politics</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/business'><li className={styles.navItem} id='business'>Business</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/technology'><li className={styles.navItem} id='technology'>Technology</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/education'><li className={styles.navItem} id='education'>Education</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/health'><li className={styles.navItem} id='health'>Health</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/sports'><li className={styles.navItem} id='sports'>Sports</li></a>
            <a style={{textDecoration: 'none', color:'black'}} onClick={window.location.reload} href='http://localhost:3000/entertainment'><li className={styles.navItem} id='entertainment'>Entertainment</li></a>
        </ul>
    </div>
  )
}

export default Navbar