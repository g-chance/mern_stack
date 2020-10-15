const ProductController = require('../controllers/controller')

module.exports = app => {
    app.get('/api/index', ProductController.index)
    app.get('/api/products', ProductController.readAll)
    app.get('/api/products/:id', ProductController.readOne)
    app.post('/api/products/new', ProductController.create)
    app.put('/api/edit/:id', ProductController.updateOne)
    app.delete('/api/delete/:id', ProductController.destroy)
}