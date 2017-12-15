const express = require('express')
const aRouter = express.Router()
const aController = require('../controllers/aController')

module.exports = aRouter

aRouter.get('/', aController.get)
aRouter.post('/', aController.post)

