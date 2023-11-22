const Action = require('./actions-model')

function logger(req, res, next) {
   try { 
    const timeStamp = new Date().toLocaleString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timeStamp}] ${method} to ${url}`)
    next()
} catch (error) {
    console.log('logger middlware error', error)
    next(error)
}
}

async function validateAction( req, res, next) {
    try{
        const action = await Action.get(req.params.id)
        if(!action) {
            res.status(404).json({
                message: 'no such action'
            })
        } else {
            req.action = action
            next()
        }
    } catch (err) {
        res.status(500).json({
            message: 'problem finding action'
        })
    }
}


module.exports = {
    logger, 
    validateAction,
}