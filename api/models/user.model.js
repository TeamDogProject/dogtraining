const { DataTypes } = require('sequelize')
const sequelize = new Sequelize('../../database')

const User = sequelize ('user', {
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
            is: {
                args: /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
                msg: "Error: Wrong email format."
            }
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
    
    createdAt: {
        type: DataTypes.STRING,
        defaultValue: function () {
            return new Date()
        }
    }
    
    { updatedAt: false },
}) 