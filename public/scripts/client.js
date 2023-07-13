/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  //The tweet array
  const tweetArr = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];



  //function to generate tweet <article> that returns the HTML structure
  const createTweetElement = function(tweetObj) {
    //create the <article> (html structure) for the tweet
    const $tweet = $(`<article class="tweet">
          <header>
            <span>
              <img src=${tweetObj.user.avatars}>
              <span>${tweetObj.user.name}</span>
          </span>
            <span class="username">${tweetObj.user.handle}</span>
          </header>
          <p>${tweetObj.content.text}</p>
          <hr>
          <footer class="footer">
            <span>${tweetObj.created_at}</span>
            <div class="icons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-sharp fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>`);
    
    //returning the tweet html
    return $tweet;
  };


  const renderTweets = function(tweetArr) {
    //loop through arr of tweets Object
    for (const singleTweet of tweetArr) {
    //calling createTweetElement on each object
    const tweet = createTweetElement(singleTweet);
    //append the tweet to the tweet container 
    $("#tweet-container").append(tweet);
    }
  };
  renderTweets(tweetArr);
});