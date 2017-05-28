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
		//https://www.freeformatter.com/javascript-escape.html#ad-output
		var songs = []
		var fSongs = JSON.parse(fs.readFileSync('data/songs.json', 'utf8'));
		songs = fSongs || songs;
		res.send(songs);
	});
router.route('/savesongs/:pass')
	.post(function (req, res) {
		if (req.params.pass == "nash") {
			var songs = req.body;
			var fSongs = JSON.stringify(songs);
			fs.writeFileSync('data/songs.json', fSongs);
		}
		else res.send("Password incorrect");
	});
module.exports = router;
