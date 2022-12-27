import React from 'react'
import logo from './yarmLogo1.png'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Navbar from '../Homepage/components/Navbar'


function Header() {
    const dateObj = new Date()
    const date=dateObj.getDate()
    const day=dateObj.getDay()
    const month=dateObj.getMonth()
    const year=dateObj.getFullYear()
    const days={0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday'}
    const months={0: 'January', 1:'February', 2:'March', 3:'April', 4:'May', 5:'June', 6:'July', 7:'August', 8:'September', 9:'October', 10:'November', 11:'December'}
  return (
    <div className=''>
        <div className={styles.header}>
            <Link to='/'><div className='h-10 ml-4'><img src={logo} className={styles.logo} alt="" /></div></Link>
        <Navbar />
        </div>
    </div>
  )
}

export default Header