console.log(" Waiting for schedule tweets..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);


setInterval(tweetScheduler,1000*20);
tweetScheduler();
function tweetScheduler(){
var randomNumber = Math.floor(Math.random()*1000);
var tweet = { 
status: randomNumber+'#hello!!' }

T.post('statuses/update', tweet, tweeted)

 function tweeted(err, data, response) {
  if(err){
console.log("Something went wrong!");
}
else{
console.log("Just Send Another Message");
}
}
}