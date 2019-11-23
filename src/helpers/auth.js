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
  validateLogin: (req, res, reqData, passData) => {
    if (passData.length != 0) {
      const reqPass = reqData.password
      const sqlPass = passData[0].password
      const dbjwt = passData[0].jwt
      const jwtheader = req.headers.jwt
      if (bcrypt.compareSync(reqPass, sqlPass)) {
        if (dbjwt === null) {
          res.json({token: 'Your Token doesnt exist'})
        } else {
          if (dbjwt === jwtheader) {
            const pyload = {
              id: passData[0].id,
              uuid: uuid()
            }
            const token = jwt.sign(pyload, process.env.KEYS, { expiresIn: '24h' })
            userModel.patchJwtById(token, pyload.id)
             res.json({token: token})
          } else {
            res.json({ token : 'Your Token isnt autorized'})
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
      res.json({ token : 'Please Login to continue your step'})
    }

    try {
      const tokenDb = await userModel.getJwtDB(userId)
      const tokenCheck = tokenDb[0].jwt

      if (!tokenDb && !token) {
        res.json({ token : 'Please Login to continue your step'})    
      }

      if (tokenCheck === token) {
        jwt.verify(token, process.env.KEYS, (err, decode) => {
          if (tokenCheck === !token) {
            res.json({ token : 'Token Doesnt exist'})
          } else {
            next()
          }
        })
      } else {
        res.json({ token : 'Please Login to continue your step'})
      }
    } catch (error) {
      res.json({ token : 'Please Login to continue your step'})
    }
  }
}
