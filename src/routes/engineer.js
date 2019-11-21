const express = require('express')
const Route = express.Router()
const Engineer = require('../controller/engineer')
const { verifyToken } = require('../helpers/auth')
Route

  .get('/', verifyToken, Engineer.getEngineer)
  .post('/', Engineer.postEngineer)
  .patch('/:id', Engineer.patchEngineer)
  .delete('/:id', Engineer.deleteEngineer)
  .get('/search', Engineer.searchSkill)
  .get('/page', Engineer.pageEngineer)

module.exports = Route
