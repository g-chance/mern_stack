const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    description: String,
}, {timestamps: true} );


module.exports.Product = mongoose.model('Product', productSchema);