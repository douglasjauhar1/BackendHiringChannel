const database = require('../config/db')

module.exports = {
  companyPromise: () => {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM company', (err, result) => {
        if (err) reject(new Project(err))
        resolve(result)
      })
    })
  },
  companyPost: (data) => {
    return new Promise((resolve, reject) => {
      database.query('INSERT INTO company set ?', data, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  companyPatch: (data, id) => {
    return new Promise((resolve, reject) => {
      database.query('UPDATE company SET ? WHERE company.id_company = ?', [data, id], (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  companyDelete: (id) => {
    return new Promise((resolve, reject) => {
      database.query('DELETE FROM company where id_company = ?', id, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  },
  companyPage: (limit, offset) => {
    return new Promise((resolve, reject) => {
      database.query(`SELECT * FROM company LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }

}
