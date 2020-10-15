const Project = require(`../models/models`);

module.exports = {
    create: (req, res) => {
        Project.create(req.body)
        .then(newProject => res.json({newProject:newProject}))
        .catch(err => res.status(400).json(err))
    },
    readAll: (req, res) => {
        Project.find().sort({dueDate: 1})
        .then(projects => res.json({projects:projects}))
        .catch(err => res.status(400).json(err))
    },
    readOne: (req, res) => {
        Project.findOne({_id:req.params.id})
        .then(project => res.json({project:project}))
        .catch(err => res.status(400).json(err))
    },
    updateOne: (req, res) => {
        Project.updateOne({_id:req.params.id}, req.body, {new: true, runValidators:true})
        .then(updatedProject => res.json({updatedProject:updatedProject}))
        .catch(err => res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Project.deleteOne({_id:req.params.id})
        .then(result => res.json({result:result}))
        .catch(err => res.status(400).json(err))
    }
}