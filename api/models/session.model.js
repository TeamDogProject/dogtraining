const { DataTypes } = require('sequelize')
const {sequelize} = require('../../database')

const Session = sequelize.define('session', { 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
    },
    state: {
        type: DataTypes.ENUM,
        values: ['free', 'busy']
    },
},
    { updatedAt: false }
)
module.exports= Session