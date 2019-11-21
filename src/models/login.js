const database = require('../config/db')

module.exports = {
  getLogin: (username) => {
    return new Promise((resolve, reject) => {
      database.query('SELECT password FROM account where username = ?', username, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
