module.exports = function(router) {

  //Models
  var Genre = require('../model/genre');
    
  //Routes
  router.get('/genre', function(req, res, next) {
    Genre.find({}, function(err, genres) {
      if (err) {
        return next(err);
      }
      res.json(genres);
      return next();
    });
  });
}