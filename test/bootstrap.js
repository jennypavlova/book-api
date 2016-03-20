var chai = require("chai");
var Server = require("../server");
var mongoose = require('mongoose');

global.expect = chai.expect;
global.test = {};


global.test.startServer = function (done) {
  var dbName = 'book-api-test';
  /* Connect to the DB */
  mongoose.connect('mongodb://localhost/' + dbName, function(){
    /* Drop the DB */
    mongoose.connection.db.dropDatabase();
    /* Disconnect to the DB */
    mongoose.connection.close(function(err){
      if (err) return done(err);

      /* Start API server */
      test.server = Server(dbName).listen(3000, function(err) {
        if (err) return done(err);
        console.log("Test API is running on port 3000");
        return done();
      });
    });
  });
}


global.test.stopServer = function (done) {
  test.server.close();
  return done();
}