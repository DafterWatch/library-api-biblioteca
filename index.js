const express = require('express')

const routerApi = require('./routes')
const { logError, errorHandler, boomError } = require('./middlewares/error.handler')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("este es mi premer API - Hola mundo")
})

routerApi(app)

app.use(logError)
app.use(boomError)
app.use(errorHandler)

app.listen(port, () => {
    console.log("El servidor se esta ejecutando.")
})