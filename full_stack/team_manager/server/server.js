const express = require(`express`);
const app = express();
const cors = require(`cors`);

app.use(cors(), express.urlencoded({extended:true}), express.json())

require(`./config/config`)
require(`./models/models`)
require(`./routes/routes`)(app)

app.listen(8000, () => console.log(`Server locked and loaded on 8000`))