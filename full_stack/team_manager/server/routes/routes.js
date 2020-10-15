const UserController = require(`../controllers/controllers`)

module.exports = (app) => {
    app.post(`/api/users/new`, UserController.create)
    app.get(`/api/users`, UserController.readAll)
    app.get(`/api/users/:id`, UserController.readOne)
    app.put(`/api/users/edit/:id`, UserController.updateOne)
    app.delete(`/api/users/delete/:id`, UserController.deleteOne)
}