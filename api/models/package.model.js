const { DataTypes } = require('sequelize')
const sequelize = new Sequelize('../../database')

const Package = sequelize('package', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    place: {
        type: DataTypes.ENUM({
            values: ['online', 'face-to-face']
        }),
        allowNull: false
    },


})