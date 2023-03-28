const router = require('express').Router()

const { getAllPackages, getOnePackage, createOnePackage, updatePackage, deletePackage } = require('../controllers/package.controller')


router.get('/', getAllPackages)
router.get('/:id', getOnePackage)
router.post('/', createOnePackage)
router.put('/:id', updatePackage)
router.delete('/:id', deletePackage)