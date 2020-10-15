const { Product } = require('../models/models')

module.exports.index = (req,res) => {
    // console.log("is that wark?")
    res.json({message:"Hello World"})
}

module.exports.readAll = (req, res) => {
    Product.find()
        .then(products => res.json({products: products}))
        .catch(err => res.json(err))
}
module.exports.readOne = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json({product:product}))
        .catch(err => res.json(err))
}
module.exports.updateOne = (req,res) => {
    Product.updateOne({_id: req.params.id}, req.body, {new: true})
        .then(product => res.json({product:product}))
        .catch(err => res.json(err))
}
module.exports.create = (req,res) => {
    Product.create(req.body)
        .then((product) => res.json({product:product}))
        .catch(err => res.json(err))
}
module.exports.destroy = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then((result) => res.json({result: result}))
        .catch(err => res.json(err))
}