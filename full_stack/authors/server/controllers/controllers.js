const Author = require(`../models/models`)

module.exports = {
    create: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => res.json({newAuthor: newAuthor}))
            .catch((err) => res.status(400).json(err))
    },
    readAll: (req, res) => {
        Author.find().sort({firstName:1})
            .then((authors) => res.json({authors:authors}))
            .catch((err) => res.json(err))
    },
    readOne: (req, res) => {
        Author.findOne({_id:req.params.id})
            .then((author) => res.json({author:author}))
            .catch((err) => res.status(400).json(err))
    },
    updateOne: (req, res) => {
        Author.updateOne({_id:req.params.id}, req.body, {new: true, runValidators:true})
            .then((updatedAuthor) => res.json({updatedAuthor:updatedAuthor}))
            .catch((err) => res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Author.deleteOne({_id:req.params.id})
            .then((result) => res.json({result:result}))
            .catch((err) => res.json(err))
    }
}