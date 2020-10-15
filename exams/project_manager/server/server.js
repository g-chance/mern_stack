const express = require(`express`);
const app = express();
const cors = require(`cors`)

app.use(cors(), express.json(), express.urlencoded({extended:true}))

require(`./config/config`)
require(`./models/models`)
require(`./routes/routes`)(app)

app.listen(8000, () => console.log(`server locked and loaded on port 8000`))