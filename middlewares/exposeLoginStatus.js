module.exports = function exposeLoginStatus(req, res, next) {
  if (!req.session.currentUser) {
    // currentUser isnt defined yet.
    res.locals.currentUser = undefined; // you have access to these variables in your template
    res.locals.isLoggedIn = false;
    res.locals.isAdmin = false;
  } else {
    // expose currentUser to your templates
    res.locals.currentUser = req.session.currentUser;
    res.locals.isLoggedIn = true;
    res.locals.isAdmin = req.session.currentUser.role === "admin";
  }
  next();
};
