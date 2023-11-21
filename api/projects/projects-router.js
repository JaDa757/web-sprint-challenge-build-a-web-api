const express = require('express');
const Project = require('./projects-model');

const {
    validateProjectId,
    validateProject,

} = require('./projects-middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/projects/')
    Project.get()
        .then(projects => {
            res.json(projects);
        })
        .catch(next);
});

router.get('/:id/', validateProjectId, async (req, res, next) => {
    try {
        res.json(req.project)
    } catch (err) {
        next(err)
    }
});

router.post('/', validateProject, (req, res, next) => {
    Project.insert(req.body)
    .then(newProject => {        
        res.status(201).json(newProject)
    })
    .catch(next)
});

router.put('/:id/', validateProjectId, validateProject, (req, res, next) => {
    Project.update(req.params.id, req.body)
    .then(updatedProject => {
        res.json(updatedProject)
    })
    .catch(next)
});

router.delete('/:id/', validateProjectId, validateProject, (req, res) => {
    // Handle route logic for /api/projects/:id/
});

router.get('/:id/actions', validateProjectId, validateProject, (req, res) => {
    // Handle route logic for /api/projects/:id/actions
});

router.use((err, req, res, next) => {
    console.log('error in projects-router', err.message)
    res.status(err.status || 500).json({
        customMessage: 'something went wrong in projects-router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
