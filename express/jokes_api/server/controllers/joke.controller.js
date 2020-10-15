const Joke = require('../models/joke.model')
const mongoose = require('mongoose')

// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allUsers => res.json({users: allUsers}))
//         .catch((err) => res.json({message: `somthing went wrong`, error: err}))
// }

module.exports = {
    findAll: (req,res) => {
        Joke.find()
            .then((response) => {
                console.log(response[0])
                return res.json({users: response})
            })
            .catch((err) => res.json({error: err}))
    },
    create: (req,res) => {
        Joke.create(req.body)
            .then((response) => {
                return res.json({message: response})
            })
            .catch((err) => {
                return res.json({error: err})
            })
    },
    findOne: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then((response) => {
                return res.json({user: response})
            })
            .catch((err) => {
                return res.json({error: err})
            })
    },
    updateOne: (req, res) => {
        Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then((response) => {
                return res.json({user: response})
            })
            .catch((err) => {
                res.json({error: err})
            })
    },
    delete: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then((response) => {
                return res.json({result: response})
            })
            .catch((err) => {
                return res.json({error: err})
            })
    },
    random: (req, res) => {
        let x;
        Joke.find()
        .then(response => {
            console.log(response);
            x = response.length;
            x = Math.random()*x;
            x = Math.floor(x);
            console.log(x);
            return res.json({joke: response[x]});
        })
        .catch(err => res.json({error: err}))
    }
}