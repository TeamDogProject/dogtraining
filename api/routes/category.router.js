const router = require('express').Router()

const { getAllCategories,getOneCategory,createOneCategory,updateCategory,deleteCategory } = require('../controllers/category.controller')


router.get('/', getAllCategories)
router.get('/:id', getOneCategory)
router.post('/', createOneCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)