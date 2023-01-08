const path = require('path');
const adminData = require('./admin')
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log('shop.js',adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  res.render('shop',{prods:products,docTitle:'Shop'})
});

module.exports = router;
