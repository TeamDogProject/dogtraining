require('dotenv').config()
const {checkConnection, syncModels }= require('./database/index')


const express = require('express')
const morgan = require('morgan')

async function checkAndSyncMysql (){
    await checkConnection() 
    await syncModels('alter')
}

function initilizedListeningAndExpress(){
    const app = express()
          .use(morgan('dev'))
          .use(express.json())
          .use('/api', require('./api/routes'))

          .listen(process.env.PORT, () =>{
            console.log(`Listening on port:${process.env.PORT}`)
          })
}

async function startAPI (){
    await checkAndSyncMysql()
    initilizedListeningAndExpress()
}

startAPI()