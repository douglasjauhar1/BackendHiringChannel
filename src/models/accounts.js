const database = require('../config/db')

module.exports = {
  getAccounts: () => {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM account', (err, result) => {
        if (err) reject(new Project(err))
        resolve(result)
      })
    })
  },
  getJwtDB: (id) => {
    return new Promise((resolve, reject) => {
      database.query('SELECT jwt FROM account WHERE id = ? LIMIT 1', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  postAccounts: (data) => {
    return new Promise((resolve, reject) => {
      database.query('INSERT INTO account set ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  patchAccounts: (data, id) => {
    return new Promise((resolve, reject) => {
      database.query('UPDATE account set ? WHERE id = ?', [data, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  patchJwtById: (jwt, id) => {
    return new Promise((resolve, reject) => {
      database.query('UPDATE account set jwt = ? WHERE id = ?', [jwt, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  deleteAccounts: (id) => {
    return new Promise((resolve, reject) => {
      database.query('DELETE FROM account where id = ?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
