const router = require ('express').Router()
const authRouter = require ('./auth.router')

router.use('/auth', authRouter)
router.use('/users', require('./user.router'))









module.exports = router