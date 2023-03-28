const { DataTypes } = require('sequelize')
const sequelize = new Sequelize('../../database')

const Category = sequelize('category',{

    category_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    update:false
})
