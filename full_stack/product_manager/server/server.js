const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./models/models')
require('./config/config')
require('./routes/routes')(app)

app.listen(8000, () => console.log('Server is listening on port 8000'))