const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const { getAllDogs, getOneDog, createOneDog, updateDog, deleteDog, getDogProfile, addDog } = require('../controllers/dog.controller')


router.get('/', checkAuth, checkAdmin, getAllDogs)
router.get('/profile', checkAuth, getDogProfile)
router.get('/:id',checkAuth, getOneDog)
router.post('/',checkAuth, createOneDog)
router.put('/:id',checkAuth, updateDog)
router.delete('/:id',checkAuth, deleteDog)
router.post('/addDog',checkAuth, addDog)


module.exports = router