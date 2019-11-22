const express = require('express')
const Route = express.Router()
const { jwtDestroy } = require('../controller/logout')
Route
  .patch('/', jwtDestroy)
// .post('/', Accounts.postAccounts)
// .patch('/:id', Accounts.patchEngineer)
// .delete('/:id', Accounts.deleteAccounts)

module.exports = Route
