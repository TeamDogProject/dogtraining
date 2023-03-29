const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (req,res)=>{
    try {
        req.body.password = bcrypt.hashSync(req.body.password,10)
        const user = await User.create(req.body, {
            fields: ['name', 'surname', 'username', 'email', 'identity_card', 'password', 'phone', 'confirmation_password' ]
        })
       
        const token = jwt.sign({ email: user.email }, process.env.SECRET)
        res.status(200).json(token)

        
    } catch (error) {
        console.error(error)
        res.status(500).send('Error cannot create user')
    }
}

const login = async(req, res)=> {
    const user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user){
        return res.status(403).send('Email or password invalid')
    }
    
    bcrypt.compare(req.body.password, user.password, (err, result)=> {
        if (!result){
            return res.status(403).send('Email or password invalid')
        }

        const token = jwt.sign({email: user.email}, process.env.SECRET)
        return res.status(200).json({token})
    })
}

module.exports = {
    signUp,
    login
}