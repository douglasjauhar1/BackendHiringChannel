require('dotenv/config')
const companyModel = require('../models/company')
module.exports = {
  companyPromise: (req, res) => {
    companyModel.companyPromise()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  companyPost: (req, res) => {
    const { name,  location, description, role_id } = req.body
    const data = {
      name,
      logo : req.file.filename,
      location,
      description,
      role_id
    }
    companyModel.companyPost(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  companyPatch: (req, res) => {
    const id = req.params.id
    const { name, logo, location, description, role_id } = req.body
    const data = {
      name,
      logo,
      location,
      description,
      role_id
    }
    companyModel.companyPatch(data, id)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  companyDelete: (req, res) => {
    const id = req.params.id
    companyModel.companyDelete(id)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  companyPage: (req, res) => {
    const limit = req.query.limit
    const offset = req.query.offset
    companyModel.companyPage(limit, offset)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

}
