const express = require("express");
const Sneaker = require("../models/Sneaker");
const User = require("../models/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/sneakers/:cat", (req, res) => {
  Sneaker.find()
    .then((sneaker) => {
      res.render("products.hbs", { sneakers: sneaker });
    })
    .catch();
});

router.get("/one-product/:id", (req, res) => {
  Sneaker.findById(req.params.id)
    .then((sneakerDoc) => {
      res.render("one_product", { sneaker: sneakerDoc });
    })
    .catch((error) => next(error));
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.send("love");
});

module.exports = router;
