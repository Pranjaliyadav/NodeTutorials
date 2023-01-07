const express = require("express");
const router = express.Router();
const path = require('path')
const rootDir = '../util/path'

router.get("/add-product", (req, res, next) => {

  res.sendFile(path.join(rootDir,'views','add-product.html'))
  
});
//next is a function that is passed to this function to travel to ext middleware
//middle ware function

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
