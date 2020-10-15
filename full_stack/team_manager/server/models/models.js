const mongoose = require('mongoose')

const customValidator = (arg) => {
    if(arg.length === 0) {
        return true
    }
    else if(arg.length < 3) {
        return false
    }
    else {
        return true
    }
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Name is required`],
        minlength: [3, `Name must be at least 3 characters`],
    },
    position: {
        type: String,
        validate: [customValidator, `Position must be at least 3 characters`]
    },
    status: {
        type: [Number],
        default: [0,0,0]
    }
}, {timestamps:true})

module.exports = mongoose.model(`User`, UserSchema)