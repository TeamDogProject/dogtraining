const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Package = sequelize.define('package', {
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
        type: DataTypes.ENUM,
        values: ['online', 'face-to-face']
    },
},
    { updatedAt: false }
)
module.exports = Package