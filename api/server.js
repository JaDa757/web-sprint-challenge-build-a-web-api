const express = require('express');
const projectsRouter = require('./projects/projects-router');
const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {    
    res.send(`<h2>Lets get this bread, boii!</h2>`);
});

module.exports = server;
