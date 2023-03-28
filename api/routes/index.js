const router = require ('express').Router()
const authRouter = require ('./auth.router')

router.use('/auth', authRouter)
router.use('/users', require('./user.router'))
router.use('/dogs', require('./dog.router'))
router.use('/packages', require('./package.router'))









module.exports = router