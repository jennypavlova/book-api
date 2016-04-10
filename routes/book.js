var multer = require('multer');
var mime = require('mime');

module.exports = function(router) {
  var getFilename = function(req, file) {
    return req.body.name + '.' + mime.extension(file.mimetype)
  }

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'media/covers/');
    },
    filename: function (req, file, cb) {
      cb(null, getFilename(req, file));
    }
  });


  var upload = multer({ storage: storage });

  //Models
  var Book = require('../model/book');
    
  //Routes
  router.post('/book', [
    upload.single('cover'),
    function(req, res, next){
      req.body.cover = getFilename(req, req.file);
      Book.create(req.body, function(err, books){
        if(err){
          console.log(JSON.stringify(err))
          return next(err);
        }
        res.json(books);
        console.log(books);
        return next();
      });
    }
  ]);

  // Book.before('post', upload.single('cover'));
  // Book.before('post', function(req, res, next) {
  //   req.body.cover = getFilename(req, req.file);
  //   return next();
  // });

  // Book.before('get', function(req, res, next) {
  //   if (!req.user) {
  //     var error = new Error();
  //     error.status = 401;
  //     return next(error);
  //   }
  //   return next();
  // });

  // Book.after('get', function(req, res, next) {
  //   console.log(res.locals.bundle.length);
  //   console.log(res.locals.bundle);
  //   var booksPerPage = res.locals.bundle.length
  //   next(); // Don't forget to call next!
// });
  // Book.register(router, '/book');
}