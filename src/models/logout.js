const database = require('../config/db')

module.exports = {
  jwtDestroy: (id) => {
    return new Promise((resolve, reject) => {
      database.query('UPDATE account set jwt = NULL WHERE id = ?', id, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
}
