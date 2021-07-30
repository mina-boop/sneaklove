const express = require("express");
const Sneaker = require("../models/Sneaker");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/sneakers/:cat", (req, res) => {
  Sneaker.find()
    .then((sneaker) => {
      // console.log(sneaker);
      res.render("products.hbs", { sneakers: sneaker });
    })
    .catch();
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});

module.exports = router;
