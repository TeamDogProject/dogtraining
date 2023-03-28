const jwt = require ('jsonwebtoken')
const User = require ('../models/user.model')

const checkAuth = (req,res, next)=> {
    const token = req.headers.token

    jwt.verify(token.process.env.SECRET, (err, payload)=>{
        if(err){
            return res.status(400).send('invalid token')
        }
        const user = User.findOne({where: {email:payload.email}})
        
        if (!user){
            return res.status(400).send('Invalid token')
        }
        next()

    }) 

}

module.exports = { checkAuth }