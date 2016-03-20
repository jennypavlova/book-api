//User Model
var restful = require('node-restful');
var mongoose = require('mongoose');

var userSchema = {
  name:{
    type: String,
    required: true
  }
  password: {
    type: String,
    required: true
}

module.exports = restful.model('User', userSchema);