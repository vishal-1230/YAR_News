import React from 'react'
import styles from './Footer.module.css'
import logo from './yarmLogo1.png'
// import externsLogo from './externsTechPurpleLogoOnly.png'
import externsLogo from './externsTechBlack.png'
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
        <div className={styles.footerRight}>
          <div className={styles.footerLinks}>
            <span className={styles.footerLink}>Terms & Condition</span>
            <span className={styles.footerLink}>Contact Us</span>
            <span className={styles.footerLink}>About Us</span>
            <span className={styles.footerLink}>Privacy Policy</span>
            <div className={styles.contactDev} id='contactDev'>
              <span className={styles.devCross} onClick={()=>{document.getElementById('contactDev').style.display='none'}}>&#x2716;</span>
              <a href="http://externs.tech/" target='_blank' className={styles.devLink}>
              <img src={externsLogo} className={styles.devLogo} alt="" />
              <h3 className={styles.devHeading}>Externs</h3>
              <span className={styles.devAbout}>A Product Developer & Management Company</span>
              </a>
            </div>
            <span className={styles.footerLink} onClick={()=>{document.getElementById('contactDev').style.display='block'}}>Contact Developer</span>
          </div>
          <span className={styles.copyright}>Copyright 2022 © All rights reserved Youth Against Rape Community</span>
        </div>
    </div>
  )
}

export default Footer