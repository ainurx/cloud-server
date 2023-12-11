const express = require('express')
const router = express.Router()

router.get('/signin', (req, res)=>{
    res.send('<h1>SIGN IN</h1>')
})

module.exports = router