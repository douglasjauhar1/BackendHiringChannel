const skillModel = require('../models/skill')
module.exports = {
    getSkill : (req,res)=>{
        skillModel.getSkill()
        .then(result =>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    getdetail : (req, res) =>{
        skillModel.getdetail()
        .then(result =>{
            res.json(result)
        })
        .catch(err =>{
            console.log(err)
        })
    },
    postSkill : (req, res) =>{
        const {skill_name} = req.body
        const data = {
            skill_name
        }
    skillModel.postSkill(data)
    .then(result =>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
    },
    postDetail : (req, res) =>{
        const { id_skill, id_engineer, skill_level } = req.body
        const data = {
            id_skill,
            id_engineer,
            skill_level
        }
    skillModel.postdetail(data)
    .then(result =>{
        res.json(result)
    })
    .catch(err =>{
        console.log(err)
    })
    },
    patchSkill : (req, res) =>{
        const id = req.params.id
        const{skill_name} = req.body
        const data = {
            skill_name
        }
        skillModel.patchSkill(data, id)
        .then(result =>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })   
    
    }

}
