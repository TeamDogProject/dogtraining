const router = require('express').Router()

const { getAllUsers, getOneUser, createOneUser, updateUser, deleteUser, getProfile, updateProfile, deleteProfile } = require('../controllers/user.controller')


router.get('/',getAllUsers)
router.get('/profile', getProfile)
router.put('/profile', updateProfile)
router.delete('/profile',deleteProfile)
router.get('/:id', getOneUser)
router.post('/', createOneUser)
router.put('/:id', updateUser)
router.delete('/:id',deleteUser)