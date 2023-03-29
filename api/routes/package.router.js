const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const { getAllPackages, getOnePackage, createOnePackage, updatePackage, deletePackage } = require('../controllers/package.controller')


router.get('/', checkAuth, getAllPackages)

router.get('/:id', checkAuth, getOnePackage)

router.post('/', checkAuth, checkAdmin, createOnePackage)

router.put('/:id', checkAuth, checkAdmin, updatePackage)

router.delete('/:id', checkAuth, checkAdmin, deletePackage)




module.exports = router