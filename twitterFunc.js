const Twitter = require('twitter');
const keys = require('./keys.js');

const client = new Twitter ({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});
const params = {screen_name: 'chiaradelucia'};


function getTweets() {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error) {
	    	tweets.forEach ((tweet) => console.log(" === " + tweet.text));   
	  	}
	});
};

module.exports = {getTweets};