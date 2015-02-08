var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json({ notes : "none" });
});

module.exports = router;