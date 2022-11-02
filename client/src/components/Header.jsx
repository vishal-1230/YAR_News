import React from 'react'
import styles from './Header.module.css'
import Navbar from './Navbar'
import logo from '../images/yarmLogo1.png'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Search from '@mui/icons-material/Search'


function Header() {
    const dateObj = new Date()
    const date=dateObj.getDate()
    const day=dateObj.getDay()
    const month=dateObj.getMonth()
    const year=dateObj.getFullYear()
    const days={0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday'}
    const months={0: 'January', 1:'February', 2:'March', 3:'April', 4:'May', 5:'June', 6:'July', 7:'August', 8:'September', 9:'October', 10:'November', 11:'December'}
  return (
    <div className={styles.header}>
        <div className={styles.topThinBar}>
            <span className={styles.bnTitle}>Breaking News</span>
            <span className={styles.bn}>Ek Chutiye ke kaaran hui ek bsd wale ki hatya !!!$@#!!!</span>
            <input type="text" className={styles.searchInput} placeholder='Search News' />
            {/* <input type="submit" value='' /> */}
            <button type="submit" className={styles.searchBtn}><Search className={styles.searchLogo} /></button>
            <div className={styles.socialMedias}>
                <a href="" target='_blank' className={styles.socialIcon}><Facebook /></a>
                <a href="" target='_blank' className={styles.socialIcon}><Twitter /></a>
                <a href="" target='_blank' className={styles.socialIcon}><Instagram /></a>
            </div>
        </div>
        <div className={styles.topHeader}>
            <div className={styles.date}>{days[day]+', '+ date + ' ' + months[month] + ', ' + year}</div>
            <div className={styles.logo}><img src={logo} className={styles.logoImg} alt="" /></div>
            <div className={styles.tempEtc}>32 &#176;C</div>
        </div>
        <Navbar />
    </div>
  )
}

export default Header