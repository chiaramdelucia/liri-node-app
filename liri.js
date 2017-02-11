//Global Variables
var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');


var command = process.argv[2];
var title = JSON.stringify(process.argv.slice(3), Symbol('+'), null ); //[null, 2
console.log(title);
console.log(title.length)

// var tmdbKeys = tmdbKeys {
// 	method: method,
//   	url: url,
//   	qs: api_key,
//   	body: body;
// };

var options = {
	method: 'GET',
  	url: 'https://api.themoviedb.org/3/account',
  	qs: { api_key: '7b012573280118f654194ce4df6bfda3' },
  	body: '{}' 
};




var client = new Twitter ({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});
var params = {screen_name: 'chiaradelucia'};

//Functions
switch (command) {

	case "my-tweets":
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
		  	if (!error) {
		    	tweets.forEach ((tweet) => console.log(tweet.text));   
		  	}
		});

	case "spotify-this-song":
		if (title.length == 2) {
	   		var title = "the sign";
	    }

		spotify.search({ type: 'track', query: title }, function(err, data) {

	    	if ( err ) {
	        	console.log('Error occurred: ' + err);
	        	return;
	   		}

		    console.log("Artist Name: " + data.tracks.items[4].artists[0].name);
		 	console.log("Song name: " + data.tracks.items[4].name);
		    console.log("Preview url: " + data.tracks.items[4].preview_url);
		    console.log("Album: " + data.tracks.items[4].album.name); 

		});


}


if (command === "movie-this"){
	request(options, function (error, response, body) {
  		if (error) throw new Error(error);

  		console.log(body);
	});

	// request("https://api.themoviedb.org/3/movie/550?api_key=" + title + "&y=&plot=short&r=json", 
	// 	function(error, response, body) {

	//   if (!error && response.statusCode === 200) {
	//   	console.log(JSON.parse(body));
	//   	// console.log("The title of the movie is: " + JSON.parse(body).title);
	//    //  console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
	//   }

	// });

}

	// if (command === "do-what-it-says"){
		
	// 	fs.readFile('random.txt', 'utf8', function (error, data){
			
	// 		var dataArr = data.split(',');
	// 		var 

	// 	})
	// }



