const express = require('express')
const app = express()

const router = require('./routes/index')

app.get('/', (req, res)=>{
    res.send(`<h2 style='text-align: center'>CLOUD SERVER<h2/>`)
})

app.use(router)

app.listen(5000, ()=>{
    console.log('=> CLOUD SERVER is running ...')
})