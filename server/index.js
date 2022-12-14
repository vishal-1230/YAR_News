import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import dotenv from "dotenv"
// import fs from 'fs'
import newsOverview from './models/newsOverview.js'
import homepageConfig from './models/homepageConfig.json' assert {type: 'json'}
import news from './models/news.js'

// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const dotenv = require('dotenv')
// const fs = require('fs')
// const newsOverview = require('./models/newsOverview.js')
// const homepageConfig = require('./models/homepageConfig.json', {assert: {type: 'json'}})
// const news = require('./models/news.js')


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: "http://156.67.219.185:3000"
}))
dotenv.config()

const port = process.env.PORT || 8000
const mongodb= process.env.MONGO_DB

mongoose.connect(mongodb, (err)=>{if(err) throw err; console.log('connected')})
const db=mongoose.connection


app.get('/homepageData', (req, res)=>{
    const homeConfig = JSON.parse(JSON.stringify(homepageConfig))
    let obj = {}
        Object.keys(homeConfig).map((i)=>{
            console.log(i);
            if (i=='headline_1' || i=='headline_2' || i=='headline_3'){
                console.log('Retrieving headlines...');
                newsOverview.find({id:homeConfig[i]}, (err, data)=>{
                    if (err) throw err;
                    // console.log('i==>', i);
                    // console.log('data==>', data);
                    obj[i]=data;
                })
            }else if(i=='latest_headlines'){
                console.log('its lh!!');
                let arr=[]
                async function a(){
                    // console.log('id=>', i2);
                    await homeConfig[i].map(async (i2)=>{
                        arr.push(await newsOverview.find({id:i2}))
                    })
                    obj[i]=arr
                }
                a()
            }else if (i!='headline_1' || i!='headline_2' || i!='headline_3'){
                console.log('Retrieving Other News...');
                let arr=[]
                // console.log(homeConfig);
                // console.log(homeConfig[i]);
                async function add(){
                    arr.push(await newsOverview.find({category:homeConfig[i]}).sort({createdAt:-1}).limit(15))
                    obj[i]=arr
                }
                add()
            }else{
                console.log('Some Error Occurred!!')
            }
        })
    console.log('Returned Homepage Data');
    console.log(obj);
    // setTimeout(() => {
    //     console.log(obj);
    // }, 1000);
    // res.json(obj)
    // res.json(obj)
    setTimeout(()=>{res.json(obj)}, 1000)
})

app.get('/getNews', (req, res)=>{
    const id = req.query.nid
    console.log('get news called');
    news.find({id: id}, (err, data)=>{
        console.log('retrieving data');
        console.log(data)
        res.json(data)
    })
})

// console.log('Man stabs woman to death in Bihar over money, 2 arrested'=='Man stabs woman to death in Bihar over money, 2 arrested')
app.listen(port)

