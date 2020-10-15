const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require(`./config/config`)
require(`./models/models`)
require(`./routes/routes`)(app)

app.listen(8000, () => console.log(`Server is locked and loaded on port 8000`))