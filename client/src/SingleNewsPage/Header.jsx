import React from 'react'
// import styles from './Header.module.css'
// import Navbar from './Navbar'
import logo from 'D:/MERN/YAR_News/client/src/images/yarmLogo1.png'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Search from '@mui/icons-material/Search'
import styles from './Header.module.css'
import Location from '@mui/icons-material/LocationOn'
import Calender from '@mui/icons-material/CalendarMonth'
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
        {/* <div className=''>
            <span className=''>Breaking News</span>
            <span className=''>Delhi Man's Head Smashed With Frying Pan, Wife Killed Too By Ex-Employee</span>
            <input type="text" className='' placeholder='Search News' />
            <button type="submit" className=''><Search className='' /></button>
            <div className=''>
                <a href="" target='_blank' className=''><Facebook /></a>
                <a href="" target='_blank' className=''><Twitter /></a>
                <a href="" target='_blank' className=''><Instagram /></a>
            </div>
        </div> */}
        <div className={styles.header}>
            <Link to='/'><div className='h-10 ml-4'><img src={logo} className={styles.logo} alt="" /></div></Link>
        <Navbar />
            {/* <div className={styles.dateLoc}><Calender className='' />&nbsp;{days[day]+', '+ date + ' ' + months[month] + ', ' + year}<br /><Location className='' />&nbsp;India</div> */}
            
            {/* <div className=''>32 &#176;C <br /><b>NIFTY: </b><span style={{color: 'rgb(0, 200, 0)'}}>18,082.85</span><br /><b>SENSEX: </b><span style={{color:'red'}}>60,906.09</span></div> */}
        </div>
            {/* <div className={styles.date}><Calender className={styles.locationIcon} />&nbsp;{days[day]+', '+ date + ' ' + months[month] + ', ' + year}<br /><Location className={styles.locationIcon} />&nbsp;India</div> */}
        {/* <Navbar /> */}
    </div>
  )
}

export default Header