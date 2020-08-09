const Product = require('../models/product')

exports.getData_product = (req,res) => {
    try {
        Product.find({})
        .then(data => {
            res.send(data)
            console.log(data)})
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

exports.getData_limit = (req,res) => {
    try {
        Product.find({}).limit(10)
        .then(data =>{
            res.send(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

exports.getData_limit_data = (req,res) => {
    try {
        Product.find({}).skip(10).limit(10)
        .then(data =>{
            res.send(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}