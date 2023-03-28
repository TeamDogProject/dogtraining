const Category = require('../models/category.model') 

async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll({
            where: req.query
        })
        if (categories) {
            return res.status(200).json(categories)
        } else {
            return res.status(404).send('Categories not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneCategory(req, res) {
    try {
        const category = await Category.findByPk(req.params.id)
        if (category) {
            return res.status(200).json(category)
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOneCategory(req, res) {
    try {
        const category = await Category.create(req.body)
        return res.status(200).json({ message: 'User created', category: category })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCategory(req, res) {
    try {
        const [updated] = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Category updated' })
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}

async function deleteCategory(req, res) {
    try {
        const category = await Category.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (category) {
            return res.status(200).json('Category deleted')
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllCategories,
    getOneCategory,
    createOneCategory,
    updateCategory,
    deleteCategory
}
