const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const app = express();


app.set('view engine','ejs') //set view engine to ejs
app.set('views','views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404',{pageTitle:'Page not Found'}) //data is passed in same way of key value pairs to different engines
});

app.listen(3000);
