const router = require('express').Router()

const {signUp,login, changePassword } = require('../controllers/auth.controller')

router.post('/signup', signUp)
router.post('/login', login)
router.put('/profile/changePassword', changePassword)

module.exports = router