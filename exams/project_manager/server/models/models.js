const mongoose = require(`mongoose`);

const ProjectSchema = new mongoose.Schema({
    
    description: {
        type: String,
        required: [true, `Project is required`],
        minlength: [3, `Project must be at least 3 characters`],
    },
    dueDate: {
        type: Date,
        required: [true, `Date is required`]
    },
    status: {
        type: Number,
        default: 0,
    }

}, {timestamps:true})

module.exports = mongoose.model(`Project`, ProjectSchema);