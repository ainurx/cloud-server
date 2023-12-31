const express = require('express')
const app = express()

const router = require('./routes/index')
const bodyParser = require('body-parser')

require('dotenv').config()

app.get('/', (req, res)=>{
    res.send(`<h2 style='text-align: center'>CLOUD SERVER<h2/>`)
})

app.use(bodyParser.json())

app.use(router)

// for production change port to 8080
app.listen(process.env.PORT, ()=>{
    console.log('=> CLOUD SERVER is running ...')
})