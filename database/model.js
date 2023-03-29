const User = require('../api/models/user.model')
const Dog = require('../api/models/dog.model')
const Package = require('../api/models/package.model')
const Category = require('../api/models/category.model')
const Video = require('../api/models/video.model')


function addRelationsToModels(){
    try {
        User.hasMany(Dog)
        Dog.belongsTo(User)
        
        User.belongsToMany(Category, {through: 'users_categories'})
        Category.belongsToMany(User, {through: 'users_categories'})

        User.belongsToMany(Package, { through: 'users_packages' })
        Package.belongsToMany(User, { through: 'users_packages' })

        Category.hasOne(Package)
        Package.belongsTo(Category)

        Category.belongsToMany(Video, { through: 'categories_videos' })
        Video.belongsToMany(Category, { through: 'categories_videos' })

        console.log('Relations added to all models')


    } catch (error) {
        throw error
        
    }

}

module.exports = addRelationsToModels