
const spotify = require('spotify');
var title = process.argv.slice(3).join(' ');
	

if (title.length == 0) {
   	var title = "the sign";
};


function getSong () {


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
};



module.exports = {getSong};