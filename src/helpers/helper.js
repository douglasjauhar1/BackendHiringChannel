require('dotenv/config')
const jwt = require('jsonwebtoken')
module.exports = {
  response: (res, status, data) => {
    const result = {}
    result.status = status
    result.result = data
    return res.status(result.status).json(result)
  },
  getJwt: () => {
    const pyload = {
      name: 'terserahsaya',
      uuid: 'sukasuka'
    }
    const result = jwt.sign({ pyload }, process.env.KEYS)
    return (result)
  }
}
