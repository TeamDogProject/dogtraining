const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')


const { getAllCategories,getOneCategory,createOneCategory,updateCategory,deleteCategory } = require('../controllers/category.controller')


router.get('/',checkAuth,checkAdmin, getAllCategories)
router.get('/:id', checkAuth, checkAdmin, getOneCategory)
router.post('/', checkAuth, checkAdmin, createOneCategory)
router.put('/:id', checkAuth, checkAdmin, updateCategory)
router.delete('/:id', checkAuth, checkAdmin, deleteCategory)

module.exports = router