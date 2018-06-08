const Project = require('../models/project');

function indexRoute(req, res, next) {
    return Project.find()
        .then(projects => res.json(projects))
        .catch(next);
}

function createRoute(req, res, next) {
    return Project.create(req.body)
        .then(project => res.json(project))
        .catch(next);
}

function showRoute(req, res, next) {
    return Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(next);
}

function updateRoute(req, res, next) {
    return Project.findById(req.params.id)
        .then(project => Object.assign(project, req.body))
        .then(project => project.save())
        .then(project => res.json(project))
        .catch(next);
}

function deleteRoute(req, res, next) {
    return Project.findById(req.params.id)
        .then(project => project.remove())
        .then(() => res.sendStatus(204))
        .catch(next);
}

module.exports = {
    index: indexRoute,
    show: showRoute,
    create: createRoute,
    update: updateRoute,
    delete: deleteRoute
};