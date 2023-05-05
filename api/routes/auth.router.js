const router = require('express').Router()
const {signUp,login, changePassword } = require('../controllers/auth.controller')
const { checkAuth } = require('../middleware/auth.js')

router.post('/signup', signUp)
router.post('/login', login)
router.put('/profile/changePassword', checkAuth, changePassword)

module.exports = router