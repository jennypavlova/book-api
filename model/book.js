//Book Model
var mongoose = require('mongoose');

var bookSchema = {
  name:{
    type: String,
    required: true
  },
  cover:{
    type: String,
    required: true,
    match: /^http:\/\//i
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
    required: true,
  }
};

module.exports = new mongoose.Schema(bookSchema);
module.exports.bookSchema = bookSchema;