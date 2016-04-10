//Genre Model
var mongoose = require('mongoose');

var genreSchema = {
  name:{
    type: String,
    required: true
  }
};

module.exports = mongoose.model('Genre', genreSchema);
