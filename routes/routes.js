// Use the express router
const express = require('express')
const router = express.Router()

// Bring in an instance of the backend controller file for optional access to do more backend development
const ctrl = require('../controller/controller')


// All these routes reside on top of the /api route

router.get('/getItems', ctrl.getMyItems)

router.post('/insertItem', ctrl.insertMyItem)

router.put('/deleteItem', ctrl.deleteMyItem)

module.exports = router