import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    id: String,
    category:String,
    title:String,
    img:String,
    body:String,
    authorUrl: String,
    authorName: String
}, {timestamps:true})

export default mongoose.model('news', newsSchema)