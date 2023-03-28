const { DataTypes } = require('sequelize')
const {sequelize} = require('../../database')

const Dog = sequelize.define('dog', {

    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    breed: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 

    age: {
        type: DataTypes.INTEGER,
    }, 

    sex: {
        type: DataTypes.ENUM,
        values: ['male', 'female']
    },

    chip: {
        type: DataTypes.STRING,
        unique: true,

    }, 

    problem: {
        type: DataTypes.TEXT,
    },

    valoration: {
        type: DataTypes.TEXT,
    },
},
    { updatedAt: false }
)
module.exports= Dog