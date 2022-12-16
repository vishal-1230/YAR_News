import React, { useEffect, useState } from 'react'
import styles from './Newsarea.module.css'
import Headline from './Headline'
import Headline2 from './Headline2'
import logo from 'D:/MERN/YAR_News/client/src/images/yarmLogo1.png'
import { Link } from 'react-router-dom'

function Newsarea() {

    // async function a(){
    //     const response=await fetch('https://graph.facebook.com/anonymous.576/accounts?access_token=EAATef9ajfGcBABWTfsL52YmfZAOZBy4uQMklZBSrcv6bspbz1PZBuKAZCATQDdwKHMjyZCfl2Myre21xAXCZCL3rfGxuXWftWf0hYcz1UZChYmGHgLMxNDdjHi00GKcGPJP506NvfmZAup7DRSbXftCxAQC4Yt8MZAVaZAZBP0RBr9SRAru1vjxyB89g')
    //     const data=await response.text()
    //     console.log(data);
    // }
    // a()
    const [lh1img, setlh1img]= useState('')
    const [lh2img, setlh2img]= useState('')
    const [lh3img, setlh3img]= useState('')
    const [lh4img, setlh4img]= useState('')
    const [lh5img, setlh5img]= useState('')
    const [lh6img, setlh6img]= useState('')
    const [lh7img, setlh7img]= useState('')
    const [lh1title, setlh1title]= useState('')
    const [lh2title, setlh2title]= useState('')
    const [lh3title, setlh3title]= useState('')
    const [lh4title, setlh4title]= useState('')
    const [lh5title, setlh5title]= useState('')
    const [lh6title, setlh6title]= useState('')
    const [lh7title, setlh7title]= useState('')
    const [lh1text, setlh1text]= useState('')
    const [lh2text, setlh2text]= useState('')
    const [lh3text, setlh3text]= useState('')
    const [lh4text, setlh4text]= useState('')
    const [lh5text, setlh5text]= useState('')
    const [lh6text, setlh6text]= useState('')
    const [lh7text, setlh7text]= useState('')

    const [lHeadlines, setlHeadlines] = useState('')
    const [lHeadlinesLoaded, setlHeadlinesLoaded] = useState(false)

    const [homeCategorySelected, sethomeCategorySelected] = useState('india')
    const [categoryHighlites, setcategoryHighlites] = useState('')
    const [categoryHighlitesLoaded, setcategoryHighlitesLoaded] = useState(false)

    async function homeCategory(cat){
        sethomeCategorySelected(cat)
        document.getElementById('indiaSmall').style=''
        document.getElementById('politicsSmall').style=''
        document.getElementById('financeSmall').style=''
        document.getElementById('worldSmall').style=''
        document.getElementById('businessSmall').style=''
        document.getElementById('entertainmentSmall').style='border-right: 0;'
        document.getElementById(cat+'Small').style='border-top: #bbb 0.1px solid !important; border-bottom: 0 solid #000; border-right: #bbb 0.1px solid; border-left: 0.1px solid #bbb; font-weight: 600;'
        const response = await fetch(`http://156.67.219.185:8800/homepageData`)
        const data = await response.json()
        setcategoryHighlites(JSON.stringify(data[cat+"_featured"]))
        setcategoryHighlitesLoaded(true)
    }

    useEffect(()=>{
        async function getNewsOverview(){
            const response = await fetch('http://156.67.219.185:8800/homepageData')
            const data = await response.json()
            console.log("$$$$$$$$ NEWS DATA $$$$$$$$")
            document.getElementById('mainHeadlineImg').src=data['headline_1'][0].img
            document.getElementById('mainHeadlineTitle').innerHTML=data['headline_1'][0].title
            document.getElementById('subHeadline1Img').src=data['headline_2'][0].img
            document.getElementById('subHeadline1Title').innerHTML=data['headline_2'][0].title
            document.getElementById('subHeadline2Img').src=data['headline_3'][0].img
            document.getElementById('subHeadline2Title').innerHTML=data['headline_3'][0].title
            
            setcategoryHighlites(JSON.stringify(data["india_featured"]))
            setcategoryHighlitesLoaded(true)  
            console.log('data==>', data);

            console.log('lhlhlh==>', JSON.stringify(data['latest_headlines']));
            setlHeadlines(JSON.stringify(data['latest_headlines']))
            setlHeadlinesLoaded(true)
            // setlh1img(data['latest_headlines'][0][0].img)
            // setlh2img(data['latest_headlines'][1][0].img)
            // setlh3img(data['latest_headlines'][2][0].img)
            // setlh4img(data['latest_headlines'][3][0].img)
            // setlh5img(data['latest_headlines'][4][0].img)
            // setlh6img(data['latest_headlines'][5][0].img)
            // setlh7img(data['latest_headlines'][6][0].img)
            // setlh1title(data['latest_headlines'][0][0].title.split(" ").splice(0,11).join(" ")+"...")
            // setlh2title(data['latest_headlines'][1][0].title.split(" ").splice(0,11).join(" ")+"...")
            // setlh3title(data['latest_headlines'][2][0].title.split(" ").splice(0,11).join(" ")+"...")
            // setlh4title(data['latest_headlines'][3][0].title.split(" ").splice(0,11).join(" ")+"...")
            // setlh5title(data['latest_headlines'][4][0].title.split(" ").splice(0,11).join(" ")+"...")
            // setlh6title(data['latest_headlines'][5][0].title.split(" ").splice(0,11).join(" ")+"...")
            // setlh7title(data['latest_headlines'][6][0].title.split(" ").splice(0,11).join(" ")+"...")
            // setlh1text(data['latest_headlines'][0][0].smallBody.split(" ").splice(0,11).join(" ")+'...')
            // setlh2text(data['latest_headlines'][1][0].smallBody.split(" ").splice(0,11).join(" ")+'...')
            // setlh3text(data['latest_headlines'][2][0].smallBody.split(" ").splice(0,11).join(" ")+'...')
            // setlh4text(data['latest_headlines'][3][0].smallBody.split(" ").splice(0,11).join(" ")+'...')
            // setlh5text(data['latest_headlines'][4][0].smallBody.split(" ").splice(0,11).join(" ")+'...')
            // setlh6text(data['latest_headlines'][5][0].smallBody.split(" ").splice(0,11).join(" ")+'...')
            // setlh7text(data['latest_headlines'][6][0].smallBody.split(" ").splice(0,11).join(" ")+'...')
        }
        getNewsOverview()
        // document.getElementById('indiaSmall').style=''
        // document.getElementById('politicsSmall').style=''
        // document.getElementById('financeSmall').style=''
        // document.getElementById('worldSmall').style=''
        // document.getElementById('businessSmall').style=''
        // document.getElementById('entertainmentSmall').style=''
        // document.getElementById(homeCategorySelected+'Small').style='border-top: #bbb 0.1px solid !important; border-bottom: 0 solid #000; border-right: #bbb 0.1px solid; border-left: 0.1px solid #bbb; font-weight: 600;'
    }, [])
  return (
      <div className={styles.newsArea}>
        <div className={styles.newsLeft}>
            <div className={styles.mainThreeHeadlines}>
                <div className={styles.mainHeadline} id='mainHeadline'>
                    <img src='' id='mainHeadlineImg' className={styles.mainHeadlineImage} alt="Main Headline" />
                    <p className={styles.mainHeadlineTitle} id='mainHeadlineTitle'></p>
                </div>
                <div className={styles.subHeadlines} id='subHeadline'>
                    <div className={styles.headline2} id='subHeadline1'>
                        <img id='subHeadline1Img' src="" className={styles.headline2Image} alt="2nd Headline" />
                        <p id='subHeadline1Title' className={styles.headline2Title}></p>
                    </div>
                    <div className={styles.headline3} id='subHeadline2'>
                        <img id='subHeadline2Img' src="" className={styles.headline3Image} alt="3rd Headline" />
                        <p className={styles.headline3Title} id='subHeadline2Title'></p>
                    </div>
                </div>
            </div>
            <div className={styles.categoriesHeadlines}>
                <h3 className={styles.topHeadlinesTitle}>Major Headlines</h3>
                <div className={styles.categoriesList}>
                    <span className={styles.category} id='indiaSmall' style={{borderTop: '#bbb 0.1px solid', borderBottom: '0 solid #000', borderRight: '#bbb 0.1px solid', borderLeft: '0.1px solid #bbb', fontWeight: 600}} onClick={()=>{homeCategory('india')}}>India</span>
                    <span className={styles.category} id='politicsSmall' onClick={()=>{homeCategory('politics')}}>Politics</span>
                    <span className={styles.category} id='financeSmall' onClick={()=>{homeCategory('finance')}}>Finance</span>
                    <span className={styles.category} id='worldSmall' onClick={()=>{homeCategory('world')}}>World</span>
                    <span className={styles.category} id='businessSmall' onClick={()=>{homeCategory('business')}}>Business</span>
                    <span className={styles.category} id='entertainmentSmall' onClick={()=>{homeCategory('entertainment')}} style={{borderRight: 0}}>Entertainment</span>
                </div>
                    <div className={styles.categoryNewsList}>
                        {
                            categoryHighlitesLoaded ? JSON.parse(categoryHighlites).map((i)=>{
                                console.log(i)
                                return <Link key={i[0].title} style={{textDecoration:'none'}} to={`/news/${i[0].id}`}><Headline2 img={i[0].img} title={i[0].title} text={i[0].smallBody} /></Link>
                            }):''
                        }
                        {/* <Headline2 img='data:image/jpeg;base64,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' title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, tenetur?" text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, tenetur? Vero soluta quos, voluptatibus delectus alias obcaecati omnis placeat ratione tempore ullam dignissimos, doloremque facere quas asperiores magnam exercitationem ipsa ex null.
                        ' />
                        <Headline2 id='' img='data:image/jpeg;base64,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' title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo." text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo temporibus odio est architecto qui tempore a fuga animi hic, eaque voluptatem sunt deserunt, enim maiores modi ut delectus possimus. Velit laborum neque aspernatur veniam.' />
                        <Headline2 id='' img='data:image/jpeg;base64,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' title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptatibus enim assumenda facilis?" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corporis sed illum culpa sapiente iure blanditiis unde eius aut enim? Distinctio minus dolores nisi sapiente cum provident? Inventore hic maiores debitis ea eos eaque beatae.' />
                        <Headline2 id='' img='data:image/jpeg;base64,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' title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, reprehenderit a." text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum beatae recusandae perspiciatis, perferendis atque fugit quos delectus at non quidem iure repellendus quibusdam, facilis sunt sed ab. Consequatur voluptatum officiis, maiores illum distinctio debitis.' />
                        <Headline2 id='' img='data:image/jpeg;base64,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' title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi!" text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, placeat qui molestiae ipsum minima laboriosam quaerat quia! Cum soluta corporis nobis sint rerum! Fuga, voluptatem necessitatibus porro asperiores id culpa! Illum iusto facere dolor cupiditate.' />
                        <Headline2 id='' img='https://images.livemint.com/img/2022/11/01/600x338/Digital_Rupee_1667270069791_1667270074919_1667270074919.PNG' title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos ipsam iure fuga culpa." text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil molestias dolorum nulla porro recusandae molestiae fuga amet, illo facilis impedit. Modi repellendus, commodi aperiam laboriosam, qui recusandae, cupiditate animi tempore itaque natus saepe! Voluptatem?' />
                        <Headline2 id='' img='https://images.livemint.com/img/2022/11/01/600x338/Digital_Rupee_1667270069791_1667270074919_1667270074919.PNG' title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos ipsam iure fuga culpa." text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil molestias dolorum nulla porro recusandae molestiae fuga amet, illo facilis impedit. Modi repellendus, commodi aperiam laboriosam, qui recusandae, cupiditate animi tempore itaque natus saepe! Voluptatem?' /> */}
                    </div>
            </div>
        </div>
        <div className={styles.newsRight}>
            <div className={styles.topHeadlinesDiv}>
                <p className={styles.topHeadlinesTitle}>Latest Headlines</p>
                <div className={styles.topHeadlines}>
                    {
                        // console.log(JSON);
                        lHeadlinesLoaded ? JSON.parse(lHeadlines).map((i)=>{
                            return <Link key={i[0].title} to={'news/'+i[0].id} style={{textDecoration: 'none'}}><Headline id={i[0].id} img={i[0].img} title={i[0].title.split(" ").splice(0,11).join(" ")+"..."} text={i[0].smallBody.split(" ").splice(0,11).join(" ")+'...'} /></Link>
                        }):''
                    }
                    {/* <Link to=''><Headline id='lh1' img={lh1img} title={lh1title} text={lh1text} /></Link>
                    <Link to=''><Headline id='lh2' img={lh2img} title={lh2title} text={lh2text} /></Link>
                    <Link to=''><Headline id='lh3' img={lh3img} title={lh3title} text={lh3text} /></Link>
                    <Link to=''><Headline id='lh4' img={lh4img} title={lh4title} text={lh4text} /></Link>
                    <Link to=''><Headline id='lh5' img={lh5img} title={lh5title} text={lh5text} /></Link>
                    <Link to=''><Headline id='lh6' img={lh6img} title={lh6title} text={lh6text} /></Link>
                    <Link to=''><Headline id='lh7' img={lh7img} title={lh7title} text={lh7text} /></Link> */}
                </div>
            </div>
            <div className={styles.subscribeDiv}>
                <h1 className={styles.subscribeHeading}>Subscribe to our Weekly Newsletter for our Exclusive Content</h1>
                <input type="text" className={styles.subscribeInput} placeholder='Enter your Email Address' />
                <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div><br />
            <div className={styles.subscribeDiv}>
                <h1 className={styles.subscribeHeading}>Want to become a Registered Regular News Author at YAR News?</h1>
                <span className={styles.subscribeSubheading}>All News Uploaded by Registered Authors are Auto Approved.</span>
                <input type="text" className={styles.subscribeInput} placeholder='Enter your Name' />
                <input type="text" className={styles.subscribeInput} placeholder='Enter your Email' />
                <button className={styles.subscribeBtn}>GET A CALL</button>
            </div>
        </div>
        {/* <div className={styles.footer1}>
            <div className={styles.footer1col}>
                <h2></h2>
                <li className={styles.footer1item}></li>
                <li className={styles.footer1item}></li>
                <li className={styles.footer1item}></li>
                <li className={styles.footer1item}></li>
                <li className={styles.footer1item}></li>
                <li className={styles.footer1item}></li>
                <li className={styles.footer1item}></li>
                <li className={styles.footer1item}></li>
            </div>
            <div className="footer1col">

            </div>
            <div className="footer1col">

            </div>
        </div> */}
        <div className={styles.footer2}>
            {/* <img src={logo} alt="" className={styles.footerLogo} /> */}

        </div>
    </div>
  )
}

export default Newsarea