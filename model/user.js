//User Model
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
  username:{
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  }
});

// passportjs plugin
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);