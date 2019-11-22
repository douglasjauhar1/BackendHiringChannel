const express = require('express')
const Route = express.Router()
const { getLogin } = require('../controller/login')
Route
  .post('/', getLogin)

module.exports = Route
