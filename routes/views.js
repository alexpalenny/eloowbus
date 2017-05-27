var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/index')
	.get(function(req, res) {
    		res.render('/views/index.html');
	});
module.exports = router;
