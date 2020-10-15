const JokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/jokes', JokeController.findAll);
    app.get('/api/jokes/random', JokeController.random);
    app.get('/api/jokes/:id', JokeController.findOne);
    app.post('/api/jokes/new', JokeController.create);
    app.put('/api/jokes/update/:id', JokeController.updateOne);
    app.delete('/api/jokes/delete/:id', JokeController.delete);
    
}