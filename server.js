require('dotenv/config')
const server = require('express')()
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const routes = require('./src/index')
const morgan = require('morgan')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(morgan('dev'))

server.use('/', routes)
server.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`)
})
module.exports = server
