const express = require('express')
const Route = express.Router()
const {getLogin} = require('../controller/login')
Route
.post('/', getLogin)
// .post('/', Accounts.postAccounts)
// .patch('/:id', Accounts.patchEngineer)
// .delete('/:id', Accounts.deleteAccounts)


module.exports = Route