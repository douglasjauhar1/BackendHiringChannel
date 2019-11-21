const database = require('../config/db')

module.exports = {
    getEngineer : () =>{
        return new Promise((resolve, reject)=>
        {
            database.query('SELECT * FROM engineer ', (err, result) =>{
                if(err) reject(new Error(err))
                resolve(result)          
              })
        })
    },
    postEngineer : (data) => {
        return new Promise((resolve, reject) => {
            database.query('INSERT INTO engineer set ?', data,(err, result)=> {
                if(err) reject (new Error(err))
                resolve(result)
            })
        })
    },
    patchEngineer : (data, id) =>{
        return new Promise((resolve, reject)=>{
            database.query('UPDATE  engineer set ?  WHERE  id_engineer = ?', [data, id], (err, result)=>{
                if(err) reject (new Error(err))
                resolve(result)
            })
        })
    },
    deleteEngineer : (id) =>{
        return new Promise((resolve, reject)=>{
            database.query('DELETE FROM engineer where id_engineer = ?', id,(err, result)=>{
                if(err) reject (new Error(err))
                resolve(result)
            })
        })
    },
    searchSkill : (skill_name, name) =>{
        return new Promise((resolve, reject)=>{
            database.query(`SELECT * FROM v_engineer WHERE  skill_name LIKE '%${skill_name}%' or name LIKE '%${name}%' order by skill_level DESC`,(err, result)=>{
                if(err) reject(new Error(err))
                resolve(result)
            })
        })
    },
    pageEngineer : (limit, offset) =>{
        return new Promise((resolve, reject)=>{
            database.query(`SELECT * FROM v_engineer LIMIT ${limit} OFFSET ${offset}`, (err, result)=>{
                if(err) reject (new Error(err))
                resolve(result)
            })
        })
    }
}