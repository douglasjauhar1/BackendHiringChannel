const modelsLogout = require('../models/logout')
const jwt = require('jsonwebtoken')

module.exports = {
  jwtDestroy: async (req, res) => {
    try {
      const jwtHeader = req.headers.jwt
      const id = jwt.decode(jwtHeader, { complete: true }).payload.id
      const result = await modelsLogout.jwtDestroy(id)
      console.log(result)
      res.status(200).json({
        status: 200,
        result: result
      })
    } catch (err) {
      console.log(err)
    }
  }
}
