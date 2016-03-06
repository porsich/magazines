var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET magazines listing. */
router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../files/test.pdf'));
});

module.exports = router;
