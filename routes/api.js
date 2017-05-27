var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/posts/:id')
	.get(function(req, res) {
		res.send({ message: 'get command: ' + req.params.id });
	})

	.post(function(req, res) {
		res.send({ message: 'post commant: ' + req.params.id });
	});

module.exports = router;
