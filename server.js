require('dotenv/config')
const server = require('express')()
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const routes = require('./src/index')
const morgan = require('morgan')

server.use(bodyParser.urlencoded({ extended : false}))
server.use(bodyParser.json())
server.use(morgan('dev'))

server.use('/', routes )
server.listen(PORT, ()=>{
    console.log(`Server berjalan pada port ${PORT}`)
})
module.exports = server
// // get all company
// server.get('/company', (req, res)=>{
//     pool.query('SELECT * FROM company', (err,rows,fields)=>{
//         if(!err)
//        res.send(rows)
//         else
//         console.log(err)
//     })

// })
// //get an company
// server.get('/company/:id', (req, res)=>{
//     pool.query('SELECT * FROM company WHERE id_company =  ?' ,[req.params.id],(err, rows, fields)=>{ 
//         if(!err)
//         res.send(rows)
//         else
//         console.log(err);    
//     })
// }) 

// //add company
// server.post('/company', (req, res)=>{
//     const data ={
//         name : req.body.name,
//         logo : req.body.logo,
//         location : req.body.location,
//         description : req.body.description,
//         status : req.body.status
//     }
   
//     pool.query('INSERT INTO company set ?', data,(err,result)=>{
//      if(err)console.log(err)
//      res.send(result)   
//     })
// })

// edit company
// server.patch('/company/:id', (req, res)=>{
//     pool.query('UPDATE company SET ? WHERE id_company = ?',[req.body, req.params.id],(err,result)=>{
//         if(!err)
//         res.send(result)
//         else
//         console.log(err);
//     })
// })
//delete an company
// server.delete('/company/:id', (req, res)=>{
//     pool.query('DELETE FROM company WHERE id_company = ?', [req.params.id],(err,rows,fields)=> {
//         if(!err)
//         res.send('Delete Berhasil')
//         else
//         console.log(err);

//     }) 

// })

 
