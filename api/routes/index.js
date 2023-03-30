const router = require ('express').Router()
//const authRouter = require ('./auth.router')

router.use('/auth', require('./auth.router'))
router.use('/users', require('./user.router'))
router.use('/dogs', require('./dog.router'))
router.use('/packages', require('./package.router'))
router.use('/categories', require('./category.router'))
router.use('/videos', require('./video.router'))
router.use('/sessions',require('./session.router'))


module.exports = router