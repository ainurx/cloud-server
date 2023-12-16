const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { IfEmptyThrowError, IfNotEmptyThrowError } = require('../common/check')

const User = require('../models/User')

const saltRound = 10

const signUp = async (req, res) =>{
    try{
        const { username, password, firstName, lastName, profilePicture } = req.body
    
        IfEmptyThrowError(username, 'Please provide username.')

        const userExist = await User.findOne({ where: { username }})
        IfNotEmptyThrowError(userExist, 'User already exist.')

        const salt = bcrypt.genSaltSync(saltRound)
        const hashPassword = bcrypt.hashSync(password, salt)
    
        const result = await User.create({ username, password: hashPassword, firstName, lastName, profilePicture })

        res.send(result)
    } catch(err){
        res.status(402).send(err.message)
    }
}

const signIn = async (req, res) =>{
    try{
        const { username, password } = req.body
        
        const user = await User.findOne({ where: { username }})
        IfEmptyThrowError(user, 'User does not exist.')
        const passwordMatch = await bcrypt.compareSync(password, user.password)

        if(passwordMatch){
            const token = jwt.sign({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                profilePicture: user.profilePicture,
            }, 'secret')

            res.send({token})
        } else {
            throw Error('Wrong password.')
        }
    } catch(err){
        res.status(402).send(err.message)
    }   
}

const findUser = async(req, res) =>{
    try{
        const { id } = req.params
        
        const result = await User.findByPk(id)
        IfEmptyThrowError(result, 'User does not exist.')

        res.send(result)
    } catch(err){
        res.status(402).send(err.message)
    }
}

module.exports ={
    findUser,
    signUp,
    signIn
}