// add middlewares here related to actions
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


module.exports = {
    logger, 
}