const sequelize = require('./database')
const User = require('../models/User')
const Blog = require('../models/Blog')

const createDatabase = async () =>{
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log('creating database ...')
        await sequelize.sync({ force: true, logging: console.log })
        console.log('database created.')
    } catch(err){
        console.log(err)
    }
}

createDatabase()