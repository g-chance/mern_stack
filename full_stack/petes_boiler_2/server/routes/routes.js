const controller = require('../controllers/controller')

module.exports = app => {
    app.post('/api/v1/create', controller.create);
    app.put('/api/v1/updateOne/:id', controller.updateOne);
    app.delete('/api/v1/deleteOne/:id', controller.deleteOne);
    app.get('/api/v1/readOne/:id', controller.readOne);
    app.get('/api/v1/readAll', controller.readAll);
}