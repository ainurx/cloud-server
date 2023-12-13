const express = require('express')
const app = express()

const router = require('./routes/index')
const bodyParser = require('body-parser')

app.get('/', (req, res)=>{
    res.send(`<h2 style='text-align: center'>CLOUD SERVER<h2/>`)
})

app.use(bodyParser.json())

app.use(router)

app.listen(5000, ()=>{
    console.log('=> CLOUD SERVER is running ...')
})