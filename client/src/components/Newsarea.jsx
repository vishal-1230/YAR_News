import React from 'react'
import styles from './Newsarea.module.css'
import img from '../images/friendship.avif'
import Headline from './Headline'

function Newsarea() {
  return (
    <div className={styles.newsArea}>
        <div className={styles.newsLeft}>
            <div className={styles.mainThreeHeadlines}>
                <div className={styles.mainHeadline}>
                    <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/hindu_1200x768.jpeg?VersionId=7AAXzyXThXiBM95DrCSpgi2tBann0xgL&size=690:388' className={styles.mainHeadlineImage} alt="Main Headline" />
                    <p className={styles.mainHeadlineTitle}>What could be the legal Impications of declaring Hindus as a Minority in Parts oif India?</p>
                </div>
                <div className={styles.subHeadlines}>
                    <div className={styles.headline2}>
                        <img src="https://static.toiimg.com/photo/msid-95244989/95244989.jpg" className={styles.headline2Image} alt="2nd Headline" />
                        <p className={styles.headline2Title}>Zelenskyyy Zindabad    !!!</p>
                    </div>
                    <div className={styles.headline3}>
                        <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/11/02/1111362-kejriwal-poster-war.jpg" className={styles.headline3Image} alt="3rd Headline" />
                        <p className={styles.headline3Title}>Should we send Shubham to Kejriwal Massage Center?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.newsRight}>
            <div className={styles.topHeadlinesDiv}>
                <p className={styles.topHeadlinesTitle}>Latest Headlines</p>
                <div className={styles.topHeadlines}>
                    <Headline img='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/sachin_pilot-sixteen_nine.jpg?VersionId=IBfOJrOM_Uwaua3WZSrPo7B1Naxnvszy&size=690:388' title="'Very interesting': Sachin Pilot on PM Modi praising Ashok Gehlot" text='Sachin Pilot said PM Modi praising Rajasthan Chief Minister Ashok Gehlot should not be taken light...' />
                    <Headline img='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/twitter_reuters-sixteen_nine.jpg?VersionId=QQWMlXxNSOqHg94cuJDucjJ4h_68T_48&size=690:388' title='Elon Musk new rule for Twitter employees: Work 12 hours a day...' text="The managers at Twitter have told employees that they will have to work extra hours to meet Elon..." />
                    <Headline img='https://images.hindustantimes.com/img/2022/11/01/550x309/jee-main-2023-date_1667288513413_1667288513665_1667288513665.jpg' title='JEE Main 2023: No discussion on exam date, says NTA Director' text='NTA will announce JEE Main 2023 date and time on its official websites, jeemain.nta.nic.in ..' />
                    <Headline img='https://images.livemint.com/img/2022/11/01/600x338/Digital_Rupee_1667270069791_1667270074919_1667270074919.PNG' title='Explained: What is Digital Rupee? RBI launches first pilot project today' text='Digital currency or rupee is an electronic form of money, that can be used in contactless transactions..'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsarea