var multer = require('multer');
var mime = require('mime');

module.exports = function(router) {
  var getFilename = function(req, file) {
    return req.body.name + '.' + mime.extension(file.mimetype)
  }

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/home/lost/Desktop/backend/media/covers/');
    },
    filename: function (req, file, cb) {
      cb(null, getFilename(req, file));
    }
  });


  var upload = multer({ storage: storage });

  //Models
  var Book = require('../model/book');
    
  //Routes
  Book.methods(['get', 'post','put', 'delete']);
  Book.before('post', upload.single('cover'));
  Book.before('post', function(req, res, next) {
    req.body.cover = getFilename(req, req.file);
    return next();
  });

  Book.register(router, '/book');
}