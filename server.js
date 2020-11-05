const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const config = require('./config')
const routes = require('./routes')
const dev = true
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))

    server.get('/', (req, res) => {
        app.render(req, res, '/', req.query)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.use('/api/auth', routes.auth)
    server.use('/api/main', routes.main)

    server.listen(config.PORT, () =>
        console.log(`Server started http://localhost:${config.PORT}`)
    )
})

module.exports = app
