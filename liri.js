
var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');

var client = new Twitter ({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});

var command = process.argv[2];
var title = process.argv[3];

var params = {screen_name: 'chiaradelucia'};

if (command === "my-tweets"){ 
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error) {
	    	tweets.forEach(function(tweet){
	            console.log(tweet.text);
	        });
	  	}
	});
};

if (command === "spotify-this-song"){

	spotify.search({ type: 'track', query: title }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    } else if (!title) {
	    		var title = "The Sign";
	    		data.tracks.items[5].artists.forEach(function(artist){
        			console.log('Artist Name:', artist.name);
       			});
	    }

	    else{
	    	data.tracks.items[0].artists.forEach(function(artist){
        		console.log('Artist Name:', artist.name);
       		});
	    };

	 	console.log("Song name: " + data.tracks.items[0].name);
	    console.log("Preview url: " + data.tracks.items[0].preview_url);
	    console.log("Album: " + data.tracks.items[0].album.name); 

	});
}



