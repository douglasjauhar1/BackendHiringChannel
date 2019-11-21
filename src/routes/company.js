const express = require('express')
const Route = express.Router()
const getCompany = require('../controller/company')
Route

  .get('/', getCompany.companyPromise)
  .post('/', getCompany.companyPost)
  .patch('/:id', getCompany.companyPatch)
  .delete('/:id', getCompany.companyDelete)
  .get('/page', getCompany.companyPage)

module.exports = Route
