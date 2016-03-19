var mongoose = require('mongoose');

var genreSchema = {
  name:{
    type: String,
    required: true
  }
};

module.exports = new mongoose.Schema(genreSchema);
module.exports.genreSchema = genreSchema;