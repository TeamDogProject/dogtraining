const User = require('../models/user.model')

async function getAllUsers(req, res){
    try {
        const users = await User.findAll({
            where: req.query
        })
        if(users){
            return res.status(200).json(users)
        }else{
            return res.status(404).send('Users not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneUser(req, res){
    try {
        const user = await User.findByPk(req.params.id)
        if(user)
        {
            return res.status(200).json(user)
        }else{
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOneUser(req, res){
    try {
        const user = await User.create(req.body)
        return res.status(200).json({message:'User created', user: user})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateUser(req, res){
    try {
        const [updated] = await User.update(req.body,{
            where: {
                    id: req.params.id,
            },
        })
        console.log(updated)
        if(updated)
        {
            return res.status(200).json({ message: 'User updated'})
        } else{
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}

async function deleteUser(req, res){
    try {
        const user = await User.destroy({
            where:{
                id: req.params.id,
            },
        })
        if(user)
        {
            return res.status(200).json('User deleted')
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getProfile(req, res){
    try {
        const profile = await User.findByPk(res.locals.user.id)
        if (profile) {
            return res.status(200).json(profile)
        } else {
            return res.status(404).send('Profile not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateProfile(req, res){
    try {
        const [updated] = await User.update(req.body, {
            where: {
                id: res.locals.user.id
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Profile updated' })
        } else {
            return res.status(404).send('Profile not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteProfile(req, res){
    try {
        console.log(res.locals.user)
        const profile = await User.destroy({
            where: {
                id: res.locals.user.id
            },
        })
        if (profile) {
            return res.status(200).json('Profile deleted')
        } else {
            return res.status(404).send('Profile not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports={ getAllUsers, getOneUser, createOneUser, updateUser, deleteUser, getProfile, updateProfile, deleteProfile }