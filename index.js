require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { logger } = require('./api/actions/actions-middlware')


const server = express()

const PORT = process.env.PORT || 9000

server.use(logger)
server.use(express.json())
server.use(cors())

server.get('/api/hello', (req, res) => {
    res.json({message: 'The api is working'})
})
// server.use('*', (req, res) => {
//     res.send(`<h1>Hello, from index.js!</h1>`)
// })


server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

