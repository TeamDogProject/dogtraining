const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

    
const { getAllVideos, getOneVideo, createOneVideo, updateVideo, deleteVideo, getAllVideosByCategories, getMyVideos } = require('../controllers/video.controller')


router.get('/', checkAuth, checkAdmin, getAllVideos)
router.get('/:id', checkAuth, checkAdmin, getOneVideo)
router.post('/', checkAuth, checkAdmin, createOneVideo)
router.put('/:id', checkAuth, checkAdmin, updateVideo)
router.delete('/:id', checkAuth, checkAdmin, deleteVideo)
router.get('/', checkAuth, getAllVideosByCategories )
router.get('/', checkAuth, getMyVideos)

module.exports = router