const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const { getAllUsers, getOneUser, createOneUser, updateUser, deleteUser, getProfile, updateProfile, deleteProfile } = require('../controllers/user.controller')


router.get('/',checkAdmin, getAllUsers,(req, res) =>{
    res.send('Aqui el admin muestra todos los usuarios')
})

router.get('/profile', getProfile)
router.put('/profile', updateProfile)
router.delete('/profile',deleteProfile)

router.get('/:id', checkAdmin, getOneUser, (req, res) => {
    res.send('Aqui el admin consigue un usuario')
})

router.post('/', checkAdmin, createOneUser, (req, res) => {
    res.send('Aqui el admin crea un usuario')
})

router.put('/:id', checkAdmin, updateUser, (req, res) => {
    res.send('Aqui el admin actualiza un usuario')
})

router.delete('/:id', checkAdmin, deleteUser, (req, res) => {
    res.send('Aqui el admin elimina un usuario')
})

module.exports = router