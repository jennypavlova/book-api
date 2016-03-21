//User Model
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// placeholder
userSchema.methods.validPassword = function (password) {
  return true;
}

module.exports = mongoose.model('User', userSchema);