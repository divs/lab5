var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var des = req.query.description;
	var url = "http://lorempixel.com/500/500/people/";
	var newFriend = {
						"name": name,
						"description": des,
						"imageURL": url
					}
	data["friends"].push(newFriend);
	res.render('add', data);
 }