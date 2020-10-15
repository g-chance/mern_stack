const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established db connection"))
    .catch((err) => console.log(`Something went wrong`, err))