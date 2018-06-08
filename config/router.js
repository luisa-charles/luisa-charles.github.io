const router = require('express').Router();

const secureRoute = require('../lib/secureRoute');

const projects = require('../controllers/projects');
const auth = require('../controllers/auth');

router.route('/projects')
    .get(projects.index)
    .post(secureRoute, projects.create);

router.route('/projects/:id')
    .get(projects.show)
    .put(secureRoute, projects.update)
    .delete(secureRoute, projects.delete);

// router.route('/register')
//     .post(auth.register);

router.route('/login')
    .post(auth.login);

router.route('/*')
    .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
