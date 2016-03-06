var express = require('express');
var router = express.Router();

/* GET magazines listing. */
router.get('/', function(req, res, next) {
  res.send('magazines route!');
});

module.exports = router;
