require('dotenv/config')
const sql = require('mysql')
const database = sql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
})
database.connect((err)=>{
    if (err) console.log(err)
    console.log('Database Connected!')
})

module.exports = database