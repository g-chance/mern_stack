const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/authors`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log('db locked and loaded'))
    .catch((err) => console.log(err))