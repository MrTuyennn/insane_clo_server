const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    avatar : String,
    name : String,
    phone : String,
    gmail : String,
    password : String
})
const user = mongoose.model('user',User)
module.exports = user