//Genre Model
var restful = require('node-restful');
var mongoose = require('mongoose');

var genreSchema = {
  name:{
    type: String,
    required: true
  }
};

module.exports = restful.model('Genre', genreSchema);