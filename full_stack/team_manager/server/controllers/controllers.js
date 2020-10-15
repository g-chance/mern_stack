const User = require(`../models/models`)

module.exports = {
    create: (req,res) => {
        User.create(req.body)
        .then((user) => res.json({user:user}))
        .catch((err) => res.status(400).json(err))
    },
    readAll: (req,res) => {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json(err))
    },
    readOne: (req,res) => {
        User.findOne({_id:req.params.id})
        .then((user) => res.json({user:user}))
        .catch((err) => res.status(400).json(err))
    },
    updateOne: (req,res) => {
        User.updateOne({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((user) => res.json({user:user}))
        .catch((err) => res.status(400).json(err))
    },
    deleteOne: (req,res) => {
        User.deleteOne({_id:req.params.id})
        .then((result) => res.json({result:result}))
        .catch((err) => res.status(400).json(err))
    },
}