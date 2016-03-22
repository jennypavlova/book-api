var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
//Models
var User = require('../model/user');

module.exports = function(router) {

  passport.use(new LocalStrategy(User.authenticate()));

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/book',
    failureRedirect: '/login',
    failureFlash: false
  }));

  router.post('/register', function(req, res, next) {
      User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
          return next(err);
        }

        res.redirect('/login');
        return next();
      });
  });
}
