import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import dotenv from "dotenv"
import fs from 'fs'
import newsOverview from './models/newsOverview.js'
import homepageConfig from './models/homepageConfig.json' assert {type: 'json'}

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: "http://localhost:3000"
}))
dotenv.config()

const port = process.env.PORT || 8000
const mongodb= process.env.MONGO_DB

mongoose.connect(mongodb, (err)=>{if(err) throw err; console.log('connected')})
mongoose.connection

app.get('/homepageData', async (req, res)=>{
    const homeConfig = JSON.parse(JSON.stringify(homepageConfig))
    let obj = {}
        Object.keys(homeConfig).map(async (i)=>{
            console.log(i);
            if (i=='headline_1' || i=='headline_2' || i=='headline_3'){
                console.log('Retrieving headlines...');
                await newsOverview.find({id:homeConfig[i]}, (err, data)=>{
                    if (err) throw err;
                    console.log('i==>', i);
                    console.log('data==>', data);
                    obj[i]=data;
                })
            }else if (i!='headline_1' || i!='headline_2' || i!='headline_3'){
                console.log('Retrieving Other News...');
                let arr=[]
                console.log(homeConfig);
                console.log(homeConfig[i]);
                await homeConfig[i].map((i2)=>{
                    newsOverview.find({id:i2}, (err, data2)=>{
                        arr.push(data2)
                        console.log(data2);
                    })
                })
                obj[i]=arr
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
    res.json(obj)
    // setTimeout(()=>{res.json(obj)}, 1000)
})
JSON.parse(JSON.stringify(homepageConfig)).latest_headlines=90
console.log(JSON.parse(JSON.stringify(homepageConfig)))

app.get('/getNews', (req, res)=>{

})


app.listen(port)


// 14 dec 1pm br audi 


