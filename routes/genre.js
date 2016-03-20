module.exports = function(router) {

  //Models
  var Genre = require('../model/genre');
    
  //Routes
  Genre.methods(['get']);
  Genre.register(router, '/genre');
}