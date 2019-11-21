const engineerModel = require('../models/engineer')
module.exports = {
  getEngineer: (req, res) => {
    console.log(req.headers)
    const data = req.params.id
    engineerModel.getEngineer()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  postEngineer: (req, res) => {
    const { name, description, location, dob, showcase, created_at, updated_at } = req.body
    const data = {
      name,
      description,
      location,
      dob,
      showcase,
      created_at: new Date(),
      updated_at: new Date()
    }
    engineerModel.postEngineer(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  patchEngineer: (req, res) => {
    const id = req.params.id
    const { name, description, location, dob, showcase, created_at, updated_at } = req.body
    const data = {
      name,
      description,
      location,
      dob,
      showcase,
      created_at,
      updated_at: new Date()
    }
    engineerModel.patchEngineer(data, id)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  deleteEngineer: (req, res) => {
    const id = req.params.id
    engineerModel.deleteEngineer(id)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  searchSkill: (req, res) => {
    const skill = req.query.skill_name
    const name = req.query.name
    engineerModel.searchSkill(skill, name)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  pageEngineer: (req, res) => {
    const limit = req.query.limit
    const offset = req.query.offset
    engineerModel.pageEngineer(limit, offset)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
