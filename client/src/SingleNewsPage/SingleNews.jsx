import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from './Header'
import styles from './SingleNews.module.css'
import Headline from '../Homepage/components/Headline'
import {FaTwitter, FaFacebook, FaRss, FaYoutube, FaInstagram} from 'react-icons/fa'
import Footer from '../Homepage/components/Footer'

function SingleNews(props) {

  const [featuredNews, setfeaturedNews] = useState('')
  const [featuredNewsLoaded, setfeaturedNewsLoaded] = useState(false)
  
  let params = useParams()
  useEffect(()=>{
    async function loadNews(){
      // alert('loading')
      const response = await fetch(`http://156.67.219.185:8800/api/getNews?nid=${params.nid}`)
      const data = await response.json()
      console.log(data);

      const response2 = await fetch(`http://156.67.219.185:8800/api/homepageData`)
      const data2 = await response2.json()
      console.log('data2==>', data2);
      setfeaturedNews(JSON.stringify(data2['latest_headlines']))
      setfeaturedNewsLoaded(true)


      console.log(data[0].category);
      console.log(data[0].category.charAt(0));
      // console.log(data[0].category.charAt(0).toUpperCase());
      // console.log(data[0].category.replace(data[0].category.charAt(0), data[0].category.charAt(0).toUpperCase()));
      console.log(data[0].category.replace(data[0].category.charAt(0), data[0].category.charAt(0).toUpperCase()));
      document.getElementById('singleNewsTitle').innerHTML=data[0].title
      document.getElementById('authorName').innerHTML='~'+data[0].authorName
      document.getElementById('categoryName').innerHTML=data[0].category.replace(data[0].category.charAt(0), data[0].category.charAt(0).toUpperCase())
      document.getElementById('newsImg').src=data[0].img
      document.getElementById('body').innerHTML=data[0].body
      // alert(params.nid)
    }
    loadNews()
  }, [])

  return (
    <div className=''>
      <Header />
      <div className={styles.newsArea}>
        <div className={styles.leftNews}>
          <h1 className={styles.newsTitle} id='singleNewsTitle'></h1>
          <div className={styles.newsAbout}>
            <span className={styles.author} id='authorName'></span>
            <span className={styles.date} id='newsDate'>Dec 5, 2022</span>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
            <div className={styles.category} id='categoryName'></div>
          {/* <img src='https://i.gadgets360cdn.com/large/Visa_cryptocom_nft_world_cup_large_1667389562957.jpg?downsize=950:*' alt="" className={styles.newsImg} /> */}
          <img id='newsImg' src="" alt="" className={styles.newsImg} />
          <div className={styles.textDiv}><span className={styles.newsText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='body'></span></span></div>
        </div>
        <div className={styles.newsRight}>
        
            <div className={styles.topHeadlinesDiv}>
                <p className={styles.topHeadlinesTitle}>Latest Headlines</p>
                <div className={styles.topHeadlines}>
                  {
                    featuredNewsLoaded ? JSON.parse(featuredNews).map((i)=>{
                      return <a key={i[0].title} style={{textDecoration:'none'}} href={'http://156.67.219.185:3000/news/'+i[0].id}><Headline img={i[0].img} title={i[0].title.split(" ").splice(0,11).join(" ")+"..."} text={i[0].smallBody.split(" ").splice(0,11).join(" ")+'...'} /></a>
                    }):''
                  }
                    {/* <Headline img='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/sachin_pilot-sixteen_nine.jpg?VersionId=IBfOJrOM_Uwaua3WZSrPo7B1Naxnvszy&size=690:388' title="'Very interesting': Sachin Pilot on PM Modi praising Ashok Gehlot" text='Sachin Pilot said PM Modi praising Rajasthan Chief Minister Ashok Gehlot should not be taken light...' />
                    <Headline img='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/twitter_reuters-sixteen_nine.jpg?VersionId=QQWMlXxNSOqHg94cuJDucjJ4h_68T_48&size=690:388' title='Elon Musk new rule for Twitter employees: Work 12 hours a day...' text="The managers at Twitter have told employees that they will have to work extra hours to meet Elon..." />
                    <Headline img='https://images.hindustantimes.com/img/2022/11/01/550x309/jee-main-2023-date_1667288513413_1667288513665_1667288513665.jpg' title='JEE Main 2023: No discussion on exam date, says NTA Director' text='NTA will announce JEE Main 2023 date and time on its official websites, jeemain.nta.nic.in ..' />
                    <Headline img='https://images.livemint.com/img/2022/11/01/600x338/Digital_Rupee_1667270069791_1667270074919_1667270074919.PNG' title='Explained: What is Digital Rupee? RBI launches first pilot project...' text='Digital currency or rupee is an electronic form of money, that can be used in contactless transactions..'/>
                    <Headline img='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/11/01/istock-10164398501-1158447-1667301416.jpg?itok=bQ4gfiM9' title="Kerala airport set to halt flights for 5 hours for 'God's passage'" text="The Thiruvananthapuram international airport will close its runway and halt flight operations..." />
                    <Headline img="https://i.guim.co.uk/img/media/5d7c6f50d5dfb127bf9ae1db38382469468b4fc9/953_0_3873_2324/master/3873.jpg?width=620&quality=85&dpr=1&s=none" title="Indian police raid news site's office over retracted article ab..." text="Homes of several editors of the Wire also raided after complaint about story based on falsified..." /> */}
                </div>
            </div><br />
            <div className={styles.socials}>
            <p>Connect with Us</p>
            <div className={styles.socialIcons}>
              <FaFacebook />
              <FaTwitter />
              <FaRss />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div><br />
            <div className={styles.subscribeDiv}>
                <h1 className={styles.subscribeHeading}>Subscribe to our Weekly Newsletter for our Exclusive Content</h1>
                <input type="text" className={styles.subscribeInput} placeholder='Enter your Email Address' />
                <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div><br />
            {/* <div className={styles.subscribeDiv}>
                <h1 className={styles.subscribeHeading}>Want to become a Registered Regular News Author at YAR News?</h1>
                <span className={styles.subscribeSubheading}>All News Uploaded by Registered Authors are Auto Approved.</span>
                <input type="text" className={styles.subscribeInput} placeholder='Enter your Name' />
                <input type="text" className={styles.subscribeInput} placeholder='Enter your Email' />
                <button className={styles.subscribeBtn}>GET A CALL</button>
            </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SingleNews