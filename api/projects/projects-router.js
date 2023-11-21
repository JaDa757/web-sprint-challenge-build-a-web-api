const express = require('express');
const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Handling GET request for /api/projects/')
    Projects.get()
        .then(projects => {
            res.json(projects);
        })
        .catch(next);
});

router.get('/:id/', (req, res) => {
    // Handle route logic for /api/projects/:id/
});

router.post('/', (req, res) => {
    // Handle route logic for /api/projects/
});

router.put('/:id/', (req, res) => {
    // Handle route logic for /api/projects/:id/
});

router.delete('/:id/', (req, res) => {
    // Handle route logic for /api/projects/:id/
});

router.get('/:id/actions', (req, res) => {
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
