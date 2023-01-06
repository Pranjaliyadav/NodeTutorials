const express = require("express");
const router = express.Router();

router.get("/addProduct", (req, res, next) => {

  res.send(
    '<form action="/admin/addProduct" method="POST"><input  type="text" name="title" ><button type="submit">Add Product</form>'
  );
  // next()
  //through next() we get to go to next middle ware i.e, in another middleware
});
//next is a function that is passed to this function to travel to ext middleware
//middle ware function

router.post("/addProduct", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
