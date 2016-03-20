//Book Model
var restful = require('node-restful');
var mongoose = require('mongoose');

var bookSchema = {
  name:{
    type: String,
    required: true
  },
  cover:{
    type: String,
    required: true
  },
  genre:{
    type: String,
    ref: "Genre",
    required: true,
  },
  pageCount:{
    type: Number,
    required: true,
  },
  date:{
    type: Date,
    default: Date.now
  }
};

module.exports = restful.model('Book', bookSchema);