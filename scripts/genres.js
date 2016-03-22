var mongoose = require("mongoose");
var async= require("async");
var Genre = require("../model/genre");
//MongoDB
mongoose.connect('mongodb://localhost/book-api');

var genres = [ "Thriller", "Biography","Horor", "Comedy", "Kids"]


async.eachSeries(genres, function (genre, next) {
  Genre.create({name: genre}, next);
}, function(err) {
  if (err) console.error(err);
  console.log("Created", genres.join(", "));
});


