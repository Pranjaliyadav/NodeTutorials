const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express()
//app happens to be a valid request handler so can be passed in createServer

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})




app.listen(3000);
