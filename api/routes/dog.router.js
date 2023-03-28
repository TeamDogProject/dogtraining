const router = require('express').Router()

const { getAllDogs, getOneDog, createOneDog, updateDog, deleteDog, getDogProfile } = require('../controllers/dog.controller')


router.get('/', getAllDogs)
router.get('/profile', getDogProfile)
router.get('/:id', getOneDog)
router.post('/', createOneDog)
router.put('/:id', updateDog)
router.delete('/:id', deleteDog)