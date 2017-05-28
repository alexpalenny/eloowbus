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
		//https://www.freeformatter.com/javascript-escape.html#ad-output
		var fSongs = JSON.parse(fs.readFileSync('data/songs.json', 'utf8'));
		songs = fSongs || songs; 
		res.send(songs);
	});
router.route('/savesongs')
	.post(function (req, res) {
		//console.log(req.body);
		var songs = req.body;
		var fSongs = JSON.stringify(songs);
		fs.writeFileSync('data/songs.json', fSongs);
		//res.send(fSongs);
	});
module.exports = router;
