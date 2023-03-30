const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const { getAllPackages, getOnePackage, createOnePackage, updatePackage, deletePackage, addCategoryToPackage, addPackageToUser } = require('../controllers/package.controller')

router.get('/', checkAuth, getAllPackages)

router.get('/:id', checkAuth, getOnePackage)

router.post('/', checkAuth, checkAdmin, createOnePackage)

router.put('/:id', checkAuth,  checkAdmin, updatePackage)

router.delete('/:id', checkAuth, checkAdmin, deletePackage)

router.put('/:packageId/category/:categoryId', checkAuth, checkAdmin, addCategoryToPackage)

router.post('/:packageId/user/:userId', checkAuth, checkAdmin, addPackageToUser)

module.exports = router