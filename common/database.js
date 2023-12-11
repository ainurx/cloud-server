const Sequelize = require("sequelize")

// Tables
// const User = require('../models/User')

const sequelize = new Sequelize('cloud_dev','root','', {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = sequelize