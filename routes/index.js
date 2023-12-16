const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const UserMiddleware = require('../middleware/UserMiddleware')

router.post('/signup', UserController.signUp)
router.post('/signin', UserController.signIn)

router.get('/user', UserMiddleware.decodeToken, UserController.findUser)

module.exports = router