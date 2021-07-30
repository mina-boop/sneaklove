const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const SALT = 10;

router.post("/signup", (req, res, next) => {
  const user = req.body;
  console.log("1user", user);
  if (!user.password || !user.email) {
    res.render("signup", {
      errorMessage: "Please provide an email and a password",
    });
    return;
  }

  User.findOne({ email: user.email }) // <== check if there's user with the provided email
    .then((foundUser) => {
      if (foundUser) {
        res.render("signin", {
          errorMessage: "Email taken. Try with to signin.",
        });
      } else {
        const hashedPassword = bcrypt.hashSync(user.password, SALT);
        user.password = hashedPassword;
        User.create(user)
          .then(() => {
            res.render("/", { isLoggedIn: true });
          })
          .catch((error) => next(error));
      }
    });
});

module.exports = router;
