var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('list', {title: "VietNam", popular: "100"});
});

module.exports = router;
