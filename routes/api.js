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
		console.log(res);
		var songs = res.data;
		var fSongs = JSON.stringify(songs);
		//res.send(fSongs);
		//fs.writeFileSync('data/songs.json', fSongs);
	});
module.exports = router;
