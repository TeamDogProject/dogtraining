const Session = require('../models/session.model')

async function getAllSessions(req, res){
    try {
        const sessions = await Session.findAll({
            where: req.query
        })
        if(sessions){
            return res.status(200).json(sessions)
        }else{
            return res.status(404).send('Session not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneSession(req, res){
    try {
        const session = await Session.findByPk(req.params.id)
        if(session)
        {
            return res.status(200).json(session)
        }else{
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOneSession(req, res){
    try {
        const { userId, packageId } = req.body;
        const session = await Session.create({
            userId: userId,
            packageId: packageId
        }, {
            include: [
                {
                    model: Package,
                    as: 'package'
                }
            ]
        });

        return res.status(200).json({message:'Session created', session: session});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateSession(req, res){
    try {
        const updated = await Session.update(req.body,{
            where: {
                    id: req.params.id,
            },
        })
        console.log(updated)
        if(updated)
        {
            return res.status(200).json({ message: 'Session updated'})
        } else{
            return res.status(404).send('Session not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteSession(req, res){
    try {
        const session = await Session.destroy({
            where:{
                id: req.params.id,
            },
        })
        if(session)
        {
            return res.status(200).json('Session deleted')
        } else {
            return res.status(404).send('Session not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getSessionProfile(req, res){
    try {
        const session_profile = await Session.findByPk(res.locals.user.id)
        if (session_profile) {
            return res.status(200).json(session_profile)
        } else {
            return res.status(404).send('Session Profile not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateSessionProfile(req, res){
    try {
        const updated_sessionprofile = await Session.update(req.body, {
            where: {
                id: res.locals.user.id
            },
        })
        console.log(updated_sessionprofile)
        if (updated_sessionprofile) {
            return res.status(200).json({ message: 'Session Profile updated' })
        } else {
            return res.status(404).send('Session Profile not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteSessionProfile(req, res){
    try {
        console.log(res.locals.user)
        const deleteSessionProfile = await User.destroy({
            where: {
                id: res.locals.user.id
            },
        })
        if (deleteSessionProfile) {
            return res.status(200).json('Session Profile deleted')
        } else {
            return res.status(404).send('Session Profile not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getAllSessions, getOneSession,createOneSession,updateSession,deleteSession,getSessionProfile, updateSessionProfile, deleteSessionProfile }