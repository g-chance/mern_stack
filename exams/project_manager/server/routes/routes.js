const ProjectController = require(`../controllers/controllers`);

module.exports = app => {
    app.post(`/api/projects/new`, ProjectController.create);
    app.get(`/api/projects`, ProjectController.readAll);
    app.get(`/api/projects/:id`, ProjectController.readOne);
    app.put(`/api/projects/edit/:id`, ProjectController.updateOne);
    app.delete(`/api/projects/delete/:id`, ProjectController.deleteOne);
}