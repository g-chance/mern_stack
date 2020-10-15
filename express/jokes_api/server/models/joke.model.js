const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    question: String,
    punch_line: String,
},{timestamps:true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;