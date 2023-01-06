const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{

   
    res.send('<h1>Hello from Express</h1>') //send automatically sets html header to content type

    
    }) 

module.exports = router