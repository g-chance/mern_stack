const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/jokes_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch((err) => console.log("Unable to connect to the database", err))