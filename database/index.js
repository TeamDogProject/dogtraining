const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST

})

async function checkConnection (){
    try {
        await sequelize.authenticate();
        console.log('Connection with database is Ok')

    } catch (error) {
        console.error('Unnable to connect to the database:', error)
    }
}

module.exports = checkConnection