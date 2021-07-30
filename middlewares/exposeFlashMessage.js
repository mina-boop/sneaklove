// https://www.npmjs.com/package/connect-flash
module.exports = function exposeFlashMessage(req, res, next) {
  res.locals.success_msg = req.flash("success");
  res.locals.warning_msg = req.flash("warning");
  res.locals.error_msg = req.flash("error");
  next(); // pass control to the next middleware
};
