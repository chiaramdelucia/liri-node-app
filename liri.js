//Global Variables

var song = require('./spotifySong.js');
var tweet = require('./twitterFunc.js');
var movie = require('./movieFunc.js');
var say = require('./say.js');



var command = process.argv[2];



//Functions
switch (command) {

	case "my-tweets":
		tweet.getTweets();
		break;

	case "spotify-this-song":
		song.getSong();
		break;

	case "movie-this":
		movie.getMovie();
		break;

	case "do-what-it-says":
		say.doIt();
		break;

}
