const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    logging:false

})

async function checkConnection (){
    try {
        await sequelize.authenticate();
        console.log('Connection with database is Ok')

    } catch (error) {
        throw error 
    }
}  
async function syncModels(value){
    const state={
        alter: {alter: true},
        force: {force: true}
    } 
    try {
        await sequelize.sync (state[value] )
        
    } catch (error) {
        
    }
}

module.exports = checkConnection