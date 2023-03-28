const { DataTypes } = require('sequelize')
const sequelize = new Sequelize('../../database')

const Dog = sequelize('dog', {

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
        type: DataTypes.NUMBER,
        allowNull: false
    }, 

    sex: {
        type: DataTypes.ENUM({
            values: ['male', 'female']
        }),
        allowNull: false
    },

    chip: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }, 

    problem: {
        type: DataTypes.TEXT
    },

    valoration: {
        type: DataTypes.TEXT,
    },
    


    update: false
}) 