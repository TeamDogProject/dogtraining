require('dotenv').config()
const {checkConnection, syncModels }= require('./database/index')
const addRelationsToModels = require('./database/model')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

async function checkAndSyncMysql (){
    await checkConnection() 
    await addRelationsToModels()
    await syncModels()
}

function initilizedListeningAndExpress(){
    const app = express()
          .use(cors())
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