//Dependencies
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require('body-parser');


module.exports = function(dbName) {
  //MongoDB
  mongoose.connect('mongodb://localhost/' +  (dbName || 'book-api'));

  //Express
  var app = express();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //Routes
  app.use('/api', require('./routes/api'));
  return app;
}