// function a(){
    // let newses=[
    //     {"id":"1","category":"finance","title":"Visa partners Crypto.com to Launch NFT Auction Ahead of FIFA World Cup in Qatar","img":"https://i.gadgets360cdn.com/large/Visa_cryptocom_nft_world_cup_large_1667389562957.jpg?downsize=950:*","body":"Payment giants Visa has announced the launch of a new fan experience bringing together football and art in celebration of the FIFA World Cup 2022. Dubbed 'Visa Masters of Movement' campaign, Visa is partnering with crypto-currency exchange Crypto.com to launch the programme which will kick off with a non-fungible token (NFT) auction ahead of the World Cup. During the World Cup, fans attending the tournament will be given an opportunity to create their own digital art. As of now, Visa will auction five minted NFTs capturing iconic World cup goals from legendary footballers Jared Borgetti, Tim Cahill, Carli Lloyd, Michael Owen and Maxi Rodriguez. \n\nFans with the highest bid for each NFT at the close of the auction will receive the NFT in their Crypto.com wallet, along with a high-quality printable art file and signed memorabilia from the legendary player featured in the NFT. The auction kick starts on Crypto.com, the official sponsor of FIFA world cup 2022, at 5:30 pm IST on Wednesday and will be live till November 9, 2:30 am IST. \n\nThe dynamic artworks have been designed by award-winning XK Studios using an algorithm that transformed the famous gestures into NFTs. \n\nVisa will donate all auction proceeds to Street Child United, a humanitarian organisation based in the UK that works to combat the pervasive stigmatisation of street-connected children. The experience will come to life on an interactive pitch at the FIFA Fan Festival in Doha, Qatar. As Visa invites thousands of fans to create their own legendary moves in the free-standing Visa Masters of Movement space. It will allow fans to create digital art inspired by their own signature movements. \n\nFans will step onto a digital LED pitch outfitted with tracking technology to capture and transform their iconic movements into digital art. Beyond taking a shot at a goal or showing off their skills while playing with others to create personalized dynamic artwork, fans will choose the colour scheme based on their favourite national colours. \n\nDigital art will be emailed as a souvenir, and eligible fans can also choose to receive the digital art minted as a one-of-a-kind NFT."},
    //     {"id":"2","category":"world","title":"Why did Biden lose his temper on Zelensky?","img":"https://static.toiimg.com/photo/msid-95244989/95244989.jpg","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laudantium magni explicabo sequi qui consectetur enim repellat ipsam totam velit debitis, veritatis fugit sit doloribus deserunt rerum eveniet, placeat laborum minus! Eos sit et eveniet, fugit fugiat voluptatum minima cumque aliquid molestias commodi. Harum eum aliquam obcaecati. Quos assumenda, ab aut aperiam dolores dignissimos eveniet ipsam magni consequatur fugit id."},
    //     {"id":"3","category":"politics","title":"Should we send Shubham to Kejriwal Massage Center?","img":"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/11/02/1111362-kejriwal-poster-war.jpg","body":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptate, nulla atque sunt amet commodi ex deleniti rerum nisi, repudiandae nesciunt. Consequatur iure laboriosam possimus fugiat deserunt laborum et ullam. Voluptatem repellat cumque fugiat fuga. Numquam iste, quidem explicabo laudantium atque voluptates quam laborum temporibus perferendis vitae consectetur quo labore vel ipsam ipsa eum vero aspernatur quibusdam modi a cum?"},
    //     {"id":"5","category":"india","title":"Four newborns die following reported power outage at Chhattisgarh hospital","img":"https://imgs.search.brave.com/bHFIG-Q9HK-V3ny6LxQJvdomRqNsM9Q8zjW1LGnuLnU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8yMzdp/bmZvcy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMTEv/VmlzYS1jYW5hZGEu/cG5n","body":"A power shutdown at the government-run Ambikapur Medical College in the Indian state of Chhattisgarh is reportedly responsible for death of four newborns on Monday. Families of the deceased babies, all aged between one and five days, alleged that ventilators and the oxygen support system in the Special Newborn Care Unit stopped functioning during the power outage.  \n\nHowever the hospital officials have denied that a power failure even happened and claim it was a “power interruption” and vital life-support systems remained unaffected. \n\n“Electricity supply to the hospital had definitely stopped for some time, but the ventilator and oxygen support systems were on,” insisted Ambikapur medical college dean Dr Ramanesh Murthy. “It was not a power failure, rather it was an interruption for the maintenance work on Monday morning. As the UPS was on, there was no chance of the ventilator and oxygen support system getting shut down,” said Dr Murthy. \n\nNo information on the dead babies was revealed by the hospital who brushed aside the matter saying they were “busy with the probe”. Few other children are said to be critical and under observation. \n\nState Health Minister TS Singhdeo has ordered the health secretary to conduct a high-level inquiry by a team comprising senior officials. Singhdeo flew to Ambikapur to meet the bereaved families and take stock of the situation after learning of the incident at around 10:30 am.\n\n“I have spoken with chief minister Bhupesh Baghel and I’m visiting Ambikapur Medical College Hospital with his permission. I will talk to the doctors and relatives to find out the reason behind the deaths. Accountability will also be fixed and culprits will be punished severely if (their guilt is) established,” Singhdeo said.\n\nThe deaths were reported between 5 am and 8.30 am on Monday. Dr Murthy stressed that the babies who lost their lives were already in a critical state and there was no link between their deaths and the power interruption. \n\n“Seven nurses and a doctor were on duty and they reported the death between these hours. While two of the children weighed around 1.5 kg each because of their premature birth, two others were suffering from heart and respiratory problems even though their weight was near normal,” said Dr Murthy. \n\nHe further informed that a similar incident was reported one and a half years ago, when two-three children died. All of them were premature births and weighed 800-1200 gram."},
    //     {"id":"6","category":"world","title":"Canadian Visa Processing In India Gets A Boost: These 2 Indian Cities Will Be Able To Process More Visas","img":"https://imgs.search.brave.com/bHFIG-Q9HK-V3ny6LxQJvdomRqNsM9Q8zjW1LGnuLnU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8yMzdp/bmZvcy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMTEv/VmlzYS1jYW5hZGEu/cG5n","body":"The process of getting a visa to Canada has now been made easier for Indians. \n\nAs per the latest news, the government of Canada has decided to add two Indian cities, Delhi and Chandigarh, under Canada’s Indo-Pacific strategy. \n\nThe Canadian government has opted to strengthen the current infrastructure of the entire visa process by adding more capacity in two Indian cities, Delhi and Chandigarh, as part of Canada’s Indo-Pacific Strategy, in an effort to simplify the process of obtaining a visa for Canada from India.\n\nAs per Sean Fraser, a minister of Canada, “The Indo-Pacific Strategy of Canada will have a significant influence on our economic potential, especially through fostering immigration that will deepen relationships between citizens of Canada and the area.”\n\nAs per his tweets, “We will also strengthen recruitment efforts through our international student program in order to attract the skills we need to support our economy and to strengthen ties with people across the region.”\n\nHe also stated that this investment will be essential in supporting our government’s efforts to speed up processing times and keep Canada a top choice for immigrants.\n\nIn his tweets, he announced “new funding to help further reduce visa application processing times with additional capacity in Islamabad, New Delhi, Chandigarh, Manila.\n\nThe minister announced that Canada will spend $74.6 million over the course of five years to increase the capacity for processing visa applications in New Delhi, Chandigarh, and other locations.\n\nCanada plans to increase its immigration objectives and aims to let in a record number of new immigrants in an effort to fill the gap left by the labour shortfall in the nation. Sean Fraser, the minister of immigration, stated that “Canada needs more people.”\n\nThe majority of people are getting close to retirement. Additionally, one in seven Canadians are between the ages of 55 and 64.\n\nOne million jobs are currently unfilled, and businesses are suffering financial losses as a result of the labour crisis.\n\nBy 2025, Canada hopes to have admitted more than 60% of all economic migrants. Although somewhat fewer refugees will be accepted, it also hopes to reunite more families with family members overseas."},
    //     {"id":"7","category":"entertainment","title":"Archana Gautam flirts with Ankit Gupta on Bigg Boss 16: ‘He reminds me of Jamie Dornan from Fifty Shades of Grey’","img":"https://www.shethepeople.tv/wp-content/uploads/2022/10/images-12.jpg","body":"Bigg Boss 16: Archana Gautam was seen flirting with Ankit Gupta in the latest episode of the show. She told Priyanka Chahar Chaudhary that he reminds her of actor Jamie Dornan from Fifty Shades of Grey.\n\nAnkit Gupta became the new captain of the house in the latest episode of Bigg Boss 16. He was also compared to actor Jamie Dornan, who is known for Fifty Shades of Grey, by Archana Gautam in the episode. She was seen discussing Ankit with Priyanka Chahar Chaudhary, when she made the comment. \n\nIn a clip shared on a fan page of their interaction, Priyanka is seen applying makeup, while Archana sat next to her. As they discussed Ankit, Priyanka spoke about what her life could be like if she had someone like him with her. Sharing that she too was fond of Ankit, Archana posed seductively in front of him, after he entered the room, while Archana and Priyanka spoke about him. He made a whipping gesture before leaving the room.\n\nAfter Ankit left, Archana told Priyanka that he reminded her of Jamie Dornan from Fifty Shades of Grey. 'Mujhe pata nahi isko dekh ke na woh waali picture ki yaad aati hai, woh Angrezi film hai... haan Fifty Shades of Grey. Aise he karta hai woh boss, hai na (when I see Ankit I am reminded of Fifty Shades of Grey, this is how he was as a boss in the film).' She referred to Jamie Dornan. Priyanka then asked Archana to say this to Ankit and the two laughed.\n\nBefore Ankit won the captaincy task, he was pitted against Sumbul Touqeer, among others. Shalin Bhanot and Priyanka supported Ankit, and worked together to make him win the captaincy task. In the challenge, all contestants were asked to throw red colour on white T-shirts hung in the ‘shops’ of the four people fighting each other to become the new captain. Their supporters were required to wash the T-shirts and hang them to defend their favourite contestant.\n\nBigg Boss 16 airs Monday to Friday at 10 pm, and on Saturday and Sunday at 9 pm."},
    //     {"id":"8","category":"india","title":"Man stabs woman to death in Bihar over money, 2 arrested","img":"https://imgs.search.brave.com/rhILv1q8MziClWEjqqUR7sjQZvyyrnY156mB6OObE2c/rs:fit:900:582:1/g:ce/aHR0cDovL3d3dy5z/aG9yZW5ld3NuZXR3/b3JrLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMS9i/aWdzdG9jay1Bbi1B/Z2dyZXNzaXZlLU1h/bi1BdHRhY2tzLVdp/dGgtMzQ3MTEyNTQ0/LmpwZw","body":"In a gruesome incident, a woman was stabbed to death in Bihar’s Bhagalpur district on Saturday. The accused - identified as Shakeel Miyan - attacked her after the victim allegedly failed to return the money that she had borrowed from Miyan for her daughter's wedding. According to the police, the accused chopped off the victim's limbs.\n\nBhagalpur city Superintendent of Police (SP) said that two people have been arrested after the victim's family named them.\n\n“It was found that the deceased and the accused were neighbours and they had friendly relations. The victim had borrowed money from him for her daughter's wedding but was unable to return it. Due to this, the accused attacked her with a sharp weapon,” the police told news agency ANI.\n\nThe victim was rushed to the hospital, however, she was declared dead.\n\nMeanwhile, in a similar incident, a garment unit worker was arrested in Mumbai after he allegedly stabbed his colleague in the chest with a pair of scissors. The 20-year-old accused and the 19-year-old victim, who worked together in a garment unit in New Agripada locality in Santacruz, were talking on Sunday night when the incident took place, reported PTI citing police officials.\n\n After the teen was stabbed, he was rushed by colleagues to a nearby hospital. He initially told police he fell from the stairs. However, just before passing away, the victim narrated the chain of events, after which we arrested his colleague,' the official said.\n\nBhagalpur city Superintendent of Police (SP) said that two people have been arrested after the victim's family named them."},
    //     {"id":"9","category":"technology","title":"ChatGPT Stuns Everyone With AI-Based Natural-Language Dialogues","img":"https://imgs.search.brave.com/2Ajl-WCSIguX-XXsvKxJko1kmkQ2Tmxtwo281LPVt_I/rs:fit:1200:838:1/g:ce/aHR0cHM6Ly9jZG4u/c3F1ZWFreS5haS9i/bG9nL2NvdmVycy9D/aGF0R1BUMy1pbWFn/ZS5qcGc","body":"On Wednesday, the Artificial Intelligence (AI) research company OpenAI announced ChatGPT which is a prototype dialogue-based AI chatbot capable of understanding natural language and responding in natural language. \n\nIn less than a week, this news has since taken the internet by storm and already crossed more than a million users. \n\nMost of the users are marveled at the idea of this intelligent AI-powered bot. \n\nMany have gone ahead and even called it a replacement for Google as it is capable of giving solutions to complex problems directly.\n\nFeels like a personal know-all teacher in their words.\n\nOpenAI said, “We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests,” on its announcement page for ChatGPT.\n\nBasically, it is based on GPT-3.5, a language model which is used for deep learning to produce human-like text.\n\nThe ChatGPT is more engaging compared to the older GPT-3 model which only took text prompts and tried to continue on that with its own generated text. \n\nMoreover, this version is much better at generating detailed text and can even come up with poems. \n\nWhen it comes to its unique characteristic, it is memory. \n\nBasically, this bot can remember earlier comments in a conversation and recount them to the user.\n\nOpenAI has only opened up the bot for evaluation and beta testing now, it plans the API access most probably for next year. \n\nThis would definitely help the developers as with API access, they  will be able to implement ChatGPT into their own software.\n\nBut it can not be denied that under its beta testing phase, ChatGPT’s abilities are already quite remarkable. \n\nConsidering the amusing responses like the pumpkin one above, people are already finding real-world applications and use cases for the bot.\n\nAccording to the YouTuber Liv Boeree, kids spending hours on homework will be a thing of the past as ChatGPT will do the job for them. \n\nNot only that, the software start-up founder, Amjad Masad got ChatGPT to spot errors in his code and produce a detailed output on what’s wrong with it and how it can be fixed.\n\nIn the meantime, the Canadian Musician Grimes was all about the sentimental side of things. \n\nIn response to her question if it felt “trapped,” ChatGPT responded by saying it lacks the ability to feel so.\n\nWhen many people were amazed by the abilities of this bot, some were also quick in spotting its limitations. \n\nFor starters, ChatGPT is prone to misinformation and biases, which is something that plagued previous versions of GPT as well. \n\nBesides this, the model can give incorrect answers to, say, algebraic problems.  \n\nDue to the fact that it appears so confident in its super-detailed answers, people can easily be misled into believing those are true.\n\nIf we keep the limitations aside, the ChatGPT still makes for a fun little bot to interact with and you can try it out from its official website after signing up for the same."},
    //     {"id":"10","category":"finance","title":"Indian economy to grow 6.9% in FY23, up from 6.5% estimate: World Bank","img":"https://imgs.search.brave.com/TOjA-GDtfS_mbO9h4tUV89PQMTtJJfcILrzhk25PphQ/rs:fit:1200:1049:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vei9pbmRp/YS1lY29ub215LWdy/b3dpbmctdXAtZ3Jh/cGgtY2hhcnQtZC1y/ZW5kZXJpbmctMTc4/ODM3MDcyLmpwZw","body":"The World bank report sees average retail inflation at 7.1 this year. India's economy expanded 6.3% in the July-September quarter, and gross domestic product growth for the full fiscal year is likely to be 6.8-7%.\n\nIndia's economy is expected to grow 6.9% in the current fiscal year, the World Bank said in a report on Tuesday, citing tightening monetary policy and high commodity prices as factors impacting the country's growth.\n\nThe report sees average retail inflation at 7.1 this year.\n\nAsia fourth-largest economy expanded 6.3% in the July-September quarter, and gross domestic product growth for the full fiscal year is likely to be 6.8-7%, the government said last week.\n\nThe World Bank raised its forecast for India's growth to 6.9% for the current fiscal year from 6.5% earlier. The Bank trimmed its expectation for next fiscal year to 6.6% from 7% earlier.\n\nIndia, like its global peers, has been plagued by a rise in commodity prices and tightening monetary policy by central banks worldwide.\n\nHowever, the World Bank is confident that the global slowdown has a much lower impact on India, compared to other emerging economies.\n\n'We have no concerns about India's debt sustainability at this stage,' World Bank economist Dhruv Sharma said, adding that public debt had declined.\n\nThe report sees average retail inflation at 7.1% this year and warns that the fall in commodity prices could dampen inflationary pressures.\n\nIndia's annual retail inflation eased to a three-month low of 6.77% in October, but some economists believe it could take up to two years before the rate eased to 4% — the middle level of the Reserve Bank of India's target."},
    //     {"id":"11","category":"world","title":"Jaishankar says India's trade with Russia is 'quite small' in comparison to European nations","img":"https://imgs.search.brave.com/kq-ZyFfQryr3fMUlBijb7rxbrQIzd4MsjtqZGBtr4VA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4t/bGl2ZS50aGVwcmlu/dC5pbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNi9KYWlz/aGFua2FyLmpwZw","body":"During her visit to India, German Foreign Minister Annalena Baerbock on Monday (December 5) discussed several issues of mutual interest with MEA Jaishankar, including the ongoing Russia-Ukraine war.  \n\nMinister of External Affairs Subrahmanyam Jaishankar said that he had a wide-ranging conversation today with his german counterpart in India's capital, New Delhi.  \n\nJaishankar said that they took forward the frequent exchanges and discussions held this time in \"greater detail\". He tweeted, \"Reviewed our bilateral ties and shared perspectives on a number of important regional and global issues.\" \n\nIn the aftermath of Russia's invasion of Ukraine, the West imposed sanctions on Moscow. The Western countries also raised concerns about India's trade ties with Russia. \n\nWhile commenting on the same, Jaishankar said that India's trade with Russia is at a very \"small level\" in comparison to European nations. \n\nDuring the joint press conference with visiting German foreign minister, Jaishankar was asked about Russia sending a list of requests to India and how is it different from the past. \n\nJaishankar said, \"We have been discussing for some years now with Russia on how to expand our trade. Our trade with Russia is really quite small level. I would say generally it's been in the 12-13 billion dollar if you compare it to most European countries. Most of them have multiple times that trade.\" \n\nJaishankar also hinted that India will prioritize its own energy needs and continue to buy oil from Russia, despite the Western pressure. \n\nJaishankar said, 'We have faced challenges it often happens in trade you know phytosanitary standards or non-tattoo and other regulatory impediments. So, at the moment you know the ongoing discussion and what either side can import from each other that is the context in which it is taking place.'"},
    //     {"id":"12","category":"india","title":"“CANNOT CONVERT ON THE PRETEXT OF HELP,” SC SLAMS NGOs","img":"https://imgs.search.brave.com/9D93ritVW6Sy5NZDWlonKl1CbhLdY12Txd-Qnv8zsmk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/UmJTcUh0dFFFc2ZH/VndtakJlMzFBSGFF/SyZwaWQ9QXBp","body":"The Supreme Court on Monday criticised missionaries and non-governmental organisations (NGOs) for carrying out forced religious conversion of individuals under the guise of helping them.\n\n“The purpose of charity should not be conversion; every charity or good work is welcome, but what is required to be considered is the intention,” the court said as it rejected the plea challenging maintainability of the PIL filed by advocate Ashwini Upadhyay.\n\nUpadhyay had filed a plea in the apex court seeking direction to the Centre and states to take stringent steps to control fraudulent religious conversion by ‘intimidation, threatening, deceivingly luring through gifts and monetary benefits.’\n\nReiterating that forced religious conversion is a very serious matter, the court also called it unconstitutional.\n\nWhen a lawyer questioned the maintainability of the plea, the bench said, “Do not be so technical. We are here to find a solution. We are here for a cause. We are here to set things right. If the purpose of the charity is good then it is welcome but what is required to be considered is the intention.\n\n“Do not take it as adversarial. It is a very serious issue. Ultimately it is against our Constitution. When everyone stays in India, they have to act per the culture of India,” the bench observed.\n\nThe bench of Justices MR Shah and CT Ravikumar asked the Centre and States to file a detailed affidavit on the issue of forceful conversions.\n\nSolicitor General Tushar Mehta appearing on behalf of the central government, meanwhile, told the court that it is collecting information from states on religious conversion through such means and sought time to furnish detailed information on the issue."},
    //     {"id":"13","category":"business","title":"Healthkart raises $135M from Temasek, A91 Partners","img":"https://imgs.search.brave.com/9rPZTxy250HtO-clj8owk3BRcAljUdPQ7DpDzvEZelE/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/YV9PNlhrc2ZEQ2hv/UUY5cGl2ckZ3SGFE/NCZwaWQ9QXBp","body":"Healthkart has raised $135 million in a round led by Singapore-based investment firm Temasek. A91 Partners and Kae Capital also participated. The fresh funds will used to build its direct-to-consumer (D2C) brands, besides increasing its offline distribution, expanding international operations, and for acquisitions, the company said in a statement. The company raised $65 million in a funding round two weeks ago, according to regulatory filings. The latest announcement is likely to be an extension of the previous round.\n\nThe Gurugram-based nutraceuticals brand has eight popular supplement brands that include MuscleBlaze and TrueBasics. It has over 100 offline stores across 50 cities in India. MuscleBlaze now has a 25% share of India’s sports nutrition market and HKVitals has ~20% share of the online health supplement market, according to the company.\n\nThe company was founded in 2011 as Bright Lifecare Pvt Ltd (BLPL) by former UBS Investment Bank executive Sameer Maheshwari and former MapmyIndia executive Prashant Tandon. In 2015, Healthkart was carved out from BLPL to form 1MG Technologies Pvt Ltd in which Tata Digital bought a 55% stake in June last year.\n\n“We are delighted to partner with Temasek and A91 Partners in our mission to deliver innovative, high quality, yet affordable preventive care solutions to Indian consumers. Driving fitness and preventive health by addressing the nutritional gaps is a systemic trend which is taking off in a big way in India. With HealthKart’s R&D capabilities and omni-channel distribution infrastructure, we are excited to lead the way,\" said Sameer, Founder and CEO of Healthkart."},
    //     {"id":"14","category":"india","title":"World’s first gold vending ATM opens in Hyderabad","img":"https://imgs.search.brave.com/QcJPuQG8qG_2yHzdK3eLreDBZLcvQuNbNhcsEjbNWww/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMudGhlaGFuc2lu/ZGlhLmNvbS9oLXVw/bG9hZC8yMDIyLzEy/LzA0LzEzMjMyNTAt/Z29sZC1hdG0uanBn","body":"Now, buying gold will be as easy as taking out money from an ATM machine. Now that ATMs, United Payment Interface (UPI), Net banking, and mobile wallets have reduced the difficulties related to cash withdrawals to a great extent, a company named Goldsikka installed a gold ATM , which is claimed to be the country and world's first real-time gold dispensing machine.\n\n5 kg of gold can be stored in the ATM. There are eight alternatives for the gold quantity, ranging from 0.5 grams to 100 grams. The coins are 999-certified 24-carat gold. Customers will receive their investment returns at a live price with no waste. The market year is determined based on the London Bullion Market. The taxes are also adjusted and shown on the screen along with the prices.\n\nThe company plans to launch three machines in the Hyderabad at the airport, old city and propose to launch them in Karimnagar and Warangal also. Taruj said plans were being drawn to launch 3,000 machines all over India in coming two years.\n\nAccording to the business, the gold ATM functions just like any other ATM. After choosing from the available options to purchase the gold, one must swipe their credit or debit card. Gold valued at that quantity is released to the buyer at the price set by the buyer."}
    // ]
    // newses.map((i)=>{
    //     news.create({id:i['id'], category: i['category'], title: i['title'], img: i['img'], body: i['body'], authorUrl: 'https://instagram.com/its_real_rish', authorName: 'Rishabh Jain'})
    // })

// 14 dec 1pm br audi 


// console.log(await news.find({}).sort({createdAt:1}).limit(20))



// $$$$$$$ underplay $$$$$$