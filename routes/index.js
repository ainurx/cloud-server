const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/signin', (req, res)=>{
    res.send('<h1>SIGN IN</h1>')
})

router.post('/signup', UserController.signUp)

module.exports = router