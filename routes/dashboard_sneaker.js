const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");
//const fileUploader = require("../config/cloudinarys");

router.get("/prod-add", (req, res, next) => {
  res.render("products_add");
});

router.post("/prod-add", (req, res, next) => {
  console.log(req.body);
  const { body } = req.body;
  Sneaker.create({ body, imageUrl: req.file.path }).then(() => {
    res.redirect("/sneakers/:cat");
  });
});

module.exports = router;
