const mongoose = require('mongoose');

var notEmpty = (features) => {
    if(features.length < 2){return false}
    else {return true};
}

const PrimaryObjectSchema = new mongoose.Schema({
    title:{
        type:String,
        minlength:[3, "Title must be at least 3 characters"]
    },
    description:{
        type:String,
        minlength:[5, "Description must be at least 5 characters"]
    },
    url:{
        type:String,
    },
    reviews: [{
        comment:String,
        rating:Number
    }]
}, { timestamps: true })

module.exports.PrimaryObjectSchema = mongoose.model("PrimaryObject", PrimaryObjectSchema);

// question: {
//     type: String,
//     minlength: [10, "A needs at least 10 characters"]
// },
// options: {
//     type:[{
//         text:"",
//         count:0,
//     }],
//     validate:[notEmpty,"Array needs at least 2 options"]
// }