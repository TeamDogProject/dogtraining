const { DataTypes } = require('sequelize')
const {sequelize} = require('../../database')

const Category = sequelize.define('category',{

    category_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    createdAt: {
        type: DataTypes.STRING,
        defaultValue: function () {
            return new Date()
        }
    },
},
    { updatedAt: false }
)

module.exports= Category