require('dotenv').config()
const express = require('express')
const { logger } = require('./api/actions/actions-middlware')


const server = require('./api/server')

const PORT = process.env.PORT || 9000

server.use(logger)
server.use(express.json())


server.get('/api/hello', (req, res) => {
    res.json({message: 'The api is working'})
})

server.use('*', (req, res) => {
    res.status(404).json({
        message:'not found (index.js)'
    })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

