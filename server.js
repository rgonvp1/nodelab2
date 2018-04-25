const express= require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorhandler = require('errorhandler')
let store = require('./store.js')
const router = require('./routes')

let app = express()
//use modules
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//assign the store to the request param for all requests
app.use((req, res, next) => {
    req.store = store
    next()
  })

//use router to resolve routes
app.use('/', router)
//start app
app.listen(3000)