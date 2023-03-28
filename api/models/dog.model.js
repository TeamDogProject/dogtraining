const { DataTypes } = require('sequelize')
const sequelize = new Sequelize('../../database')

const Dog = sequelize('user', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    breed: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 

    
    update: false
}) 