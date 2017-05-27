var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.route('/posts/:id')
	.get(function (req, res) {
		res.send({ message: 'get command: ' + req.params.id });
	})

	.post(function (req, res) {
		res.send({ message: 'post commant: ' + req.params.id });
	});

router.route('/songs')
	.get(function (req, res) {
		var songs = {
			author: [],
			cover: [],
			acoustic: [],
		}
		fSongs = JSON.parse(fs.readFileSync('data/songs.json', 'utf8'));
		songs = fSongs || songs; 
		res.send(songs);
	});
//tst
module.exports = router;
