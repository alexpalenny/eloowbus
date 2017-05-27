var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/posts/:id')
	.get(function (req, res) {
		res.send({ message: 'get command: ' + req.params.id });
	})

	.post(function (req, res) {
		res.send({ message: 'post commant: ' + req.params.id });
	});
router.route('/songs/:type')
	.get(function (req, res) {
		var songList = [];
		if (req.params.type == 'author') {
			songList = [
				{
					name: "Confest",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Evil",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Groove",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Ready to be free",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Coffee",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Elephant",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Crazy",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Be alive",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
			]
		}
		if (req.params.type == 'cover') {
			songList = [
				{
					name: "7 nation army",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "High way to hell",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Rock&Roll queen",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Real Sugar",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				}
			]
		}
		if (req.params.type == 'acoustic') {
			songList = [
				{
					name: "Jungle",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Lonely Day",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Personal Jesus",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Zombie",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Pumped uo kicks",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Enjoy the silence",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Rolling in the Dip",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Down on my knees",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Sex is on Fire",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Zaz",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Toxic",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				},
				{
					name: "Brighter that the sun",
					alex: "",
					dima: "",
					grisha: "",
					valya: "",
				}
			]
		}
		res.send(songList);
	});

module.exports = router;
