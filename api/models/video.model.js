const { DataTypes } = require('sequelize')
const {sequelize} = require('../../database')

const Video = sequelize.define('video',{
    url: {
        type: DataTypes.STRING,
        allowNull:false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: false
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


module.exports= Video