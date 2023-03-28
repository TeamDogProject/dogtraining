const { DataTypes } = require('sequelize')
const {sequelize} = require('../../database')

const User = sequelize.define('user', { 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    identity_card: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER
    },
    confirmation_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    { updatedAt: false }
)
module.exports= User