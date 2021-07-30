const User = require("../models/User");

module.exports = (req, res, next) => {
  User.findOne() //  find the first user in the database and set him as currentUser (used for dev purposes)
    .then((oneUser) => {
      req.session.currentUser = {
        _id: oneUser._id,
        role: oneUser.role,
        avatar: oneUser.avatar,
        username: oneUser.username,
      };
      next();
    })
    .catch(() => {
      next();
    });
};
