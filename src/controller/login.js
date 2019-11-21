require('uuid/v4')
const modelsLogin = require('../models/login')
const validate = require('../helpers/auth')
module.exports = {
    getLogin : async (req, res) =>{
        const data = {
            username: req.body.username,
            password: req.body.password
        }
        try{
            const passData = await modelsLogin.getLogin(data.username)
            const result = validate.validateLogin(data, passData)

            res.send(result)
        }
        catch(err){
            console.log(err)
        }
        
    }
}