const express = require('express')
const Route = express.Router()
const Engineer = require('../controller/engineer')
Route

  .get('/', Engineer.getEngineer)
  .post('/', Engineer.postEngineer)
  .patch('/:id', Engineer.patchEngineer)
  .delete('/:id', Engineer.deleteEngineer)
  .get('/search', Engineer.searchEngineer)
  .get('/page', Engineer.pageEngineer)

module.exports = Route
