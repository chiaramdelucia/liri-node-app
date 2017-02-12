const request = require('request');
const keys = require('./keys.js');


var movieName = process.argv.slice(3).join('+');

if (movieName.length == 0) {
   	var movieName = "mr. nobody";
};

const npmKey = keys.tmdbKeys.api_key;
const options = "https://api.themoviedb.org/3/search/movie?api_key="+ npmKey + "&language=en-US&query=" 
	+ movieName + "&page=1&include_adult=false";



function getMovie () {
	request(options, function (error, response, body) {
  		if (!error && response.statusCode === 200){

  		// console.log(JSON.parse(body));
  		console.log("Movie Title: " + JSON.parse(body).results[0].title);
  		console.log("Release Date: " + JSON.parse(body).results[0].release_date);
  		console.log("Plot: " + JSON.parse(body).results[0].overview);
  		console.log("TMDB Rating: " + JSON.parse(body).results[0].vote_average);
  		}
	});
};


module.exports = {getMovie};