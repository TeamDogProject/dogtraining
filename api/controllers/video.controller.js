const Video = require('../models/video.model')

async function getAllVideos (req, res) {
    try {
        const videos = await Video.findAll({
            where: req.query
        })
        if (videos) {
            return res.status(200).json(videos)
        } else {
            return res.status(404).send('Video not found')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneVideo(req, res) {
    try {
        const video = await Video.findByPk(req.params.id)
        if (video) {
            return res.status(200).json(video)
        } else {
            return res.status(404).send('Video not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOneVideo(req, res) {
    try {
        const video = await Video.create(req.body)
        return res.status(200).json({ message: 'Video created', video: video })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateVideo(req, res) {
    try {
        const [updated] = await Video.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Video updated' })
        } else {
            return res.status(404).send('Video not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteVideo(req, res) {
    try {
        const video = await Video.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (video) {
            return res.status(200).json('Video deleted')
        } else {
            return res.status(404).send('Video not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

/*async function getVideosUser(req, res) {
    try {
        const videosuser = await Video.findAll({
            where: req.query
        })
        if (videosuser) {
            return res.status(200).json(videosuser)
        } else {
            return res.status(404).send('Videos by user not found')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}*/

module.exports = {
    getAllVideos,
    getOneVideo,
    createOneVideo,
    updateVideo,
    deleteVideo
}