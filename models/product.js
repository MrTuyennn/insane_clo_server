const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    picture : String,
    name : String,
    price : String,
    size : String,
    infor : String
})
const product = mongoose.model('product',Product)
module.exports = product