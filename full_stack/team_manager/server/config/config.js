const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/team_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('db connection established'))
    .catch((err) => console.log('db connection failed', err))
