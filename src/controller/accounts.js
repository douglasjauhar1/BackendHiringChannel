require('dotenv/config')
const {response} = require('../helpers/helper')
const accountsModel = require('../models/accounts')
const bcrypt = require('bcryptjs')
module.exports = {
    getAccounts:(req,res)=>{
        accountsModel.getAccounts()
        .then(result =>{
          response (res, 200, result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    postAccounts:(req,res)=>{
        const salt = bcrypt.genSaltSync(10)
        bcrypt.hash(req.body.password, salt, (err, hash) => {
        const { username, email, password, role_id } = req.body
        const data = {
            username,
            email,
            password: hash,
            role_id
        }
        accountsModel.postAccounts(data)
        .then(result =>{
            res.json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    },
    patchEngineer : (req, res)=>{
        const id = req.params.id
        const { username, email, password, role_id } = req.body
        const data = {
            username,
            email,
            password,
            role_id
        }
        accountsModel.patchAccounts(data, id)
        .then(result =>{
            res.json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    },
    deleteAccounts : (req, res)=>{
        const id = req.params.id
        accountsModel.deleteAccounts(id)
        .then(result =>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}