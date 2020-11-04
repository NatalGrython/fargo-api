const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const routes = require('./routes')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/auth', routes.auth)
app.use('/api/main', routes.main)

app.listen(config.PORT, () =>
    console.log(`Server started http://localhost:${config.PORT}`)
)

module.exports = app
