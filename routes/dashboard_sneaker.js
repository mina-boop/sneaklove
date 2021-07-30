const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");
module.exports = router;

router.get("/prod-add", (req, res, next) => {
  res.render("products_add");
});

router.post("/prod-add", (req, res, next) => {
  console.log(req.body);

  Sneaker.create(req.body).then(() => {
    res.redirect("/sneakers/:cat");
  });
});
