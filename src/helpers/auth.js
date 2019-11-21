require('dotenv/config')
const uuid = require('uuid/v4')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {
    response : (res, status, data)=>{
        const result= {}
        result.status = status
        result.result = data
        return res.status(result.status).json(result)
    },
    // getJwt : (req, res, next) =>{
    //     const pyload = {
    //         name: "terserahsaya",
    //         uuid: "sukasuka"
    //     }    
    //     const result = jwt.sign({pyload}, process.env.KEYS)
    //     return (result)
    // },
    validateLogin :(reqData, passData)=> {
        if(passData.length != 0 ){
            const reqPass = reqData.password
            const sqlPass = passData[0].password
            if(bcrypt.compareSync(reqPass, sqlPass)){
                const pyload = {
                    password : reqPass,
                    uuid : uuid()
                }
                const load = uuid
                const token = jwt.sign({load}, process.env.KEYS)
                return(token)
            }else{
                return "salah pass"
            }
        }else{
                return "salah username"
            }

    },
verifyToken : (req, res, next) =>{
const token = req.headers.checkToken
console.log(token)
if(!token){
    return res.status(401).send('Token doesnt exist')
}
try{
    jwt.verify(token, process.env.KEYS, (err, decode)=>{
if(err){
    return res.status(401).send(err.name)
}else{
    next()
}
    })
        }catch(error){
            return res.status(401).send('lost coneknsi' + token)
        }
        
}

}
