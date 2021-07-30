const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");
const fileUploader = require('../config/cloudinary');


router.get("/prod-add", (req, res, next) => {
  res.render("products_add");
});

router.post("/prod-add", fileUploader.single('image'), (req, res, next) => {
  console.log(req.body);
  const {body} = req.body;

  Sneaker.create({body, imageUrl: req.file.path}).then(() => {
    res.redirect("/sneakers/:cat");
  });
});

 
//   Movie.create({ title, description, imageUrl: req.file.path })
//     .then(newlyCreatedMovieFromDB => {
//       console.log(newlyCreatedMovieFromDB);
//     })
//     .catch(error => console.log(`Error while creating a new movie: ${error}`));
// });


module.exports = router;
