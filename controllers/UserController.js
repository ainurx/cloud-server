const User = require('../models/User')

const signUp = async (req, res) =>{
    try{
        console.log(req.body)
        const { username, password, firstName, lastName, profilePicture } = req.body
    
        if( username.length === 0 || username === undefined){
            throw Error('Please provide username')
        }
    
        const result = await User.create({ username, password, firstName, lastName, profilePicture })

        res.send(result)
    } catch(err){
        res.status(402).send(err.message)
    }
}

const signIn = async (req, res) =>{
    try{
        const { username, password } = req.body
    
    } catch(err){

    }
}

module.exports ={
    signUp,
    signIn
}