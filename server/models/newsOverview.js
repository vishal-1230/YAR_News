import mongoose from 'mongoose'

const newsOverviewSchema = new mongoose.Schema({
    id: {type: String, unique: true},
    category:String,
    title: String,
    img:String,
    smallBody: String
}, {timestamps: true})

export default mongoose.model('newsOverview', newsOverviewSchema)