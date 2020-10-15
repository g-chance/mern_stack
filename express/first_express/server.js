const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    res.send(`our express api server is now sending this request to the browser, and I'm using nodemon and adding this to see it update in real time! I'm a nerd!`)
});

const server = app.listen(8000, () => 
    console.log(`server is locked and loaded on port ${server.address().port}!`)
)