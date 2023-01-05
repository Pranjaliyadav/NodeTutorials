const http = require('http');

const express = require('express')

const app = express()
//app happens to be a valid request handler so can be passed in createServer

app.use('/addProduct',(req,res,next)=>{

console.log('In the middleare')
res.send('<h1>Hello from Eproduct</h1>') 
// next()
//through next() we get to go to next middle ware i.e, in another middleware


}) 
//next is a function that is passed to this function to travel to ext middleware
//middle ware function 


app.use('/',(req,res,next)=>{

    console.log('In another middleare')
    res.send('<h1>Hello from Express</h1>') //send automatically sets html header to content type

    
    }) 



app.listen(3000);
