const express = require('express')
const Route = express.Router()
const Accounts = require('../controller/accounts')
Route
  .get('/', Accounts.getAccounts)
  .post('/', Accounts.postAccounts)
  .patch('/:id', Accounts.patchEngineer)
  .delete('/:id', Accounts.deleteAccounts)

module.exports = Route
