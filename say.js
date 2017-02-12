"use strict"

var fs = require('fs');
var song = require('./spotifySong.js');


function doIt() {		

	fs.readFile('random.txt', 'utf8', function (error, data){
		console.log(data)
		
		var dataArr = data.split(',');
		var option = dataArr[0];
		var title = dataArr[1];


		switch (option) {
			case "spotify-this-song":
				song.getSong(title);
				break;
		}

	});

};


module.exports = {doIt};