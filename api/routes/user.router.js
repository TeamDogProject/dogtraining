const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const { getAllUsers, getOneUser, createOneUser, updateUser, deleteUser, getProfile, updateProfile, deleteProfile } = require('../controllers/user.controller')


router.get('/',checkAuth,checkAdmin, getAllUsers)

router.get('/profile', checkAuth, getProfile)

router.put('/profile', checkAuth, updateProfile)

router.delete('/profile', checkAuth, deleteProfile)

router.get('/:id', checkAdmin, getOneUser)

router.post('/', checkAuth, checkAdmin, createOneUser)

router.put('/:id', checkAuth, checkAdmin, updateUser)

router.delete('/:id',checkAuth, checkAdmin, deleteUser)

module.exports = router