const express = require('express')
const swaggerUI = require('swagger-ui-express')

const students = require('./students')
const categories = require('./categories')
const author = require('./author')
const editorial = require('./editorial')
const book = require('./book')
const loan = require('./loan')
const reserve = require('./reserve')

function routerApi(app) {
    const router = express.Router()
    app.use('/univalle/v1', router)

    const swaggerDoc = require('../swagger.json')
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

    router.use('/students', students)
    router.use('/categories', categories)
    router.use('/author', author)
    router.use('/editorial', editorial)
    router.use('/book', book)
    router.use('/loan', loan)
    router.use('/reserve', reserve)
}

module.exports = routerApi