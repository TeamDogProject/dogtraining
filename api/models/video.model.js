const { DataTypes } = require('sequelize')
const sequelize = new Sequelize('../../database')

const Video = sequelize('video',{
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
    update:false
})