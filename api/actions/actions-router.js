const express = require('express');
const Action = require('./actions-model')

const {
    validateAction,
} = require('./actions-middlware')

const router = express.Router();

router.get('/', (req, res, next) => {
    Action.get()
        .then(actions => {
            res.json(actions);
        })
        .catch(next);
});

router.get('/:id/', validateAction, async (req, res, next) => {
    try {
        console.log('hello from actions router')
    } catch (err) {
        next(err)
    }
})


router.use((err, req, res, next) => { //eslint-disable-line   
    res.status(err.status || 500).json({
        customMessage: 'something went wrong in actions-router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
