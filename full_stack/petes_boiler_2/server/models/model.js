const mongoose = require('mongoose')
const customFunction = (arg) => {
    if(arg.length == 0) {
        return true
    } else if(arg.length < 3){
        return false
    } else {
        return true
    }
}
const PrimaryObjectSchema = new mongoose.Schema({
    title: {
        type: String,
        validate: [customFunction, "title is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    dueDate: {
        type: Date,
        required: [true, "Due Date is required"]
    },
    status: {
        type: Number,
        default:0
    }
})

mongoose.model('PrimaryObject', PrimaryObjectSchema)