const express = require('express');
const Action = require('./actions-model')

const {
    validateActionId,
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

router.get('/:id/', validateActionId, async (req, res, next) => {
    try {
        console.log('hello from actions router')
    } catch (err) {
        next(err)
    }
})

router.post('/', validateAction, (req, res, next) => {
    console.log('post')
})

router.put('/:id/', validateActionId, validateAction, (rec, res, next) => {
    console.log('put')
})

router.delete('/:id/', validateActionId, async (req, res, next) => {
    console.log('delete')
})

router.use((err, req, res, next) => { //eslint-disable-line   
    res.status(err.status || 500).json({
        customMessage: 'something went wrong in actions-router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
