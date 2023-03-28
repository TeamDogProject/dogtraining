const router = require('express').Router()

const { getAllVideos, getOneVideo,createOneVideo,updateVideo,deleteVideo } = require('../controllers/video.controller')


router.get('/', getAllVideos)
router.get('/:id', getOneVideo)
router.post('/', createOneVideo)
router.put('/:id', updateVideo)
router.delete('/:id', deleteVideo)

module.exports = router