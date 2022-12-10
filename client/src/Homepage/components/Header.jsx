import React from 'react'
import styles from './Header.module.css'
import Navbar from './Navbar'
import logo from 'D:/MERN/YAR_News/client/src/images/yarmLogo1.png'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Search from '@mui/icons-material/Search'
import Location from '@mui/icons-material/LocationOn'
import { Link } from 'react-router-dom'
import Calender from '@mui/icons-material/CalendarMonth'


function Header(props) {
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
            <span className={styles.bn}>Delhi Man's Head Smashed With Frying Pan, Wife Killed Too By Ex-Employee</span>
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
            <div className={styles.date}><Calender className={styles.locationIcon} />&nbsp;{days[day]+', '+ date + ' ' + months[month] + ', ' + year}<br /><Location className={styles.locationIcon} />&nbsp;India</div>
            <Link to='/'><div className={styles.logo}><img src={logo} className={styles.logoImg} alt="" /></div></Link>
            <div className={styles.tempEtc}>30 &#176;C <br /><b>NIFTY: </b><span style={{color: 'rgb(0, 200, 0)'}}>18,496.60</span><br /><b>SENSEX: </b><span style={{color:'red'}}>62,181.67</span></div>
        </div>
        <Navbar highlight={props.highlight} />
    </div>
  )
}

export default Header