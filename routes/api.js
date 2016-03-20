//Dependencies
var express = require('express');
var router = express.Router();

require("./book")(router);
require("./genre")(router);

//Return router
module.exports = router;