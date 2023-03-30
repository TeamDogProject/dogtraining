const Package = require('../models/package.model')
const Category = require('../models/category.model')
const User = require('../models/user.model')

async function getAllPackages(req, res) {
    try {
        const packages = await Package.findAll({
            where: req.query
        })
        if (packages) {
            return res.status(200).json(packages)
        } else {
            return res.status(404).send('Packages not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOnePackage(req, res) {
    try {
        const package = await Package.findByPk(req.params.id)
        if (package) {
            return res.status(200).json(package)
        } else {
            return res.status(404).send('Package not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOnePackage(req, res) {
    try {
        const package = await Package.create(req.body)
        return res.status(200).json({ message: 'Package created', package: package })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePackage(req, res) {
    try {
        const [updated] = await Package.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Package updated' })
        } else {
            return res.status(404).send('Package not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}

async function deletePackage(req, res) {
    try {
        const package = await Package.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (package) {
            return res.status(200).json('Package deleted')
        } else {
            return res.status(404).send('Package not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// Add package to cateory by user

async function addCategoryToPackage(req, res){
    try {
        const package = await Package.findByPk(req.params.packageId)
        const category = await Category.findByPk(req.params.categoryId)

        await package.setCategory(category)

        if(category)
        {
            return res.status(200).json(category)
        }else{
            return res.status(404).send('Category not added')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function addPackageToUser(req, res){
    try {

        const package = await Package.findByPk(req.params.packageId)
        const user = await User.findByPk(req.params.userId)

        const category = await package.getCategory()
        await user.addCategory(category)
        await user.addPackage(package)


        return res.status(200).json(package)
        
    } catch (error) {
        
    }
}

module.exports = { getAllPackages, getOnePackage, createOnePackage, updatePackage, deletePackage, addCategoryToPackage, addPackageToUser }