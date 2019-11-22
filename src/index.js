const express = require('express')
const Route = express.Router()
const getCompany = require('./routes/company')
const getEngineer = require('./routes/engineer')
const getAccounts =
require('./routes/accounts')
const login = require('./routes/login')
const logout = require('./routes/logout')
const skill = require('./routes/skill')
const { verifyToken } = require('./helpers/auth')
Route

  .use('/login', login)
  .use('/skill', verifyToken, skill)
  .use('/company', verifyToken, getCompany)
  .use('/engineer', verifyToken, getEngineer)
  .use('/account', getAccounts)
  .use('/logout', logout)

module.exports = Route
