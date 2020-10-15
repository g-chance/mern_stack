const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./server/config/mongoose.config'); 

app.use(express.json(), express.urlencoded({extended: true}));

const routes = require('./server/routes/routes');
routes(app);

app.listen(8000, () => "The server is locked and loaded on port 8000");