const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const { getAllSessions, getOneSession, createOneSession, updateSession, deleteSession, getSessionProfile, updateSessionProfile, deleteSessionProfile } = require('../controllers/session.controller')


router.get('/',checkAuth,checkAdmin, getAllSessions)

router.get('/:id', checkAuth ,checkAdmin, getOneSession)

router.post('/', checkAuth, checkAdmin, createOneSession)

router.put('/:id', checkAuth, checkAdmin, updateSession)

router.delete('/:id',checkAuth, checkAdmin, deleteSession)

router.get('/profile', checkAuth, getSessionProfile)

router.put('/profile', checkAuth, updateSessionProfile)

router.delete('/profile', checkAuth, deleteSessionProfile)

module.exports = router