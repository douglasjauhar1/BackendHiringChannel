require('dotenv/config')
const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../models/accounts')

module.exports = {
  response: (res, status, data) => {
    const result = {}
    result.status = status
    result.result = data
    return res.status(result.status).json(result)
  },
  validateLogin: (req, reqData, passData) => {
    if (passData.length != 0) {
      const reqPass = reqData.password
      const sqlPass = passData[0].password
      const dbjwt = passData[0].jwt
      const jwtheader = req.headers.jwt
      if (bcrypt.compareSync(reqPass, sqlPass)) {
        if (dbjwt === null) {
          return 'Your token empty, pls REGISTER!'
        } else {
          if (dbjwt === jwtheader) {
            const pyload = {
              id: passData[0].id,
              uuid: uuid()
            }
            const token = jwt.sign(pyload, process.env.KEYS, { expiresIn: '24h' })
            userModel.patchJwtById(token, pyload.id)
            return token
          } else {
            return 'Your token isnt autorized'
          }
        }
      } else {
        return 'Wrong Pass'
      }
    } else {
      return 'Wrong Username'
    }
  },

  verifyToken: async (req, res, next) => {
    const token = req.headers.jwt
    const decode = jwt.decode(token, { complete: true })
    const userId = decode.payload.id
    // return res.send(userId.toString())

    if (!token) {
      return res.status(200).send('login dulu')
    }

    try {
      const tokenDb = await userModel.getJwtDB(userId)
      const tokenCheck = tokenDb[0].jwt

      if (!tokenDb && !token) {
        return res.send('Login dulu')
      }

      if (tokenCheck === token) {
        jwt.verify(token, process.env.KEYS, (err, decode) => {
          if (tokenCheck === !token) {
            return res.status(400).send('Token doesnt exist')
          } else {
            next()
          }
        })
      } else {
        return res.status(400).send('Please Login to Continue your step')
      }
    } catch (error) {
      return res.status(400).send('login dulu')
    }
  }
}
