import React from 'react'
import Header from './Header'
import styles from './SingleNews.module.css'
import Headline from '../Homepage/components/Headline'
import {FaTwitter, FaFacebook, FaRss, FaYoutube, FaInstagram} from 'react-icons/fa'
import Footer from '../Homepage/components/Footer'

function SingleNews() {
  return (
    <div className=''>
      <Header />
      <div className={styles.newsArea}>
        <div className={styles.leftNews}>
          <h1 className={styles.newsTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Eos, rem?</h1>
          <div className={styles.newsAbout}>
            <span className={styles.author}>~Andrew Gals</span>
            <span className={styles.date}>Dec 5, 2022</span>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
            <div className={styles.category}>Business</div>
          {/* <img src='https://i.gadgets360cdn.com/large/Visa_cryptocom_nft_world_cup_large_1667389562957.jpg?downsize=950:*' alt="" className={styles.newsImg} /> */}
          <img src="https://images.thequint.com/thequint%2F2022-11%2Faec14a6c-2818-4416-801a-e1def531dbd1%2FHorizontal.jpg?auto=format%2Ccompress&fmt=webp&width=440&w=1200" alt="" className={styles.newsImg} />
          <div className={styles.textDiv}><span className={styles.newsText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate suscipit sequi architecto quasi fuga quas quibusdam sunt repellendus minima a eos maxime reprehenderit, sit tenetur hic molestiae dolore aperiam. Totam, obcaecati doloribus sunt aperiam velit nobis iste eum? Nemo nisi molestiae aperiam architecto repellat animi similique laudantium quo alias illum velit, dignissimos voluptas veniam dolores sint blanditiis sapiente delectus? Optio facilis blanditiis doloremque at totam, architecto laboriosam repudiandae voluptatibus quae, voluptatem sit mollitia quasi neque esse autem cupiditate, voluptatum dolor sunt id deserunt reprehenderit. Qui est voluptatum facilis et ex vitae fuga odio sint maiores eos fugit, sunt culpa optio earum consequuntur eius repellendus distinctio officia. Quos voluptatibus possimus nihil vero quaerat explicabo. Culpa maiores similique voluptates alias voluptatibus rerum, dolore optio officia ex sapiente.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quam ipsa eius totam expedita nostrum a doloribus accusantium delectus. Enim odit quaerat id amet odio dolorem autem praesentium consequuntur dignissimos rem animi expedita eos obcaecati error maiores, assumenda vero voluptatem. Nulla tempore doloremque eveniet ad veniam enim provident repudiandae non animi similique vitae, nam inventore, temporibus consequatur explicabo repellendus tempora adipisci, voluptate impedit natus cumque! Explicabo veniam maiores magni. Vitae explicabo molestias harum voluptate ad officia, porro quibusdam obcaecati dignissimos, consequuntur aspernatur quam dolorem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ducimus, voluptate nihil quod numquam deserunt alias asperiores molestias. Ipsam laborum dignissimos nostrum aliquam atque veritatis ex fuga hic necessitatibus reprehenderit.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quam voluptates perferendis enim harum quae beatae et cumque nihil a rem provident fugit porro amet commodi sit obcaecati, velit rerum ex officiis. Vitae culpa consequuntur veritatis delectus cupiditate, laboriosam ab hic pariatur doloremque ea esse qui aliquid? Enim fugiat consequuntur facere quibusdam dignissimos soluta, earum, nostrum unde dolores dolorum, temporibus voluptatibus vitae qui ad error porro! Possimus alias numquam vel et impedit labore molestias. Ipsam non itaque dolorem veritatis quis magni quae pariatur nostrum, error iure laborum est, optio consectetur doloribus! Suscipit quos doloribus modi eum odio praesentium quaerat numquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum fuga repudiandae nesciunt, consequuntur ipsum praesentium eveniet rem voluptas. Tempora fuga harum excepturi, consequuntur nam accusantium repudiandae officia magnam? Adipisci?</span></div>
        </div>
        <div className={styles.newsRight}>
        
            <div className={styles.topHeadlinesDiv}>
                <p className={styles.topHeadlinesTitle}>Latest Headlines</p>
                <div className={styles.topHeadlines}>
                    <Headline img='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/sachin_pilot-sixteen_nine.jpg?VersionId=IBfOJrOM_Uwaua3WZSrPo7B1Naxnvszy&size=690:388' title="'Very interesting': Sachin Pilot on PM Modi praising Ashok Gehlot" text='Sachin Pilot said PM Modi praising Rajasthan Chief Minister Ashok Gehlot should not be taken light...' />
                    <Headline img='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/twitter_reuters-sixteen_nine.jpg?VersionId=QQWMlXxNSOqHg94cuJDucjJ4h_68T_48&size=690:388' title='Elon Musk new rule for Twitter employees: Work 12 hours a day...' text="The managers at Twitter have told employees that they will have to work extra hours to meet Elon..." />
                    <Headline img='https://images.hindustantimes.com/img/2022/11/01/550x309/jee-main-2023-date_1667288513413_1667288513665_1667288513665.jpg' title='JEE Main 2023: No discussion on exam date, says NTA Director' text='NTA will announce JEE Main 2023 date and time on its official websites, jeemain.nta.nic.in ..' />
                    <Headline img='https://images.livemint.com/img/2022/11/01/600x338/Digital_Rupee_1667270069791_1667270074919_1667270074919.PNG' title='Explained: What is Digital Rupee? RBI launches first pilot project...' text='Digital currency or rupee is an electronic form of money, that can be used in contactless transactions..'/>
                    <Headline img='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/11/01/istock-10164398501-1158447-1667301416.jpg?itok=bQ4gfiM9' title="Kerala airport set to halt flights for 5 hours for 'God's passage'" text="The Thiruvananthapuram international airport will close its runway and halt flight operations..." />
                    <Headline img="https://i.guim.co.uk/img/media/5d7c6f50d5dfb127bf9ae1db38382469468b4fc9/953_0_3873_2324/master/3873.jpg?width=620&quality=85&dpr=1&s=none" title="Indian police raid news site's office over retracted article ab..." text="Homes of several editors of the Wire also raided after complaint about story based on falsified..." />
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