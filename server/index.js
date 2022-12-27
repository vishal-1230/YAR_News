import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import dotenv from "dotenv"
import newsOverview from './models/newsOverview.js'
import news from './models/news.js'
// import multer from 'multer'
import bodyParser from 'body-parser'
// const upload = multer({ dest: "uploads/" });

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
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
dotenv.config()

const port = process.env.PORT || 8800
const mongodb= process.env.MONGO_DB

mongoose.connect(mongodb, (err)=>{if(err) throw err; console.log('connected')})
const db=mongoose.connection


app.get('/', (req, res)=>{
    res.send('Server Connected Successfully!!!')
    console.log('Server Connected!!!');
})

app.get('/homepageData', (req, res)=>{
    const homeConfig = JSON.parse(JSON.stringify({
        "headline_1":"1",
        "headline_2":"2",
        "headline_3":"3",
        "breaking_news":[""],
        "india_featured":"india",
        "politics_featured":"politics",
        "finance_featured":"finance",
        "world_featured":"world",
        "business_featured":"business",
        "entertainment_featured":"entertainment",
        "technology_featured":"technology",
        "education_featured":"education",
        "health_featured":"health",
        "latest_headlines":["4", "6", "8", "10", "12", "7", "11"]
    }))
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

app.get('/getCategoryNews', (req, res)=>{
    async function a(){
        const category = req.query.category
        const response = await newsOverview.find({category: category}).sort('createdAt').limit(20)
        console.log(response);
        res.json(response)
    }
    a()
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

app.get('/trial', (req, res)=>{
    res.sendStatus(200)
})

app.post('/uploadNewsByAdmin', (req, res)=>{
    console.log(req.body);
    const title=req.body.title
    const category=req.body.category
    const body=req.body.newsBody
    const img = req.body.img
    console.log('News Uploaded');
    // console.log(id, title, body, img);
    async function func(){
        const response = await newsOverview.find({}).sort('createdAt').sort('id');
        const id2 = parseInt(response[parseInt(response.length)-1]['id'])+1;
        await news.create({id: id2, category:category, title: title, body: body, img: img, authorName: 'Admin', authorUrl: 'https://instagram.com/piyush7teen'})
        await newsOverview.create({id: id2, category: category, title: title, img: img, smallBody: body.split(" ").splice(0,60).join(" ")})
        res.status(200).send('News Uploaded')
    }
    func()
    // news.create({})
})

app.listen(8800)