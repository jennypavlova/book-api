//Dependencies
var express = require('express');
var router = express.Router();
var User = require("../model/user");

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
router.use(expressSession({secret: 'mySecretKey'}));
router.use(passport.initialize());
router.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

require("./book")(router);
require("./genre")(router);
require("./user")(router);

//Return router
module.exports = router;
