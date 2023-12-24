const jwt = require('jsonwebtoken')

const decodeToken = async(req, res, next) =>{
    try{
        const { auth_token } = req.headers

        const decoded = jwt.verify(auth_token, 'secret')
        
        req.params.id = decoded.id
        next()
    } catch(err){
        res.status(401).send('Unauthorized.')
    }
}

module.exports = {
    decodeToken
}