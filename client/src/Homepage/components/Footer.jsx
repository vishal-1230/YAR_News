import React from 'react'
import styles from './Footer.module.css'
import logo from 'D:/MERN/YAR_News/client/src/images/yarmLogo1.png'
import {MdFacebook} from 'react-icons/md'
import {FaTwitter, FaFacebook, FaRss, FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerLeft}>
        <img src={logo} alt="" className={styles.footerLogo} />
        <span className={styles.poweredTxt}>Powered by Youth Against Rape&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br />
        <div className={styles.socials}>
            <FaFacebook className={styles.footerSocialIcon} />
            <FaTwitter className={styles.footerSocialIcon} />
            <FaRss className={styles.footerSocialIcon} />
            <FaYoutube className={styles.footerSocialIcon} />
        </div>
        </div>
    </div>
  )
}

export default Footer