const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

    
const { getAllVideos, getOneVideo, createOneVideo, updateVideo, deleteVideo, getAllVideosByCategories, getMyVideos } = require('../controllers/video.controller')


router.get('/', checkAuth, checkAdmin, getAllVideos)
router.get('/:id', checkAuth, checkAdmin, getOneVideo)
router.get('/categories', checkAuth, getAllVideosByCategories)
router.get('/me', checkAuth, getMyVideos)
router.post('/', checkAuth, checkAdmin, createOneVideo)
router.put('/:id', checkAuth, checkAdmin, updateVideo)
router.delete('/:id', checkAuth, checkAdmin, deleteVideo)


module.exports = router