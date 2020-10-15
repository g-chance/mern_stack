const AuthorController = require(`../controllers/controllers`)

module.exports = (app) => {
    app.post(`/api/authors/new`, AuthorController.create)
    app.get(`/api/authors`, AuthorController.readAll)
    app.get(`/api/authors/:id`, AuthorController.readOne)
    app.put(`/api/authors/edit/:id`, AuthorController.updateOne)
    app.delete(`/api/authors/delete/:id`, AuthorController.deleteOne)
}